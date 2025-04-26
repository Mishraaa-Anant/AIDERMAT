import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getReactNativePersistence,
  indexedDBLocalPersistence,
  initializeAuth
} from "firebase/auth";
import { Platform } from 'react-native';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEi4FMn3_U7Z8rsLE5FlC60Xb3OtvlRJk",
  authDomain: "aidermat.firebaseapp.com",
  projectId: "aidermat",
  storageBucket: "aidermat.appspot.com",
  messagingSenderId: "938170489024",
  appId: "1:938170489024:web:b671bc43047fab72e3b525",
  measurementId: "G-TC4NW6358B"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Cookie settings for enhanced security and user experience
const cookieSettings = {
  secure: true, // Use secure cookies (HTTPS only)
  sameSite: 'strict', // Strict same-site policy for better security
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  httpOnly: true // Cookies not accessible via JavaScript (for security)
};

// Determine best persistence method based on platform
const getBestPersistence = () => {
  if (Platform.OS === 'web') {
    // For web, try to use IndexedDB first, fallback to localStorage
    try {
      return indexedDBLocalPersistence;
    } catch (error) {
      console.log('IndexedDB not available, using localStorage instead');
      return browserLocalPersistence;
    }
  } else {
    // For native platforms, use AsyncStorage
    return getReactNativePersistence(AsyncStorage);
  }
};

// Initialize Auth with optimal persistence method
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Enhanced authentication helper functions
export const authHelpers = {
  // Check if user is logged in
  isUserLoggedIn: () => {
    return auth.currentUser !== null;
  },
  
  // Get current user
  getCurrentUser: () => {
    return auth.currentUser;
  },
  
  // Get user profile data with error handling
  getUserProfile: async () => {
    try {
      const user = auth.currentUser;
      if (!user) return null;
      
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      };
    } catch (error) {
      console.error("Error getting user profile:", error);
      return null;
    }
  },
  
  // Sign out with proper cookie cleanup
  signOut: async () => {
    try {
      await auth.signOut();
      // Clear any app-specific data from AsyncStorage
      await AsyncStorage.multiRemove([
        'user_preferences',
        'app_session',
        'recent_activities'
      ]);
      return { success: true };
    } catch (error) {
      console.error("Error signing out:", error);
      return { success: false, error };
    }
  },
  
  // Get authentication status with token validation
  getAuthStatus: async () => {
    try {
      const user = auth.currentUser;
      if (!user) return { isLoggedIn: false };
      
      // Verify token is still valid
      const token = await user.getIdToken(true);
      return { 
        isLoggedIn: true, 
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        },
        token
      };
    } catch (error) {
      console.error("Auth status check failed:", error);
      return { isLoggedIn: false, error };
    }
  }
};

// Export default objects for easy importing
export default {
  app,
  auth,
  ...authHelpers
};