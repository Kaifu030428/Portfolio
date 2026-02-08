import React from 'react';
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Navbar from "./Navbar";
import CanvasLoader from "./Loader";

const LazyHero = React.lazy(() => import('./Hero'));
const LazyAbout = React.lazy(() => import('./About'));
const LazyTech = React.lazy(() => import('./Tech'));
const LazyExperience = React.lazy(() => import('./Experience'));
const LazyWorks = React.lazy(() => import('./Works'));
const LazyFeedbacks = React.lazy(() => import('./Feedbacks'));
const LazyContact = React.lazy(() => import('./Contact'));

export {
  LazyHero,
  Navbar,
  LazyAbout,
  LazyTech,
  LazyExperience,
  LazyWorks,
  LazyFeedbacks,
  LazyContact,
  CanvasLoader,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
};