export default function Color ({ hex, name }) {
    return (
       <div class="res-circle" style={{ backgroundColor: hex }}>
            <div class="circle-txt">{name}</div>
       </div>
    )
  }