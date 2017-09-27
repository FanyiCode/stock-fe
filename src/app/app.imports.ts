// Global state (used for theming)
import { AppState } from './app.global';

// Providers

// Ionic native providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Directives

// Components

// Pipes


// Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const MODULES = [
  BrowserModule,
  HttpModule,
];

export const PIPES = [

];

export const PROVIDERS = [
  AppState,

  // Ionic native specific providers
  StatusBar,
  SplashScreen,
];

export const COMPONENTS = [

];

export const DIRECTIVES = [

];
