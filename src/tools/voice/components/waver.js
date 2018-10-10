import React, {Component} from 'react'
import WaveSufer from "./plugins/wavesufer/wavesurfer.min"

export default class Waver extends Component {
    constructor(props) {
        super(props)
        this.wavesurfer = false
    }

    componentDidMount() {
        console.log(WaveSufer)
        this.props.onRef(this)
        this.wavesurfer = WaveSufer.create({
            container: '#waveform',
            waveColor: 'red',
            progressColor: 'purple'
        });

        this.wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
    }
    zoom = ()=>{
        this.wavesurfer.zoom(1000)
    }

    render() {
        return (
            <div className="waver" id="waveform">
            </div>
        )
    }
}