import React from 'react'
import { BounceLoader, BarLoader, BeatLoader, ClimbingBoxLoader, ClipLoader, ClockLoader, CircleLoader, MoonLoader, ScaleLoader, SkewLoader,SquareLoader,SyncLoader,DotLoader, FadeLoader, GridLoader, HashLoader, RingLoader,RiseLoader,RotateLoader, PacmanLoader, PropagateLoader, PuffLoader,PulseLoader} from 'react-spinners'
import './Loader.css'

function BouunceLoader() {
  return (
    <div className="load">
      <BounceLoader loading /> BounceLoader
      <BarLoader loading/> Barloader
      <BeatLoader loading/> BeatLoader
      <ClimbingBoxLoader loading/> ClimbingBoxLoader
      <ClipLoader loading/> ClipLoader 
      <ClockLoader loading/> ClockLoader
      <CircleLoader loading/> CircleLoader
      <MoonLoader loading/> MoonLoader
      <ScaleLoader loading/> ScaleLoader
      <SkewLoader loading/> SkewLoader
      <SquareLoader loading/> SquareLoader 
      <SyncLoader loading/>  SyncLoader
      <DotLoader loading/> DotLoader
      <FadeLoader loading/> FadeLoader
      <GridLoader loading/> GridLoader
      <HashLoader loading/> HashLoader
      <RingLoader loading/> RingLoader
      <RiseLoader loading/> RiseLoader
      <RotateLoader loading/>
      <PacmanLoader loading/> PacmanLoader
      <PropagateLoader loading/> PropagateLoader
      <PuffLoader loading/> PuffLoader
      <PulseLoader loading/> PulseLoader

    </div>
  )
}

export default BouunceLoader
