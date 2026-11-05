import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as h,A as Hoe,Ai as _O,B as L4,Cn as oi,Ct as Yoe,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,Ja as we$1,La as uO,Ln as w4,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Vn as xa,Wn as y4,Xt as ere,Ya as wg,Za as xF,Zt as fae,ai as Sn,at as R4,cn as iie,cr as CO,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rn as gze,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var Be=()=>({label:`Angular`,data:100});var We=()=>({label:`React`,data:10});var Fe=(r,N)=>[r,N];var Ce=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&nu(0,`po-chart`,0),d&2&&UE(`p-series`,CO(3,Fe,_O(1,Be),_O(2,We)))},dependencies:[gze],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r});var fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Chart Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-chart-basic`),wg(),nu(23,`hr`)),d&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ie,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:`fillPoints`,label:`fillPoints`});var z=r=>[r];var He=()=>({label:`legend`,value:`legend`});var Ze=()=>({label:`roseType`,value:`roseType`});var Ye=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var je=()=>({label:`pointer`,value:`pointer`});var Ue=()=>({label:`stacked`,value:`stacked`});var Je=()=>({value:`fixed`,label:`Fixed`});function Xe(r,N){if(r&1){let l=Ax();jc(0,`po-checkbox-group`,54),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),__(i)}),mt(`p-change`,function(){v_(l);let i=Fx();return __(i.changeDataLabelOptions())}),wg()}if(r&2){let l=Fx();UE(`p-options`,DO(3,z,_O(2,Je))),sb(`ngModel`,l.selectedValuesDataLabel),o0()}}function Qe(r,N){if(r&1){let l=Ax();jc(0,`po-number`,55),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.valueGauge,i)||(s.valueGauge=i),__(i)}),mt(`p-change`,function(i){v_(l);let s=Fx();return __(s.changeValueGauge(i))}),wg()}if(r&2){let l=Fx();sb(`ngModel`,l.valueGauge),o0()}}function Ke(r,N){if(r&1){let l=Ax();jc(0,`po-radio-group`,56),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.selectedShapeOption,i)||(s.selectedShapeOption=i),__(i)}),wg(),jc(1,`po-switch`,57),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.selectedSplitArea,i)||(s.selectedSplitArea=i),__(i)}),wg(),jc(2,`po-switch`,58),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),__(i)}),wg()}if(r&2){let l=Fx();UE(`p-options`,l.optionsShapeOption),sb(`ngModel`,l.selectedShapeOption),o0(),rg(),sb(`ngModel`,l.selectedSplitArea),o0(),rg(),sb(`ngModel`,l.selectedAreaStyle),o0()}}function $e(r,N){if(r&1){let l=Ax();jc(0,`po-input`,59),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.data,i)||(s.data=i),__(i)}),wg()}if(r&2){let l=Fx();sb(`ngModel`,l.data),o0()}}function et(r,N){if(r&1){let l=Ax();jc(0,`po-input`,60),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.stackGroupName,i)||(s.stackGroupName=i),__(i)}),wg()}if(r&2){let l=Fx();sb(`ngModel`,l.stackGroupName),o0()}}function tt(r,N){if(r&1){let l=Ax();jc(0,`po-number`,61),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.fromGauge,i)||(s.fromGauge=i),__(i)}),wg()}if(r&2){let l=Fx();sb(`ngModel`,l.fromGauge),o0()}}function nt(r,N){if(r&1){let l=Ax();jc(0,`po-number`,62),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.toGauge,i)||(s.toGauge=i),__(i)}),wg()}if(r&2){let l=Fx();sb(`ngModel`,l.toGauge),o0()}}function it(r,N){if(r&1){let l=Ax();jc(0,`div`,3)(1,`po-button`,63),mt(`p-click`,function(){v_(l);let i=Fx();return __(i.addData())}),wg()()}}function ot(r,N){if(r&1){let l=Ax();jc(0,`po-number`,64),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.min,i)||(s.min=i),__(i)}),wg(),jc(1,`po-number`,65),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.max,i)||(s.max=i),__(i)}),wg(),jc(2,`po-input`,66),r0(),ab(`ngModelChange`,function(i){v_(l);let s=Fx();return uO(s.colorIndicator,i)||(s.colorIndicator=i),__(i)}),wg(),jc(3,`div`,3)(4,`po-button`,67),mt(`p-click`,function(){v_(l);let i=Fx();return __(i.addData())}),wg()()}if(r&2){let l=Fx();sb(`ngModel`,l.min),o0(),rg(),sb(`ngModel`,l.max),o0(),rg(),sb(`ngModel`,l.colorIndicator),o0(),rg(2),UE(`p-disabled`,l.isTypeRadar&&!l.categories)}}var ye=(()=>{class r$1{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:xa.Line},{label:`Area`,value:xa.Area},{label:`Bar`,value:xa.Bar},{label:`Column`,value:xa.Column},{label:`Donut`,value:xa.Donut},{label:`Pie`,value:xa.Pie},{label:`Gauge`,value:xa.Gauge},{label:`Radar`,value:xa.Radar}];labelTypeOptions=[{label:`Number`,value:y4.Number},{label:`Currency`,value:y4.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:l})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===xa.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===xa.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=xa.Gauge,this.type=xa.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=xa.Radar,this.type=xa.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=r(r({},this.options),l?r({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===xa.Line||this.type===xa.Area||this.type===xa.Column||this.type===xa.Bar||this.type===xa.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static ɵfac=function(d){return new(d||r$1)};static ɵcmp=Zn({type:r$1,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:66,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let s=Ax();jc(0,`po-chart`,1),mt(`p-series-click`,function(a){return i.changeEvent(`p-series-click`,a)})(`p-series-hover`,function(a){return i.changeEvent(`p-series-hover`,a)}),wg(),nu(1,`po-divider`,2),jc(2,`div`,3),nu(3,`po-info`,4),wg(),nu(4,`po-divider`,5),jc(5,`form`)(6,`po-select`,6),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.type,a)||(i.type=a),__(a)}),mt(`p-change`,function(a){return i.changeType(a)}),wg(),jc(7,`po-number`,7),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.height,a)||(i.height=a),__(a)}),wg(),jc(8,`po-input`,8),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.title,a)||(i.title=a),__(a)}),wg(),vx(9,Xe,1,5,`po-checkbox-group`,9),wg(),nu(10,`po-divider`,10),jc(11,`form`,null,0)(13,`div`,3)(14,`po-switch`,11),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.isTypeGauge,a)||(i.isTypeGauge=a),__(a)}),mt(`p-change`,function(a){return i.changeSwitchGauge(a)}),wg(),jc(15,`po-switch`,12),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.isTypeRadar,a)||(i.isTypeRadar=a),__(a)}),mt(`p-change`,function(a){return i.changeSwitchRadar(a)}),wg(),vx(16,Qe,1,1,`po-number`,13),vx(17,Ke,3,4),wg(),jc(18,`div`,3)(19,`po-input`,14),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.label,a)||(i.label=a),__(a)}),wg(),vx(20,$e,1,1,`po-input`,15),jc(21,`po-select`,16),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.serieType,a)||(i.serieType=a),__(a)}),mt(`p-change`,function(a){return i.changeType(a)}),wg(),jc(22,`po-input`,17),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.tooltip,a)||(i.tooltip=a),__(a)}),wg(),jc(23,`po-input`,18),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.color,a)||(i.color=a),__(a)}),wg(),vx(24,et,1,1,`po-input`,19),vx(25,tt,1,1,`po-number`,20),vx(26,nt,1,1,`po-number`,21),vx(27,it,2,0,`div`,3),wg()(),jc(28,`div`,3),nu(29,`po-divider`,22),jc(30,`po-input`,23),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.categories,a)||(i.categories=a),__(a)}),mt(`p-blur`,function(){return i.addCategories()}),wg(),vx(31,ot,5,4),wg(),jc(32,`form`)(33,`div`,3),nu(34,`po-divider`,24),jc(35,`po-number`,25),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.minRange,a)||(i.options.axis.minRange=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(36,`po-number`,26),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(37,`po-number`,27),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(38,`po-select`,28),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.labelType,a)||(i.options.axis.labelType=a),__(a)}),mt(`p-change`,function(){return i.addOptions()}),wg(),jc(39,`po-number`,29),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(40,`po-number`,30),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(41,`po-number`,31),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(42,`po-number`,32),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(43,`po-number`,33),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.innerRadius,a)||(i.options.innerRadius=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(44,`po-number`,34),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.borderRadius,a)||(i.options.borderRadius=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(45,`po-input`,35),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.firstColumnName,a)||(i.options.firstColumnName=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(46,`po-input`,36),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(47,`po-input`,37),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.descriptionChart,a)||(i.options.descriptionChart=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg(),jc(48,`po-input`,38),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),__(a)}),mt(`p-blur`,function(){return i.addOptions()}),wg()(),jc(49,`div`,3)(50,`po-checkbox-group`,39),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),__(a)}),mt(`p-change`,function(){return i.changeHeaderOptions()}),wg(),jc(51,`po-checkbox-group`,40),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),__(a)}),mt(`p-change`,function(){return i.changeAxisOptions()}),wg(),jc(52,`po-checkbox-group`,41),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),__(a)}),mt(`p-change`,function(){return i.changeDataZoomOptions()}),wg(),jc(53,`po-checkbox-group`,42),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),__(a)}),mt(`p-change`,function(){return i.changeFillPointsOptions()}),wg(),jc(54,`po-checkbox-group`,43),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),__(a)}),mt(`p-change`,function(){return i.changeLegendOptions()}),wg(),jc(55,`po-checkbox-group`,44),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedRoseType,a)||(i.selectedRoseType=a),__(a)}),mt(`p-change`,function(){return i.changeRoseTypeOptions()}),wg(),jc(56,`po-checkbox-group`,45),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),__(a)}),mt(`p-change`,function(){return i.changeShowFromToLegend()}),wg(),jc(57,`po-checkbox-group`,46),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedPointer,a)||(i.selectedPointer=a),__(a)}),mt(`p-change`,function(){return i.changePointer()}),wg(),jc(58,`po-checkbox-group`,47),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedStacked,a)||(i.selectedStacked=a),__(a)}),mt(`p-change`,function(){return i.changeStacked()}),wg(),jc(59,`po-radio-group`,48),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),__(a)}),mt(`p-change`,function(){return i.changeLegendVerticalPosition()}),wg(),jc(60,`po-radio-group`,49),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),__(a)}),mt(`p-change`,function(){return i.changeLegendPosition()}),wg(),jc(61,`po-radio-group`,50),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedLegendType,a)||(i.selectedLegendType=a),__(a)}),mt(`p-change`,function(){return i.changeLegendType()}),wg(),jc(62,`po-radio-group`,51),r0(),ab(`ngModelChange`,function(a){return v_(s),uO(i.selectedRendererOption,a)||(i.selectedRendererOption=a),__(a)}),mt(`p-change`,function(){return i.changeRendererOption()}),wg()(),nu(63,`po-divider`,52),jc(64,`div`,3)(65,`po-button`,53),mt(`p-click`,function(){return i.restore()}),wg()()()}d&2&&(UE(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),rg(3),UE(`p-value`,i.event),rg(3),sb(`ngModel`,i.type),UE(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),o0(),rg(),sb(`ngModel`,i.height),o0(),rg(),sb(`ngModel`,i.title),o0(),rg(),Dx(i.isTypeGrid()?9:-1),rg(5),sb(`ngModel`,i.isTypeGauge),o0(),rg(),sb(`ngModel`,i.isTypeRadar),o0(),rg(),Dx(i.isTypeGauge?16:-1),rg(),Dx(i.isTypeRadar?17:-1),rg(2),sb(`ngModel`,i.label),o0(),rg(),Dx(i.isTypeGauge?-1:20),rg(),sb(`ngModel`,i.serieType),UE(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),o0(),rg(),UE(`p-disabled`,i.disabledTooltip),sb(`ngModel`,i.tooltip),o0(),rg(),sb(`ngModel`,i.color),o0(),rg(),Dx(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?24:-1),rg(),Dx(i.isTypeGauge?25:-1),rg(),Dx(i.isTypeGauge?26:-1),rg(),Dx(i.isTypeRadar?-1:27),rg(3),Xx(i.isTypeRadar?`po-md-3`:`po-md-4`),UE(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),sb(`ngModel`,i.categories),o0(),rg(),Dx(i.isTypeRadar?31:-1),rg(4),sb(`ngModel`,i.options.axis.minRange),o0(),rg(),sb(`ngModel`,i.options.axis.maxRange),o0(),rg(),sb(`ngModel`,i.options.axis.gridLines),o0(),rg(),UE(`p-options`,i.labelTypeOptions),sb(`ngModel`,i.options.axis.labelType),o0(),rg(),sb(`ngModel`,i.options.axis.paddingBottom),o0(),rg(),sb(`ngModel`,i.options.axis.paddingLeft),o0(),rg(),sb(`ngModel`,i.options.axis.paddingRight),o0(),rg(),sb(`ngModel`,i.options.axis.rotateLegend),o0(),rg(),sb(`ngModel`,i.options.innerRadius),o0(),rg(),sb(`ngModel`,i.options.borderRadius),o0(),rg(),sb(`ngModel`,i.options.firstColumnName),o0(),rg(),sb(`ngModel`,i.options.textCenterGraph),o0(),rg(),sb(`ngModel`,i.options.descriptionChart),o0(),rg(),sb(`ngModel`,i.options.subtitleGauge),o0(),rg(2),UE(`p-columns`,2)(`p-options`,i.optionsHeader),sb(`ngModel`,i.selectedValuesHeader),o0(),rg(),UE(`p-columns`,2)(`p-options`,i.optionsAxis),sb(`ngModel`,i.selectedValuesAxis),o0(),rg(),UE(`p-columns`,2)(`p-options`,i.optionsDataZoom),sb(`ngModel`,i.selectedValuesDataZoom),o0(),rg(),UE(`p-columns`,1)(`p-options`,DO(83,z,_O(82,ze))),sb(`ngModel`,i.selectedValuesFillPoints),o0(),rg(),UE(`p-options`,DO(86,z,_O(85,He))),sb(`ngModel`,i.selectedValuesLegend),o0(),rg(),UE(`p-options`,DO(89,z,_O(88,Ze))),sb(`ngModel`,i.selectedRoseType),o0(),rg(),UE(`p-options`,DO(92,z,_O(91,Ye))),sb(`ngModel`,i.selectedFromToLegend),o0(),rg(),UE(`p-options`,DO(95,z,_O(94,je))),sb(`ngModel`,i.selectedPointer),o0(),rg(),UE(`p-options`,DO(98,z,_O(97,Ue))),sb(`ngModel`,i.selectedStacked),o0(),rg(),UE(`p-options`,i.optionsLegendVerticalPosition),sb(`ngModel`,i.selectedLegendVerticalPosition),o0(),rg(),UE(`p-options`,i.optionsLegendPosition),sb(`ngModel`,i.selectedLegendPosition),o0(),rg(),UE(`p-options`,i.optionsLegendType),sb(`ngModel`,i.selectedLegendType),o0(),rg(),UE(`p-options`,i.optionsRendererOption),sb(`ngModel`,i.selectedRendererOption),o0())},dependencies:[RK,SK,MK,xF,SF,oi,gze,Lf,w4,U4,Hoe,Gte,Woe,L4,Yoe],encapsulation:2,changeDetection:1})}return r$1})();var rt=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Chart Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-chart
  [p-categories]="isTypeRadar ? radarConfig : allCategories"
  [p-height]="height"
  [p-data-label]="dataLabel"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  [p-value-gauge-multiple]="valueGauge"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select
    class="po-md-3"
    name="type"
    [(ngModel)]="type"
    p-columns="3"
    p-label="Type"
    [p-disabled]="disabledType"
    [p-options]="typeOptions"
    (p-change)="changeType($event)"
  >
  </po-select>

  <po-number class="po-md-3" name="height" p-label="Height" [(ngModel)]="height"> </po-number>

  <po-input class="po-md-3" name="title" p-label="Title" [(ngModel)]="title"> </po-input>

  @if (isTypeGrid()) {
    <po-checkbox-group
      class="po-md-3"
      name="dataLabel"
      p-label="DataLabel"
      [p-options]="[{ value: 'fixed', label: 'Fixed' }]"
      [(ngModel)]="selectedValuesDataLabel"
      (p-change)="changeDataLabelOptions()"
    >
    </po-checkbox-group>
  }
</form>

<po-divider class="po-md-12" p-label="Chart series"></po-divider>

<form #chartSeries="ngForm">
  <div class="po-row">
    <po-switch
      class="po-md-3"
      name="switch"
      p-label="Gauge Type"
      [(ngModel)]="isTypeGauge"
      (p-change)="changeSwitchGauge($event)"
    >
    </po-switch>

    <po-switch
      class="po-md-3"
      name="radar"
      p-label="Radar Type"
      [(ngModel)]="isTypeRadar"
      (p-change)="changeSwitchRadar($event)"
    >
    </po-switch>

    @if (isTypeGauge) {
      <po-number
        class="po-md-4"
        p-label="Value Gauge"
        name="valueGauge"
        [(ngModel)]="valueGauge"
        (p-change)="changeValueGauge($event)"
      ></po-number>
    }

    @if (isTypeRadar) {
      <po-radio-group
        class="po-md-3"
        name="radioShapeOption"
        p-label="ShapeOption"
        [p-options]="optionsShapeOption"
        [(ngModel)]="selectedShapeOption"
      >
      </po-radio-group>

      <po-switch name="splitArea" class="po-md-1" p-label="splitArea" [(ngModel)]="selectedSplitArea"> </po-switch>

      <po-switch name="areaStyle" class="po-md-1" p-label="areaStyle" [(ngModel)]="selectedAreaStyle"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-input class="po-md-4" name="label" p-label="Label" [(ngModel)]="label"></po-input>

    @if (!isTypeGauge) {
      <po-input class="po-md-4" name="data" p-label="Data" p-help="Example: [25, 58, 83, 66] or 25" [(ngModel)]="data">
      </po-input>
    }

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-disabled]="disabledType"
      [p-options]="typeOptions"
      (p-change)="changeType($event)"
    >
    </po-select>

    <po-input
      class="po-md-4"
      name="tooltip"
      p-label="Tooltip"
      p-help="Custom Tooltip"
      [p-disabled]="disabledTooltip"
      [(ngModel)]="tooltip"
    ></po-input>

    <po-input class="po-md-4" name="color" p-label="Color" p-help="Custom Color" [(ngModel)]="color"></po-input>

    @if (type === 'bar' || serieType === 'bar' || type === 'column' || serieType === 'column') {
      <po-input
        class="po-md-4"
        name="stackGroupName"
        p-label="Stack Group Name"
        p-help="Custom Group Name"
        [(ngModel)]="stackGroupName"
      ></po-input>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="From" name="from" [(ngModel)]="fromGauge"></po-number>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="To" name="from" [(ngModel)]="toGauge"></po-number>
    }

    @if (!isTypeRadar) {
      <div class="po-row">
        <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()"> </po-button>
      </div>
    }
  </div>
</form>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Chart categories"></po-divider>
  <po-input
    name="categories"
    [class]="isTypeRadar ? 'po-md-3' : 'po-md-4'"
    [p-label]="isTypeRadar ? 'Indicators' : 'Categories'"
    [p-help]="isTypeRadar ? helpRadar : helpGeneric"
    [(ngModel)]="categories"
    (p-blur)="addCategories()"
  >
  </po-input>

  @if (isTypeRadar) {
    <po-number name="min" class="po-md-3" p-label="Min" [(ngModel)]="min"> </po-number>

    <po-number name="max" class="po-md-3" p-label="Max" [(ngModel)]="max"> </po-number>

    <po-input name="colorIndicator" class="po-md-3" p-label="Color" [(ngModel)]="colorIndicator"> </po-input>

    <div class="po-row">
      <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()" [p-disabled]="isTypeRadar && !categories">
      </po-button>
    </div>
  }
</div>
<form>
  <div class="po-row">
    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      p-label="minRange"
      [(ngModel)]="options.axis.minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      p-label="maxRange"
      [(ngModel)]="options.axis.maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      p-label="gridLines"
      [(ngModel)]="options.axis.gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="labelType"
      p-label="labelType"
      [p-options]="labelTypeOptions"
      [(ngModel)]="options.axis.labelType"
      (p-change)="addOptions()"
    >
    </po-select>

    <po-number
      class="po-md-4"
      name="paddingBottom"
      p-label="paddingBottom"
      [(ngModel)]="options.axis.paddingBottom"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingLeft"
      p-label="paddingLeft"
      [(ngModel)]="options.axis.paddingLeft"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingRight"
      p-label="paddingRight"
      [(ngModel)]="options.axis.paddingRight"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="rotateLegend"
      p-label="rotateLegend"
      [(ngModel)]="options.axis.rotateLegend"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      p-label="innerRadius"
      [(ngModel)]="options.innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="borderRadius"
      p-label="borderRadius"
      [(ngModel)]="options.borderRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-input
      class="po-md-4"
      name="firstColumnName"
      p-label="firstColumnName"
      [(ngModel)]="options.firstColumnName"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="textCenterGraph"
      p-label="textCenterGraph"
      [(ngModel)]="options.textCenterGraph"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="descriptionChart"
      p-label="descriptionChart"
      [(ngModel)]="options.descriptionChart"
      (p-blur)="addOptions()"
    ></po-input>

    <po-input
      class="po-md-4"
      name="subtitleGauge"
      p-label="subtitleGauge"
      [(ngModel)]="options.subtitleGauge"
      (p-blur)="addOptions()"
    >
    </po-input>
  </div>
  <div class="po-row">
    <po-checkbox-group
      class="po-md-4"
      name="headerGroup"
      p-label="Header"
      [p-columns]="2"
      [p-options]="optionsHeader"
      [(ngModel)]="selectedValuesHeader"
      (p-change)="changeHeaderOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="axisGroup"
      p-label="Axis"
      [p-columns]="2"
      [p-options]="optionsAxis"
      [(ngModel)]="selectedValuesAxis"
      (p-change)="changeAxisOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="dataZoomGroup"
      p-label="DataZoom"
      [p-columns]="2"
      [p-options]="optionsDataZoom"
      [(ngModel)]="selectedValuesDataZoom"
      (p-change)="changeDataZoomOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="fillPoints"
      p-label="FillPoints"
      [p-columns]="1"
      [p-options]="[{ value: 'fillPoints', label: 'fillPoints' }]"
      [(ngModel)]="selectedValuesFillPoints"
      (p-change)="changeFillPointsOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="legend"
      p-label="Legend"
      [p-options]="[{ label: 'legend', value: 'legend' }]"
      [(ngModel)]="selectedValuesLegend"
      (p-change)="changeLegendOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="roseType"
      p-label="RoseType"
      [p-options]="[{ label: 'roseType', value: 'roseType' }]"
      [(ngModel)]="selectedRoseType"
      (p-change)="changeRoseTypeOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="showFromToLegend"
      p-label="ShowFromToLegend"
      [p-options]="[{ label: 'showFromToLegend', value: 'showFromToLegend' }]"
      [(ngModel)]="selectedFromToLegend"
      (p-change)="changeShowFromToLegend()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="pointer"
      p-label="Pointer"
      [p-options]="[{ label: 'pointer', value: 'pointer' }]"
      [(ngModel)]="selectedPointer"
      (p-change)="changePointer()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="stacked"
      p-label="Stacked"
      [p-options]="[{ label: 'stacked', value: 'stacked' }]"
      [(ngModel)]="selectedStacked"
      (p-change)="changeStacked()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendVerticalPosition"
      p-label="LegendVerticalPosition"
      [p-options]="optionsLegendVerticalPosition"
      [(ngModel)]="selectedLegendVerticalPosition"
      (p-change)="changeLegendVerticalPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendPosition"
      p-label="LegendPosition"
      [p-options]="optionsLegendPosition"
      [(ngModel)]="selectedLegendPosition"
      (p-change)="changeLegendPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendType"
      p-label="LegendType"
      [p-options]="optionsLegendType"
      [(ngModel)]="selectedLegendType"
      (p-change)="changeLegendType()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioRendererOption"
      p-label="RendererOption"
      [p-options]="optionsRendererOption"
      [(ngModel)]="selectedRendererOption"
      (p-change)="changeRendererOption()"
    >
    </po-radio-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-4" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoChartDataLabel,
  PoChartLabelFormat
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  color: string;
  stackGroupName: string;
  data;
  label: string;
  tooltip: string;
  type: PoChartType;
  serieType: PoChartType;
  valueGauge: number;
  fromGauge: number;
  toGauge: number;
  allCategories: Array<string> = [];
  radarConfig: any = {
    indicator: []
  };

  categories: string;
  min: number;
  max: number;
  colorIndicator: string;
  event: string;
  height: number;
  series: Array<PoChartSerie>;
  title: string;
  dataLabel: PoChartDataLabel;
  isTypeGauge = false;
  isTypeRadar = false;
  disabledTooltip = false;
  disabledType = false;
  selectedSplitArea = false;
  selectedAreaStyle = false;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined,
      labelType: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
      rotateLegend: undefined,
      showXAxis: undefined,
      showYAxis: undefined,
      showAxisDetails: undefined
    },
    header: {
      hideExpand: undefined,
      hideExportCsv: undefined,
      hideExportImage: undefined,
      hideTableDetails: undefined
    },
    dataZoom: undefined,
    fillPoints: undefined,
    firstColumnName: undefined,
    innerRadius: undefined,
    borderRadius: undefined,
    textCenterGraph: undefined,
    descriptionChart: undefined,
    subtitleGauge: undefined,
    legend: undefined,
    legendPosition: undefined,
    legendVerticalPosition: undefined,
    bottomDataZoom: undefined,
    rendererOption: undefined,
    pointer: undefined,
    stacked: undefined,
    roseType: undefined,
    showFromToLegend: undefined
  };

  selectedValuesDataLabel: Array<string> = [];
  selectedValuesAxis: Array<string> = [];
  selectedValuesHeader: Array<string> = [];
  selectedValuesDataZoom: Array<string> = [];
  selectedValuesFillPoints: Array<string> = [];
  selectedRoseType: Array<string> = [];
  selectedFromToLegend: Array<string> = [];
  selectedPointer: Array<string> = [];
  selectedStacked: Array<string> = [];
  selectedValuesLegend: Array<string> = ['legend'];
  selectedLegendVerticalPosition: PoChartOptions['legendVerticalPosition'] = 'bottom';
  selectedLegendPosition: PoChartOptions['legendPosition'] = 'center';
  selectedLegendType: PoChartOptions['legendPositionlegendType'] = 'plain';
  selectedRendererOption: PoChartOptions['rendererOption'] = 'canvas';
  selectedShapeOption = 'polygon';
  helpRadar = 'Example: ["Bold", "Keen", "Calm", "Wise"]';
  helpGeneric = 'Example: ["Jan", "Feb", "Mar", "Apr"]';

  optionsAxis = [
    { value: 'showXAxis', label: 'showXAxis' },
    { value: 'showYAxis', label: 'showYAxis' },
    { value: 'showAxisDetails', label: 'showAxisDetails' }
  ];

  optionsHeader = [
    { value: 'hideTableDetails', label: 'hideTableDetails' },
    { value: 'hideExpand', label: 'hideExpand' },
    { value: 'hideExportCsv', label: 'hideExportCsv' },
    { value: 'hideExportImage', label: 'hideExportImage' }
  ];

  optionsDataZoom = [
    { value: 'dataZoom', label: 'dataZoom' },
    { value: 'bottomDataZoom', label: 'bottomDataZoom' }
  ];

  optionsLegendVerticalPosition = [
    { value: 'top', label: 'top' },
    { value: 'bottom', label: 'bottom' }
  ];

  optionsLegendPosition = [
    { value: 'left', label: 'left' },
    { value: 'center', label: 'center' },
    { value: 'right', label: 'right' }
  ];

  optionsLegendType = [
    { value: 'plain', label: 'plain' },
    { value: 'scroll', label: 'scroll' }
  ];

  optionsRendererOption = [
    { value: 'canvas', label: 'canvas' },
    { value: 'svg', label: 'svg' }
  ];

  optionsShapeOption = [
    { value: 'polygon', label: 'polygon' },
    { value: 'circle', label: 'circle' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Line', value: PoChartType.Line },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Bar', value: PoChartType.Bar },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Gauge', value: PoChartType.Gauge },
    { label: 'Radar', value: PoChartType.Radar }
  ];

  readonly labelTypeOptions: Array<PoSelectOption> = [
    { label: 'Number', value: PoChartLabelFormat.Number },
    { label: 'Currency', value: PoChartLabelFormat.Currency }
  ];

  changeDataLabelOptions() {
    this.dataLabel = {
      ...this.dataLabel,
      fixed: this.selectedValuesDataLabel.includes('fixed')
    };
  }

  changeAxisOptions() {
    const newAxis = {
      showXAxis: this.selectedValuesAxis.includes('showXAxis'),
      showYAxis: this.selectedValuesAxis.includes('showYAxis'),
      showAxisDetails: this.selectedValuesAxis.includes('showAxisDetails')
    };

    this.options = {
      ...this.options,
      axis: newAxis
    };
  }

  changeHeaderOptions() {
    const newHeader = {
      hideExpand: this.selectedValuesHeader.includes('hideExpand'),
      hideExportCsv: this.selectedValuesHeader.includes('hideExportCsv'),
      hideExportImage: this.selectedValuesHeader.includes('hideExportImage'),
      hideTableDetails: this.selectedValuesHeader.includes('hideTableDetails')
    };

    this.options = {
      ...this.options,
      header: newHeader
    };
  }

  changeDataZoomOptions() {
    this.options = {
      ...this.options,
      dataZoom: this.selectedValuesDataZoom.includes('dataZoom'),
      bottomDataZoom: this.selectedValuesDataZoom.includes('bottomDataZoom')
    };

    this.options = { ...this.options };
  }

  changeFillPointsOptions() {
    this.options = {
      ...this.options,
      fillPoints: this.selectedValuesFillPoints.includes('fillPoints')
    };
  }

  changeLegendOptions() {
    this.options = {
      ...this.options,
      legend: this.selectedValuesLegend.includes('legend')
    };
  }

  changeRoseTypeOptions() {
    this.options = {
      ...this.options,
      roseType: this.selectedRoseType.includes('roseType')
    };
  }

  changeShowFromToLegend() {
    this.options = {
      ...this.options,
      showFromToLegend: this.selectedFromToLegend.includes('showFromToLegend')
    };
  }

  changePointer() {
    this.options = {
      ...this.options,
      pointer: this.selectedPointer.includes('pointer')
    };
  }

  changeStacked() {
    this.options = {
      ...this.options,
      stacked: this.selectedStacked.includes('stacked')
    };
  }

  changeLegendVerticalPosition() {
    this.options = {
      ...this.options,
      legendVerticalPosition: this.selectedLegendVerticalPosition
    };
  }

  changeLegendPosition() {
    this.options = {
      ...this.options,
      legendPosition: this.selectedLegendPosition
    };
  }

  changeLegendType() {
    this.options = {
      ...this.options,
      legendType: this.selectedLegendType
    };
  }

  changeRendererOption() {
    this.options = {
      ...this.options,
      rendererOption: this.selectedRendererOption
    };
  }

  changeType(event) {
    if (event === PoChartType.Gauge) {
      this.isTypeGauge = true;
      this.changeSwitchGauge(true);
    }
    if (event === PoChartType.Radar) {
      this.isTypeRadar = true;
      this.changeSwitchRadar(true);
    }
  }

  changeSwitchGauge(event) {
    this.restore(true);
    this.disabledTooltip = event;
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Gauge;
      this.type = PoChartType.Gauge;
      this.isTypeRadar = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeSwitchRadar(event) {
    this.restore(true, true);
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Radar;
      this.type = PoChartType.Radar;
      this.isTypeGauge = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeValueGauge(event) {
    if (this.series?.length === 1 && !this.toGauge) {
      this.series[0].data = event;
      this.series = [...this.series];
    }
  }

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addIndicators() {
    if (!this.categories) {
      this.radarConfig = { indicator: [] };
      return;
    }

    const arr = this.convertToArray(this.categories);

    this.radarConfig = {
      indicator: arr.map(item => ({ name: item, min: this.min, max: this.max, color: this.colorIndicator })),
      shape: this.selectedShapeOption,
      splitArea: this.selectedSplitArea
    };
  }

  addData() {
    const type = this.serieType ?? this.type;

    let data;

    if (type === 'radar') {
      const arr = this.convertToArray(this.data);
      data = arr.map(v => Number(v));
      this.addIndicators();
    } else {
      data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    }

    const serie = {
      label: this.label,
      data,
      tooltip: this.tooltip,
      ...(this.color ? { color: this.color } : {}),
      type,
      stackGroupName: this.stackGroupName,
      from: this.fromGauge,
      to: this.toGauge,
      areaStyle: this.selectedAreaStyle ?? undefined
    };

    this.series = [...this.series, serie];

    this.label = undefined;
    this.color = undefined;
    this.data = undefined;
    this.tooltip = undefined;
    this.stackGroupName = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;

    if (!this.isTypeGauge) {
      this.type = undefined;
    }
  }

  isTypeGrid(): boolean {
    return (
      this.type === PoChartType.Line ||
      this.type === PoChartType.Area ||
      this.type === PoChartType.Column ||
      this.type === PoChartType.Bar ||
      this.type === PoChartType.Radar
    );
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore(fromGauge = false, keepRadar = false) {
    this.color = undefined;
    this.data = undefined;
    this.label = undefined;
    this.tooltip = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;
    this.valueGauge = undefined;
    this.allCategories = [];
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.disabledTooltip = false;
    this.disabledType = false;

    this.dataLabel = { fixed: false };

    this.options = {
      ...this.options,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined,
        labelType: undefined,
        paddingBottom: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
        rotateLegend: undefined,
        showXAxis: undefined,
        showYAxis: undefined,
        showAxisDetails: undefined
      },
      header: {
        hideExpand: undefined,
        hideExportCsv: undefined,
        hideExportImage: undefined,
        hideTableDetails: undefined
      },
      dataZoom: undefined,
      fillPoints: undefined,
      firstColumnName: undefined,
      innerRadius: undefined,
      borderRadius: undefined,
      textCenterGraph: undefined,
      descriptionChart: undefined,
      subtitleGauge: undefined,
      legend: undefined,
      legendPosition: undefined,
      legendVerticalPosition: undefined,
      bottomDataZoom: undefined,
      rendererOption: undefined,
      pointer: undefined,
      stacked: undefined,
      roseType: undefined,
      showFromToLegend: undefined
    };

    this.selectedValuesDataLabel = [];
    this.selectedValuesAxis = [];
    this.selectedValuesHeader = [];
    this.selectedValuesDataZoom = [];
    this.selectedValuesFillPoints = [];
    this.selectedValuesLegend = [];
    this.selectedRoseType = [];

    if (!fromGauge) {
      this.selectedFromToLegend = [];
      this.selectedPointer = [];
      this.isTypeGauge = false;
    }

    if (!keepRadar) {
      this.isTypeRadar = false;
      this.categories = undefined;
      this.radarConfig = [];
    }
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-chart-labs`),wg(),nu(23,`hr`)),d&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,rt,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=h(iie);participationByCountryInWorldExportsType=xa.Line;evolutionOfCoffeeAndSomeCompetitorsType=xa.Column;coffeConsumingChartType=xa.Donut;consumptionPerCapitaType=xa.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:xa.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:xa.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:xa.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:xa.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:xa.Column},{label:`2017`,data:[93,52,18],type:xa.Column},{label:`2020`,data:[95,21,-17],type:xa.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:xa.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:y4.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:y4.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,`_blank`)}showMeTheDates(l){this.poAlert.alert({title:`Statistic`,message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[we$1([iie])],decls:28,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,1,`po-md-12`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,1,`po-md-12`,`po-mt-2`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[`p-title`,`Top 5 coffee producing countries (in tons)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,1,`po-lg-6`,`po-mt-2`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,1,`po-md-6`,`po-mt-2`,3,`p-options`,`p-categories`,`p-series`],[1,`po-md-6`,`po-mt-2`],[`p-height`,`198`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(jc(0,`div`,0)(1,`div`,1)(2,`div`,0),nu(3,`po-chart`,2)(4,`po-chart`,3),wg()(),jc(5,`div`,1),nu(6,`po-chart`,4),wg(),jc(7,`div`,5)(8,`po-chart`,6),mt(`p-series-click`,function(m){return i.searchMore(m)}),wg(),jc(9,`po-chart`,7),mt(`p-series-click`,function(m){return i.showMeTheDates(m)}),wg()(),jc(10,`div`,0),nu(11,`po-chart`,8),jc(12,`div`,9)(13,`po-widget`,10)(14,`div`,11),lO(15,`66 billion`),wg(),jc(16,`div`,12),lO(17,`cups of coffee are consumed per year in U.S.`),wg()(),jc(18,`po-widget`,10)(19,`div`,11),lO(20,`2nd most`),wg(),jc(21,`div`,12),lO(22,`traded commodity in the world second to Oil.`),wg()()()()(),jc(23,`div`,0)(24,`po-container`,13)(25,`div`,14),lO(26,`Top 10 Largest Coffee Chains in the World`),wg(),nu(27,`po-table`,15),wg()()),d&2&&(rg(3),UE(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),rg(),UE(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),rg(2),UE(`p-height`,816)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),rg(2),UE(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),rg(),UE(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),rg(2),UE(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),rg(16),UE(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[gze,Ac,R4,fae],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r});var Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Chart - Coffee Ranking`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-options]="coffeeProductionOptions"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 15 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-options]="coffeeConsumptionOptions"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService, PoChartLabelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  private poAlert = inject(PoDialogService);

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' },
    { label: 'Germany', data: 5.2, tooltip: 'Germany (Europe)' },
    { label: 'Denmark', data: 5.1, tooltip: 'Denmark (Europe)' },
    { label: 'Sweden', data: 4.9, tooltip: 'Sweden (Europe)' },
    { label: 'Switzerland', data: 4.8, tooltip: 'Switzerland (Europe)' },
    { label: 'Belgium', data: 4.6, tooltip: 'Belgium (Europe)' },
    { label: 'Canada', data: 4.5, tooltip: 'Canada (North America)' },
    { label: 'Brazil', data: 4.3, tooltip: 'Brazil (South America)' },
    { label: 'Italy', data: 4.2, tooltip: 'Italy (Europe)' },
    { label: 'France', data: 4.1, tooltip: 'France (Europe)' },
    { label: 'USA', data: 4.0, tooltip: 'USA (North America)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: [35, 32, 25, 29, 33, 33],
      color: 'color-10',
      tooltip: params =>
        \`Pa\xEDs: \${params.seriesName}<br><b>Ano:</b> \${params.name}<br><b>Exporta\xE7\xF5es:</b> \${params.value}%\`
    },
    {
      label: 'Vietnam',
      data: [15, 17, 23, 19, 22, 18],
      tooltip: 'Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%'
    },
    {
      label: 'Colombia',
      data: [8, 7, 6, 9, 10, 11],
      tooltip: 'Pa\xEDs: {seriesName}\\nAno: {name}\\nParticipa\xE7\xE3o: {value}%'
    },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 1796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  coffeeProductionOptions: PoChartOptions = {
    roseType: true,
    borderRadius: 8
  };

  coffeeConsumptionOptions: PoChartOptions = {
    legendType: 'scroll'
  };

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2,
      labelType: PoChartLabelFormat.Number,
      rotateLegend: 45
    },
    legendVerticalPosition: 'top'
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    },
    fillPoints: true
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5,
      labelType: PoChartLabelFormat.Number
    },
    dataZoom: true
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
      showXAxis: true
    }
  };

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-chart-coffee-ranking`),wg(),nu(23,`hr`)),d&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,pt,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,_e],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{typeBar=xa.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:6,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[`p-title`,`Average Temperature by Region`,1,`po-lg-6`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,1,`po-lg-6`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(jc(0,`po-container`)(1,`div`,0),lO(2,`Energy and Climate Analysis`),wg(),jc(3,`div`,1),nu(4,`po-chart`,2)(5,`po-chart`,3),wg()()),d&2&&(rg(4),UE(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),rg(),UE(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[gze,Ac],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Chart - Stacked`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-container>
  <div class="po-font-title po-mb-3">Energy and Climate Analysis</div>
  <div class="po-row">
    <po-chart
      class="po-lg-6"
      p-title="Average Temperature by Region"
      [p-height]="500"
      [p-options]="optionsColumn"
      [p-categories]="categoriesColumn"
      [p-series]="seriesColumn"
    >
    </po-chart>

    <po-chart
      class="po-lg-6"
      p-title="Energy Consumption by Region"
      [p-type]="typeBar"
      [p-height]="500"
      [p-options]="optionsBar"
      [p-categories]="categoriesBar"
      [p-series]="seriesBar"
    >
    </po-chart>
  </div>
</po-container>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-stacked',
  templateUrl: './sample-po-chart-stacked.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartStackedComponent {
  typeBar = PoChartType.Bar;

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      gridLines: 7
    }
  };

  categoriesColumn: Array<string> = ['North Region', 'Central Region', 'South Region'];

  seriesColumn: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [51, 40, 42], stackGroupName: 'group1' },
    { label: 'Year 2017', data: [53, 52, 18] },
    { label: 'Year 2020', data: [55, 21, -17], stackGroupName: 'group1' },
    { label: 'Year 2023', data: [35, 27, 23], stackGroupName: 'group2' },
    { label: 'Year 2026', data: [45, 34, 17], stackGroupName: 'group2' },
    { label: 'Year 2029', data: [23, 63, 56], stackGroupName: 'group1' }
  ];

  optionsBar: PoChartOptions = {
    stacked: true
  };

  categoriesBar: Array<string> = [
    'North Region',
    'Central Region',
    'South Region',
    'Southeast Region',
    'Northeast Region'
  ];

  seriesBar: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [199, 340, 247, 236, 222] },
    { label: 'Year 2017', data: [221, 252, 225, 241, 225] },
    { label: 'Year 2020', data: [229, 213, 196, 212, 237] },
    { label: 'Year 2023', data: [240, 237, 230, 223, 231] },
    { label: 'Year 2026', data: [235, 270, 239, 255, 242] }
  ];
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-chart-stacked`),wg(),nu(23,`hr`)),d&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ct,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Te],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=xa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:8,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(jc(0,`po-container`)(1,`div`,0),lO(2,`Sales Performance`),wg(),jc(3,`div`,1)(4,`div`,2),nu(5,`po-chart`,3),wg(),jc(6,`div`,2),nu(7,`po-chart`,4),wg()()()),d&2&&(rg(5),UE(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),rg(2),UE(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[gze,Ac],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r});var Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Chart - Summary`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-lg-6">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
    <div class="po-lg-6">
      <po-chart
        p-title="Sales performance"
        [p-type]="type"
        [p-options]="optionsRange"
        [p-value-gauge-multiple]="50"
        [p-series]="salesRanges"
      ></po-chart>
    </div>
  </div>
</po-container>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-summary',
  templateUrl: './sample-po-chart-summary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartSummaryComponent {
  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-chart-summary`),wg(),nu(23,`hr`)),d&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ht,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Le],encapsulation:2,changeDetection:1})}return r})();var De=(()=>{class r{participationByCountryInWorldExportsType=xa.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:2,vars:5,consts:[[1,`po-row`],[`p-title`,`Participation by country in world exports - %`,1,`po-md-12`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(jc(0,`div`,0),nu(1,`po-chart`,1),wg()),d&2&&(rg(),UE(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[gze],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r});var ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Chart - World Exports`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-chart-world-exports`),wg(),nu(23,`hr`)),d&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,bt,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,De],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=xa.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:3,vars:6,consts:[[1,`po-row`],[`p-title`,`Technology Skill Assessment`,1,`po-md-6`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,1,`po-md-6`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(jc(0,`div`,0),nu(1,`po-chart`,1)(2,`po-chart`,2),wg()),d&2&&(rg(),UE(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),rg(),UE(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[gze],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Chart - Radar`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
  <po-chart
    class="po-md-6"
    p-title="Technology Skill Assessment"
    [p-categories]="radarConfig"
    [p-type]="type"
    [p-series]="series"
  >
  </po-chart>

  <po-chart
    class="po-md-6"
    p-title="Genre Popularity"
    p-type="radar"
    [p-categories]="radarConfigMovies"
    [p-series]="seriesMovies"
    [p-options]="radarOptions"
  >
  </po-chart>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoChartOptions, PoChartType } from '@po-ui/ng-components';
import { PoChartRadarOptions } from '@po-ui/ng-components/lib/components/po-chart/interfaces/po-chart-radar-options.interface';

@Component({
  selector: 'sample-po-chart-technology-skill',
  templateUrl: './sample-po-chart-technology-skill.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartTechnologySkillComponent {
  radarConfig: PoChartRadarOptions = {
    indicator: [
      { name: 'Frontend Development', max: 100 },
      { name: 'Backend Development', max: 100 },
      { name: 'Database Design', max: 100 },
      { name: 'Cloud & DevOps', max: 100 },
      { name: 'Testing & Quality', max: 100 },
      { name: 'System Architecture', max: 100 }
    ],
    splitArea: true,
    shape: 'circle'
  };

  radarConfigMovies: PoChartRadarOptions = {
    indicator: [
      { name: 'Storytelling', max: 100 },
      { name: 'Characters', max: 100 },
      { name: 'Visual Effects', max: 100 },
      { name: 'Soundtrack', max: 100 },
      { name: 'Pacing', max: 100 },
      { name: 'Rewatchability', max: 100 }
    ],
    splitArea: true
  };

  type = PoChartType.Radar;

  series = [
    {
      label: 'Team Alpha',
      data: [82, 50, 78, 70, 88, 81]
    },
    {
      label: 'Team Beta',
      data: [65, 83, 72, 89, 60, 74]
    },
    {
      label: 'Team Delta',
      data: [45, 21, 33, 65, 24, 58]
    },
    {
      label: 'Team Omega',
      data: [60, 49, 19, 58, 94, 59]
    }
  ];

  seriesMovies = [
    {
      label: 'Sci-Fi',
      data: [60, 53, 45, 58, 42, 55]
    },
    {
      label: 'Fantasy',
      data: [53, 80, 66, 71, 75, 88]
    },
    {
      label: 'Drama',
      data: [92, 31, 98, 60, 88, 72]
    },
    {
      label: 'Thriller',
      data: [44, 56, 75, 84, 90, 80]
    }
  ];

  radarOptions: PoChartOptions = {
    areaStyle: true
  };
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-chart-technology-skill`),wg(),nu(23,`hr`)),d&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ft,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2842,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`]],template:function(d,i){d&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoChartModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-chart`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoChartComponent`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`O `),jc(18,`code`),lO(19,`po-chart`),wg(),lO(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),wg(),jc(21,`p`),lO(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),wg(),jc(23,`p`),lO(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),wg(),jc(25,`p`),lO(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),jc(27,`em`),lO(28,`mouse`),wg(),lO(29,` sobre o elemento.`),wg(),jc(30,`h4`),lO(31,`Guia de uso para Gráficos`),wg(),jc(32,`blockquote`)(33,`p`),lO(34,`Veja nosso `),jc(35,`a`,6),lO(36,`guia de uso para gráficos`),wg(),lO(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),wg()(),jc(38,`h4`),lO(39,`Tokens customizáveis`),wg(),jc(40,`p`),lO(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(42,`blockquote`)(43,`p`),lO(44,`Para maiores informações, acesse o guia `),jc(45,`a`,7),lO(46,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(47,`.`),wg()(),jc(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),lO(52,`Propriedade`),wg(),jc(53,`th`),lO(54,`Descrição`),wg(),jc(55,`th`),lO(56,`Valor Padrão`),wg()()(),jc(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),lO(61,`Chart (po-chart)`),wg()(),nu(62,`td`)(63,`td`),wg(),jc(64,`tr`)(65,`td`)(66,`code`),lO(67,`--background-color-grid`),wg()(),jc(68,`td`),lO(69,`Cor de background dos gráficos`),wg(),jc(70,`td`)(71,`code`),lO(72,`var(--color-neutral-light-00)`),wg()()(),jc(73,`tr`)(74,`td`)(75,`code`),lO(76,`--color-description-chart`),wg()(),jc(77,`td`),lO(78,`Cor da descrição dos gráficos`),wg(),jc(79,`td`)(80,`code`),lO(81,`var(--color-neutral-dark-70)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),lO(85,`--font-family-description-chart`),wg()(),jc(86,`td`),lO(87,`Fonte da descrição dos gráficos`),wg(),jc(88,`td`)(89,`code`),lO(90,`var(--font-family-theme)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`code`),lO(94,`--font-size-description-chart`),wg()(),jc(95,`td`),lO(96,`Tamanho da fonte da descrição dos gráficos`),wg(),jc(97,`td`)(98,`code`),lO(99,`var(--font-size-sm)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`code`),lO(103,`--font-weight-description-chart`),wg()(),jc(104,`td`),lO(105,`Peso da fonte da descrição dos gráficos`),wg(),jc(106,`td`)(107,`code`),lO(108,`var(--font-weight-normal)`),wg()()(),jc(109,`tr`)(110,`td`)(111,`strong`),lO(112,`Header (po-chart .po-chart-header )`),wg()(),nu(113,`td`)(114,`td`),wg(),jc(115,`tr`)(116,`td`)(117,`code`),lO(118,`--background-color`),wg()(),jc(119,`td`),lO(120,`Cor de background do cabeçalho`),wg(),jc(121,`td`)(122,`code`),lO(123,`var(--color-neutral-light-00)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),lO(127,`--color`),wg()(),jc(128,`td`),lO(129,`Cor da fonte do cabeçalho`),wg(),jc(130,`td`)(131,`code`),lO(132,`var(--color-neutral-dark-70)`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),lO(136,`--font-family`),wg()(),jc(137,`td`),lO(138,`Família tipográfica usada`),wg(),jc(139,`td`)(140,`code`),lO(141,`var(--font-family-theme)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),lO(145,`--font-size-title`),wg()(),jc(146,`td`),lO(147,`Tamanho da fonte`),wg(),jc(148,`td`)(149,`code`),lO(150,`var(--font-size-default)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),lO(154,`--font-size-icons`),wg()(),jc(155,`td`),lO(156,`Tamanho dos ícones`),wg(),jc(157,`td`)(158,`code`),lO(159,`var(--font-size-md)`),wg()()(),jc(160,`tr`)(161,`td`)(162,`code`),lO(163,`--font-weight`),wg()(),jc(164,`td`),lO(165,`Peso da fonte`),wg(),jc(166,`td`)(167,`code`),lO(168,`var(--font-weight-bold)`),wg()()(),jc(169,`tr`)(170,`td`)(171,`strong`),lO(172,`Chart (po-chart .po-chart)`),wg()(),nu(173,`td`)(174,`td`),wg(),jc(175,`tr`)(176,`td`)(177,`code`),lO(178,`--color-grid`),wg()(),jc(179,`td`),lO(180,`Cor da linha dos gráficos que possuem eixo`),wg(),jc(181,`td`)(182,`code`),lO(183,`var(--color-neutral-light-20)`),wg()()(),jc(184,`tr`)(185,`td`)(186,`code`),lO(187,`--font-family-grid`),wg()(),jc(188,`td`),lO(189,`Família tipográfica usada nos valores dos eixos`),wg(),jc(190,`td`)(191,`code`),lO(192,`var(--font-family-theme)`),wg()()(),jc(193,`tr`)(194,`td`)(195,`code`),lO(196,`--font-size-grid`),wg()(),jc(197,`td`),lO(198,`Tamanho da fonte usada nos valores dos eixos`),wg(),jc(199,`td`)(200,`code`),lO(201,`var(--font-size-xs)`),wg()()(),jc(202,`tr`)(203,`td`)(204,`code`),lO(205,`--font-weight-grid`),wg()(),jc(206,`td`),lO(207,`Peso da fonte usada nos valores dos eixos`),wg(),jc(208,`td`)(209,`code`),lO(210,`var(--font-weight-normal)`),wg()()(),jc(211,`tr`)(212,`td`)(213,`code`),lO(214,`--color-legend`),wg()(),jc(215,`td`),lO(216,`Cor da fonte da legenda`),wg(),jc(217,`td`)(218,`code`),lO(219,`var(--color-neutral-dark-70)`),wg()()(),jc(220,`tr`)(221,`td`)(222,`code`),lO(223,`--color-legend-scroll-icon-active`),wg()(),jc(224,`td`),lO(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),jc(226,`code`),lO(227,`scroll`),wg()(),jc(228,`td`)(229,`code`),lO(230,`var(--color-action-default)`),wg()()(),jc(231,`tr`)(232,`td`)(233,`code`),lO(234,`--color-legend-scroll-icon-inactive`),wg()(),jc(235,`td`),lO(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),jc(237,`code`),lO(238,`scroll`),wg()(),jc(239,`td`)(240,`code`),lO(241,`var(--color-action-disabled)`),wg()()(),jc(242,`tr`)(243,`td`)(244,`code`),lO(245,`--border-radius-bar`),wg()(),jc(246,`td`),lO(247,`Tamanho da borda nos graficos `),jc(248,`code`),lO(249,`Bar`),wg(),lO(250,` e `),jc(251,`code`),lO(252,`Column`),wg()(),jc(253,`td`)(254,`code`),lO(255,`var(--border-radius-none)`),wg()()(),jc(256,`tr`)(257,`td`)(258,`code`),lO(259,`--border-color`),wg()(),jc(260,`td`),lO(261,`Cor da borda do gráfico nos Gráficos `),jc(262,`code`),lO(263,`Donut`),wg(),lO(264,` e `),jc(265,`code`),lO(266,`Pie`),wg()(),jc(267,`td`)(268,`code`),lO(269,`var(--color-neutral-light-00)`),wg()()(),jc(270,`tr`)(271,`td`)(272,`code`),lO(273,`--color-hightlight-value`),wg()(),jc(274,`td`),lO(275,`Cor do valor de destaque nos Gráficos `),jc(276,`code`),lO(277,`Donut`),wg(),lO(278,` e `),jc(279,`code`),lO(280,`Gauge`),wg()(),jc(281,`td`)(282,`code`),lO(283,`var(--color-neutral-dark-70)`),wg()()(),jc(284,`tr`)(285,`td`)(286,`code`),lO(287,`--font-family-hightlight-value`),wg()(),jc(288,`td`),lO(289,`Família tipográfica do valor de destaque nos Gráficos `),jc(290,`code`),lO(291,`Donut`),wg(),lO(292,` e `),jc(293,`code`),lO(294,`Gauge`),wg()(),jc(295,`td`)(296,`code`),lO(297,`var(--font-family-theme)`),wg()()(),jc(298,`tr`)(299,`td`)(300,`code`),lO(301,`--font-weight-hightlight-value`),wg()(),jc(302,`td`),lO(303,`Peso da fonte do valor de destaque nos Gráficos `),jc(304,`code`),lO(305,`Donut`),wg(),lO(306,` e `),jc(307,`code`),lO(308,`Gauge`),wg()(),jc(309,`td`)(310,`code`),lO(311,`var(--font-weight-bold)`),wg()()(),jc(312,`tr`)(313,`td`)(314,`code`),lO(315,`--color-base-gauge`),wg()(),jc(316,`td`),lO(317,`Cor da base do gráfico `),jc(318,`code`),lO(319,`Gauge`),wg()(),jc(320,`td`)(321,`code`),lO(322,`var(--color-neutral-light-20)`),wg()()(),jc(323,`tr`)(324,`td`)(325,`code`),lO(326,`--color-gauge-pointer-color`),wg()(),jc(327,`td`),lO(328,`Cor do ponteiro do gráfico `),jc(329,`code`),lO(330,`Gauge`),wg()(),jc(331,`td`)(332,`code`),lO(333,`var(--color-neutral-dark-70)`),wg()()(),jc(334,`tr`)(335,`td`)(336,`code`),lO(337,`--color-chart-line-point-fill`),wg()(),jc(338,`td`),lO(339,`Cor de dentro do círculo dos gráficos `),jc(340,`code`),lO(341,`Line`),wg(),lO(342,` e `),jc(343,`code`),lO(344,`Area`),wg()(),jc(345,`td`)(346,`code`),lO(347,`var(--color-neutral-light-00)`),wg()()(),jc(348,`tr`)(349,`td`)(350,`code`),lO(351,`--border-color-radar`),wg()(),jc(352,`td`),lO(353,`Cor do eixo da grid do gráfico `),jc(354,`code`),lO(355,`Radar`),wg()(),jc(356,`td`)(357,`code`),lO(358,`var(--color-neutral-light-30)`),wg()()(),jc(359,`tr`)(360,`td`)(361,`code`),lO(362,`--color-background-zebra`),wg()(),jc(363,`td`),lO(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),jc(365,`code`),lO(366,`Radar`),wg()(),jc(367,`td`)(368,`code`),lO(369,`var(--color-neutral-light-10)`),wg()()(),jc(370,`tr`)(371,`td`)(372,`code`),lO(373,`--color-background-line`),wg()(),jc(374,`td`),lO(375,`Cor das áreas entre as faixas zebradas da grade do `),jc(376,`code`),lO(377,`Radar`),wg()(),jc(378,`td`)(379,`code`),lO(380,`none`),wg()()(),jc(381,`tr`)(382,`td`)(383,`strong`),lO(384,`Wrapper (.po-chart-container-gauge)`),wg()(),nu(385,`td`)(386,`td`),wg(),jc(387,`tr`)(388,`td`)(389,`code`),lO(390,`--background-color-container-gauge`),wg()(),jc(391,`td`),lO(392,`Cor de background do container do gauge`),wg(),jc(393,`td`)(394,`code`),lO(395,`var(--color-neutral-light-00)`),wg()()()()()(),jc(396,`div`,8)(397,`h4`,9),lO(398,`Seletor`),wg(),jc(399,`pre`,10),lO(400,`<po-chart
    p-categories="Array<string> | PoChartRadarOptions"
    p-custom-actions="Array<PoPopupAction>"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-literals="PoChartLiterals"
    p-options="PoChartOptions"
    p-series="Array<PoChartSerie>"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType"
    p-value-gauge-multiple="number" >
</po-chart>
`),wg()(),jc(401,`h4`,11),lO(402,`Propriedades`),wg(),jc(403,`table`,12)(404,`tr`,13)(405,`th`,14),lO(406,`Nome`),wg(),jc(407,`th`,14),lO(408,`Tipo`),wg(),jc(409,`th`,14),lO(410,`Padrão`),wg(),jc(411,`th`,14),lO(412,`Descrição`),wg()(),jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),lO(417,` p-categories`),nu(418,`br`),wg()()(),jc(419,`td`,19)(420,`code`,20),lO(421,`Array<string> `),wg(),jc(422,`code`,21),lO(423,` PoChartRadarOptions`),wg()(),jc(424,`td`,22),lO(425,`-`),wg(),jc(426,`td`,23)(427,`em`)(428,`strong`),lO(429,`(opcional)`),wg()(),jc(430,`p`),lO(431,`Define os valores utilizados na construção das categorias do gráfico.`),wg(),jc(432,`p`),lO(433,`Para gráficos dos tipos `),jc(434,`em`),lO(435,`bar`),wg(),lO(436,`, `),jc(437,`em`),lO(438,`area`),wg(),lO(439,`, `),jc(440,`em`),lO(441,`column`),wg(),lO(442,` e `),jc(443,`em`),lO(444,`line`),wg(),lO(445,`, representa os nomes das categorias exibidas no eixo.`),wg(),jc(446,`p`),lO(447,`Para gráficos do tipo `),jc(448,`em`),lO(449,`radar`),wg(),lO(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),jc(451,`code`),lO(452,`Radar`),wg(),lO(453,`.`),wg(),jc(454,`blockquote`)(455,`p`),lO(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),wg()(),jc(457,`blockquote`)(458,`p`),lO(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),wg()()()(),jc(460,`tr`,15)(461,`td`,16)(462,`div`,17)(463,`span`,18),lO(464,` p-custom-actions`),nu(465,`br`),wg()()(),jc(466,`td`,19)(467,`code`,24),lO(468,`Array<PoPopupAction>`),wg()(),jc(469,`td`,22),lO(470,`-`),wg(),jc(471,`td`,23)(472,`em`)(473,`strong`),lO(474,`(opcional)`),wg()(),jc(475,`p`),lO(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),wg()()(),jc(477,`tr`,15)(478,`td`,16)(479,`div`,17)(480,`span`,18),lO(481,` p-data-label`),nu(482,`br`),wg()()(),jc(483,`td`,19)(484,`code`,25),lO(485,`PoChartDataLabel`),wg()(),jc(486,`td`,22),lO(487,`-`),wg(),jc(488,`td`,23)(489,`em`)(490,`strong`),lO(491,`(opcional)`),wg()(),jc(492,`p`),lO(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),wg(),jc(494,`p`),lO(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),wg(),jc(496,`ul`)(497,`li`),lO(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),wg(),jc(499,`li`),lO(500,`O `),jc(501,`em`),lO(502,`tooltip`),wg(),lO(503,` não será exibido.`),wg(),jc(504,`li`),lO(505,`Os marcadores (`),jc(506,`em`),lO(507,`bullets`),wg(),lO(508,`) terão seu estilo ajustado.`),wg(),jc(509,`li`),lO(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),wg()(),jc(511,`blockquote`)(512,`p`),lO(513,`Disponível para gráficos do tipo `),jc(514,`code`),lO(515,`line`),wg(),lO(516,`, `),jc(517,`code`),lO(518,`area`),wg(),lO(519,`, `),jc(520,`code`),lO(521,`column`),wg(),lO(522,`, `),jc(523,`code`),lO(524,`bar`),wg(),lO(525,` e `),jc(526,`code`),lO(527,`radar`),wg(),lO(528,`.`),wg()(),jc(529,`h4`),lO(530,`Exemplo de utilização:`),wg(),jc(531,`pre`)(532,`code`,26),lO(533,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),wg()()()(),jc(534,`tr`,15)(535,`td`,16)(536,`div`,17)(537,`span`,18),lO(538,` p-height`),nu(539,`br`),wg()()(),jc(540,`td`,19)(541,`code`,27),lO(542,`number`),wg()(),jc(543,`td`,22)(544,`p`)(545,`code`),lO(546,`400`),wg()()(),jc(547,`td`,23)(548,`em`)(549,`strong`),lO(550,`(opcional)`),wg()(),jc(551,`p`),lO(552,`Define a altura do gráfico em px.`),wg(),jc(553,`blockquote`)(554,`p`),lO(555,`No caso do tipo `),jc(556,`code`),lO(557,`Gauge`),wg(),lO(558,`, o valor padrão é `),jc(559,`code`),lO(560,`300`),wg(),lO(561,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),wg()()()(),jc(562,`tr`,15)(563,`td`,16)(564,`div`,17)(565,`span`,18),lO(566,` p-literals`),nu(567,`br`),wg()()(),jc(568,`td`,19)(569,`code`,28),lO(570,`PoChartLiterals`),wg()(),jc(571,`td`,22),lO(572,`-`),wg(),jc(573,`td`,23)(574,`em`)(575,`strong`),lO(576,`(opcional)`),wg()(),jc(577,`p`),lO(578,`Objeto com as literais usadas no `),jc(579,`code`),lO(580,`po-chart`),wg(),lO(581,`.`),wg(),jc(582,`p`),lO(583,`Para utilizar basta passar a literal que deseja customizar:`),wg(),jc(584,`pre`)(585,`code`),lO(586,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),wg()(),jc(587,`p`),lO(588,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),wg(),jc(589,`pre`)(590,`code`),lO(591,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),wg()(),jc(592,`blockquote`)(593,`p`),lO(594,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(595,`a`,29)(596,`code`),lO(597,`PoI18nService`),wg()(),lO(598,` ou do browser.`),wg()()()(),jc(599,`tr`,15)(600,`td`,16)(601,`div`,17)(602,`span`,18),lO(603,` p-options`),nu(604,`br`),wg()()(),jc(605,`td`,19)(606,`code`,30),lO(607,`PoChartOptions`),wg()(),jc(608,`td`,22),lO(609,`-`),wg(),jc(610,`td`,23)(611,`em`)(612,`strong`),lO(613,`(opcional)`),wg()(),jc(614,`p`),lO(615,`Objeto com as configurações usadas no `),jc(616,`code`),lO(617,`po-chart`),wg(),lO(618,`.`),wg(),jc(619,`p`),lO(620,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),jc(621,`em`),lO(622,`axis`),wg(),lO(623,`) para os gráficos dos tipos `),jc(624,`code`),lO(625,`area`),wg(),lO(626,`, `),jc(627,`code`),lO(628,`line`),wg(),lO(629,`, `),jc(630,`code`),lO(631,`column`),wg(),lO(632,`, `),jc(633,`code`),lO(634,`bar`),wg(),lO(635,` e `),jc(636,`code`),lO(637,`radar`),wg(),lO(638,` da seguinte forma:`),wg(),jc(639,`pre`)(640,`code`),lO(641,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),wg()()()(),jc(642,`tr`,15)(643,`td`,16)(644,`div`,17)(645,`span`,18),lO(646,` p-series`),nu(647,`br`),wg()()(),jc(648,`td`,19)(649,`code`,31),lO(650,`Array<PoChartSerie>`),wg()(),jc(651,`td`,22),lO(652,`-`),wg(),jc(653,`td`,23)(654,`p`),lO(655,`Define os elementos do gráfico que serão criados dinamicamente.`),wg()()(),jc(656,`tr`,15)(657,`td`,16)(658,`div`,32)(659,`span`,33),lO(660,` (p-series-click)`),nu(661,`br`),wg()()(),jc(662,`td`,19)(663,`code`,34),lO(664,`EventEmitter`),wg()(),jc(665,`td`,22),lO(666,`-`),wg(),jc(667,`td`,23)(668,`em`)(669,`strong`),lO(670,`(opcional)`),wg()(),jc(671,`p`),lO(672,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),wg(),jc(673,`p`),lO(674,`O evento emitirá o seguinte parâmetro:`),wg(),jc(675,`ul`)(676,`li`)(677,`em`),lO(678,`donut`),wg(),lO(679,` e `),jc(680,`em`),lO(681,`pie`),wg(),lO(682,`: um objeto contendo a categoria e valor da série.`),wg(),jc(683,`li`)(684,`em`),lO(685,`radar`),wg(),lO(686,`: um objeto contendo o nome da série e os valores.`),wg(),jc(687,`li`)(688,`em`),lO(689,`area`),wg(),lO(690,`, `),jc(691,`em`),lO(692,`line`),wg(),lO(693,`, `),jc(694,`em`),lO(695,`column`),wg(),lO(696,` e `),jc(697,`em`),lO(698,`bar`),wg(),lO(699,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),wg()()()(),jc(700,`tr`,15)(701,`td`,16)(702,`div`,32)(703,`span`,33),lO(704,` (p-series-hover)`),nu(705,`br`),wg()()(),jc(706,`td`,19)(707,`code`,34),lO(708,`EventEmitter`),wg()(),jc(709,`td`,22),lO(710,`-`),wg(),jc(711,`td`,23)(712,`em`)(713,`strong`),lO(714,`(opcional)`),wg()(),jc(715,`p`),lO(716,`Evento executado quando o usuário passar o `),jc(717,`em`),lO(718,`mouse`),wg(),lO(719,` sobre um elemento do gráfico.`),wg(),jc(720,`p`),lO(721,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),wg(),jc(722,`ul`)(723,`li`)(724,`em`),lO(725,`donut`),wg(),lO(726,` e `),jc(727,`em`),lO(728,`pie`),wg(),lO(729,`: um objeto contendo a categoria e valor da série.`),wg(),jc(730,`li`)(731,`em`),lO(732,`radar`),wg(),lO(733,`: um objeto contendo o nome da série e os valores.`),wg(),jc(734,`li`)(735,`em`),lO(736,`area`),wg(),lO(737,`, `),jc(738,`em`),lO(739,`line`),wg(),lO(740,`, `),jc(741,`em`),lO(742,`column`),wg(),lO(743,` e `),jc(744,`em`),lO(745,`bar`),wg(),lO(746,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),wg()()()(),jc(747,`tr`,15)(748,`td`,16)(749,`div`,17)(750,`span`,18),lO(751,` p-title`),nu(752,`br`),wg()()(),jc(753,`td`,19)(754,`code`,35),lO(755,`string`),wg()(),jc(756,`td`,22),lO(757,`-`),wg(),jc(758,`td`,23)(759,`em`)(760,`strong`),lO(761,`(opcional)`),wg()(),jc(762,`p`),lO(763,`Define o título do gráfico.`),wg()()(),jc(764,`tr`,15)(765,`td`,16)(766,`div`,17)(767,`span`,18),lO(768,` p-type`),nu(769,`br`),wg()()(),jc(770,`td`,19)(771,`code`,36),lO(772,`PoChartType`),wg()(),jc(773,`td`,22),lO(774,`-`),wg(),jc(775,`td`,23)(776,`em`)(777,`strong`),lO(778,`(opcional)`),wg()(),jc(779,`p`),lO(780,`Define o tipo de gráfico.`),wg(),jc(781,`p`),lO(782,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),jc(783,`code`),lO(784,`type`),wg(),lO(785,` conforme a interface `),jc(786,`code`),lO(787,`PoChartSerie`),wg(),lO(788,`.`),wg(),jc(789,`blockquote`)(790,`p`),lO(791,`Note que, se houver declaração de tipo de gráfico tanto em `),jc(792,`code`),lO(793,`p-type`),wg(),lO(794,` quanto em `),jc(795,`code`),lO(796,`PochartSerie.type`),wg(),lO(797,`, o valor `),jc(798,`code`),lO(799,`{ type }`),wg(),lO(800,` da primeira série anulará o valor definido em `),jc(801,`code`),lO(802,`p-type`),wg(),lO(803,`.`),wg()(),jc(804,`p`),lO(805,`Se não passado valor, o padrão será relativo à primeira série passada em `),jc(806,`code`),lO(807,`p-series`),wg(),lO(808,`:`),wg(),jc(809,`ul`)(810,`li`),lO(811,`Se `),jc(812,`code`),lO(813,`p-series = [{ data: [1,2,3] }]`),wg(),lO(814,`: será `),jc(815,`code`),lO(816,`PoChartType.Column`),wg(),lO(817,`.`),wg(),jc(818,`li`),lO(819,`Se `),jc(820,`code`),lO(821,`p-series = [{ data: 1 }]`),wg(),lO(822,`: será `),jc(823,`code`),lO(824,`PoChartType.Pie`),wg(),lO(825,`.`),wg()(),jc(826,`blockquote`)(827,`p`),lO(828,`Veja os valores válidos no `),jc(829,`em`),lO(830,`enum`),wg(),jc(831,`code`),lO(832,`PoChartType`),wg(),lO(833,`.`),wg()()()(),jc(834,`tr`,15)(835,`td`,16)(836,`div`,17)(837,`span`,18),lO(838,` p-value-gauge-multiple`),nu(839,`br`),wg()()(),jc(840,`td`,19)(841,`code`,27),lO(842,`number`),wg()(),jc(843,`td`,22),lO(844,`-`),wg(),jc(845,`td`,23)(846,`em`)(847,`strong`),lO(848,`(opcional)`),wg()(),jc(849,`p`),lO(850,`Define o valor do gráfico do tipo `),jc(851,`code`),lO(852,`Gauge`),wg(),lO(853,` quando utliza as propriedades `),jc(854,`code`),lO(855,`From`),wg(),jc(856,`code`),lO(857,`To`),wg(),lO(858,`.`),wg()()()(),jc(859,`h3`),lO(860,`Interfaces`),wg(),jc(861,`h4`,37)(862,`code`,5),lO(863,`PoChartAxisOptions`),wg()(),jc(864,`div`,2)(865,`p`)(866,`em`),lO(867,`Interface`),wg(),lO(868,` que define os eixos do grid.`),wg()(),jc(869,`h4`,11),lO(870,`Propriedades`),wg(),jc(871,`table`,12)(872,`tr`,13)(873,`th`,14),lO(874,`Nome`),wg(),jc(875,`th`,14),lO(876,`Tipo`),wg(),jc(877,`th`,14),lO(878,`Descrição`),wg()(),jc(879,`tr`,15)(880,`td`,16)(881,`div`,17)(882,`span`,18),lO(883,` gridLines`),nu(884,`br`),wg()()(),jc(885,`td`,19)(886,`code`,27),lO(887,`number`),wg()(),jc(888,`td`,23)(889,`em`)(890,`strong`),lO(891,`(opcional)`),wg()(),jc(892,`p`),lO(893,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),jc(894,`code`),lO(895,`Area`),wg(),lO(896,`, `),jc(897,`code`),lO(898,`Line`),wg(),lO(899,` e `),jc(900,`code`),lO(901,`Column`),wg(),lO(902,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),jc(903,`code`),lO(904,`Bar`),wg(),lO(905,`, tratará as linhas verticais (eixo Y).`),wg(),jc(906,`p`),lO(907,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),wg(),jc(908,`ul`)(909,`li`),lO(910,`Quantidade padrão de linhas: '5';`),wg(),jc(911,`li`),lO(912,`Quantidade mínima permitida: '2';`),wg()()()(),jc(913,`tr`,15)(914,`td`,16)(915,`div`,17)(916,`span`,18),lO(917,` labelType`),nu(918,`br`),wg()()(),jc(919,`td`,19)(920,`code`,38),lO(921,`PoChartLabelFormat`),wg()(),jc(922,`td`,23)(923,`em`)(924,`strong`),lO(925,`(opcional)`),wg()(),jc(926,`p`),lO(927,`Define o tipo do label e a formatação exibida no eixo de valor.`),wg()()(),jc(928,`tr`,15)(929,`td`,16)(930,`div`,17)(931,`span`,18),lO(932,` maxRange`),nu(933,`br`),wg()()(),jc(934,`td`,19)(935,`code`,27),lO(936,`number`),wg()(),jc(937,`td`,23)(938,`em`)(939,`strong`),lO(940,`(opcional)`),wg()(),jc(941,`p`),lO(942,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),wg(),jc(943,`blockquote`)(944,`p`),lO(945,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),wg()()()(),jc(946,`tr`,15)(947,`td`,16)(948,`div`,17)(949,`span`,18),lO(950,` minRange`),nu(951,`br`),wg()()(),jc(952,`td`,19)(953,`code`,27),lO(954,`number`),wg()(),jc(955,`td`,23)(956,`em`)(957,`strong`),lO(958,`(opcional)`),wg()(),jc(959,`p`),lO(960,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),wg(),jc(961,`blockquote`)(962,`p`),lO(963,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),wg()()()(),jc(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),lO(968,` paddingBottom`),nu(969,`br`),wg()()(),jc(970,`td`,19)(971,`code`,27),lO(972,`number`),wg()(),jc(973,`td`,23)(974,`em`)(975,`strong`),lO(976,`(opcional)`),wg()(),jc(977,`p`),lO(978,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),wg()()(),jc(979,`tr`,15)(980,`td`,16)(981,`div`,17)(982,`span`,18),lO(983,` paddingLeft`),nu(984,`br`),wg()()(),jc(985,`td`,19)(986,`code`,27),lO(987,`number`),wg()(),jc(988,`td`,23)(989,`em`)(990,`strong`),lO(991,`(opcional)`),wg()(),jc(992,`p`),lO(993,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),wg()()(),jc(994,`tr`,15)(995,`td`,16)(996,`div`,17)(997,`span`,18),lO(998,` paddingRight`),nu(999,`br`),wg()()(),jc(1e3,`td`,19)(1001,`code`,27),lO(1002,`number`),wg()(),jc(1003,`td`,23)(1004,`em`)(1005,`strong`),lO(1006,`(opcional)`),wg()(),jc(1007,`p`),lO(1008,`Permite aumentar ou diminuir o espaço direito do gráfico.`),wg()()(),jc(1009,`tr`,15)(1010,`td`,16)(1011,`div`,17)(1012,`span`,18),lO(1013,` rotateLegend`),nu(1014,`br`),wg()()(),jc(1015,`td`,19)(1016,`code`,27),lO(1017,`number`),wg()(),jc(1018,`td`,23)(1019,`em`)(1020,`strong`),lO(1021,`(opcional)`),wg()(),jc(1022,`p`),lO(1023,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),wg(),jc(1024,`ul`)(1025,`li`),lO(1026,`Valores negativos giram a legenda para a esquerda.`),wg(),jc(1027,`li`),lO(1028,`Valores positivos giram a legenda para a direita.`),wg()(),jc(1029,`p`),lO(1030,`Se não for definido, a legenda será exibida sem rotação.`),wg()()(),jc(1031,`tr`,15)(1032,`td`,16)(1033,`div`,17)(1034,`span`,18),lO(1035,` showAxisDetails`),nu(1036,`br`),wg()()(),jc(1037,`td`,19)(1038,`code`,39),lO(1039,`boolean`),wg()(),jc(1040,`td`,23)(1041,`em`)(1042,`strong`),lO(1043,`(opcional)`),wg()(),jc(1044,`p`),lO(1045,`Exibe a linha de detalhes que acompanha o mouse`),wg()()(),jc(1046,`tr`,15)(1047,`td`,16)(1048,`div`,17)(1049,`span`,18),lO(1050,` showXAxis`),nu(1051,`br`),wg()()(),jc(1052,`td`,19)(1053,`code`,39),lO(1054,`boolean`),wg()(),jc(1055,`td`,23)(1056,`em`)(1057,`strong`),lO(1058,`(opcional)`),wg()(),jc(1059,`p`),lO(1060,`Exibe a linha do eixo X`),wg()()(),jc(1061,`tr`,15)(1062,`td`,16)(1063,`div`,17)(1064,`span`,18),lO(1065,` showYAxis`),nu(1066,`br`),wg()()(),jc(1067,`td`,19)(1068,`code`,39),lO(1069,`boolean`),wg()(),jc(1070,`td`,23)(1071,`em`)(1072,`strong`),lO(1073,`(opcional)`),wg()(),jc(1074,`p`),lO(1075,`Exibe a linha do eixo Y`),wg()()()(),jc(1076,`h4`,37)(1077,`code`,5),lO(1078,`PoChartHeaderOptions`),wg()(),jc(1079,`div`,2)(1080,`p`)(1081,`em`),lO(1082,`Interface`),wg(),lO(1083,` para configuração das ações disponíveis no cabeçalho.`),wg()(),jc(1084,`h4`,11),lO(1085,`Propriedades`),wg(),jc(1086,`table`,12)(1087,`tr`,13)(1088,`th`,14),lO(1089,`Nome`),wg(),jc(1090,`th`,14),lO(1091,`Tipo`),wg(),jc(1092,`th`,14),lO(1093,`Descrição`),wg()(),jc(1094,`tr`,15)(1095,`td`,16)(1096,`div`,17)(1097,`span`,18),lO(1098,` hideExpand`),nu(1099,`br`),wg()()(),jc(1100,`td`,19)(1101,`code`,39),lO(1102,`boolean`),wg()(),jc(1103,`td`,23)(1104,`em`)(1105,`strong`),lO(1106,`(opcional)`),wg()(),jc(1107,`p`),lO(1108,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),wg()()(),jc(1109,`tr`,15)(1110,`td`,16)(1111,`div`,17)(1112,`span`,18),lO(1113,` hideExportCsv`),nu(1114,`br`),wg()()(),jc(1115,`td`,19)(1116,`code`,39),lO(1117,`boolean`),wg()(),jc(1118,`td`,23)(1119,`em`)(1120,`strong`),lO(1121,`(opcional)`),wg()(),jc(1122,`p`),lO(1123,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),wg()()(),jc(1124,`tr`,15)(1125,`td`,16)(1126,`div`,17)(1127,`span`,18),lO(1128,` hideExportImage`),nu(1129,`br`),wg()()(),jc(1130,`td`,19)(1131,`code`,39),lO(1132,`boolean`),wg()(),jc(1133,`td`,23)(1134,`em`)(1135,`strong`),lO(1136,`(opcional)`),wg()(),jc(1137,`p`),lO(1138,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),wg()()(),jc(1139,`tr`,15)(1140,`td`,16)(1141,`div`,17)(1142,`span`,18),lO(1143,` hideTableDetails`),nu(1144,`br`),wg()()(),jc(1145,`td`,19)(1146,`code`,39),lO(1147,`boolean`),wg()(),jc(1148,`td`,23)(1149,`em`)(1150,`strong`),lO(1151,`(opcional)`),wg()(),jc(1152,`p`),lO(1153,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),wg()()()(),jc(1154,`h4`,37)(1155,`code`,5),lO(1156,`PoChartIndicatorOptions`),wg()(),jc(1157,`div`,2)(1158,`p`),lO(1159,`Interface para configurações dos indicadores do gráfico `),jc(1160,`code`),lO(1161,`radar`),wg(),lO(1162,`.`),wg()(),jc(1163,`h4`,11),lO(1164,`Propriedades`),wg(),jc(1165,`table`,12)(1166,`tr`,13)(1167,`th`,14),lO(1168,`Nome`),wg(),jc(1169,`th`,14),lO(1170,`Tipo`),wg(),jc(1171,`th`,14),lO(1172,`Descrição`),wg()(),jc(1173,`tr`,15)(1174,`td`,16)(1175,`div`,17)(1176,`span`,18),lO(1177,` color`),nu(1178,`br`),wg()()(),jc(1179,`td`,19)(1180,`code`,35),lO(1181,`string`),wg()(),jc(1182,`td`,23)(1183,`em`)(1184,`strong`),lO(1185,`(opcional)`),wg()(),jc(1186,`p`),lO(1187,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),wg(),jc(1188,`blockquote`)(1189,`p`),lO(1190,`Nome da cor, hexadecimal ou RGB.`),wg()()()(),jc(1191,`tr`,15)(1192,`td`,16)(1193,`div`,17)(1194,`span`,18),lO(1195,` max`),nu(1196,`br`),wg()()(),jc(1197,`td`,19)(1198,`code`,27),lO(1199,`number`),wg()(),jc(1200,`td`,23)(1201,`em`)(1202,`strong`),lO(1203,`(opcional)`),wg()(),jc(1204,`p`),lO(1205,`Valor máximo do indicator.`),wg(),jc(1206,`p`),lO(1207,`A propriedade `),jc(1208,`code`),lO(1209,`max`),wg(),lO(1210,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),wg()()(),jc(1211,`tr`,15)(1212,`td`,16)(1213,`div`,17)(1214,`span`,18),lO(1215,` min`),nu(1216,`br`),wg()()(),jc(1217,`td`,19)(1218,`code`,27),lO(1219,`number`),wg()(),jc(1220,`td`,23)(1221,`em`)(1222,`strong`),lO(1223,`(opcional)`),wg()(),jc(1224,`p`),lO(1225,`Valor mínimo do indicator, com valor padrão de 0.`),wg(),jc(1226,`p`),lO(1227,`A propriedade `),jc(1228,`code`),lO(1229,`min`),wg(),lO(1230,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),wg()()(),jc(1231,`tr`,15)(1232,`td`,16)(1233,`div`,17)(1234,`span`,18),lO(1235,` name`),nu(1236,`br`),wg()()(),jc(1237,`td`,19)(1238,`code`,35),lO(1239,`string`),wg()(),jc(1240,`td`,23)(1241,`em`)(1242,`strong`),lO(1243,`(opcional)`),wg()(),jc(1244,`p`),lO(1245,`Nome do indicator.`),wg()()()(),jc(1246,`h4`,37)(1247,`code`,5),lO(1248,`PoChartLiterals`),wg()(),jc(1249,`div`,2)(1250,`p`),lO(1251,`Interface para definição dos literais usadas no `),jc(1252,`code`),lO(1253,`po-chart`),wg(),lO(1254,`.`),wg()(),jc(1255,`h4`,11),lO(1256,`Propriedades`),wg(),jc(1257,`table`,12)(1258,`tr`,13)(1259,`th`,14),lO(1260,`Nome`),wg(),jc(1261,`th`,14),lO(1262,`Tipo`),wg(),jc(1263,`th`,14),lO(1264,`Descrição`),wg()(),jc(1265,`tr`,15)(1266,`td`,16)(1267,`div`,17)(1268,`span`,18),lO(1269,` category`),nu(1270,`br`),wg()()(),jc(1271,`td`,19)(1272,`code`,35),lO(1273,`string`),wg()(),jc(1274,`td`,23)(1275,`em`)(1276,`strong`),lO(1277,`(opcional)`),wg()(),jc(1278,`p`),lO(1279,`Texto da primeira coluna da tabela no gráfico do tipo `),jc(1280,`code`),lO(1281,`Bar`),wg(),lO(1282,`.`),wg()()(),jc(1283,`tr`,15)(1284,`td`,16)(1285,`div`,17)(1286,`span`,18),lO(1287,` downloadCSV`),nu(1288,`br`),wg()()(),jc(1289,`td`,19)(1290,`code`,35),lO(1291,`string`),wg()(),jc(1292,`td`,23)(1293,`em`)(1294,`strong`),lO(1295,`(opcional)`),wg()(),jc(1296,`p`),lO(1297,`Texto exibido para a ação de download de dados em formato CSV.`),wg()()(),jc(1298,`tr`,15)(1299,`td`,16)(1300,`div`,17)(1301,`span`,18),lO(1302,` exportCSV`),nu(1303,`br`),wg()()(),jc(1304,`td`,19)(1305,`code`,35),lO(1306,`string`),wg()(),jc(1307,`td`,23)(1308,`em`)(1309,`strong`),lO(1310,`(opcional)`),wg()(),jc(1311,`p`),lO(1312,`Texto do botão para exportar o gráfico em CSV.`),wg()()(),jc(1313,`tr`,15)(1314,`td`,16)(1315,`div`,17)(1316,`span`,18),lO(1317,` exportJPG`),nu(1318,`br`),wg()()(),jc(1319,`td`,19)(1320,`code`,35),lO(1321,`string`),wg()(),jc(1322,`td`,23)(1323,`em`)(1324,`strong`),lO(1325,`(opcional)`),wg()(),jc(1326,`p`),lO(1327,`Texto do botão para exportar o gráfico como imagem JPG.`),wg()()(),jc(1328,`tr`,15)(1329,`td`,16)(1330,`div`,17)(1331,`span`,18),lO(1332,` exportPNG`),nu(1333,`br`),wg()()(),jc(1334,`td`,19)(1335,`code`,35),lO(1336,`string`),wg()(),jc(1337,`td`,23)(1338,`em`)(1339,`strong`),lO(1340,`(opcional)`),wg()(),jc(1341,`p`),lO(1342,`Texto do botão para exportar o gráfico como imagem PNG.`),wg()()(),jc(1343,`tr`,15)(1344,`td`,16)(1345,`div`,17)(1346,`span`,18),lO(1347,` item`),nu(1348,`br`),wg()()(),jc(1349,`td`,19)(1350,`code`,35),lO(1351,`string`),wg()(),jc(1352,`td`,23)(1353,`em`)(1354,`strong`),lO(1355,`(opcional)`),wg()(),jc(1356,`p`),lO(1357,`Texto dos títulos das colunas `),jc(1358,`code`),lO(1359,`Gauge`),wg(),lO(1360,` e não possui label.`),wg()()(),jc(1361,`tr`,15)(1362,`td`,16)(1363,`div`,17)(1364,`span`,18),lO(1365,` serie`),nu(1366,`br`),wg()()(),jc(1367,`td`,19)(1368,`code`,35),lO(1369,`string`),wg()(),jc(1370,`td`,23)(1371,`em`)(1372,`strong`),lO(1373,`(opcional)`),wg()(),jc(1374,`p`),lO(1375,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),jc(1376,`code`),lO(1377,`Bar`),wg(),lO(1378,` e `),jc(1379,`code`),lO(1380,`Gauge`),wg(),lO(1381,`.`),wg()()(),jc(1382,`tr`,15)(1383,`td`,16)(1384,`div`,17)(1385,`span`,18),lO(1386,` value`),nu(1387,`br`),wg()()(),jc(1388,`td`,19)(1389,`code`,35),lO(1390,`string`),wg()(),jc(1391,`td`,23)(1392,`em`)(1393,`strong`),lO(1394,`(opcional)`),wg()(),jc(1395,`p`),lO(1396,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),jc(1397,`code`),lO(1398,`Gauge`),wg(),lO(1399,`.`),wg()()()(),jc(1400,`h4`,37)(1401,`code`,5),lO(1402,`PoChartOptions`),wg()(),jc(1403,`div`,2)(1404,`p`)(1405,`em`),lO(1406,`Interface`),wg(),lO(1407,` para configurações dos elementos do gráfico.`),wg()(),jc(1408,`h4`,11),lO(1409,`Propriedades`),wg(),jc(1410,`table`,12)(1411,`tr`,13)(1412,`th`,14),lO(1413,`Nome`),wg(),jc(1414,`th`,14),lO(1415,`Tipo`),wg(),jc(1416,`th`,14),lO(1417,`Descrição`),wg()(),jc(1418,`tr`,15)(1419,`td`,16)(1420,`div`,17)(1421,`span`,18),lO(1422,` areaStyle`),nu(1423,`br`),wg()()(),jc(1424,`td`,19)(1425,`code`,39),lO(1426,`boolean`),wg()(),jc(1427,`td`,23)(1428,`em`)(1429,`strong`),lO(1430,`(opcional)`),wg()(),jc(1431,`p`),lO(1432,`Define se as séries terão sua área preenchida.`),wg(),jc(1433,`blockquote`)(1434,`p`),lO(1435,`Esta propriedade tem precedência sobre a definição de `),jc(1436,`code`),lO(1437,`areaStyle`),wg(),lO(1438,` em cada série, `),jc(1439,`code`),lO(1440,`fillpoints`),wg(),lO(1441,` não funciona quando `),jc(1442,`code`),lO(1443,`areaStyle`),wg(),lO(1444,` está definido como `),jc(1445,`code`),lO(1446,`true`),wg(),lO(1447,`.`),wg()()()(),jc(1448,`tr`,15)(1449,`td`,16)(1450,`div`,17)(1451,`span`,18),lO(1452,` axis`),nu(1453,`br`),wg()()(),jc(1454,`td`,19)(1455,`code`,40),lO(1456,`PoChartAxisOptions`),wg()(),jc(1457,`td`,23)(1458,`em`)(1459,`strong`),lO(1460,`(opcional)`),wg()(),jc(1461,`p`),lO(1462,`Define um objeto do tipo `),jc(1463,`code`),lO(1464,`PoChartAxisOptions`),wg(),lO(1465,` para configuração dos eixos.`),wg()()(),jc(1466,`tr`,15)(1467,`td`,16)(1468,`div`,17)(1469,`span`,18),lO(1470,` borderRadius`),nu(1471,`br`),wg()()(),jc(1472,`td`,19)(1473,`code`,27),lO(1474,`number`),wg()(),jc(1475,`td`,23)(1476,`em`)(1477,`strong`),lO(1478,`(opcional)`),wg()(),jc(1479,`p`),lO(1480,`Define borda entre os itens do gráfico. Válido para os gráficos `),jc(1481,`code`),lO(1482,`Donut`),wg(),lO(1483,`, `),jc(1484,`code`),lO(1485,`Pie`),wg(),lO(1486,`.`),wg(),jc(1487,`blockquote`)(1488,`p`),lO(1489,`Valores válidos entre 0 e 100,`),wg()()()(),jc(1490,`tr`,15)(1491,`td`,16)(1492,`div`,17)(1493,`span`,18),lO(1494,` bottomDataZoom`),nu(1495,`br`),wg()()(),jc(1496,`td`,19)(1497,`code`,39),lO(1498,`boolean `),wg(),jc(1499,`code`,27),lO(1500,` number`),wg()(),jc(1501,`td`,23)(1502,`em`)(1503,`strong`),lO(1504,`(opcional)`),wg()(),jc(1505,`p`),lO(1506,`Define a distância inferior do componente DataZoom.`),wg(),jc(1507,`p`),lO(1508,`Esta propriedade aceita os seguintes valores:`),wg(),jc(1509,`ul`)(1510,`li`)(1511,`p`)(1512,`code`),lO(1513,`false`),wg(),lO(1514,` (padrão): não aplica ajustes.`),wg()(),jc(1515,`li`)(1516,`p`)(1517,`code`),lO(1518,`true`),wg(),lO(1519,`: aplica um valor automático com base no posicionamento da legenda:`),wg(),jc(1520,`ul`)(1521,`li`)(1522,`code`),lO(1523,`8`),wg(),lO(1524,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),wg(),jc(1525,`li`)(1526,`code`),lO(1527,`32`),wg(),lO(1528,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),wg()()(),jc(1529,`li`)(1530,`p`)(1531,`code`),lO(1532,`number`),wg(),lO(1533,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),wg()()(),jc(1534,`blockquote`)(1535,`p`),lO(1536,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),jc(1537,`code`),lO(1538,`dataZoom: true`),wg(),lO(1539,`).`),wg()()()(),jc(1540,`tr`,15)(1541,`td`,16)(1542,`div`,17)(1543,`span`,18),lO(1544,` dataZoom`),nu(1545,`br`),wg()()(),jc(1546,`td`,19)(1547,`code`,39),lO(1548,`boolean`),wg()(),jc(1549,`td`,23)(1550,`em`)(1551,`strong`),lO(1552,`(opcional)`),wg()(),jc(1553,`p`),lO(1554,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),wg()()(),jc(1555,`tr`,15)(1556,`td`,16)(1557,`div`,17)(1558,`span`,18),lO(1559,` descriptionChart`),nu(1560,`br`),wg()()(),jc(1561,`td`,19)(1562,`code`,35),lO(1563,`string`),wg()(),jc(1564,`td`,23)(1565,`em`)(1566,`strong`),lO(1567,`(opcional)`),wg()(),jc(1568,`p`),lO(1569,`Define a descrição do gráfico exibido acima do gráfico.`),wg()()(),jc(1570,`tr`,15)(1571,`td`,16)(1572,`div`,17)(1573,`span`,18),lO(1574,` fillPoints`),nu(1575,`br`),wg()()(),jc(1576,`td`,19)(1577,`code`,39),lO(1578,`boolean`),wg()(),jc(1579,`td`,23)(1580,`em`)(1581,`strong`),lO(1582,`(opcional)`),wg()(),jc(1583,`p`),lO(1584,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),wg(),jc(1585,`blockquote`)(1586,`p`),lO(1587,`Esta propriedade é utilizável para os gráficos dos tipos `),jc(1588,`code`),lO(1589,`Area`),wg(),lO(1590,`, `),jc(1591,`code`),lO(1592,`Line`),wg(),lO(1593,` e `),jc(1594,`code`),lO(1595,`Radar`),wg(),lO(1596,`.
Para o tipo `),jc(1597,`code`),lO(1598,`Radar`),wg(),lO(1599,`, o valor padrão é `),jc(1600,`code`),lO(1601,`true`),wg(),lO(1602,`.`),wg()()()(),jc(1603,`tr`,15)(1604,`td`,16)(1605,`div`,17)(1606,`span`,18),lO(1607,` firstColumnName`),nu(1608,`br`),wg()()(),jc(1609,`td`,19)(1610,`code`,35),lO(1611,`string`),wg()(),jc(1612,`td`,23)(1613,`em`)(1614,`strong`),lO(1615,`(opcional)`),wg()(),jc(1616,`p`),lO(1617,`Valor que permite customizar o nome da `),jc(1618,`code`),lO(1619,`TH`),wg(),lO(1620,` da primeira coluna da tabela descritiva.`),wg()()(),jc(1621,`tr`,15)(1622,`td`,16)(1623,`div`,17)(1624,`span`,18),lO(1625,` header`),nu(1626,`br`),wg()()(),jc(1627,`td`,19)(1628,`code`,41),lO(1629,`PoChartHeaderOptions`),wg()(),jc(1630,`td`,23)(1631,`em`)(1632,`strong`),lO(1633,`(opcional)`),wg()(),jc(1634,`p`),lO(1635,`Define um objeto do tipo `),jc(1636,`code`),lO(1637,`PoChartHeaderOptions`),wg(),lO(1638,` para configurar a exibição de botões no cabeçalho do gráfico.`),wg()()(),jc(1639,`tr`,15)(1640,`td`,16)(1641,`div`,17)(1642,`span`,18),lO(1643,` innerRadius`),nu(1644,`br`),wg()()(),jc(1645,`td`,19)(1646,`code`,27),lO(1647,`number`),wg()(),jc(1648,`td`,23)(1649,`em`)(1650,`strong`),lO(1651,`(opcional)`),wg()(),jc(1652,`p`),lO(1653,`Define o diâmetro, em valor percentual entre `),jc(1654,`code`),lO(1655,`0`),wg(),lO(1656,` e `),jc(1657,`code`),lO(1658,`100`),wg(),lO(1659,`, da área central para gráficos do tipo `),jc(1660,`code`),lO(1661,`donut`),wg(),lO(1662,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),jc(1663,`code`),lO(1664,`40px`),wg(),lO(1665,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),wg()()(),jc(1666,`tr`,15)(1667,`td`,16)(1668,`div`,17)(1669,`span`,18),lO(1670,` legend`),nu(1671,`br`),wg()()(),jc(1672,`td`,19)(1673,`code`,39),lO(1674,`boolean`),wg()(),jc(1675,`td`,23)(1676,`em`)(1677,`strong`),lO(1678,`(opcional)`),wg()(),jc(1679,`p`),lO(1680,`Define a exibição da legenda do gráfico. Valor padrão é `),jc(1681,`code`),lO(1682,`true`),wg()()()(),jc(1683,`tr`,15)(1684,`td`,16)(1685,`div`,17)(1686,`span`,18),lO(1687,` legendPosition`),nu(1688,`br`),wg()()(),jc(1689,`td`,19)(1690,`code`,42),lO(1691,`'left' `),wg(),jc(1692,`code`,43),lO(1693,` 'center' `),wg(),jc(1694,`code`,44),lO(1695,` 'right'`),wg()(),jc(1696,`td`,23)(1697,`em`)(1698,`strong`),lO(1699,`(opcional)`),wg()(),jc(1700,`p`),lO(1701,`Define o alinhamento horizontal da legenda.`),wg(),jc(1702,`blockquote`)(1703,`p`),lO(1704,`Propriedade inválida para o gráfico do tipo `),jc(1705,`code`),lO(1706,`Gauge`),wg(),lO(1707,`.`),wg()()()(),jc(1708,`tr`,15)(1709,`td`,16)(1710,`div`,17)(1711,`span`,18),lO(1712,` legendType`),nu(1713,`br`),wg()()(),jc(1714,`td`,19)(1715,`code`,45),lO(1716,`'plain' `),wg(),jc(1717,`code`,46),lO(1718,` 'scroll'`),wg()(),jc(1719,`td`,23)(1720,`em`)(1721,`strong`),lO(1722,`(opcional)`),wg()(),jc(1723,`p`),lO(1724,`Define o tipo da legenda.`),wg(),jc(1725,`ul`)(1726,`li`)(1727,`code`),lO(1728,`plain`),wg(),lO(1729,`: exibe todas as legendas de forma estática.`),wg(),jc(1730,`li`)(1731,`code`),lO(1732,`scroll`),wg(),lO(1733,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),wg()(),jc(1734,`blockquote`)(1735,`p`),lO(1736,`Propriedade inválida para o gráfico do tipo `),jc(1737,`code`),lO(1738,`Gauge`),wg(),lO(1739,`.`),wg()()()(),jc(1740,`tr`,15)(1741,`td`,16)(1742,`div`,17)(1743,`span`,18),lO(1744,` legendVerticalPosition`),nu(1745,`br`),wg()()(),jc(1746,`td`,19)(1747,`code`,47),lO(1748,`'top' `),wg(),jc(1749,`code`,48),lO(1750,` 'bottom'`),wg()(),jc(1751,`td`,23)(1752,`em`)(1753,`strong`),lO(1754,`(opcional)`),wg()(),jc(1755,`p`),lO(1756,`Define a posição vertical da legenda no gráfico.`),wg(),jc(1757,`blockquote`)(1758,`p`),lO(1759,`Quando utilizada com o valor `),jc(1760,`code`),lO(1761,`top`),wg(),lO(1762,`, recomenda-se configurar também a propriedade `),jc(1763,`code`),lO(1764,`bottomDataZoom`),wg(),lO(1765,` caso o `),jc(1766,`code`),lO(1767,`dataZoom`),wg(),lO(1768,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),jc(1769,`code`),lO(1770,`Gauge`),wg(),lO(1771,`.`),wg()()()(),jc(1772,`tr`,15)(1773,`td`,16)(1774,`div`,17)(1775,`span`,18),lO(1776,` pointer`),nu(1777,`br`),wg()()(),jc(1778,`td`,19)(1779,`code`,39),lO(1780,`boolean`),wg()(),jc(1781,`td`,23)(1782,`em`)(1783,`strong`),lO(1784,`(opcional)`),wg()(),jc(1785,`p`),lO(1786,`Define a exibição do ponteiro.`),wg(),jc(1787,`blockquote`)(1788,`p`),lO(1789,`Válido para gráfico do tipo `),jc(1790,`code`),lO(1791,`Gauge`),wg(),lO(1792,`.`),wg()()()(),jc(1793,`tr`,15)(1794,`td`,16)(1795,`div`,17)(1796,`span`,18),lO(1797,` rendererOption`),nu(1798,`br`),wg()()(),jc(1799,`td`,19)(1800,`code`,49),lO(1801,`'canvas' `),wg(),jc(1802,`code`,50),lO(1803,` 'svg'`),wg()(),jc(1804,`td`,23)(1805,`em`)(1806,`strong`),lO(1807,`(opcional)`),wg()(),jc(1808,`p`),lO(1809,`Define como o gráfico será renderizado.`),wg(),jc(1810,`blockquote`)(1811,`p`),lO(1812,`Recomenda-se não modificar o valor da propriedade `),jc(1813,`code`),lO(1814,`rendererOption`),wg(),lO(1815,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),wg()()()(),jc(1816,`tr`,15)(1817,`td`,16)(1818,`div`,17)(1819,`span`,18),lO(1820,` roseType`),nu(1821,`br`),wg()()(),jc(1822,`td`,19)(1823,`code`,39),lO(1824,`boolean`),wg()(),jc(1825,`td`,23)(1826,`em`)(1827,`strong`),lO(1828,`(opcional)`),wg()(),jc(1829,`p`),lO(1830,`Transforma os gráficos do tipo `),jc(1831,`code`),lO(1832,`Donut`),wg(),lO(1833,` ou `),jc(1834,`code`),lO(1835,`Pie`),wg(),lO(1836,` num gráfico de área polar.`),wg(),jc(1837,`blockquote`)(1838,`p`),lO(1839,`Válido para os gráficos `),jc(1840,`code`),lO(1841,`Donut`),wg(),lO(1842,` e `),jc(1843,`code`),lO(1844,`Pie`),wg(),lO(1845,`.`),wg()()()(),jc(1846,`tr`,15)(1847,`td`,16)(1848,`div`,17)(1849,`span`,18),lO(1850,` showContainerGauge`),nu(1851,`br`),wg()()(),jc(1852,`td`,19)(1853,`code`,39),lO(1854,`boolean`),wg()(),jc(1855,`td`,23)(1856,`em`)(1857,`strong`),lO(1858,`(opcional)`),wg()(),jc(1859,`p`),lO(1860,`Esconde a estilização do container em volta do gráfico.`),wg(),jc(1861,`blockquote`)(1862,`p`),lO(1863,`Válido para gráfico do tipo `),jc(1864,`code`),lO(1865,`Gauge`),wg(),lO(1866,`.`),wg()()()(),jc(1867,`tr`,15)(1868,`td`,16)(1869,`div`,17)(1870,`span`,18),lO(1871,` showFromToLegend`),nu(1872,`br`),wg()()(),jc(1873,`td`,19)(1874,`code`,39),lO(1875,`boolean`),wg()(),jc(1876,`td`,23)(1877,`em`)(1878,`strong`),lO(1879,`(opcional)`),wg()(),jc(1880,`p`),lO(1881,`Exibe os valores das propriedades `),jc(1882,`code`),lO(1883,`from`),wg(),lO(1884,` e `),jc(1885,`code`),lO(1886,`to`),wg(),lO(1887,` no gráfico do no texto da legenda entre parênteses.`),wg(),jc(1888,`blockquote`)(1889,`p`),lO(1890,`Válido para gráfico do tipo `),jc(1891,`code`),lO(1892,`Gauge`),wg(),lO(1893,`.`),wg()()()(),jc(1894,`tr`,15)(1895,`td`,16)(1896,`div`,17)(1897,`span`,18),lO(1898,` stacked`),nu(1899,`br`),wg()()(),jc(1900,`td`,19)(1901,`code`,39),lO(1902,`boolean`),wg()(),jc(1903,`td`,23)(1904,`em`)(1905,`strong`),lO(1906,`(opcional)`),wg()(),jc(1907,`p`),lO(1908,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),jc(1909,`code`),lO(1910,`stackGroupName`),wg(),lO(1911,` da interface `),jc(1912,`code`),lO(1913,`PoChartSerie`),wg()(),jc(1914,`blockquote`)(1915,`p`),lO(1916,`Válido para gráfico do tipo `),jc(1917,`code`),lO(1918,`Column`),wg(),lO(1919,` e `),jc(1920,`code`),lO(1921,`Bar`),wg(),lO(1922,`.`),wg()(),jc(1923,`blockquote`)(1924,`p`),lO(1925,`Essa propriedade habilita a propriedade `),jc(1926,`code`),lO(1927,`p-data-label`),wg(),lO(1928,` por padrão, podendo ser desabilitada passando `),jc(1929,`code`),lO(1930,`[p-data-label]={ fixed: false }`),wg(),lO(1931,`.`),wg()()()(),jc(1932,`tr`,15)(1933,`td`,16)(1934,`div`,17)(1935,`span`,18),lO(1936,` subtitleGauge`),nu(1937,`br`),wg()()(),jc(1938,`td`,19)(1939,`code`,35),lO(1940,`string`),wg()(),jc(1941,`td`,23)(1942,`em`)(1943,`strong`),lO(1944,`(opcional)`),wg()(),jc(1945,`p`),lO(1946,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),wg(),jc(1947,`blockquote`)(1948,`p`),lO(1949,`Válido para gráfico do tipo `),jc(1950,`code`),lO(1951,`Gauge`),wg(),lO(1952,`.`),wg()()()(),jc(1953,`tr`,15)(1954,`td`,16)(1955,`div`,17)(1956,`span`,18),lO(1957,` textCenterGraph`),nu(1958,`br`),wg()()(),jc(1959,`td`,19)(1960,`code`,35),lO(1961,`string`),wg()(),jc(1962,`td`,23)(1963,`em`)(1964,`strong`),lO(1965,`(opcional)`),wg()(),jc(1966,`p`),lO(1967,`Aplica texto centralizado customizado nos gráficos de `),jc(1968,`code`),lO(1969,`Donut`),wg(),lO(1970,`.`),wg()()()(),jc(1971,`h4`,37)(1972,`code`,5),lO(1973,`PoChartRadarOptions`),wg()(),jc(1974,`div`,2)(1975,`p`)(1976,`em`),lO(1977,`Interface`),wg(),lO(1978,` para configurações do gráfico `),jc(1979,`code`),lO(1980,`radar`),wg(),lO(1981,`.`),wg()(),jc(1982,`h4`,11),lO(1983,`Propriedades`),wg(),jc(1984,`table`,12)(1985,`tr`,13)(1986,`th`,14),lO(1987,`Nome`),wg(),jc(1988,`th`,14),lO(1989,`Tipo`),wg(),jc(1990,`th`,14),lO(1991,`Descrição`),wg()(),jc(1992,`tr`,15)(1993,`td`,16)(1994,`div`,17)(1995,`span`,18),lO(1996,` indicator`),nu(1997,`br`),wg()()(),jc(1998,`td`,19)(1999,`code`,51),lO(2e3,`Array<PoChartIndicatorOptions>`),wg()(),jc(2001,`td`,23)(2002,`em`)(2003,`strong`),lO(2004,`(opcional)`),wg()(),jc(2005,`p`),lO(2006,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),wg()()(),jc(2007,`tr`,15)(2008,`td`,16)(2009,`div`,17)(2010,`span`,18),lO(2011,` shape`),nu(2012,`br`),wg()()(),jc(2013,`td`,19)(2014,`code`,52),lO(2015,`'polygon' `),wg(),jc(2016,`code`,53),lO(2017,` 'circle'`),wg()(),jc(2018,`td`,23)(2019,`em`)(2020,`strong`),lO(2021,`(opcional)`),wg()(),jc(2022,`p`),lO(2023,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),wg()()(),jc(2024,`tr`,15)(2025,`td`,16)(2026,`div`,17)(2027,`span`,18),lO(2028,` splitArea`),nu(2029,`br`),wg()()(),jc(2030,`td`,19)(2031,`code`,39),lO(2032,`boolean`),wg()(),jc(2033,`td`,23)(2034,`em`)(2035,`strong`),lO(2036,`(opcional)`),wg()(),jc(2037,`p`),lO(2038,`Define o efeito zebrado na grid.`),wg()()()(),jc(2039,`h4`,37)(2040,`code`,5),lO(2041,`PoChartDataLabel`),wg()(),jc(2042,`div`,2)(2043,`p`),lO(2044,`Interface que define as propriedades de exibição dos rótulos das séries no `),jc(2045,`code`),lO(2046,`po-chart`),wg(),lO(2047,`.`),wg()(),jc(2048,`h4`,11),lO(2049,`Propriedades`),wg(),jc(2050,`table`,12)(2051,`tr`,13)(2052,`th`,14),lO(2053,`Nome`),wg(),jc(2054,`th`,14),lO(2055,`Tipo`),wg(),jc(2056,`th`,14),lO(2057,`Descrição`),wg()(),jc(2058,`tr`,15)(2059,`td`,16)(2060,`div`,17)(2061,`span`,18),lO(2062,` fixed`),nu(2063,`br`),wg()()(),jc(2064,`td`,19)(2065,`code`,39),lO(2066,`boolean`),wg()(),jc(2067,`td`,23)(2068,`em`)(2069,`strong`),lO(2070,`(opcional)`),wg()(),jc(2071,`p`),lO(2072,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),wg(),jc(2073,`ul`)(2074,`li`),lO(2075,`Quando definido como `),jc(2076,`code`),lO(2077,`true`),wg(),lO(2078,`:`),jc(2079,`ul`)(2080,`li`),lO(2081,`O `),jc(2082,`em`),lO(2083,`tooltip`),wg(),lO(2084,` não será exibido.`),wg(),jc(2085,`li`),lO(2086,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),wg()()()(),jc(2087,`blockquote`)(2088,`p`),lO(2089,`Disponível para os tipo de gráfico `),jc(2090,`code`),lO(2091,`PoChartType.Line`),wg(),lO(2092,`, `),jc(2093,`code`),lO(2094,`PoChartType.Area`),wg(),lO(2095,`, `),jc(2096,`code`),lO(2097,`PoChartType.Column`),wg(),lO(2098,`, `),jc(2099,`code`),lO(2100,`PoChartType.Bar e PoChartType.Radar`),wg(),lO(2101,`.`),wg()()()()(),jc(2102,`h4`,37)(2103,`code`,5),lO(2104,`PoChartSerie`),wg()(),jc(2105,`div`,2)(2106,`p`),lO(2107,`Interface das series dinâmicas do `),jc(2108,`code`),lO(2109,`po-chart`),wg(),lO(2110,` que possibilita desenhar gráficos dos tipos `),jc(2111,`code`),lO(2112,`area`),wg(),lO(2113,`, `),jc(2114,`code`),lO(2115,`bar`),wg(),lO(2116,`, `),jc(2117,`code`),lO(2118,`column`),wg(),lO(2119,`, `),jc(2120,`code`),lO(2121,`line`),wg(),lO(2122,`, `),jc(2123,`code`),lO(2124,`donut`),wg(),lO(2125,`, `),jc(2126,`code`),lO(2127,`pie`),wg(),lO(2128,` e `),jc(2129,`code`),lO(2130,`radar`),wg()()(),jc(2131,`h4`,11),lO(2132,`Propriedades`),wg(),jc(2133,`table`,12)(2134,`tr`,13)(2135,`th`,14),lO(2136,`Nome`),wg(),jc(2137,`th`,14),lO(2138,`Tipo`),wg(),jc(2139,`th`,14),lO(2140,`Descrição`),wg()(),jc(2141,`tr`,15)(2142,`td`,16)(2143,`div`,17)(2144,`span`,18),lO(2145,` areaStyle`),nu(2146,`br`),wg()()(),jc(2147,`td`,19)(2148,`code`,39),lO(2149,`boolean`),wg()(),jc(2150,`td`,23)(2151,`em`)(2152,`strong`),lO(2153,`(opcional)`),wg()(),jc(2154,`p`),lO(2155,`Define se a série terá sua área preenchida.`),wg(),jc(2156,`blockquote`)(2157,`p`),lO(2158,`Propriedade válida para gráficos do tipo `),jc(2159,`code`),lO(2160,`Radar`),wg(),lO(2161,`, `),jc(2162,`code`),lO(2163,`fillpoints`),wg(),lO(2164,` não funciona quando `),jc(2165,`code`),lO(2166,`areaStyle`),wg(),lO(2167,` está definido como `),jc(2168,`code`),lO(2169,`true`),wg(),lO(2170,`.`),wg()()()(),jc(2171,`tr`,15)(2172,`td`,16)(2173,`div`,17)(2174,`span`,18),lO(2175,` color`),nu(2176,`br`),wg()()(),jc(2177,`td`,19)(2178,`code`,35),lO(2179,`string`),wg()(),jc(2180,`td`,23)(2181,`em`)(2182,`strong`),lO(2183,`(opcional)`),wg()(),jc(2184,`p`),lO(2185,`Determina a cor da série. As maneiras de customizar o `),jc(2186,`em`),lO(2187,`preset`),wg(),lO(2188,` padrão de cores são:`),wg(),jc(2189,`ul`)(2190,`li`),lO(2191,`Hexadecimal, por exemplo `),jc(2192,`code`),lO(2193,`#c64840`),wg(),lO(2194,`;`),wg(),jc(2195,`li`),lO(2196,`RGB, por exemplo `),jc(2197,`code`),lO(2198,`rgb(0, 0, 165)`),wg()(),jc(2199,`li`),lO(2200,`O nome da cor, por exemplo `),jc(2201,`code`),lO(2202,`blue`),wg(),lO(2203,`;`),wg(),jc(2204,`li`),lO(2205,`Variáveis CSS, por exemplo `),jc(2206,`code`),lO(2207,`var(--color-01)`),wg(),lO(2208,`;`),wg(),jc(2209,`li`),lO(2210,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),jc(2211,`ul`)(2212,`li`),nu(2213,`span`,54),jc(2214,`code`),lO(2215,`color-01`),wg()(),jc(2216,`li`),nu(2217,`span`,55),jc(2218,`code`),lO(2219,`color-02`),wg()(),jc(2220,`li`),nu(2221,`span`,56),jc(2222,`code`),lO(2223,`color-03`),wg()(),jc(2224,`li`),nu(2225,`span`,57),jc(2226,`code`),lO(2227,`color-04`),wg()(),jc(2228,`li`),nu(2229,`span`,58),jc(2230,`code`),lO(2231,`color-05`),wg()(),jc(2232,`li`),nu(2233,`span`,59),jc(2234,`code`),lO(2235,`color-06`),wg()(),jc(2236,`li`),nu(2237,`span`,60),jc(2238,`code`),lO(2239,`color-07`),wg()(),jc(2240,`li`),nu(2241,`span`,61),jc(2242,`code`),lO(2243,`color-08`),wg()(),jc(2244,`li`),nu(2245,`span`,62),jc(2246,`code`),lO(2247,`color-09`),wg()(),jc(2248,`li`),nu(2249,`span`,63),jc(2250,`code`),lO(2251,`color-10`),wg()(),jc(2252,`li`),nu(2253,`span`,64),jc(2254,`code`),lO(2255,`color-11`),wg()(),jc(2256,`li`),nu(2257,`span`,65),jc(2258,`code`),lO(2259,`color-12`),wg()()()()(),jc(2260,`ul`)(2261,`li`),lO(2262,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),wg()()()(),jc(2263,`tr`,15)(2264,`td`,16)(2265,`div`,17)(2266,`span`,18),lO(2267,` data`),nu(2268,`br`),wg()()(),jc(2269,`td`,19)(2270,`code`,27),lO(2271,`number `),wg(),jc(2272,`code`,66),lO(2273,` Array<number>`),wg()(),jc(2274,`td`,23)(2275,`em`)(2276,`strong`),lO(2277,`(opcional)`),wg()(),jc(2278,`p`),lO(2279,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),wg(),jc(2280,`ul`)(2281,`li`),lO(2282,`Para gráficos dos tipos `),jc(2283,`code`),lO(2284,`donut`),wg(),lO(2285,` e `),jc(2286,`code`),lO(2287,`pie`),wg(),lO(2288,`, espera-se `),jc(2289,`em`),lO(2290,`number`),wg(),lO(2291,`;`),wg(),jc(2292,`li`),lO(2293,`Para gráficos dos tipos `),jc(2294,`code`),lO(2295,`area`),wg(),lO(2296,`, `),jc(2297,`code`),lO(2298,`bar`),wg(),lO(2299,`, `),jc(2300,`code`),lO(2301,`column`),wg(),lO(2302,`, `),jc(2303,`code`),lO(2304,`line`),wg(),lO(2305,` e `),jc(2306,`code`),lO(2307,`radar`),wg(),lO(2308,`, espera-se um `),jc(2309,`em`),lO(2310,`array`),wg(),lO(2311,` de `),jc(2312,`code`),lO(2313,`data`),wg(),lO(2314,`.`),wg()(),jc(2315,`blockquote`)(2316,`p`),lO(2317,`Se passado valor `),jc(2318,`code`),lO(2319,`null`),wg(),lO(2320,` em determinado item da lista, a iteração irá ignorá-lo.`),wg()()()(),jc(2321,`tr`,15)(2322,`td`,16)(2323,`div`,17)(2324,`span`,18),lO(2325,` from`),nu(2326,`br`),wg()()(),jc(2327,`td`,19)(2328,`code`,27),lO(2329,`number`),wg()(),jc(2330,`td`,23)(2331,`em`)(2332,`strong`),lO(2333,`(opcional)`),wg()(),jc(2334,`p`),lO(2335,`Alcance inicial da cor.`),wg(),jc(2336,`blockquote`)(2337,`p`),lO(2338,`Propriedade válida para gráfico do tipo `),jc(2339,`code`),lO(2340,`Gauge`),wg(),lO(2341,`.`),wg()()()(),jc(2342,`tr`,15)(2343,`td`,16)(2344,`div`,17)(2345,`span`,18),lO(2346,` label`),nu(2347,`br`),wg()()(),jc(2348,`td`,19)(2349,`code`,35),lO(2350,`string`),wg()(),jc(2351,`td`,23)(2352,`em`)(2353,`strong`),lO(2354,`(opcional)`),wg()(),jc(2355,`p`),lO(2356,`Rótulo referência da série.`),wg()()(),jc(2357,`tr`,15)(2358,`td`,16)(2359,`div`,17)(2360,`span`,18),lO(2361,` stackGroupName`),nu(2362,`br`),wg()()(),jc(2363,`td`,19)(2364,`code`,35),lO(2365,`string`),wg()(),jc(2366,`td`,23)(2367,`em`)(2368,`strong`),lO(2369,`(opcional)`),wg()(),jc(2370,`p`),lO(2371,`Agrupa as séries em barras ou colunas que receberem o mesmo `),jc(2372,`code`),lO(2373,`stackGroupName`),wg(),lO(2374,`. Exemplo:`),wg(),jc(2375,`ul`)(2376,`li`),lO(2377,`Serie A: `),jc(2378,`code`),lO(2379,`{ data: 500, stackGroupName: 'group1' ... }`),wg(),lO(2380,`;`),wg(),jc(2381,`li`),lO(2382,`Série B: `),jc(2383,`code`),lO(2384,`{ data: 200, stackGroupName: 'group1' ... }`),wg(),lO(2385,`.`),wg(),jc(2386,`li`),lO(2387,`Série C: `),jc(2388,`code`),lO(2389,`{ data: 100, stackGroupName: 'group2' ... }`),wg(),lO(2390,`.`),wg(),jc(2391,`li`),lO(2392,`Série D: `),jc(2393,`code`),lO(2394,`{ data: 400, stackGroupName: 'group2' ... }`),wg(),lO(2395,`.`),wg()(),jc(2396,`p`),lO(2397,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),wg(),jc(2398,`blockquote`)(2399,`p`),lO(2400,`Válido para gráfico do tipo `),jc(2401,`code`),lO(2402,`Column`),wg(),lO(2403,` e `),jc(2404,`code`),lO(2405,`Bar`),wg(),lO(2406,`. Essa propriedade é ignorada caso a propriedade `),jc(2407,`code`),lO(2408,`stacked`),wg(),lO(2409,` da interface `),jc(2410,`code`),lO(2411,`PoChartOptions`),wg(),lO(2412,` esteja como `),jc(2413,`code`),lO(2414,`true`),wg(),lO(2415,`.`),wg()(),jc(2416,`blockquote`)(2417,`p`),lO(2418,`Essa propriedade habilita a propriedade `),jc(2419,`code`),lO(2420,`p-data-label`),wg(),lO(2421,` por padrão, podendo ser desabilitada passando `),jc(2422,`code`),lO(2423,`[p-data-label]={ fixed: false }`),wg(),lO(2424,`.`),wg()()()(),jc(2425,`tr`,15)(2426,`td`,16)(2427,`div`,17)(2428,`span`,18),lO(2429,` to`),nu(2430,`br`),wg()()(),jc(2431,`td`,19)(2432,`code`,27),lO(2433,`number`),wg()(),jc(2434,`td`,23)(2435,`em`)(2436,`strong`),lO(2437,`(opcional)`),wg()(),jc(2438,`p`),lO(2439,`Alcance final da cor.`),wg(),jc(2440,`blockquote`)(2441,`p`),lO(2442,`Propriedade válida para gráfico do tipo `),jc(2443,`code`),lO(2444,`Gauge`),wg(),lO(2445,`.`),wg()()()(),jc(2446,`tr`,15)(2447,`td`,16)(2448,`div`,17)(2449,`span`,18),lO(2450,` tooltip`),nu(2451,`br`),wg()()(),jc(2452,`td`,19)(2453,`code`,35),lO(2454,`string `),wg(),jc(2455,`code`,67),lO(2456,` ((params: any) => string)`),wg()(),jc(2457,`td`,23)(2458,`em`)(2459,`strong`),lO(2460,`(opcional)`),wg()(),jc(2461,`p`),lO(2462,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),jc(2463,`em`),lO(2464,`chart`),wg(),lO(2465,`.`),wg(),jc(2466,`p`),lO(2467,`Formatos aceitos:`),wg(),jc(2468,`ul`)(2469,`li`)(2470,`p`)(2471,`strong`),lO(2472,`string`),wg(),lO(2473,`: pode conter marcadores dinâmicos e HTML simples.`),wg()(),jc(2474,`li`)(2475,`p`),lO(2476,`Marcadores disponíveis:`),wg()(),jc(2477,`li`)(2478,`p`)(2479,`code`),lO(2480,`{name}`),wg(),lO(2481,` → Nome do item/categoria.`),wg()(),jc(2482,`li`)(2483,`p`)(2484,`code`),lO(2485,`{seriesName}`),wg(),lO(2486,` → Nome da série.`),wg()(),jc(2487,`li`)(2488,`p`)(2489,`code`),lO(2490,`{value}`),wg(),lO(2491,` → Valor correspondente.`),wg()(),jc(2492,`li`)(2493,`p`)(2494,`strong`),lO(2495,`function`),wg(),lO(2496,`: função que recebe o objeto `),jc(2497,`code`),lO(2498,`params`),wg(),lO(2499,` e deve retornar uma `),jc(2500,`em`),lO(2501,`string`),wg(),lO(2502,` com o conteúdo da tooltip.`),wg()()(),jc(2503,`blockquote`)(2504,`p`),lO(2505,`É possível utilizar marcação HTML simples (`),jc(2506,`code`),lO(2507,`<b>`),wg(),lO(2508,`, `),jc(2509,`code`),lO(2510,`<i>`),wg(),lO(2511,`, `),jc(2512,`code`),lO(2513,`<br>`),wg(),lO(2514,`, `),jc(2515,`code`),lO(2516,`<hr>`),wg(),lO(2517,`, etc.) que será interpretada via `),jc(2518,`code`),lO(2519,`innerHTML`),wg(),lO(2520,`.`),wg()(),jc(2521,`blockquote`)(2522,`p`),lO(2523,`Formatação customizada (será convertido internamente para HTML):`),wg()(),jc(2524,`ul`)(2525,`li`)(2526,`code`),lO(2527,`\\n`),wg(),lO(2528,` → quebra de linha (`),jc(2529,`code`),lO(2530,`<br>`),wg(),lO(2531,`).`),wg(),jc(2532,`li`)(2533,`code`),lO(2534,`**texto**`),wg(),lO(2535,` → negrito (`),jc(2536,`code`),lO(2537,`<b>`),wg(),lO(2538,`).`),wg(),jc(2539,`li`)(2540,`code`),lO(2541,`__texto__`),wg(),lO(2542,` → itálico (`),jc(2543,`code`),lO(2544,`<i>`),wg(),lO(2545,`).`),wg()(),jc(2546,`blockquote`)(2547,`p`),lO(2548,`Caso não seja informado um valor para o `),jc(2549,`em`),lO(2550,`tooltip`),wg(),lO(2551,`, será exibido da seguinte forma:`),wg()(),jc(2552,`ul`)(2553,`li`)(2554,`code`),lO(2555,`donut`),wg(),lO(2556,`, `),jc(2557,`code`),lO(2558,`label`),wg(),lO(2559,`: valor proporcional ao total em porcentagem.`),wg(),jc(2560,`li`)(2561,`code`),lO(2562,`radar`),wg(),lO(2563,`: nome da série, o nome do indicator e os valores correspondentes.`),wg(),jc(2564,`li`)(2565,`code`),lO(2566,`area`),wg(),lO(2567,`, `),jc(2568,`code`),lO(2569,`bar`),wg(),lO(2570,`, `),jc(2571,`code`),lO(2572,`column`),wg(),lO(2573,`, `),jc(2574,`code`),lO(2575,`line`),wg(),lO(2576,` e `),jc(2577,`code`),lO(2578,`pie`),wg(),lO(2579,`: `),jc(2580,`code`),lO(2581,`label`),wg(),lO(2582,`: `),jc(2583,`code`),lO(2584,`data`),wg(),lO(2585,`.`),wg()(),jc(2586,`h3`),lO(2587,`Exemplos:`),wg(),jc(2588,`p`)(2589,`strong`),lO(2590,`Usando string com placeholders:`),wg()(),jc(2591,`pre`)(2592,`code`,68),lO(2593,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),wg()(),jc(2594,`p`)(2595,`strong`),lO(2596,`Usando função de callback:`),wg()(),jc(2597,`pre`)(2598,`code`,68),lO(2599,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),wg()()()(),jc(2600,`tr`,15)(2601,`td`,16)(2602,`div`,17)(2603,`span`,18),lO(2604,` type`),nu(2605,`br`),wg()()(),jc(2606,`td`,19)(2607,`code`,36),lO(2608,`PoChartType`),wg()(),jc(2609,`td`,23)(2610,`em`)(2611,`strong`),lO(2612,`(opcional)`),wg()(),jc(2613,`p`),lO(2614,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),jc(2615,`code`),lO(2616,`column`),wg(),lO(2617,` e `),jc(2618,`code`),lO(2619,`line`),wg(),lO(2620,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),wg(),jc(2621,`ul`)(2622,`li`),lO(2623,`Serie A: `),jc(2624,`code`),lO(2625,`{ type: ChartType.Column, data: ... }`),wg(),lO(2626,`;`),wg(),jc(2627,`li`),lO(2628,`Série B: `),jc(2629,`code`),lO(2630,`{ type: ChartType.Line, data: ... }`),wg(),lO(2631,`.`),wg()(),jc(2632,`p`),lO(2633,`Se tanto `),jc(2634,`code`),lO(2635,`p-type`),wg(),lO(2636,` quanto `),jc(2637,`code`),lO(2638,`{ type }`),wg(),lO(2639,` forem ignorados, o padrão gerado pelo componente será:`),wg(),jc(2640,`ul`)(2641,`li`)(2642,`code`),lO(2643,`column`),wg(),lO(2644,`: se `),jc(2645,`code`),lO(2646,`data`),wg(),lO(2647,` receber `),jc(2648,`code`),lO(2649,`Array<number>`),wg(),lO(2650,`;`),wg(),jc(2651,`li`)(2652,`code`),lO(2653,`pie`),wg(),lO(2654,`: se `),jc(2655,`code`),lO(2656,`data`),wg(),lO(2657,` for `),jc(2658,`em`),lO(2659,`number`),wg(),lO(2660,`.`),wg()(),jc(2661,`blockquote`)(2662,`p`),lO(2663,`Se utilizada a propriedade `),jc(2664,`code`),lO(2665,`p-type`),wg(),lO(2666,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),jc(2667,`code`),lO(2668,`{type}`),wg(),lO(2669,` da primeira série sobrescreverá o valor definido em `),jc(2670,`code`),lO(2671,`p-type`),wg(),lO(2672,`.`),wg()(),jc(2673,`blockquote`)(2674,`p`),lO(2675,`O componente só exibirá as séries que tiverem o mesmo `),jc(2676,`code`),lO(2677,`type`),wg(),lO(2678,` definido, exceto para mesclagem para tipos `),jc(2679,`code`),lO(2680,`column`),wg(),lO(2681,` e `),jc(2682,`code`),lO(2683,`line`),wg(),lO(2684,`.`),wg()()()()(),jc(2685,`h3`),lO(2686,`Enums`),wg(),jc(2687,`h4`,4)(2688,`code`,5),lO(2689,`PoChartLabelFormat`),wg()(),jc(2690,`div`,2)(2691,`p`)(2692,`em`),lO(2693,`Enum`),wg(),jc(2694,`code`),lO(2695,`PoChartLabelFormat`),wg(),lO(2696,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),wg()(),jc(2697,`h4`,11),lO(2698,`Propriedades`),wg(),jc(2699,`table`,12)(2700,`tr`,13)(2701,`th`,14),lO(2702,`Nome`),wg(),jc(2703,`th`,14),lO(2704,`Descrição`),wg()(),jc(2705,`tr`,15)(2706,`td`,16)(2707,`div`,17)(2708,`span`,18),lO(2709,` Number`),nu(2710,`br`),wg()()(),jc(2711,`td`,23)(2712,`p`),lO(2713,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),jc(2714,`code`),lO(2715,`'1.2-2'`),wg(),lO(2716,` da `),jc(2717,`a`,69),lO(2718,`DecimalPipe`),wg(),lO(2719,`.`),wg()()(),jc(2720,`tr`,15)(2721,`td`,16)(2722,`div`,17)(2723,`span`,18),lO(2724,` Currency`),nu(2725,`br`),wg()()(),jc(2726,`td`,23)(2727,`p`),lO(2728,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),jc(2729,`a`,70),lO(2730,`DEFAULT_CURRENCY_CODE`),wg(),lO(2731,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),jc(2732,`a`,71),lO(2733,`LOCALE_ID`),wg(),lO(2734,` da aplicação. A configuração pode ser feita da seguinte forma:`),wg(),jc(2735,`pre`)(2736,`code`),lO(2737,`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class AppModule { }
`),wg()()()()(),jc(2738,`h4`,4)(2739,`code`,5),lO(2740,`PoChartType`),wg()(),jc(2741,`div`,2)(2742,`p`)(2743,`em`),lO(2744,`Enum`),wg(),jc(2745,`code`),lO(2746,`PoChartType`),wg(),lO(2747,` para especificação dos tipos de gráficos.`),wg()(),jc(2748,`h4`,11),lO(2749,`Propriedades`),wg(),jc(2750,`table`,12)(2751,`tr`,13)(2752,`th`,14),lO(2753,`Nome`),wg(),jc(2754,`th`,14),lO(2755,`Descrição`),wg()(),jc(2756,`tr`,15)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),lO(2760,` Area`),nu(2761,`br`),wg()()(),jc(2762,`td`,23)(2763,`p`),lO(2764,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),wg()()(),jc(2765,`tr`,15)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),lO(2769,` Donut`),nu(2770,`br`),wg()()(),jc(2771,`td`,23)(2772,`p`),lO(2773,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),wg()()(),jc(2774,`tr`,15)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),lO(2778,` Pie`),nu(2779,`br`),wg()()(),jc(2780,`td`,23)(2781,`p`),lO(2782,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),wg()()(),jc(2783,`tr`,15)(2784,`td`,16)(2785,`div`,17)(2786,`span`,18),lO(2787,` Line`),nu(2788,`br`),wg()()(),jc(2789,`td`,23)(2790,`p`),lO(2791,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),jc(2792,`code`),lO(2793,`column`),wg(),lO(2794,` e `),jc(2795,`code`),lO(2796,`area`),wg(),lO(2797,`, definindo-se o tipo através da propriedade `),jc(2798,`code`),lO(2799,`PoChartSerie.type`),wg(),lO(2800,`.`),wg()()(),jc(2801,`tr`,15)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),lO(2805,` Column`),nu(2806,`br`),wg()()(),jc(2807,`td`,23)(2808,`p`),lO(2809,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),wg()()(),jc(2810,`tr`,15)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),lO(2814,` Bar`),nu(2815,`br`),wg()()(),jc(2816,`td`,23)(2817,`p`),lO(2818,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),wg()()(),jc(2819,`tr`,15)(2820,`td`,16)(2821,`div`,17)(2822,`span`,18),lO(2823,` Gauge`),nu(2824,`br`),wg()()(),jc(2825,`td`,23)(2826,`p`),lO(2827,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),wg(),jc(2828,`ul`)(2829,`li`),lO(2830,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),wg(),jc(2831,`li`),lO(2832,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),wg()()()(),jc(2833,`tr`,15)(2834,`td`,16)(2835,`div`,17)(2836,`span`,18),lO(2837,` Radar`),nu(2838,`br`),wg()()(),jc(2839,`td`,23)(2840,`p`),lO(2841,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function _t(r,N){if(r&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-chart-basic-view`)(2,`sample-po-chart-labs-view`)(3,`sample-po-chart-coffee-ranking-view`)(4,`sample-po-chart-stacked-view`)(5,`sample-po-chart-summary-view`)(6,`sample-po-chart-world-exports-view`)(7,`sample-po-chart-technology-skill-view`),wg()}if(r&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Pt=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||r)(b(ir),b(Sn))};static ɵcmp=Zn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Chart`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(d,i){d&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,_t,8,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-chart-doc`),wg()()()),d&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,fe,ve,Pe,we,Me,ke,Ae,Re],encapsulation:2,changeDetection:1})}return r})()}];var Ge=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[I1.forChild(Pt),I1]})}return r})();var vn=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[M,Ge]})}return r})();export{vn as DocPoChartModule};