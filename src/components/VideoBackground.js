import useFetchTrailer from "../hooks/useFetchTrailer"
const VideoBackground = ({movieId}) => {
    const key = useFetchTrailer({movieId})
    
  return (
    <div className='w-screen'>
        <iframe className='video w-screen aspect-video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&loop=1`}>
</iframe>
    </div>
  )
}

export default VideoBackground