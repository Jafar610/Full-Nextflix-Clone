import React from 'react'
import StarIcon from '@mui/icons-material/Star';
function Detail() {
  return (
    <>
        <div className='flex justify-center items-center w-full h-screen'>
            {/* image */}
            <div className=''>
                <img src="" alt="" className='' />
            </div>
            {/* Detail Info */}
            <div>
                {/* Movie title and Star */}
                <div>
                    <h1>Movie Title</h1>
                    <div>
                        <p>9.0</p>
                        <StarIcon/>
                    </div>
                </div>
                {/* movie date & movie time length */}
                <div>
                    <h1>2018 | 2h 30m | 16+</h1>
                </div>

                {/* Navigation  */}
                <div>
                    <ul>
                        <li>Overview</li>
                        <li>Trailers & More</li>
                        <li>More Like this</li>
                        <li>Detail Info</li>
                    </ul>
                </div>

                {/* Detail Info */}

                <div>

                </div>

                {/* Related Movies */}
                <div>
                    <h1>Related Movies</h1>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Detail