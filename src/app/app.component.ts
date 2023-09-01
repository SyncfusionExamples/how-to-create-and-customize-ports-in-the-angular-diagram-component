import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, PointPortModel, PortConstraints, PortVisibility } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'myangularproject';
  public style = { fill: '#6495ED'};
  @ViewChild('diagram') diagramObj !: DiagramComponent;
  public portSettings: PointPortModel[] = [
    { id: 'port1', offset: {x:0, y:0}, visibility:PortVisibility.Visible,
      horizontalAlignment: 'Right',
      verticalAlignment: 'Bottom', style: {fill: 'Orange', strokeWidth: 2}, height: 15, width: 15,
      shape: 'Custom',
      pathData: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z',
    },
    // {
    //   id: 'port2',
    //   offset: {x:0.5, y:0.5},
    //   visibility: PortVisibility.Visible
    // },
    // {
    //   id: 'port3',
    //   offset: {x:0.5, y:1},
    //   visibility: PortVisibility.Visible
    // },
     {
      id: 'port4',
      offset: {x:1, y:0.5},
      visibility: PortVisibility.Visible,
      constraints: PortConstraints.Draw | PortConstraints.Default
    },
    {
      id: 'port5',
      offset: {x:0, y:0.5},
      visibility: PortVisibility.Visible
    },
    // {
    //   id: 'port6',
    //   offset: {x:0.5, y:0},
    //   visibility: PortVisibility.Visible
    // },
    // {
    //   id: 'port7',
    //   offset: {x:0, y:1},
    //   visibility: PortVisibility.Visible
    // },
    // {
    //   id: 'port8',
    //   offset: {x:1, y:1},
    //   visibility: PortVisibility.Visible
    // },
    // {
    //   id: 'port9',
    //   offset: {x:1, y:0},
    //   visibility: PortVisibility.Visible
    // },
  ];

  public addPort(){
    this.diagramObj.addPorts(this.diagramObj.nodes[0], this.portSettings);
  }

  public removePort(){
    this.diagramObj.removePorts(this.diagramObj.nodes[0] as any, this.portSettings);
  }

  public UpdatePort(){
    (this.diagramObj.nodes[0] as any).ports[0].offset = { x:1, y:1 };
    this.diagramObj.dataBind();
  }
}