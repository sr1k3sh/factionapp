import React, { Component } from 'react'
import './home.css'
import VideoContainer from './VideoContainer'
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            card:[{
                imageUrl:'./images/portrait.png',
                title:'can you see me?'
            },{
                    imageUrl: './images/background.jpg',
                    title: 'See the mountains over head?'
            }

        ]
        }
    }
    render() {
        return (
            <div className="home" >
                <div className="h-section-1" style={{ background: 'url(./images/background.jpg)', backgroundSize: 'cover',height:'100vh'}}>
                    <div className="slogan">
                        <h1 id="sl-1">CARBON</h1>
                        <h1 id="sl-2">DIOXIDE</h1>
                    </div>
                </div>
                <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <div className="h-section-2">
                        <div className="flex1" style={{background:'url(./images/signature.png)',backgroundSize:'250px',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                            <h1>the goat</h1>
                        </div>
                        <div className="flex2">
                            <p>COncide THovex is simply put, a freesking legend. The only skier in the history to bog x-Games Gold medals in all disciplines.(Big Air,Stopestyle and Halfpipe) as as a Freeride World Tour championship.Candide is the most iconic and verstatile skier in the world</p>
                            <span className="span-button" style={{ width: '120px' }}>FULL BIO +</span>
                        </div>
                    </div>

                </div>
                    <div className="h-section-3" style={{marginBottom:'-4px'}}>
                        <img src="./images/divider.jpg" alt='divider' style={{width:'100%'}}></img>
                    </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>    
                    <div className="h-section-4">
                        <div className="flex1">
                            <span className="header">LEG<br></br>END<br></br>ARY</span>
                            <p style={{width:'50%',textAlign:'left',padding:'15px 0px'}}>From Chad's gap to x-games to the Candide invitation, Candidae has porgressed the sport of freesking more than anyelse in the 20 years</p>
                            <span className="span-button" style={{width:'170px',fontWeight:'600',fontSize:'0.8rem'}}>ACCOMPLISHMENTS +</span>
                        </div>
                        <div className="flex2">
                            <img src="./images/portrait.png" alt="portrait"></img>
                        </div>
                    </div>
                </div>
                <div style={{background:'#000', width: '100%',height:'550px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="h-section-5">
                        <h1 style={{color:'#fff',letterSpacing:'10px'}}>VIDEOS</h1>
                        <ul style={{display:'flex'}}>
                            {this.state.card.map((item,key)=>{
                                let transform='',zIndex='0'
                                if(key===0){
                                    transform='scale(1.2)'
                                    zIndex="1"
                                }
                                
                                console.log(key)
                                return <VideoContainer style={{transform,zIndex}} key={key} title={item.title} background={`url(${item.imageUrl})`}></VideoContainer> 
                            }
                                
                            )}
                        </ul>
                    </div>
                    <div className="next-button">
                        <div className="prev"><img src="./images/play.svg" alt='prev'></img></div>
                        <div className="next"><img src="./images/play.svg" alt='next'></img></div>
                    </div>
                </div>
            </div>
        )
    }
}
