import './App.css';
import data from './data/dashboard_list.json';
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from 'react';
import { Chart } from "react-google-charts";

function App() {

  const [currIndex, setCurrIndex] = useState(0)

  return (
    <div className="App">
      <div className='dashboard-wrapper'>
        <div className='dashboard_items'>
          {data.map((ele, index) => {

            return <div onClick={() => setCurrIndex(index)} key={index} className="dashboard_item">
              <div className='context-wrapper'>
                <div className='img_wrapper'>
                  <img alt={ele.title} src="data:image/jpeg;base64,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" />
                </div>
                <div className='context'>
                  {ele.title}
                  <input type='radio' checked={currIndex === index} />
                </div>
              </div>
              <ProgressBar bgColor='#3871cf' customLabelStyles={{ fontSize: "10px" }} animateOnRender={true} height='10px' completed={ele.completion_rate} maxCompleted={100} />

            </div>
          })}

        </div>
        <div className='dashboard-container'>
          <div className='chart-wrapper'>

            <Chart
              chartType="Bar"
              width="100%"
              height="500px"
              data={
                [
                  [data[currIndex].title, "Total Plays", "Unique Plays"],
                  [" ", data[currIndex].total_plays, data[currIndex].unique_plays],
                ]
              }
            // options={options}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
