import React from 'react'
import './SizeGuide.css'
const SizeGuide = () => {
    return (
        <div id='size-guide' className='app-helmerts-size-guide'>
            <div>
                <h3>Helmerts Size Chart</h3>
            </div>
            <table>
                <tr className='app-helmerts-size-guide-header'>
                    <th>Size</th>
                    <th>Inches</th>
                    <th>Centimeters</th>
                    <th className='hidden'>Europe</th>
                    <th className='hidden'>USA</th>
                    <th className='hidden'>UK</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr className='app-helmerts-size-guide-content' key={key}>
                            <td>{val.name}</td>
                            <td>{val.inch}</td>
                            <td>{val.cm}</td>
                            <td className='hidden'>{val.eur}</td>
                            <td className='hidden' >{val.usa}</td>
                            <td className='hidden'>{val.uk}</td>
                        </tr>
                    )
                })}
            </table>
        </div>)

}
const data = [
    { name: "XXS", inch: "21.6", cm: "55", eur: "4", usa: "6 3/4", uk: "6 7/8" },
    { name: "XS", inch: "22", cm: "56", eur: "4 1/2", usa: "6 7/8", uk: "7" },
    { name: "S", inch: "22.4", cm: "57", eur: "5", usa: "7", uk: "7 1/8" },
    { name: "M", inch: "22.8", cm: "58", eur: "5 1/2", usa: "7 1/8", uk: "7 1/4" },
    { name: "L", inch: "23.2", cm: "59", eur: "6", usa: "7 1/4", uk: "7 3/8" },
    { name: "XL", inch: "23.6", cm: "60", eur: "6 1/2", usa: "7 3/8", uk: "7 1/2" },
    { name: "XXL", inch: "24", cm: "61", eur: "7", usa: "7 1/2", uk: "7 5/8" },
    { name: "XXXL", inch: "25", cm: "62", eur: "7 1/2", usa: "7 3/4", uk: "7 3/4" },

];
export default SizeGuide