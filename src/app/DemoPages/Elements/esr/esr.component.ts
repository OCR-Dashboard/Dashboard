import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-esr',
  templateUrl: './esr.component.html',
  styleUrls: ['./esr.component.css']
})
export class ESRComponent implements OnInit {
  massPopChart1: any;
  constructor() { }
 
  ngOnInit() {
    this.massPopChart1 = new Chart('doughnutChart', {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea 
      data:{  
        labels: ['Running','On Hold','Suspended','Idle','Issue'],    
      datasets:[{      
        data: [88,15,30,21,39],
      //backgroundColor:'green',
      backgroundColor:[
        '#f7464a',
        '#46bfbd',
       '#fdb45c',
      '#939eb0',
       '#4d5360'
      ],
      borderWidth:1,
      borderColor:'#fff',
      hoverBorderWidth:5,
      hoverBorderColor:'#fff'
      }]
      },
      options:{
      title:{
      display:false,
      text:'',
      fontSize:0
      },
    
      legend:{
      display:false,
      position:'top',
      labels:{
      fontColor:'#000'
      } 
      }, 
      layout:{
      padding:{
      left:0,
      right:0,
      bottom:0,
      top:0
      }
      },
      tooltips:{
      enabled:true
      }
      }
    });
  
  }
  piedata= {  
    labels: ['P1', 'P2', 'P3'],
    datasets: [
      {
        label: '',
        backgroundColor: [
          '#f7464a',
            '#46bfbd',
            '#fdb45c',            
        ],
       
        borderWidth: 1,
        data: [95, 59, 80],
      },
    ],
  }


  bardata2= {  
    labels: ['Bae Ajel', 'SAMA', 'Shortage', 'ES', 'OPS'],
    datasets: [
      {
        labels: ['Bae Ajel', 'SAMA', 'Shortage', 'ES', 'OPS'],            
        backgroundColor: [
          '#5abf62',
          '#f98929',
          '#f73e37',
          '#3b54eb',
          'rgba(225, 112, 85,1.0)',

        ],
        borderWidth: 1,
        data: [23,35,45,58,35],
      },
    ],
    baroptions: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  }


  LineData = {  
    labels: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
    datasets: [
      {
        label: 'Monthly Summary',
        backgroundColor: [
         '#fcbdcb'       
        ],
        borderColor: [
           '#ff6384',         
        ],
        borderWidth: 2,       
        data: [12,39,45,80,25,15,12],
      },
      {
        label: 'Weakly Summary',
        backgroundColor: [
         '#abd7f4'       
        ],
        borderColor: [
           '#36a2eb',         
        ],
        borderWidth: 2,       
        data: [45,67,24,15,36,59,24],
      },
    ],  
    
  }

 


//   Data2= {  
//     labels: ['Running','On Hold','Suspended','Idle','Issue'],
//     datasets: [
//       {
//        label: ['Running','On Hold','Suspended','Idle','Issue'],
//         backgroundColor: [
//           '#f7464a',
//             '#46bfbd',
//             '#fdb45c',
//             '#939eb0',
//             '#4d5360'
//         ],
       
//         borderWidth: 1,
//         data: [88,15,30,21,39],
//       },
//     ],
//   }
//   dOptions:{
//     title:{
//       display:false,
//       text:'',
//       fontSize:0
//       },
//       legend:{
//         display:false,
//         position:'top',
//         labels:{
//         fontColor:'#000'
//         } 
//         label:{

//         }
//   }
 
// }
}




