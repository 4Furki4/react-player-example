"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function VideoPlayer() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [videoState, setVideoState] = useState({
        played: 0,
        loaded: 0,
        duration: 0,
        isPlaying: false,
        isEnded: false
    })
    const [playedSeconds, setPlayedSeconds] = useState(0)
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return (
        <div>
            <div>
                <h1>Video Player</h1>
                <p>Duration: {videoState.duration}</p>
                <p>Is Playing: {videoState.isPlaying ? "Yes" : "No"}</p>
                <p>Is Ended: {videoState.isEnded ? "Yes" : "No"}</p>
                <p>Loaded: {videoState.loaded}</p>
                <p>Played Seconds: {videoState.played}</p>
            </div>
            {
                isLoaded &&
                <ReactPlayer
                    onDuration={(duration) => setVideoState({ ...videoState, duration })}
                    controls={true}
                    onPause={() => setVideoState({ ...videoState, isPlaying: false })}
                    onPlay={() => setVideoState({ ...videoState, isPlaying: true })}
                    onProgress={(state) => setVideoState({
                        ...videoState, played: state.playedSeconds.toFixed(2),
                        loaded: state.loadedSeconds.toFixed(2)
                    })}
                    onEnded={() => setVideoState({ ...videoState, isEnded: true })}
                    url={"https://youtu.be/b0IZo2Aho9Y"}
                />
            }
        </div>
    )
}
