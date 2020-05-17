import React, {Component} from 'react';

class SummaryGraph extends Component {
    
    constructor(props) {
        super(props)

        this.drawTimeline = this.drawTimeline.bind(this)
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        this.drawGrid(canvas, ctx)
        this.drawTimeline(canvas, ctx)
    }

    render () {
        return (
            <div>
                <canvas ref={"canvas"} width={600} height={400} />
            </div>
        );
    }


    drawGrid(canvas, ctx) {
        const width = canvas.width
        const height = canvas.height
        ctx.lineWidth = 5
        ctx.strokeStyle = "#ffffff"
        ctx.moveTo(1,1)
        ctx.lineTo(1,height-1 )
        ctx.lineTo(width-1, height-1)
        ctx.stroke()
       
        ctx.setLineDash([])
        ctx.lineWidth = 2

        for (var i = 1; i < height -1; i += height/10) {
            ctx.moveTo(1, i)
            ctx.lineTo(width-1, i)
            ctx.strokeStyle = "#ffffff"
            ctx.setLineDash([])
            ctx.lineWidth = 2
            ctx.stroke()
        }
        
        for (i = 1; i < width+1; i += width/10) {
            ctx.moveTo(i, 1)
            ctx.lineTo(i, height-1)
            ctx.strokeStyle = "#ffffff"
            ctx.setLineDash([])
            ctx.lineWidth = 2
            ctx.stroke()

        }
        
        ctx.lineWidth = 1

        ctx.setLineDash([5])
        
        for (i = 1; i < height -1; i += height/50) {
            ctx.moveTo(1, i)
            ctx.lineTo(width-1, i)
            ctx.lineWidth = 1
            ctx.strokeStyle = "#ffffff"
            ctx.setLineDash([5])
            ctx.stroke()
        }
       
    }

    drawTimeline(canvas, ctx) {
         
        ctx.moveTo(1,1)
        //ctx.strokeStyle = "#ff0000"
        ctx.setLineDash([])
        for (const[index, element] of this.props.transactions.entries()) {
            ctx.lineTo(index, element["amount"])
            console.log("Trying to plot at: " + index + ", " + element["amount"])
            ctx.moveTo(index, element["amount"])
        } 

        ctx.stroke()

    }
}

export default SummaryGraph;
