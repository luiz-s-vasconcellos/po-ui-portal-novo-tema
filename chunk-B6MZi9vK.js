import{m as P,p as M}from"./main-FL7X32TP.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ta as jk,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ao as we$1,ar as An,at as S4,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,f as Cze,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,k as Goe,li as Qc,na as de,oo as wg,ot as Sa,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,vi as Sk,w as Fc,wn as q4,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var Be=()=>({label:`Angular`,data:100});var We=()=>({label:`React`,data:10});var Fe=(r,N)=>[r,N];var Ce=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:2,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&(Qc(0,`po-widget`),vu(1,`po-chart`,0),Kg()),d&2&&(wg(),Rb(`p-series`,jk(3,Fe,Lk(1,Be),Lk(2,We))))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r});var fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-chart-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Chart Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-widget>
  <po-chart
    [p-series]="[
      { label: 'Angular', data: 100 },
      { label: 'React', data: 10 }
    ]"
  >
  </po-chart>
</po-widget>`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-chart-basic`),Kg(),vu(23,`hr`)),d&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ie,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:`fillPoints`,label:`fillPoints`});var z=r=>[r];var He=()=>({label:`legend`,value:`legend`});var Ze=()=>({label:`roseType`,value:`roseType`});var Ye=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var je=()=>({label:`pointer`,value:`pointer`});var Ue=()=>({label:`stacked`,value:`stacked`});var Je=()=>({value:`fixed`,label:`Fixed`});function Xe(r,N){if(r&1){let l=YO();Qc(0,`po-checkbox-group`,54),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),U_(i)}),vt(`p-change`,function(){B_(l);let i=ek();return U_(i.changeDataLabelOptions())}),Kg()}if(r&2){let l=ek();Rb(`p-options`,Vk(3,z,Lk(2,Je))),Yb(`ngModel`,l.selectedValuesDataLabel),W0()}}function Qe(r,N){if(r&1){let l=YO();Qc(0,`po-number`,55),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.valueGauge,i)||(s.valueGauge=i),U_(i)}),vt(`p-change`,function(i){B_(l);let s=ek();return U_(s.changeValueGauge(i))}),Kg()}if(r&2){let l=ek();Yb(`ngModel`,l.valueGauge),W0()}}function Ke(r,N){if(r&1){let l=YO();Qc(0,`po-radio-group`,56),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.selectedShapeOption,i)||(s.selectedShapeOption=i),U_(i)}),Kg(),Qc(1,`po-switch`,57),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.selectedSplitArea,i)||(s.selectedSplitArea=i),U_(i)}),Kg(),Qc(2,`po-switch`,58),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),U_(i)}),Kg()}if(r&2){let l=ek();Rb(`p-options`,l.optionsShapeOption),Yb(`ngModel`,l.selectedShapeOption),W0(),wg(),Yb(`ngModel`,l.selectedSplitArea),W0(),wg(),Yb(`ngModel`,l.selectedAreaStyle),W0()}}function $e(r,N){if(r&1){let l=YO();Qc(0,`po-input`,59),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.data,i)||(s.data=i),U_(i)}),Kg()}if(r&2){let l=ek();Yb(`ngModel`,l.data),W0()}}function et(r,N){if(r&1){let l=YO();Qc(0,`po-input`,60),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.stackGroupName,i)||(s.stackGroupName=i),U_(i)}),Kg()}if(r&2){let l=ek();Yb(`ngModel`,l.stackGroupName),W0()}}function tt(r,N){if(r&1){let l=YO();Qc(0,`po-number`,61),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.fromGauge,i)||(s.fromGauge=i),U_(i)}),Kg()}if(r&2){let l=ek();Yb(`ngModel`,l.fromGauge),W0()}}function nt(r,N){if(r&1){let l=YO();Qc(0,`po-number`,62),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.toGauge,i)||(s.toGauge=i),U_(i)}),Kg()}if(r&2){let l=ek();Yb(`ngModel`,l.toGauge),W0()}}function it(r,N){if(r&1){let l=YO();Qc(0,`div`,3)(1,`po-button`,63),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.addData())}),Kg()()}}function ot(r,N){if(r&1){let l=YO();Qc(0,`po-number`,64),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.min,i)||(s.min=i),U_(i)}),Kg(),Qc(1,`po-number`,65),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.max,i)||(s.max=i),U_(i)}),Kg(),Qc(2,`po-input`,66),z0(),Kb(`ngModelChange`,function(i){B_(l);let s=ek();return Tk(s.colorIndicator,i)||(s.colorIndicator=i),U_(i)}),Kg(),Qc(3,`div`,3)(4,`po-button`,67),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.addData())}),Kg()()}if(r&2){let l=ek();Yb(`ngModel`,l.min),W0(),wg(),Yb(`ngModel`,l.max),W0(),wg(),Yb(`ngModel`,l.colorIndicator),W0(),wg(2),Rb(`p-disabled`,l.isTypeRadar&&!l.categories)}}var ye=(()=>{class r$1{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:Sa.Line},{label:`Area`,value:Sa.Area},{label:`Bar`,value:Sa.Bar},{label:`Column`,value:Sa.Column},{label:`Donut`,value:Sa.Donut},{label:`Pie`,value:Sa.Pie},{label:`Gauge`,value:Sa.Gauge},{label:`Radar`,value:Sa.Radar}];labelTypeOptions=[{label:`Number`,value:S4.Number},{label:`Currency`,value:S4.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:l})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===Sa.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===Sa.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=Sa.Gauge,this.type=Sa.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=Sa.Radar,this.type=Sa.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=r(r({},this.options),l?r({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===Sa.Line||this.type===Sa.Area||this.type===Sa.Column||this.type===Sa.Bar||this.type===Sa.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static ɵfac=function(d){return new(d||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:67,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let s=YO();Qc(0,`po-widget`)(1,`po-chart`,1),vt(`p-series-click`,function(a){return i.changeEvent(`p-series-click`,a)})(`p-series-hover`,function(a){return i.changeEvent(`p-series-hover`,a)}),Kg()(),vu(2,`po-divider`,2),Qc(3,`div`,3),vu(4,`po-info`,4),Kg(),vu(5,`po-divider`,5),Qc(6,`form`)(7,`po-select`,6),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.type,a)||(i.type=a),U_(a)}),vt(`p-change`,function(a){return i.changeType(a)}),Kg(),Qc(8,`po-number`,7),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.height,a)||(i.height=a),U_(a)}),Kg(),Qc(9,`po-input`,8),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.title,a)||(i.title=a),U_(a)}),Kg(),FO(10,Xe,1,5,`po-checkbox-group`,9),Kg(),vu(11,`po-divider`,10),Qc(12,`form`,null,0)(14,`div`,3)(15,`po-switch`,11),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.isTypeGauge,a)||(i.isTypeGauge=a),U_(a)}),vt(`p-change`,function(a){return i.changeSwitchGauge(a)}),Kg(),Qc(16,`po-switch`,12),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.isTypeRadar,a)||(i.isTypeRadar=a),U_(a)}),vt(`p-change`,function(a){return i.changeSwitchRadar(a)}),Kg(),FO(17,Qe,1,1,`po-number`,13),FO(18,Ke,3,4),Kg(),Qc(19,`div`,3)(20,`po-input`,14),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.label,a)||(i.label=a),U_(a)}),Kg(),FO(21,$e,1,1,`po-input`,15),Qc(22,`po-select`,16),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.serieType,a)||(i.serieType=a),U_(a)}),vt(`p-change`,function(a){return i.changeType(a)}),Kg(),Qc(23,`po-input`,17),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.tooltip,a)||(i.tooltip=a),U_(a)}),Kg(),Qc(24,`po-input`,18),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.color,a)||(i.color=a),U_(a)}),Kg(),FO(25,et,1,1,`po-input`,19),FO(26,tt,1,1,`po-number`,20),FO(27,nt,1,1,`po-number`,21),FO(28,it,2,0,`div`,3),Kg()(),Qc(29,`div`,3),vu(30,`po-divider`,22),Qc(31,`po-input`,23),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.categories,a)||(i.categories=a),U_(a)}),vt(`p-blur`,function(){return i.addCategories()}),Kg(),FO(32,ot,5,4),Kg(),Qc(33,`form`)(34,`div`,3),vu(35,`po-divider`,24),Qc(36,`po-number`,25),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.minRange,a)||(i.options.axis.minRange=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(37,`po-number`,26),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(38,`po-number`,27),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(39,`po-select`,28),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.labelType,a)||(i.options.axis.labelType=a),U_(a)}),vt(`p-change`,function(){return i.addOptions()}),Kg(),Qc(40,`po-number`,29),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(41,`po-number`,30),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(42,`po-number`,31),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(43,`po-number`,32),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(44,`po-number`,33),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.innerRadius,a)||(i.options.innerRadius=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(45,`po-number`,34),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.borderRadius,a)||(i.options.borderRadius=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(46,`po-input`,35),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.firstColumnName,a)||(i.options.firstColumnName=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(47,`po-input`,36),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(48,`po-input`,37),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.descriptionChart,a)||(i.options.descriptionChart=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg(),Qc(49,`po-input`,38),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),U_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Kg()(),Qc(50,`div`,3)(51,`po-checkbox-group`,39),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),U_(a)}),vt(`p-change`,function(){return i.changeHeaderOptions()}),Kg(),Qc(52,`po-checkbox-group`,40),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),U_(a)}),vt(`p-change`,function(){return i.changeAxisOptions()}),Kg(),Qc(53,`po-checkbox-group`,41),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),U_(a)}),vt(`p-change`,function(){return i.changeDataZoomOptions()}),Kg(),Qc(54,`po-checkbox-group`,42),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),U_(a)}),vt(`p-change`,function(){return i.changeFillPointsOptions()}),Kg(),Qc(55,`po-checkbox-group`,43),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),U_(a)}),vt(`p-change`,function(){return i.changeLegendOptions()}),Kg(),Qc(56,`po-checkbox-group`,44),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedRoseType,a)||(i.selectedRoseType=a),U_(a)}),vt(`p-change`,function(){return i.changeRoseTypeOptions()}),Kg(),Qc(57,`po-checkbox-group`,45),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),U_(a)}),vt(`p-change`,function(){return i.changeShowFromToLegend()}),Kg(),Qc(58,`po-checkbox-group`,46),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedPointer,a)||(i.selectedPointer=a),U_(a)}),vt(`p-change`,function(){return i.changePointer()}),Kg(),Qc(59,`po-checkbox-group`,47),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedStacked,a)||(i.selectedStacked=a),U_(a)}),vt(`p-change`,function(){return i.changeStacked()}),Kg(),Qc(60,`po-radio-group`,48),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),U_(a)}),vt(`p-change`,function(){return i.changeLegendVerticalPosition()}),Kg(),Qc(61,`po-radio-group`,49),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),U_(a)}),vt(`p-change`,function(){return i.changeLegendPosition()}),Kg(),Qc(62,`po-radio-group`,50),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedLegendType,a)||(i.selectedLegendType=a),U_(a)}),vt(`p-change`,function(){return i.changeLegendType()}),Kg(),Qc(63,`po-radio-group`,51),z0(),Kb(`ngModelChange`,function(a){return B_(s),Tk(i.selectedRendererOption,a)||(i.selectedRendererOption=a),U_(a)}),vt(`p-change`,function(){return i.changeRendererOption()}),Kg()(),vu(64,`po-divider`,52),Qc(65,`div`,3)(66,`po-button`,53),vt(`p-click`,function(){return i.restore()}),Kg()()()}d&2&&(wg(),Rb(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),wg(3),Rb(`p-value`,i.event),wg(3),Yb(`ngModel`,i.type),Rb(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),W0(),wg(),Yb(`ngModel`,i.height),W0(),wg(),Yb(`ngModel`,i.title),W0(),wg(),VO(i.isTypeGrid()?10:-1),wg(5),Yb(`ngModel`,i.isTypeGauge),W0(),wg(),Yb(`ngModel`,i.isTypeRadar),W0(),wg(),VO(i.isTypeGauge?17:-1),wg(),VO(i.isTypeRadar?18:-1),wg(2),Yb(`ngModel`,i.label),W0(),wg(),VO(i.isTypeGauge?-1:21),wg(),Yb(`ngModel`,i.serieType),Rb(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),W0(),wg(),Rb(`p-disabled`,i.disabledTooltip),Yb(`ngModel`,i.tooltip),W0(),wg(),Yb(`ngModel`,i.color),W0(),wg(),VO(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?25:-1),wg(),VO(i.isTypeGauge?26:-1),wg(),VO(i.isTypeGauge?27:-1),wg(),VO(i.isTypeRadar?-1:28),wg(3),gk(i.isTypeRadar?`po-md-3`:`po-md-4`),Rb(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),Yb(`ngModel`,i.categories),W0(),wg(),VO(i.isTypeRadar?32:-1),wg(4),Yb(`ngModel`,i.options.axis.minRange),W0(),wg(),Yb(`ngModel`,i.options.axis.maxRange),W0(),wg(),Yb(`ngModel`,i.options.axis.gridLines),W0(),wg(),Rb(`p-options`,i.labelTypeOptions),Yb(`ngModel`,i.options.axis.labelType),W0(),wg(),Yb(`ngModel`,i.options.axis.paddingBottom),W0(),wg(),Yb(`ngModel`,i.options.axis.paddingLeft),W0(),wg(),Yb(`ngModel`,i.options.axis.paddingRight),W0(),wg(),Yb(`ngModel`,i.options.axis.rotateLegend),W0(),wg(),Yb(`ngModel`,i.options.innerRadius),W0(),wg(),Yb(`ngModel`,i.options.borderRadius),W0(),wg(),Yb(`ngModel`,i.options.firstColumnName),W0(),wg(),Yb(`ngModel`,i.options.textCenterGraph),W0(),wg(),Yb(`ngModel`,i.options.descriptionChart),W0(),wg(),Yb(`ngModel`,i.options.subtitleGauge),W0(),wg(2),Rb(`p-columns`,2)(`p-options`,i.optionsHeader),Yb(`ngModel`,i.selectedValuesHeader),W0(),wg(),Rb(`p-columns`,2)(`p-options`,i.optionsAxis),Yb(`ngModel`,i.selectedValuesAxis),W0(),wg(),Rb(`p-columns`,2)(`p-options`,i.optionsDataZoom),Yb(`ngModel`,i.selectedValuesDataZoom),W0(),wg(),Rb(`p-columns`,1)(`p-options`,Vk(83,z,Lk(82,ze))),Yb(`ngModel`,i.selectedValuesFillPoints),W0(),wg(),Rb(`p-options`,Vk(86,z,Lk(85,He))),Yb(`ngModel`,i.selectedValuesLegend),W0(),wg(),Rb(`p-options`,Vk(89,z,Lk(88,Ze))),Yb(`ngModel`,i.selectedRoseType),W0(),wg(),Rb(`p-options`,Vk(92,z,Lk(91,Ye))),Yb(`ngModel`,i.selectedFromToLegend),W0(),wg(),Rb(`p-options`,Vk(95,z,Lk(94,je))),Yb(`ngModel`,i.selectedPointer),W0(),wg(),Rb(`p-options`,Vk(98,z,Lk(97,Ue))),Yb(`ngModel`,i.selectedStacked),W0(),wg(),Rb(`p-options`,i.optionsLegendVerticalPosition),Yb(`ngModel`,i.selectedLegendVerticalPosition),W0(),wg(),Rb(`p-options`,i.optionsLegendPosition),Yb(`ngModel`,i.selectedLegendPosition),W0(),wg(),Rb(`p-options`,i.optionsLegendType),Yb(`ngModel`,i.selectedLegendType),W0(),wg(),Rb(`p-options`,i.optionsRendererOption),Yb(`ngModel`,i.selectedRendererOption),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Cze,Nf,I4,j4,Goe,Zte,Koe,R4,Joe,bae],encapsulation:2,changeDetection:1})}return r$1})();var rt=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-chart-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Chart Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-widget>
  <po-chart
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
</po-widget>

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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-chart-labs`),Kg(),vu(23,`hr`)),d&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,rt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=p(sie);participationByCountryInWorldExportsType=Sa.Line;evolutionOfCoffeeAndSomeCompetitorsType=Sa.Column;coffeConsumingChartType=Sa.Donut;consumptionPerCapitaType=Sa.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:Sa.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:Sa.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:Sa.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:Sa.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:Sa.Column},{label:`2017`,data:[93,52,18],type:Sa.Column},{label:`2020`,data:[95,21,-17],type:Sa.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:Sa.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:S4.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:S4.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,`_blank`)}showMeTheDates(l){this.poAlert.alert({title:`Statistic`,message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[we$1([sie])],decls:34,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[1,`po-md-12`,`po-mt-2`],[`p-title`,`Participation by country in world exports - %`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[1,`po-lg-6`,`po-mt-2`],[`p-title`,`Top 5 coffee producing countries (in tons)`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[1,`po-md-6`,`po-mt-2`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,3,`p-options`,`p-categories`,`p-series`],[`p-height`,`201`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[`p-height`,`201`,1,`po-mt-2`,2,`display`,`block`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(Qc(0,`div`,0)(1,`div`,1)(2,`div`,0)(3,`po-widget`,2),vu(4,`po-chart`,3),Kg(),Qc(5,`po-widget`,2),vu(6,`po-chart`,4),Kg()()(),Qc(7,`div`,1)(8,`po-widget`,2),vu(9,`po-chart`,5),Kg()(),Qc(10,`div`,6)(11,`po-widget`,7)(12,`po-chart`,8),vt(`p-series-click`,function(m){return i.searchMore(m)}),Kg()(),Qc(13,`po-widget`,7)(14,`po-chart`,9),vt(`p-series-click`,function(m){return i.showMeTheDates(m)}),Kg()()(),Qc(15,`div`,0)(16,`po-widget`,10),vu(17,`po-chart`,11),Kg(),Qc(18,`div`,10)(19,`po-widget`,12)(20,`div`,13),Sk(21,`66 billion`),Kg(),Qc(22,`div`,14),Sk(23,`cups of coffee are consumed per year in U.S.`),Kg()(),Qc(24,`po-widget`,15)(25,`div`,13),Sk(26,`2nd most`),Kg(),Qc(27,`div`,14),Sk(28,`traded commodity in the world second to Oil.`),Kg()()()()(),Qc(29,`div`,0)(30,`po-container`,16)(31,`div`,17),Sk(32,`Top 10 Largest Coffee Chains in the World`),Kg(),vu(33,`po-table`,18),Kg()()),d&2&&(wg(4),Rb(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),wg(2),Rb(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),wg(3),Rb(`p-height`,834)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),wg(3),Rb(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),wg(2),Rb(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),wg(3),Rb(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),wg(16),Rb(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[Cze,Fc,q4,bae],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r});var Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-chart-coffee-ranking`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Chart - Coffee Ranking`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-widget class="po-md-12 po-mt-2">
        <po-chart
          p-title="Participation by country in world exports - %"
          [p-options]="options"
          [p-categories]="categories"
          [p-series]="participationByCountryInWorldExports"
          [p-type]="participationByCountryInWorldExportsType"
        >
        </po-chart>
      </po-widget>

      <po-widget class="po-md-12 po-mt-2">
        <po-chart
          p-title="Evolution of coffee and some competitors - %"
          [p-options]="optionsColumn"
          [p-categories]="categoriesColumn"
          [p-series]="evolutionOfCoffeeAndSomeCompetitors"
        >
        </po-chart>
      </po-widget>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-widget class="po-md-12 po-mt-2">
      <po-chart
        p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
        [p-height]="834"
        [p-categories]="consumptionPerCapitaItems"
        [p-series]="consumptionPerCapita"
        [p-type]="consumptionPerCapitaType"
        [p-options]="consumptionPerCapitaOptions"
      >
      </po-chart>
    </po-widget>
  </div>

  <div class="po-md-12">
    <po-widget class="po-lg-6 po-mt-2">
      <po-chart
        p-title="Top 5 coffee producing countries (in tons)"
        [p-options]="coffeeProductionOptions"
        [p-series]="coffeeProduction"
        (p-series-click)="searchMore($event)"
      >
      </po-chart>
    </po-widget>

    <po-widget class="po-lg-6 po-mt-2">
      <po-chart
        p-title="Top 15 Coffee Consuming Countries (in kg per capita)"
        [p-series]="coffeeConsumption"
        [p-options]="coffeeConsumptionOptions"
        [p-type]="coffeConsumingChartType"
        (p-series-click)="showMeTheDates($event)"
      >
      </po-chart>
    </po-widget>
  </div>

  <div class="po-row">
    <po-widget class="po-md-6 po-mt-2">
      <po-chart
        p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
        [p-options]="chartAreaOptions"
        [p-categories]="chartAreaCategories"
        [p-series]="chartAreaSeries"
      >
      </po-chart>
    </po-widget>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="201">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget class="po-mt-2" style="display: block" p-height="201">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-chart-coffee-ranking`),Kg(),vu(23,`hr`)),d&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,pt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,_e],encapsulation:2,changeDetection:1})}return r})();var we=(()=>{class r{typeBar=Sa.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:8,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Average Temperature by Region`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(Qc(0,`po-container`)(1,`div`,0),Sk(2,`Energy and Climate Analysis`),Kg(),Qc(3,`div`,1)(4,`po-widget`,2),vu(5,`po-chart`,3),Kg(),Qc(6,`po-widget`,2),vu(7,`po-chart`,4),Kg()()()),d&2&&(wg(5),Rb(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),wg(2),Rb(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[Cze,Fc,bae],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r});var Te=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-chart-stacked`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Chart - Stacked`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-container>
  <div class="po-font-title po-mb-3">Energy and Climate Analysis</div>
  <div class="po-row">
    <po-widget class="po-lg-6">
      <po-chart
        p-title="Average Temperature by Region"
        [p-height]="500"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="seriesColumn"
      >
      </po-chart>
    </po-widget>

    <po-widget class="po-lg-6">
      <po-chart
        p-title="Energy Consumption by Region"
        [p-type]="typeBar"
        [p-height]="500"
        [p-options]="optionsBar"
        [p-categories]="categoriesBar"
        [p-series]="seriesBar"
      >
      </po-chart>
    </po-widget>
  </div>
</po-container>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-chart-stacked`),Kg(),vu(23,`hr`)),d&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ct,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,we],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=Sa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:10,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(Qc(0,`po-container`)(1,`div`,0),Sk(2,`Sales Performance`),Kg(),Qc(3,`div`,1)(4,`div`,2)(5,`po-widget`),vu(6,`po-chart`,3),Kg()(),Qc(7,`div`,2)(8,`po-widget`),vu(9,`po-chart`,4),Kg()()()()),d&2&&(wg(6),Rb(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),wg(3),Rb(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[Cze,Fc,bae],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r});var Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-chart-summary`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Chart - Summary`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-lg-6">
      <po-widget>
        <po-chart
          p-title="Employee turnover rate"
          p-value="25"
          [p-type]="type"
          [p-options]="optionsSingle"
          [p-series]="turnover"
        ></po-chart>
      </po-widget>
    </div>
    <div class="po-lg-6">
      <po-widget>
        <po-chart
          p-title="Sales performance"
          [p-type]="type"
          [p-options]="optionsRange"
          [p-value-gauge-multiple]="50"
          [p-series]="salesRanges"
        ></po-chart>
      </po-widget>
    </div>
  </div>
</po-container>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-chart-summary`),Kg(),vu(23,`hr`)),d&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ht,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Le],encapsulation:2,changeDetection:1})}return r})();var ke=(()=>{class r{participationByCountryInWorldExportsType=Sa.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:3,vars:5,consts:[[1,`po-row`],[1,`po-md-12`],[`p-title`,`Participation by country in world exports - %`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(Qc(0,`div`,0)(1,`po-widget`,1),vu(2,`po-chart`,2),Kg()()),d&2&&(wg(2),Rb(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return r})();var xt=r=>({"docs-sample-code-tabs":r});var De=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-chart-world-exports`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Chart - World Exports`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget class="po-md-12">
    <po-chart
      p-title="Participation by country in world exports - %"
      [p-options]="options"
      [p-categories]="categories"
      [p-series]="participationByCountryInWorldExports"
      [p-type]="participationByCountryInWorldExportsType"
      [p-data-label]="dataLabel"
    >
    </po-chart>
  </po-widget>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-chart-world-exports`),Kg(),vu(23,`hr`)),d&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,xt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ke],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=Sa.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:5,vars:6,consts:[[1,`po-row`],[1,`po-md-6`],[`p-title`,`Technology Skill Assessment`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(Qc(0,`div`,0)(1,`po-widget`,1),vu(2,`po-chart`,2),Kg(),Qc(3,`po-widget`,1),vu(4,`po-chart`,3),Kg()()),d&2&&(wg(2),Rb(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),wg(2),Rb(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-chart-technology-skill`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Chart - Radar`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget class="po-md-6">
    <po-chart
      p-title="Technology Skill Assessment"
      [p-categories]="radarConfig"
      [p-type]="type"
      [p-series]="series"
    >
    </po-chart>
  </po-widget>

  <po-widget class="po-md-6">
    <po-chart
      p-title="Genre Popularity"
      p-type="radar"
      [p-categories]="radarConfigMovies"
      [p-series]="seriesMovies"
      [p-options]="radarOptions"
    >
    </po-chart>
  </po-widget>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-chart-technology-skill`),Kg(),vu(23,`hr`)),d&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ft,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2842,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-chart-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-categories`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-custom-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`prop-p-data-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`id`,`prop-p-series`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[`id`,`event-p-series-click`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-series-hover`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[`id`,`prop-p-value-gauge-multiple`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-axis-options-grid-lines`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-label-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`id`,`interface-po-chart-axis-options-max-range`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-min-range`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-padding-bottom`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-padding-left`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-padding-right`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-rotate-legend`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-show-axis-details`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-chart-axis-options-show-xaxis`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-show-yaxis`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-header-options-hide-expand`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options-hide-export-csv`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options-hide-export-image`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options-hide-table-details`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-indicator-options-color`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options-max`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options-min`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options-name`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-literals-category`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-download-csv`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-export-csv`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-export-jpg`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-export-png`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-item`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-serie`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-value`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-options-area-style`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-axis`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`id`,`interface-po-chart-options-border-radius`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-bottom-data-zoom`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-data-zoom`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-description-chart`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-fill-points`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-first-column-name`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-header`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`id`,`interface-po-chart-options-inner-radius`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-legend`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-legend-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`id`,`interface-po-chart-options-legend-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`id`,`interface-po-chart-options-legend-vertical-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`interface-po-chart-options-pointer`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-renderer-option`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`id`,`interface-po-chart-options-rose-type`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-show-container-gauge`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-show-from-to-legend`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-stacked`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-subtitle-gauge`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-text-center-graph`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-radar-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-radar-options-indicator`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`id`,`interface-po-chart-radar-options-shape`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[`id`,`interface-po-chart-radar-options-split-area`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-data-label`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-data-label-fixed`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-serie-area-style`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`id`,`interface-po-chart-serie-data`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`id`,`interface-po-chart-serie-from`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-label`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-stack-group-name`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-to`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-tooltip`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`id`,`interface-po-chart-serie-type`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-label-format`,1,`docs-api-class-name`],[`id`,`enum-po-chart-label-format-number`,1,`docs-api-properties-row`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`id`,`enum-po-chart-label-format-currency`,1,`docs-api-properties-row`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`],[`id`,`enum-po-chart-type`,1,`docs-api-class-name`],[`id`,`enum-po-chart-type-area`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-donut`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-pie`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-line`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-column`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-bar`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-gauge`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-radar`,1,`docs-api-properties-row`]],template:function(d,i){d&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoChartModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-chart`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoChartComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`O `),Qc(18,`code`),Sk(19,`po-chart`),Kg(),Sk(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),Kg(),Qc(21,`p`),Sk(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),Kg(),Qc(23,`p`),Sk(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),Kg(),Qc(25,`p`),Sk(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Qc(27,`em`),Sk(28,`mouse`),Kg(),Sk(29,` sobre o elemento.`),Kg(),Qc(30,`h4`),Sk(31,`Guia de uso para Gráficos`),Kg(),Qc(32,`blockquote`)(33,`p`),Sk(34,`Veja nosso `),Qc(35,`a`,6),Sk(36,`guia de uso para gráficos`),Kg(),Sk(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),Kg()(),Qc(38,`h4`),Sk(39,`Tokens customizáveis`),Kg(),Qc(40,`p`),Sk(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(42,`blockquote`)(43,`p`),Sk(44,`Para maiores informações, acesse o guia `),Qc(45,`a`,7),Sk(46,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(47,`.`),Kg()(),Qc(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),Sk(52,`Propriedade`),Kg(),Qc(53,`th`),Sk(54,`Descrição`),Kg(),Qc(55,`th`),Sk(56,`Valor Padrão`),Kg()()(),Qc(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),Sk(61,`Chart (po-chart)`),Kg()(),vu(62,`td`)(63,`td`),Kg(),Qc(64,`tr`)(65,`td`)(66,`code`),Sk(67,`--background-color-grid`),Kg()(),Qc(68,`td`),Sk(69,`Cor de background dos gráficos`),Kg(),Qc(70,`td`)(71,`code`),Sk(72,`var(--color-neutral-light-00)`),Kg()()(),Qc(73,`tr`)(74,`td`)(75,`code`),Sk(76,`--color-description-chart`),Kg()(),Qc(77,`td`),Sk(78,`Cor da descrição dos gráficos`),Kg(),Qc(79,`td`)(80,`code`),Sk(81,`var(--color-neutral-dark-70)`),Kg()()(),Qc(82,`tr`)(83,`td`)(84,`code`),Sk(85,`--font-family-description-chart`),Kg()(),Qc(86,`td`),Sk(87,`Fonte da descrição dos gráficos`),Kg(),Qc(88,`td`)(89,`code`),Sk(90,`var(--font-family-theme)`),Kg()()(),Qc(91,`tr`)(92,`td`)(93,`code`),Sk(94,`--font-size-description-chart`),Kg()(),Qc(95,`td`),Sk(96,`Tamanho da fonte da descrição dos gráficos`),Kg(),Qc(97,`td`)(98,`code`),Sk(99,`var(--font-size-sm)`),Kg()()(),Qc(100,`tr`)(101,`td`)(102,`code`),Sk(103,`--font-weight-description-chart`),Kg()(),Qc(104,`td`),Sk(105,`Peso da fonte da descrição dos gráficos`),Kg(),Qc(106,`td`)(107,`code`),Sk(108,`var(--font-weight-normal)`),Kg()()(),Qc(109,`tr`)(110,`td`)(111,`strong`),Sk(112,`Header (po-chart .po-chart-header )`),Kg()(),vu(113,`td`)(114,`td`),Kg(),Qc(115,`tr`)(116,`td`)(117,`code`),Sk(118,`--background-color`),Kg()(),Qc(119,`td`),Sk(120,`Cor de background do cabeçalho`),Kg(),Qc(121,`td`)(122,`code`),Sk(123,`var(--color-neutral-light-00)`),Kg()()(),Qc(124,`tr`)(125,`td`)(126,`code`),Sk(127,`--color`),Kg()(),Qc(128,`td`),Sk(129,`Cor da fonte do cabeçalho`),Kg(),Qc(130,`td`)(131,`code`),Sk(132,`var(--color-neutral-dark-70)`),Kg()()(),Qc(133,`tr`)(134,`td`)(135,`code`),Sk(136,`--font-family`),Kg()(),Qc(137,`td`),Sk(138,`Família tipográfica usada`),Kg(),Qc(139,`td`)(140,`code`),Sk(141,`var(--font-family-theme)`),Kg()()(),Qc(142,`tr`)(143,`td`)(144,`code`),Sk(145,`--font-size-title`),Kg()(),Qc(146,`td`),Sk(147,`Tamanho da fonte`),Kg(),Qc(148,`td`)(149,`code`),Sk(150,`var(--font-size-default)`),Kg()()(),Qc(151,`tr`)(152,`td`)(153,`code`),Sk(154,`--font-size-icons`),Kg()(),Qc(155,`td`),Sk(156,`Tamanho dos ícones`),Kg(),Qc(157,`td`)(158,`code`),Sk(159,`var(--font-size-md)`),Kg()()(),Qc(160,`tr`)(161,`td`)(162,`code`),Sk(163,`--font-weight`),Kg()(),Qc(164,`td`),Sk(165,`Peso da fonte`),Kg(),Qc(166,`td`)(167,`code`),Sk(168,`var(--font-weight-bold)`),Kg()()(),Qc(169,`tr`)(170,`td`)(171,`strong`),Sk(172,`Chart (po-chart .po-chart)`),Kg()(),vu(173,`td`)(174,`td`),Kg(),Qc(175,`tr`)(176,`td`)(177,`code`),Sk(178,`--color-grid`),Kg()(),Qc(179,`td`),Sk(180,`Cor da linha dos gráficos que possuem eixo`),Kg(),Qc(181,`td`)(182,`code`),Sk(183,`var(--color-neutral-light-20)`),Kg()()(),Qc(184,`tr`)(185,`td`)(186,`code`),Sk(187,`--font-family-grid`),Kg()(),Qc(188,`td`),Sk(189,`Família tipográfica usada nos valores dos eixos`),Kg(),Qc(190,`td`)(191,`code`),Sk(192,`var(--font-family-theme)`),Kg()()(),Qc(193,`tr`)(194,`td`)(195,`code`),Sk(196,`--font-size-grid`),Kg()(),Qc(197,`td`),Sk(198,`Tamanho da fonte usada nos valores dos eixos`),Kg(),Qc(199,`td`)(200,`code`),Sk(201,`var(--font-size-xs)`),Kg()()(),Qc(202,`tr`)(203,`td`)(204,`code`),Sk(205,`--font-weight-grid`),Kg()(),Qc(206,`td`),Sk(207,`Peso da fonte usada nos valores dos eixos`),Kg(),Qc(208,`td`)(209,`code`),Sk(210,`var(--font-weight-normal)`),Kg()()(),Qc(211,`tr`)(212,`td`)(213,`code`),Sk(214,`--color-legend`),Kg()(),Qc(215,`td`),Sk(216,`Cor da fonte da legenda`),Kg(),Qc(217,`td`)(218,`code`),Sk(219,`var(--color-neutral-dark-70)`),Kg()()(),Qc(220,`tr`)(221,`td`)(222,`code`),Sk(223,`--color-legend-scroll-icon-active`),Kg()(),Qc(224,`td`),Sk(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),Qc(226,`code`),Sk(227,`scroll`),Kg()(),Qc(228,`td`)(229,`code`),Sk(230,`var(--color-action-default)`),Kg()()(),Qc(231,`tr`)(232,`td`)(233,`code`),Sk(234,`--color-legend-scroll-icon-inactive`),Kg()(),Qc(235,`td`),Sk(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),Qc(237,`code`),Sk(238,`scroll`),Kg()(),Qc(239,`td`)(240,`code`),Sk(241,`var(--color-action-disabled)`),Kg()()(),Qc(242,`tr`)(243,`td`)(244,`code`),Sk(245,`--border-radius-bar`),Kg()(),Qc(246,`td`),Sk(247,`Tamanho da borda nos graficos `),Qc(248,`code`),Sk(249,`Bar`),Kg(),Sk(250,` e `),Qc(251,`code`),Sk(252,`Column`),Kg()(),Qc(253,`td`)(254,`code`),Sk(255,`var(--border-radius-none)`),Kg()()(),Qc(256,`tr`)(257,`td`)(258,`code`),Sk(259,`--border-color`),Kg()(),Qc(260,`td`),Sk(261,`Cor da borda do gráfico nos Gráficos `),Qc(262,`code`),Sk(263,`Donut`),Kg(),Sk(264,` e `),Qc(265,`code`),Sk(266,`Pie`),Kg()(),Qc(267,`td`)(268,`code`),Sk(269,`var(--color-neutral-light-00)`),Kg()()(),Qc(270,`tr`)(271,`td`)(272,`code`),Sk(273,`--color-hightlight-value`),Kg()(),Qc(274,`td`),Sk(275,`Cor do valor de destaque nos Gráficos `),Qc(276,`code`),Sk(277,`Donut`),Kg(),Sk(278,` e `),Qc(279,`code`),Sk(280,`Gauge`),Kg()(),Qc(281,`td`)(282,`code`),Sk(283,`var(--color-neutral-dark-70)`),Kg()()(),Qc(284,`tr`)(285,`td`)(286,`code`),Sk(287,`--font-family-hightlight-value`),Kg()(),Qc(288,`td`),Sk(289,`Família tipográfica do valor de destaque nos Gráficos `),Qc(290,`code`),Sk(291,`Donut`),Kg(),Sk(292,` e `),Qc(293,`code`),Sk(294,`Gauge`),Kg()(),Qc(295,`td`)(296,`code`),Sk(297,`var(--font-family-theme)`),Kg()()(),Qc(298,`tr`)(299,`td`)(300,`code`),Sk(301,`--font-weight-hightlight-value`),Kg()(),Qc(302,`td`),Sk(303,`Peso da fonte do valor de destaque nos Gráficos `),Qc(304,`code`),Sk(305,`Donut`),Kg(),Sk(306,` e `),Qc(307,`code`),Sk(308,`Gauge`),Kg()(),Qc(309,`td`)(310,`code`),Sk(311,`var(--font-weight-bold)`),Kg()()(),Qc(312,`tr`)(313,`td`)(314,`code`),Sk(315,`--color-base-gauge`),Kg()(),Qc(316,`td`),Sk(317,`Cor da base do gráfico `),Qc(318,`code`),Sk(319,`Gauge`),Kg()(),Qc(320,`td`)(321,`code`),Sk(322,`var(--color-neutral-light-20)`),Kg()()(),Qc(323,`tr`)(324,`td`)(325,`code`),Sk(326,`--color-gauge-pointer-color`),Kg()(),Qc(327,`td`),Sk(328,`Cor do ponteiro do gráfico `),Qc(329,`code`),Sk(330,`Gauge`),Kg()(),Qc(331,`td`)(332,`code`),Sk(333,`var(--color-neutral-dark-70)`),Kg()()(),Qc(334,`tr`)(335,`td`)(336,`code`),Sk(337,`--color-chart-line-point-fill`),Kg()(),Qc(338,`td`),Sk(339,`Cor de dentro do círculo dos gráficos `),Qc(340,`code`),Sk(341,`Line`),Kg(),Sk(342,` e `),Qc(343,`code`),Sk(344,`Area`),Kg()(),Qc(345,`td`)(346,`code`),Sk(347,`var(--color-neutral-light-00)`),Kg()()(),Qc(348,`tr`)(349,`td`)(350,`code`),Sk(351,`--border-color-radar`),Kg()(),Qc(352,`td`),Sk(353,`Cor do eixo da grid do gráfico `),Qc(354,`code`),Sk(355,`Radar`),Kg()(),Qc(356,`td`)(357,`code`),Sk(358,`var(--color-neutral-light-30)`),Kg()()(),Qc(359,`tr`)(360,`td`)(361,`code`),Sk(362,`--color-background-zebra`),Kg()(),Qc(363,`td`),Sk(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),Qc(365,`code`),Sk(366,`Radar`),Kg()(),Qc(367,`td`)(368,`code`),Sk(369,`var(--color-neutral-light-10)`),Kg()()(),Qc(370,`tr`)(371,`td`)(372,`code`),Sk(373,`--color-background-line`),Kg()(),Qc(374,`td`),Sk(375,`Cor das áreas entre as faixas zebradas da grade do `),Qc(376,`code`),Sk(377,`Radar`),Kg()(),Qc(378,`td`)(379,`code`),Sk(380,`none`),Kg()()(),Qc(381,`tr`)(382,`td`)(383,`strong`),Sk(384,`Wrapper (.po-chart-container-gauge)`),Kg()(),vu(385,`td`)(386,`td`),Kg(),Qc(387,`tr`)(388,`td`)(389,`code`),Sk(390,`--background-color-container-gauge`),Kg()(),Qc(391,`td`),Sk(392,`Cor de background do container do gauge`),Kg(),Qc(393,`td`)(394,`code`),Sk(395,`var(--color-neutral-light-00)`),Kg()()()()()(),Qc(396,`div`,8)(397,`h4`,9),Sk(398,`Seletor`),Kg(),Qc(399,`pre`,10),Sk(400,`<po-chart
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
`),Kg()(),Qc(401,`h4`,11),Sk(402,`Propriedades`),Kg(),Qc(403,`table`,12)(404,`tr`,13)(405,`th`,14),Sk(406,`Nome`),Kg(),Qc(407,`th`,14),Sk(408,`Tipo`),Kg(),Qc(409,`th`,14),Sk(410,`Padrão`),Kg(),Qc(411,`th`,14),Sk(412,`Descrição`),Kg()(),Qc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),Sk(417,` p-categories`),vu(418,`br`),Kg()()(),Qc(419,`td`,19)(420,`code`,20),Sk(421,`Array<string> `),Kg(),Qc(422,`code`,21),Sk(423,` PoChartRadarOptions`),Kg()(),Qc(424,`td`,22),Sk(425,`-`),Kg(),Qc(426,`td`,23)(427,`em`)(428,`strong`),Sk(429,`(opcional)`),Kg()(),Qc(430,`p`),Sk(431,`Define os valores utilizados na construção das categorias do gráfico.`),Kg(),Qc(432,`p`),Sk(433,`Para gráficos dos tipos `),Qc(434,`em`),Sk(435,`bar`),Kg(),Sk(436,`, `),Qc(437,`em`),Sk(438,`area`),Kg(),Sk(439,`, `),Qc(440,`em`),Sk(441,`column`),Kg(),Sk(442,` e `),Qc(443,`em`),Sk(444,`line`),Kg(),Sk(445,`, representa os nomes das categorias exibidas no eixo.`),Kg(),Qc(446,`p`),Sk(447,`Para gráficos do tipo `),Qc(448,`em`),Sk(449,`radar`),Kg(),Sk(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Qc(451,`code`),Sk(452,`Radar`),Kg(),Sk(453,`.`),Kg(),Qc(454,`blockquote`)(455,`p`),Sk(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),Kg()(),Qc(457,`blockquote`)(458,`p`),Sk(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),Kg()()()(),Qc(460,`tr`,24)(461,`td`,16)(462,`div`,17)(463,`span`,18),Sk(464,` p-custom-actions`),vu(465,`br`),Kg()()(),Qc(466,`td`,19)(467,`code`,25),Sk(468,`Array<PoPopupAction>`),Kg()(),Qc(469,`td`,22),Sk(470,`-`),Kg(),Qc(471,`td`,23)(472,`em`)(473,`strong`),Sk(474,`(opcional)`),Kg()(),Qc(475,`p`),Sk(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),Kg()()(),Qc(477,`tr`,26)(478,`td`,16)(479,`div`,17)(480,`span`,18),Sk(481,` p-data-label`),vu(482,`br`),Kg()()(),Qc(483,`td`,19)(484,`code`,27),Sk(485,`PoChartDataLabel`),Kg()(),Qc(486,`td`,22),Sk(487,`-`),Kg(),Qc(488,`td`,23)(489,`em`)(490,`strong`),Sk(491,`(opcional)`),Kg()(),Qc(492,`p`),Sk(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),Kg(),Qc(494,`p`),Sk(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),Kg(),Qc(496,`ul`)(497,`li`),Sk(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),Kg(),Qc(499,`li`),Sk(500,`O `),Qc(501,`em`),Sk(502,`tooltip`),Kg(),Sk(503,` não será exibido.`),Kg(),Qc(504,`li`),Sk(505,`Os marcadores (`),Qc(506,`em`),Sk(507,`bullets`),Kg(),Sk(508,`) terão seu estilo ajustado.`),Kg(),Qc(509,`li`),Sk(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),Kg()(),Qc(511,`blockquote`)(512,`p`),Sk(513,`Disponível para gráficos do tipo `),Qc(514,`code`),Sk(515,`line`),Kg(),Sk(516,`, `),Qc(517,`code`),Sk(518,`area`),Kg(),Sk(519,`, `),Qc(520,`code`),Sk(521,`column`),Kg(),Sk(522,`, `),Qc(523,`code`),Sk(524,`bar`),Kg(),Sk(525,` e `),Qc(526,`code`),Sk(527,`radar`),Kg(),Sk(528,`.`),Kg()(),Qc(529,`h4`),Sk(530,`Exemplo de utilização:`),Kg(),Qc(531,`pre`)(532,`code`,28),Sk(533,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),Kg()()()(),Qc(534,`tr`,29)(535,`td`,16)(536,`div`,17)(537,`span`,18),Sk(538,` p-height`),vu(539,`br`),Kg()()(),Qc(540,`td`,19)(541,`code`,30),Sk(542,`number`),Kg()(),Qc(543,`td`,22)(544,`p`)(545,`code`),Sk(546,`400`),Kg()()(),Qc(547,`td`,23)(548,`em`)(549,`strong`),Sk(550,`(opcional)`),Kg()(),Qc(551,`p`),Sk(552,`Define a altura do gráfico em px.`),Kg(),Qc(553,`blockquote`)(554,`p`),Sk(555,`No caso do tipo `),Qc(556,`code`),Sk(557,`Gauge`),Kg(),Sk(558,`, o valor padrão é `),Qc(559,`code`),Sk(560,`300`),Kg(),Sk(561,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),Kg()()()(),Qc(562,`tr`,31)(563,`td`,16)(564,`div`,17)(565,`span`,18),Sk(566,` p-literals`),vu(567,`br`),Kg()()(),Qc(568,`td`,19)(569,`code`,32),Sk(570,`PoChartLiterals`),Kg()(),Qc(571,`td`,22),Sk(572,`-`),Kg(),Qc(573,`td`,23)(574,`em`)(575,`strong`),Sk(576,`(opcional)`),Kg()(),Qc(577,`p`),Sk(578,`Objeto com as literais usadas no `),Qc(579,`code`),Sk(580,`po-chart`),Kg(),Sk(581,`.`),Kg(),Qc(582,`p`),Sk(583,`Para utilizar basta passar a literal que deseja customizar:`),Kg(),Qc(584,`pre`)(585,`code`),Sk(586,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),Kg()(),Qc(587,`p`),Sk(588,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Kg(),Qc(589,`pre`)(590,`code`),Sk(591,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),Kg()(),Qc(592,`blockquote`)(593,`p`),Sk(594,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(595,`a`,33)(596,`code`),Sk(597,`PoI18nService`),Kg()(),Sk(598,` ou do browser.`),Kg()()()(),Qc(599,`tr`,34)(600,`td`,16)(601,`div`,17)(602,`span`,18),Sk(603,` p-options`),vu(604,`br`),Kg()()(),Qc(605,`td`,19)(606,`code`,35),Sk(607,`PoChartOptions`),Kg()(),Qc(608,`td`,22),Sk(609,`-`),Kg(),Qc(610,`td`,23)(611,`em`)(612,`strong`),Sk(613,`(opcional)`),Kg()(),Qc(614,`p`),Sk(615,`Objeto com as configurações usadas no `),Qc(616,`code`),Sk(617,`po-chart`),Kg(),Sk(618,`.`),Kg(),Qc(619,`p`),Sk(620,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Qc(621,`em`),Sk(622,`axis`),Kg(),Sk(623,`) para os gráficos dos tipos `),Qc(624,`code`),Sk(625,`area`),Kg(),Sk(626,`, `),Qc(627,`code`),Sk(628,`line`),Kg(),Sk(629,`, `),Qc(630,`code`),Sk(631,`column`),Kg(),Sk(632,`, `),Qc(633,`code`),Sk(634,`bar`),Kg(),Sk(635,` e `),Qc(636,`code`),Sk(637,`radar`),Kg(),Sk(638,` da seguinte forma:`),Kg(),Qc(639,`pre`)(640,`code`),Sk(641,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),Kg()()()(),Qc(642,`tr`,36)(643,`td`,16)(644,`div`,17)(645,`span`,18),Sk(646,` p-series`),vu(647,`br`),Kg()()(),Qc(648,`td`,19)(649,`code`,37),Sk(650,`Array<PoChartSerie>`),Kg()(),Qc(651,`td`,22),Sk(652,`-`),Kg(),Qc(653,`td`,23)(654,`p`),Sk(655,`Define os elementos do gráfico que serão criados dinamicamente.`),Kg()()(),Qc(656,`tr`,38)(657,`td`,16)(658,`div`,39)(659,`span`,40),Sk(660,` (p-series-click)`),vu(661,`br`),Kg()()(),Qc(662,`td`,19)(663,`code`,41),Sk(664,`EventEmitter`),Kg()(),Qc(665,`td`,22),Sk(666,`-`),Kg(),Qc(667,`td`,23)(668,`em`)(669,`strong`),Sk(670,`(opcional)`),Kg()(),Qc(671,`p`),Sk(672,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),Kg(),Qc(673,`p`),Sk(674,`O evento emitirá o seguinte parâmetro:`),Kg(),Qc(675,`ul`)(676,`li`)(677,`em`),Sk(678,`donut`),Kg(),Sk(679,` e `),Qc(680,`em`),Sk(681,`pie`),Kg(),Sk(682,`: um objeto contendo a categoria e valor da série.`),Kg(),Qc(683,`li`)(684,`em`),Sk(685,`radar`),Kg(),Sk(686,`: um objeto contendo o nome da série e os valores.`),Kg(),Qc(687,`li`)(688,`em`),Sk(689,`area`),Kg(),Sk(690,`, `),Qc(691,`em`),Sk(692,`line`),Kg(),Sk(693,`, `),Qc(694,`em`),Sk(695,`column`),Kg(),Sk(696,` e `),Qc(697,`em`),Sk(698,`bar`),Kg(),Sk(699,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),Kg()()()(),Qc(700,`tr`,42)(701,`td`,16)(702,`div`,39)(703,`span`,40),Sk(704,` (p-series-hover)`),vu(705,`br`),Kg()()(),Qc(706,`td`,19)(707,`code`,41),Sk(708,`EventEmitter`),Kg()(),Qc(709,`td`,22),Sk(710,`-`),Kg(),Qc(711,`td`,23)(712,`em`)(713,`strong`),Sk(714,`(opcional)`),Kg()(),Qc(715,`p`),Sk(716,`Evento executado quando o usuário passar o `),Qc(717,`em`),Sk(718,`mouse`),Kg(),Sk(719,` sobre um elemento do gráfico.`),Kg(),Qc(720,`p`),Sk(721,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),Kg(),Qc(722,`ul`)(723,`li`)(724,`em`),Sk(725,`donut`),Kg(),Sk(726,` e `),Qc(727,`em`),Sk(728,`pie`),Kg(),Sk(729,`: um objeto contendo a categoria e valor da série.`),Kg(),Qc(730,`li`)(731,`em`),Sk(732,`radar`),Kg(),Sk(733,`: um objeto contendo o nome da série e os valores.`),Kg(),Qc(734,`li`)(735,`em`),Sk(736,`area`),Kg(),Sk(737,`, `),Qc(738,`em`),Sk(739,`line`),Kg(),Sk(740,`, `),Qc(741,`em`),Sk(742,`column`),Kg(),Sk(743,` e `),Qc(744,`em`),Sk(745,`bar`),Kg(),Sk(746,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),Kg()()()(),Qc(747,`tr`,43)(748,`td`,16)(749,`div`,17)(750,`span`,18),Sk(751,` p-title`),vu(752,`br`),Kg()()(),Qc(753,`td`,19)(754,`code`,44),Sk(755,`string`),Kg()(),Qc(756,`td`,22),Sk(757,`-`),Kg(),Qc(758,`td`,23)(759,`em`)(760,`strong`),Sk(761,`(opcional)`),Kg()(),Qc(762,`p`),Sk(763,`Define o título do gráfico.`),Kg()()(),Qc(764,`tr`,45)(765,`td`,16)(766,`div`,17)(767,`span`,18),Sk(768,` p-type`),vu(769,`br`),Kg()()(),Qc(770,`td`,19)(771,`code`,46),Sk(772,`PoChartType`),Kg()(),Qc(773,`td`,22),Sk(774,`-`),Kg(),Qc(775,`td`,23)(776,`em`)(777,`strong`),Sk(778,`(opcional)`),Kg()(),Qc(779,`p`),Sk(780,`Define o tipo de gráfico.`),Kg(),Qc(781,`p`),Sk(782,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),Qc(783,`code`),Sk(784,`type`),Kg(),Sk(785,` conforme a interface `),Qc(786,`code`),Sk(787,`PoChartSerie`),Kg(),Sk(788,`.`),Kg(),Qc(789,`blockquote`)(790,`p`),Sk(791,`Note que, se houver declaração de tipo de gráfico tanto em `),Qc(792,`code`),Sk(793,`p-type`),Kg(),Sk(794,` quanto em `),Qc(795,`code`),Sk(796,`PochartSerie.type`),Kg(),Sk(797,`, o valor `),Qc(798,`code`),Sk(799,`{ type }`),Kg(),Sk(800,` da primeira série anulará o valor definido em `),Qc(801,`code`),Sk(802,`p-type`),Kg(),Sk(803,`.`),Kg()(),Qc(804,`p`),Sk(805,`Se não passado valor, o padrão será relativo à primeira série passada em `),Qc(806,`code`),Sk(807,`p-series`),Kg(),Sk(808,`:`),Kg(),Qc(809,`ul`)(810,`li`),Sk(811,`Se `),Qc(812,`code`),Sk(813,`p-series = [{ data: [1,2,3] }]`),Kg(),Sk(814,`: será `),Qc(815,`code`),Sk(816,`PoChartType.Column`),Kg(),Sk(817,`.`),Kg(),Qc(818,`li`),Sk(819,`Se `),Qc(820,`code`),Sk(821,`p-series = [{ data: 1 }]`),Kg(),Sk(822,`: será `),Qc(823,`code`),Sk(824,`PoChartType.Pie`),Kg(),Sk(825,`.`),Kg()(),Qc(826,`blockquote`)(827,`p`),Sk(828,`Veja os valores válidos no `),Qc(829,`em`),Sk(830,`enum`),Kg(),Qc(831,`code`),Sk(832,`PoChartType`),Kg(),Sk(833,`.`),Kg()()()(),Qc(834,`tr`,47)(835,`td`,16)(836,`div`,17)(837,`span`,18),Sk(838,` p-value-gauge-multiple`),vu(839,`br`),Kg()()(),Qc(840,`td`,19)(841,`code`,30),Sk(842,`number`),Kg()(),Qc(843,`td`,22),Sk(844,`-`),Kg(),Qc(845,`td`,23)(846,`em`)(847,`strong`),Sk(848,`(opcional)`),Kg()(),Qc(849,`p`),Sk(850,`Define o valor do gráfico do tipo `),Qc(851,`code`),Sk(852,`Gauge`),Kg(),Sk(853,` quando utliza as propriedades `),Qc(854,`code`),Sk(855,`From`),Kg(),Qc(856,`code`),Sk(857,`To`),Kg(),Sk(858,`.`),Kg()()()(),Qc(859,`h3`),Sk(860,`Interfaces`),Kg(),Qc(861,`h4`,48)(862,`code`,5),Sk(863,`PoChartAxisOptions`),Kg()(),Qc(864,`div`,2)(865,`p`)(866,`em`),Sk(867,`Interface`),Kg(),Sk(868,` que define os eixos do grid.`),Kg()(),Qc(869,`h4`,11),Sk(870,`Propriedades`),Kg(),Qc(871,`table`,12)(872,`tr`,13)(873,`th`,14),Sk(874,`Nome`),Kg(),Qc(875,`th`,14),Sk(876,`Tipo`),Kg(),Qc(877,`th`,14),Sk(878,`Descrição`),Kg()(),Qc(879,`tr`,49)(880,`td`,16)(881,`div`,17)(882,`span`,18),Sk(883,` gridLines`),vu(884,`br`),Kg()()(),Qc(885,`td`,19)(886,`code`,30),Sk(887,`number`),Kg()(),Qc(888,`td`,23)(889,`em`)(890,`strong`),Sk(891,`(opcional)`),Kg()(),Qc(892,`p`),Sk(893,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Qc(894,`code`),Sk(895,`Area`),Kg(),Sk(896,`, `),Qc(897,`code`),Sk(898,`Line`),Kg(),Sk(899,` e `),Qc(900,`code`),Sk(901,`Column`),Kg(),Sk(902,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Qc(903,`code`),Sk(904,`Bar`),Kg(),Sk(905,`, tratará as linhas verticais (eixo Y).`),Kg(),Qc(906,`p`),Sk(907,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),Kg(),Qc(908,`ul`)(909,`li`),Sk(910,`Quantidade padrão de linhas: '5';`),Kg(),Qc(911,`li`),Sk(912,`Quantidade mínima permitida: '2';`),Kg()()()(),Qc(913,`tr`,50)(914,`td`,16)(915,`div`,17)(916,`span`,18),Sk(917,` labelType`),vu(918,`br`),Kg()()(),Qc(919,`td`,19)(920,`code`,51),Sk(921,`PoChartLabelFormat`),Kg()(),Qc(922,`td`,23)(923,`em`)(924,`strong`),Sk(925,`(opcional)`),Kg()(),Qc(926,`p`),Sk(927,`Define o tipo do label e a formatação exibida no eixo de valor.`),Kg()()(),Qc(928,`tr`,52)(929,`td`,16)(930,`div`,17)(931,`span`,18),Sk(932,` maxRange`),vu(933,`br`),Kg()()(),Qc(934,`td`,19)(935,`code`,30),Sk(936,`number`),Kg()(),Qc(937,`td`,23)(938,`em`)(939,`strong`),Sk(940,`(opcional)`),Kg()(),Qc(941,`p`),Sk(942,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),Kg(),Qc(943,`blockquote`)(944,`p`),Sk(945,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),Kg()()()(),Qc(946,`tr`,53)(947,`td`,16)(948,`div`,17)(949,`span`,18),Sk(950,` minRange`),vu(951,`br`),Kg()()(),Qc(952,`td`,19)(953,`code`,30),Sk(954,`number`),Kg()(),Qc(955,`td`,23)(956,`em`)(957,`strong`),Sk(958,`(opcional)`),Kg()(),Qc(959,`p`),Sk(960,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),Kg(),Qc(961,`blockquote`)(962,`p`),Sk(963,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),Kg()()()(),Qc(964,`tr`,54)(965,`td`,16)(966,`div`,17)(967,`span`,18),Sk(968,` paddingBottom`),vu(969,`br`),Kg()()(),Qc(970,`td`,19)(971,`code`,30),Sk(972,`number`),Kg()(),Qc(973,`td`,23)(974,`em`)(975,`strong`),Sk(976,`(opcional)`),Kg()(),Qc(977,`p`),Sk(978,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),Kg()()(),Qc(979,`tr`,55)(980,`td`,16)(981,`div`,17)(982,`span`,18),Sk(983,` paddingLeft`),vu(984,`br`),Kg()()(),Qc(985,`td`,19)(986,`code`,30),Sk(987,`number`),Kg()(),Qc(988,`td`,23)(989,`em`)(990,`strong`),Sk(991,`(opcional)`),Kg()(),Qc(992,`p`),Sk(993,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),Kg()()(),Qc(994,`tr`,56)(995,`td`,16)(996,`div`,17)(997,`span`,18),Sk(998,` paddingRight`),vu(999,`br`),Kg()()(),Qc(1e3,`td`,19)(1001,`code`,30),Sk(1002,`number`),Kg()(),Qc(1003,`td`,23)(1004,`em`)(1005,`strong`),Sk(1006,`(opcional)`),Kg()(),Qc(1007,`p`),Sk(1008,`Permite aumentar ou diminuir o espaço direito do gráfico.`),Kg()()(),Qc(1009,`tr`,57)(1010,`td`,16)(1011,`div`,17)(1012,`span`,18),Sk(1013,` rotateLegend`),vu(1014,`br`),Kg()()(),Qc(1015,`td`,19)(1016,`code`,30),Sk(1017,`number`),Kg()(),Qc(1018,`td`,23)(1019,`em`)(1020,`strong`),Sk(1021,`(opcional)`),Kg()(),Qc(1022,`p`),Sk(1023,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),Kg(),Qc(1024,`ul`)(1025,`li`),Sk(1026,`Valores negativos giram a legenda para a esquerda.`),Kg(),Qc(1027,`li`),Sk(1028,`Valores positivos giram a legenda para a direita.`),Kg()(),Qc(1029,`p`),Sk(1030,`Se não for definido, a legenda será exibida sem rotação.`),Kg()()(),Qc(1031,`tr`,58)(1032,`td`,16)(1033,`div`,17)(1034,`span`,18),Sk(1035,` showAxisDetails`),vu(1036,`br`),Kg()()(),Qc(1037,`td`,19)(1038,`code`,59),Sk(1039,`boolean`),Kg()(),Qc(1040,`td`,23)(1041,`em`)(1042,`strong`),Sk(1043,`(opcional)`),Kg()(),Qc(1044,`p`),Sk(1045,`Exibe a linha de detalhes que acompanha o mouse`),Kg()()(),Qc(1046,`tr`,60)(1047,`td`,16)(1048,`div`,17)(1049,`span`,18),Sk(1050,` showXAxis`),vu(1051,`br`),Kg()()(),Qc(1052,`td`,19)(1053,`code`,59),Sk(1054,`boolean`),Kg()(),Qc(1055,`td`,23)(1056,`em`)(1057,`strong`),Sk(1058,`(opcional)`),Kg()(),Qc(1059,`p`),Sk(1060,`Exibe a linha do eixo X`),Kg()()(),Qc(1061,`tr`,61)(1062,`td`,16)(1063,`div`,17)(1064,`span`,18),Sk(1065,` showYAxis`),vu(1066,`br`),Kg()()(),Qc(1067,`td`,19)(1068,`code`,59),Sk(1069,`boolean`),Kg()(),Qc(1070,`td`,23)(1071,`em`)(1072,`strong`),Sk(1073,`(opcional)`),Kg()(),Qc(1074,`p`),Sk(1075,`Exibe a linha do eixo Y`),Kg()()()(),Qc(1076,`h4`,62)(1077,`code`,5),Sk(1078,`PoChartHeaderOptions`),Kg()(),Qc(1079,`div`,2)(1080,`p`)(1081,`em`),Sk(1082,`Interface`),Kg(),Sk(1083,` para configuração das ações disponíveis no cabeçalho.`),Kg()(),Qc(1084,`h4`,11),Sk(1085,`Propriedades`),Kg(),Qc(1086,`table`,12)(1087,`tr`,13)(1088,`th`,14),Sk(1089,`Nome`),Kg(),Qc(1090,`th`,14),Sk(1091,`Tipo`),Kg(),Qc(1092,`th`,14),Sk(1093,`Descrição`),Kg()(),Qc(1094,`tr`,63)(1095,`td`,16)(1096,`div`,17)(1097,`span`,18),Sk(1098,` hideExpand`),vu(1099,`br`),Kg()()(),Qc(1100,`td`,19)(1101,`code`,59),Sk(1102,`boolean`),Kg()(),Qc(1103,`td`,23)(1104,`em`)(1105,`strong`),Sk(1106,`(opcional)`),Kg()(),Qc(1107,`p`),Sk(1108,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),Kg()()(),Qc(1109,`tr`,64)(1110,`td`,16)(1111,`div`,17)(1112,`span`,18),Sk(1113,` hideExportCsv`),vu(1114,`br`),Kg()()(),Qc(1115,`td`,19)(1116,`code`,59),Sk(1117,`boolean`),Kg()(),Qc(1118,`td`,23)(1119,`em`)(1120,`strong`),Sk(1121,`(opcional)`),Kg()(),Qc(1122,`p`),Sk(1123,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),Kg()()(),Qc(1124,`tr`,65)(1125,`td`,16)(1126,`div`,17)(1127,`span`,18),Sk(1128,` hideExportImage`),vu(1129,`br`),Kg()()(),Qc(1130,`td`,19)(1131,`code`,59),Sk(1132,`boolean`),Kg()(),Qc(1133,`td`,23)(1134,`em`)(1135,`strong`),Sk(1136,`(opcional)`),Kg()(),Qc(1137,`p`),Sk(1138,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),Kg()()(),Qc(1139,`tr`,66)(1140,`td`,16)(1141,`div`,17)(1142,`span`,18),Sk(1143,` hideTableDetails`),vu(1144,`br`),Kg()()(),Qc(1145,`td`,19)(1146,`code`,59),Sk(1147,`boolean`),Kg()(),Qc(1148,`td`,23)(1149,`em`)(1150,`strong`),Sk(1151,`(opcional)`),Kg()(),Qc(1152,`p`),Sk(1153,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),Kg()()()(),Qc(1154,`h4`,67)(1155,`code`,5),Sk(1156,`PoChartIndicatorOptions`),Kg()(),Qc(1157,`div`,2)(1158,`p`),Sk(1159,`Interface para configurações dos indicadores do gráfico `),Qc(1160,`code`),Sk(1161,`radar`),Kg(),Sk(1162,`.`),Kg()(),Qc(1163,`h4`,11),Sk(1164,`Propriedades`),Kg(),Qc(1165,`table`,12)(1166,`tr`,13)(1167,`th`,14),Sk(1168,`Nome`),Kg(),Qc(1169,`th`,14),Sk(1170,`Tipo`),Kg(),Qc(1171,`th`,14),Sk(1172,`Descrição`),Kg()(),Qc(1173,`tr`,68)(1174,`td`,16)(1175,`div`,17)(1176,`span`,18),Sk(1177,` color`),vu(1178,`br`),Kg()()(),Qc(1179,`td`,19)(1180,`code`,44),Sk(1181,`string`),Kg()(),Qc(1182,`td`,23)(1183,`em`)(1184,`strong`),Sk(1185,`(opcional)`),Kg()(),Qc(1186,`p`),Sk(1187,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),Kg(),Qc(1188,`blockquote`)(1189,`p`),Sk(1190,`Nome da cor, hexadecimal ou RGB.`),Kg()()()(),Qc(1191,`tr`,69)(1192,`td`,16)(1193,`div`,17)(1194,`span`,18),Sk(1195,` max`),vu(1196,`br`),Kg()()(),Qc(1197,`td`,19)(1198,`code`,30),Sk(1199,`number`),Kg()(),Qc(1200,`td`,23)(1201,`em`)(1202,`strong`),Sk(1203,`(opcional)`),Kg()(),Qc(1204,`p`),Sk(1205,`Valor máximo do indicator.`),Kg(),Qc(1206,`p`),Sk(1207,`A propriedade `),Qc(1208,`code`),Sk(1209,`max`),Kg(),Sk(1210,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),Kg()()(),Qc(1211,`tr`,70)(1212,`td`,16)(1213,`div`,17)(1214,`span`,18),Sk(1215,` min`),vu(1216,`br`),Kg()()(),Qc(1217,`td`,19)(1218,`code`,30),Sk(1219,`number`),Kg()(),Qc(1220,`td`,23)(1221,`em`)(1222,`strong`),Sk(1223,`(opcional)`),Kg()(),Qc(1224,`p`),Sk(1225,`Valor mínimo do indicator, com valor padrão de 0.`),Kg(),Qc(1226,`p`),Sk(1227,`A propriedade `),Qc(1228,`code`),Sk(1229,`min`),Kg(),Sk(1230,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),Kg()()(),Qc(1231,`tr`,71)(1232,`td`,16)(1233,`div`,17)(1234,`span`,18),Sk(1235,` name`),vu(1236,`br`),Kg()()(),Qc(1237,`td`,19)(1238,`code`,44),Sk(1239,`string`),Kg()(),Qc(1240,`td`,23)(1241,`em`)(1242,`strong`),Sk(1243,`(opcional)`),Kg()(),Qc(1244,`p`),Sk(1245,`Nome do indicator.`),Kg()()()(),Qc(1246,`h4`,72)(1247,`code`,5),Sk(1248,`PoChartLiterals`),Kg()(),Qc(1249,`div`,2)(1250,`p`),Sk(1251,`Interface para definição dos literais usadas no `),Qc(1252,`code`),Sk(1253,`po-chart`),Kg(),Sk(1254,`.`),Kg()(),Qc(1255,`h4`,11),Sk(1256,`Propriedades`),Kg(),Qc(1257,`table`,12)(1258,`tr`,13)(1259,`th`,14),Sk(1260,`Nome`),Kg(),Qc(1261,`th`,14),Sk(1262,`Tipo`),Kg(),Qc(1263,`th`,14),Sk(1264,`Descrição`),Kg()(),Qc(1265,`tr`,73)(1266,`td`,16)(1267,`div`,17)(1268,`span`,18),Sk(1269,` category`),vu(1270,`br`),Kg()()(),Qc(1271,`td`,19)(1272,`code`,44),Sk(1273,`string`),Kg()(),Qc(1274,`td`,23)(1275,`em`)(1276,`strong`),Sk(1277,`(opcional)`),Kg()(),Qc(1278,`p`),Sk(1279,`Texto da primeira coluna da tabela no gráfico do tipo `),Qc(1280,`code`),Sk(1281,`Bar`),Kg(),Sk(1282,`.`),Kg()()(),Qc(1283,`tr`,74)(1284,`td`,16)(1285,`div`,17)(1286,`span`,18),Sk(1287,` downloadCSV`),vu(1288,`br`),Kg()()(),Qc(1289,`td`,19)(1290,`code`,44),Sk(1291,`string`),Kg()(),Qc(1292,`td`,23)(1293,`em`)(1294,`strong`),Sk(1295,`(opcional)`),Kg()(),Qc(1296,`p`),Sk(1297,`Texto exibido para a ação de download de dados em formato CSV.`),Kg()()(),Qc(1298,`tr`,75)(1299,`td`,16)(1300,`div`,17)(1301,`span`,18),Sk(1302,` exportCSV`),vu(1303,`br`),Kg()()(),Qc(1304,`td`,19)(1305,`code`,44),Sk(1306,`string`),Kg()(),Qc(1307,`td`,23)(1308,`em`)(1309,`strong`),Sk(1310,`(opcional)`),Kg()(),Qc(1311,`p`),Sk(1312,`Texto do botão para exportar o gráfico em CSV.`),Kg()()(),Qc(1313,`tr`,76)(1314,`td`,16)(1315,`div`,17)(1316,`span`,18),Sk(1317,` exportJPG`),vu(1318,`br`),Kg()()(),Qc(1319,`td`,19)(1320,`code`,44),Sk(1321,`string`),Kg()(),Qc(1322,`td`,23)(1323,`em`)(1324,`strong`),Sk(1325,`(opcional)`),Kg()(),Qc(1326,`p`),Sk(1327,`Texto do botão para exportar o gráfico como imagem JPG.`),Kg()()(),Qc(1328,`tr`,77)(1329,`td`,16)(1330,`div`,17)(1331,`span`,18),Sk(1332,` exportPNG`),vu(1333,`br`),Kg()()(),Qc(1334,`td`,19)(1335,`code`,44),Sk(1336,`string`),Kg()(),Qc(1337,`td`,23)(1338,`em`)(1339,`strong`),Sk(1340,`(opcional)`),Kg()(),Qc(1341,`p`),Sk(1342,`Texto do botão para exportar o gráfico como imagem PNG.`),Kg()()(),Qc(1343,`tr`,78)(1344,`td`,16)(1345,`div`,17)(1346,`span`,18),Sk(1347,` item`),vu(1348,`br`),Kg()()(),Qc(1349,`td`,19)(1350,`code`,44),Sk(1351,`string`),Kg()(),Qc(1352,`td`,23)(1353,`em`)(1354,`strong`),Sk(1355,`(opcional)`),Kg()(),Qc(1356,`p`),Sk(1357,`Texto dos títulos das colunas `),Qc(1358,`code`),Sk(1359,`Gauge`),Kg(),Sk(1360,` e não possui label.`),Kg()()(),Qc(1361,`tr`,79)(1362,`td`,16)(1363,`div`,17)(1364,`span`,18),Sk(1365,` serie`),vu(1366,`br`),Kg()()(),Qc(1367,`td`,19)(1368,`code`,44),Sk(1369,`string`),Kg()(),Qc(1370,`td`,23)(1371,`em`)(1372,`strong`),Sk(1373,`(opcional)`),Kg()(),Qc(1374,`p`),Sk(1375,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),Qc(1376,`code`),Sk(1377,`Bar`),Kg(),Sk(1378,` e `),Qc(1379,`code`),Sk(1380,`Gauge`),Kg(),Sk(1381,`.`),Kg()()(),Qc(1382,`tr`,80)(1383,`td`,16)(1384,`div`,17)(1385,`span`,18),Sk(1386,` value`),vu(1387,`br`),Kg()()(),Qc(1388,`td`,19)(1389,`code`,44),Sk(1390,`string`),Kg()(),Qc(1391,`td`,23)(1392,`em`)(1393,`strong`),Sk(1394,`(opcional)`),Kg()(),Qc(1395,`p`),Sk(1396,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),Qc(1397,`code`),Sk(1398,`Gauge`),Kg(),Sk(1399,`.`),Kg()()()(),Qc(1400,`h4`,81)(1401,`code`,5),Sk(1402,`PoChartOptions`),Kg()(),Qc(1403,`div`,2)(1404,`p`)(1405,`em`),Sk(1406,`Interface`),Kg(),Sk(1407,` para configurações dos elementos do gráfico.`),Kg()(),Qc(1408,`h4`,11),Sk(1409,`Propriedades`),Kg(),Qc(1410,`table`,12)(1411,`tr`,13)(1412,`th`,14),Sk(1413,`Nome`),Kg(),Qc(1414,`th`,14),Sk(1415,`Tipo`),Kg(),Qc(1416,`th`,14),Sk(1417,`Descrição`),Kg()(),Qc(1418,`tr`,82)(1419,`td`,16)(1420,`div`,17)(1421,`span`,18),Sk(1422,` areaStyle`),vu(1423,`br`),Kg()()(),Qc(1424,`td`,19)(1425,`code`,59),Sk(1426,`boolean`),Kg()(),Qc(1427,`td`,23)(1428,`em`)(1429,`strong`),Sk(1430,`(opcional)`),Kg()(),Qc(1431,`p`),Sk(1432,`Define se as séries terão sua área preenchida.`),Kg(),Qc(1433,`blockquote`)(1434,`p`),Sk(1435,`Esta propriedade tem precedência sobre a definição de `),Qc(1436,`code`),Sk(1437,`areaStyle`),Kg(),Sk(1438,` em cada série, `),Qc(1439,`code`),Sk(1440,`fillpoints`),Kg(),Sk(1441,` não funciona quando `),Qc(1442,`code`),Sk(1443,`areaStyle`),Kg(),Sk(1444,` está definido como `),Qc(1445,`code`),Sk(1446,`true`),Kg(),Sk(1447,`.`),Kg()()()(),Qc(1448,`tr`,83)(1449,`td`,16)(1450,`div`,17)(1451,`span`,18),Sk(1452,` axis`),vu(1453,`br`),Kg()()(),Qc(1454,`td`,19)(1455,`code`,84),Sk(1456,`PoChartAxisOptions`),Kg()(),Qc(1457,`td`,23)(1458,`em`)(1459,`strong`),Sk(1460,`(opcional)`),Kg()(),Qc(1461,`p`),Sk(1462,`Define um objeto do tipo `),Qc(1463,`code`),Sk(1464,`PoChartAxisOptions`),Kg(),Sk(1465,` para configuração dos eixos.`),Kg()()(),Qc(1466,`tr`,85)(1467,`td`,16)(1468,`div`,17)(1469,`span`,18),Sk(1470,` borderRadius`),vu(1471,`br`),Kg()()(),Qc(1472,`td`,19)(1473,`code`,30),Sk(1474,`number`),Kg()(),Qc(1475,`td`,23)(1476,`em`)(1477,`strong`),Sk(1478,`(opcional)`),Kg()(),Qc(1479,`p`),Sk(1480,`Define borda entre os itens do gráfico. Válido para os gráficos `),Qc(1481,`code`),Sk(1482,`Donut`),Kg(),Sk(1483,`, `),Qc(1484,`code`),Sk(1485,`Pie`),Kg(),Sk(1486,`.`),Kg(),Qc(1487,`blockquote`)(1488,`p`),Sk(1489,`Valores válidos entre 0 e 100,`),Kg()()()(),Qc(1490,`tr`,86)(1491,`td`,16)(1492,`div`,17)(1493,`span`,18),Sk(1494,` bottomDataZoom`),vu(1495,`br`),Kg()()(),Qc(1496,`td`,19)(1497,`code`,59),Sk(1498,`boolean `),Kg(),Qc(1499,`code`,30),Sk(1500,` number`),Kg()(),Qc(1501,`td`,23)(1502,`em`)(1503,`strong`),Sk(1504,`(opcional)`),Kg()(),Qc(1505,`p`),Sk(1506,`Define a distância inferior do componente DataZoom.`),Kg(),Qc(1507,`p`),Sk(1508,`Esta propriedade aceita os seguintes valores:`),Kg(),Qc(1509,`ul`)(1510,`li`)(1511,`p`)(1512,`code`),Sk(1513,`false`),Kg(),Sk(1514,` (padrão): não aplica ajustes.`),Kg()(),Qc(1515,`li`)(1516,`p`)(1517,`code`),Sk(1518,`true`),Kg(),Sk(1519,`: aplica um valor automático com base no posicionamento da legenda:`),Kg(),Qc(1520,`ul`)(1521,`li`)(1522,`code`),Sk(1523,`8`),Kg(),Sk(1524,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),Kg(),Qc(1525,`li`)(1526,`code`),Sk(1527,`32`),Kg(),Sk(1528,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),Kg()()(),Qc(1529,`li`)(1530,`p`)(1531,`code`),Sk(1532,`number`),Kg(),Sk(1533,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),Kg()()(),Qc(1534,`blockquote`)(1535,`p`),Sk(1536,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),Qc(1537,`code`),Sk(1538,`dataZoom: true`),Kg(),Sk(1539,`).`),Kg()()()(),Qc(1540,`tr`,87)(1541,`td`,16)(1542,`div`,17)(1543,`span`,18),Sk(1544,` dataZoom`),vu(1545,`br`),Kg()()(),Qc(1546,`td`,19)(1547,`code`,59),Sk(1548,`boolean`),Kg()(),Qc(1549,`td`,23)(1550,`em`)(1551,`strong`),Sk(1552,`(opcional)`),Kg()(),Qc(1553,`p`),Sk(1554,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),Kg()()(),Qc(1555,`tr`,88)(1556,`td`,16)(1557,`div`,17)(1558,`span`,18),Sk(1559,` descriptionChart`),vu(1560,`br`),Kg()()(),Qc(1561,`td`,19)(1562,`code`,44),Sk(1563,`string`),Kg()(),Qc(1564,`td`,23)(1565,`em`)(1566,`strong`),Sk(1567,`(opcional)`),Kg()(),Qc(1568,`p`),Sk(1569,`Define a descrição do gráfico exibido acima do gráfico.`),Kg()()(),Qc(1570,`tr`,89)(1571,`td`,16)(1572,`div`,17)(1573,`span`,18),Sk(1574,` fillPoints`),vu(1575,`br`),Kg()()(),Qc(1576,`td`,19)(1577,`code`,59),Sk(1578,`boolean`),Kg()(),Qc(1579,`td`,23)(1580,`em`)(1581,`strong`),Sk(1582,`(opcional)`),Kg()(),Qc(1583,`p`),Sk(1584,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),Kg(),Qc(1585,`blockquote`)(1586,`p`),Sk(1587,`Esta propriedade é utilizável para os gráficos dos tipos `),Qc(1588,`code`),Sk(1589,`Area`),Kg(),Sk(1590,`, `),Qc(1591,`code`),Sk(1592,`Line`),Kg(),Sk(1593,` e `),Qc(1594,`code`),Sk(1595,`Radar`),Kg(),Sk(1596,`.
Para o tipo `),Qc(1597,`code`),Sk(1598,`Radar`),Kg(),Sk(1599,`, o valor padrão é `),Qc(1600,`code`),Sk(1601,`true`),Kg(),Sk(1602,`.`),Kg()()()(),Qc(1603,`tr`,90)(1604,`td`,16)(1605,`div`,17)(1606,`span`,18),Sk(1607,` firstColumnName`),vu(1608,`br`),Kg()()(),Qc(1609,`td`,19)(1610,`code`,44),Sk(1611,`string`),Kg()(),Qc(1612,`td`,23)(1613,`em`)(1614,`strong`),Sk(1615,`(opcional)`),Kg()(),Qc(1616,`p`),Sk(1617,`Valor que permite customizar o nome da `),Qc(1618,`code`),Sk(1619,`TH`),Kg(),Sk(1620,` da primeira coluna da tabela descritiva.`),Kg()()(),Qc(1621,`tr`,91)(1622,`td`,16)(1623,`div`,17)(1624,`span`,18),Sk(1625,` header`),vu(1626,`br`),Kg()()(),Qc(1627,`td`,19)(1628,`code`,92),Sk(1629,`PoChartHeaderOptions`),Kg()(),Qc(1630,`td`,23)(1631,`em`)(1632,`strong`),Sk(1633,`(opcional)`),Kg()(),Qc(1634,`p`),Sk(1635,`Define um objeto do tipo `),Qc(1636,`code`),Sk(1637,`PoChartHeaderOptions`),Kg(),Sk(1638,` para configurar a exibição de botões no cabeçalho do gráfico.`),Kg()()(),Qc(1639,`tr`,93)(1640,`td`,16)(1641,`div`,17)(1642,`span`,18),Sk(1643,` innerRadius`),vu(1644,`br`),Kg()()(),Qc(1645,`td`,19)(1646,`code`,30),Sk(1647,`number`),Kg()(),Qc(1648,`td`,23)(1649,`em`)(1650,`strong`),Sk(1651,`(opcional)`),Kg()(),Qc(1652,`p`),Sk(1653,`Define o diâmetro, em valor percentual entre `),Qc(1654,`code`),Sk(1655,`0`),Kg(),Sk(1656,` e `),Qc(1657,`code`),Sk(1658,`100`),Kg(),Sk(1659,`, da área central para gráficos do tipo `),Qc(1660,`code`),Sk(1661,`donut`),Kg(),Sk(1662,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Qc(1663,`code`),Sk(1664,`40px`),Kg(),Sk(1665,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),Kg()()(),Qc(1666,`tr`,94)(1667,`td`,16)(1668,`div`,17)(1669,`span`,18),Sk(1670,` legend`),vu(1671,`br`),Kg()()(),Qc(1672,`td`,19)(1673,`code`,59),Sk(1674,`boolean`),Kg()(),Qc(1675,`td`,23)(1676,`em`)(1677,`strong`),Sk(1678,`(opcional)`),Kg()(),Qc(1679,`p`),Sk(1680,`Define a exibição da legenda do gráfico. Valor padrão é `),Qc(1681,`code`),Sk(1682,`true`),Kg()()()(),Qc(1683,`tr`,95)(1684,`td`,16)(1685,`div`,17)(1686,`span`,18),Sk(1687,` legendPosition`),vu(1688,`br`),Kg()()(),Qc(1689,`td`,19)(1690,`code`,96),Sk(1691,`'left' `),Kg(),Qc(1692,`code`,97),Sk(1693,` 'center' `),Kg(),Qc(1694,`code`,98),Sk(1695,` 'right'`),Kg()(),Qc(1696,`td`,23)(1697,`em`)(1698,`strong`),Sk(1699,`(opcional)`),Kg()(),Qc(1700,`p`),Sk(1701,`Define o alinhamento horizontal da legenda.`),Kg(),Qc(1702,`blockquote`)(1703,`p`),Sk(1704,`Propriedade inválida para o gráfico do tipo `),Qc(1705,`code`),Sk(1706,`Gauge`),Kg(),Sk(1707,`.`),Kg()()()(),Qc(1708,`tr`,99)(1709,`td`,16)(1710,`div`,17)(1711,`span`,18),Sk(1712,` legendType`),vu(1713,`br`),Kg()()(),Qc(1714,`td`,19)(1715,`code`,100),Sk(1716,`'plain' `),Kg(),Qc(1717,`code`,101),Sk(1718,` 'scroll'`),Kg()(),Qc(1719,`td`,23)(1720,`em`)(1721,`strong`),Sk(1722,`(opcional)`),Kg()(),Qc(1723,`p`),Sk(1724,`Define o tipo da legenda.`),Kg(),Qc(1725,`ul`)(1726,`li`)(1727,`code`),Sk(1728,`plain`),Kg(),Sk(1729,`: exibe todas as legendas de forma estática.`),Kg(),Qc(1730,`li`)(1731,`code`),Sk(1732,`scroll`),Kg(),Sk(1733,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),Kg()(),Qc(1734,`blockquote`)(1735,`p`),Sk(1736,`Propriedade inválida para o gráfico do tipo `),Qc(1737,`code`),Sk(1738,`Gauge`),Kg(),Sk(1739,`.`),Kg()()()(),Qc(1740,`tr`,102)(1741,`td`,16)(1742,`div`,17)(1743,`span`,18),Sk(1744,` legendVerticalPosition`),vu(1745,`br`),Kg()()(),Qc(1746,`td`,19)(1747,`code`,103),Sk(1748,`'top' `),Kg(),Qc(1749,`code`,104),Sk(1750,` 'bottom'`),Kg()(),Qc(1751,`td`,23)(1752,`em`)(1753,`strong`),Sk(1754,`(opcional)`),Kg()(),Qc(1755,`p`),Sk(1756,`Define a posição vertical da legenda no gráfico.`),Kg(),Qc(1757,`blockquote`)(1758,`p`),Sk(1759,`Quando utilizada com o valor `),Qc(1760,`code`),Sk(1761,`top`),Kg(),Sk(1762,`, recomenda-se configurar também a propriedade `),Qc(1763,`code`),Sk(1764,`bottomDataZoom`),Kg(),Sk(1765,` caso o `),Qc(1766,`code`),Sk(1767,`dataZoom`),Kg(),Sk(1768,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Qc(1769,`code`),Sk(1770,`Gauge`),Kg(),Sk(1771,`.`),Kg()()()(),Qc(1772,`tr`,105)(1773,`td`,16)(1774,`div`,17)(1775,`span`,18),Sk(1776,` pointer`),vu(1777,`br`),Kg()()(),Qc(1778,`td`,19)(1779,`code`,59),Sk(1780,`boolean`),Kg()(),Qc(1781,`td`,23)(1782,`em`)(1783,`strong`),Sk(1784,`(opcional)`),Kg()(),Qc(1785,`p`),Sk(1786,`Define a exibição do ponteiro.`),Kg(),Qc(1787,`blockquote`)(1788,`p`),Sk(1789,`Válido para gráfico do tipo `),Qc(1790,`code`),Sk(1791,`Gauge`),Kg(),Sk(1792,`.`),Kg()()()(),Qc(1793,`tr`,106)(1794,`td`,16)(1795,`div`,17)(1796,`span`,18),Sk(1797,` rendererOption`),vu(1798,`br`),Kg()()(),Qc(1799,`td`,19)(1800,`code`,107),Sk(1801,`'canvas' `),Kg(),Qc(1802,`code`,108),Sk(1803,` 'svg'`),Kg()(),Qc(1804,`td`,23)(1805,`em`)(1806,`strong`),Sk(1807,`(opcional)`),Kg()(),Qc(1808,`p`),Sk(1809,`Define como o gráfico será renderizado.`),Kg(),Qc(1810,`blockquote`)(1811,`p`),Sk(1812,`Recomenda-se não modificar o valor da propriedade `),Qc(1813,`code`),Sk(1814,`rendererOption`),Kg(),Sk(1815,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),Kg()()()(),Qc(1816,`tr`,109)(1817,`td`,16)(1818,`div`,17)(1819,`span`,18),Sk(1820,` roseType`),vu(1821,`br`),Kg()()(),Qc(1822,`td`,19)(1823,`code`,59),Sk(1824,`boolean`),Kg()(),Qc(1825,`td`,23)(1826,`em`)(1827,`strong`),Sk(1828,`(opcional)`),Kg()(),Qc(1829,`p`),Sk(1830,`Transforma os gráficos do tipo `),Qc(1831,`code`),Sk(1832,`Donut`),Kg(),Sk(1833,` ou `),Qc(1834,`code`),Sk(1835,`Pie`),Kg(),Sk(1836,` num gráfico de área polar.`),Kg(),Qc(1837,`blockquote`)(1838,`p`),Sk(1839,`Válido para os gráficos `),Qc(1840,`code`),Sk(1841,`Donut`),Kg(),Sk(1842,` e `),Qc(1843,`code`),Sk(1844,`Pie`),Kg(),Sk(1845,`.`),Kg()()()(),Qc(1846,`tr`,110)(1847,`td`,16)(1848,`div`,17)(1849,`span`,18),Sk(1850,` showContainerGauge`),vu(1851,`br`),Kg()()(),Qc(1852,`td`,19)(1853,`code`,59),Sk(1854,`boolean`),Kg()(),Qc(1855,`td`,23)(1856,`em`)(1857,`strong`),Sk(1858,`(opcional)`),Kg()(),Qc(1859,`p`),Sk(1860,`Esconde a estilização do container em volta do gráfico.`),Kg(),Qc(1861,`blockquote`)(1862,`p`),Sk(1863,`Válido para gráfico do tipo `),Qc(1864,`code`),Sk(1865,`Gauge`),Kg(),Sk(1866,`.`),Kg()()()(),Qc(1867,`tr`,111)(1868,`td`,16)(1869,`div`,17)(1870,`span`,18),Sk(1871,` showFromToLegend`),vu(1872,`br`),Kg()()(),Qc(1873,`td`,19)(1874,`code`,59),Sk(1875,`boolean`),Kg()(),Qc(1876,`td`,23)(1877,`em`)(1878,`strong`),Sk(1879,`(opcional)`),Kg()(),Qc(1880,`p`),Sk(1881,`Exibe os valores das propriedades `),Qc(1882,`code`),Sk(1883,`from`),Kg(),Sk(1884,` e `),Qc(1885,`code`),Sk(1886,`to`),Kg(),Sk(1887,` no gráfico do no texto da legenda entre parênteses.`),Kg(),Qc(1888,`blockquote`)(1889,`p`),Sk(1890,`Válido para gráfico do tipo `),Qc(1891,`code`),Sk(1892,`Gauge`),Kg(),Sk(1893,`.`),Kg()()()(),Qc(1894,`tr`,112)(1895,`td`,16)(1896,`div`,17)(1897,`span`,18),Sk(1898,` stacked`),vu(1899,`br`),Kg()()(),Qc(1900,`td`,19)(1901,`code`,59),Sk(1902,`boolean`),Kg()(),Qc(1903,`td`,23)(1904,`em`)(1905,`strong`),Sk(1906,`(opcional)`),Kg()(),Qc(1907,`p`),Sk(1908,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),Qc(1909,`code`),Sk(1910,`stackGroupName`),Kg(),Sk(1911,` da interface `),Qc(1912,`code`),Sk(1913,`PoChartSerie`),Kg()(),Qc(1914,`blockquote`)(1915,`p`),Sk(1916,`Válido para gráfico do tipo `),Qc(1917,`code`),Sk(1918,`Column`),Kg(),Sk(1919,` e `),Qc(1920,`code`),Sk(1921,`Bar`),Kg(),Sk(1922,`.`),Kg()(),Qc(1923,`blockquote`)(1924,`p`),Sk(1925,`Essa propriedade habilita a propriedade `),Qc(1926,`code`),Sk(1927,`p-data-label`),Kg(),Sk(1928,` por padrão, podendo ser desabilitada passando `),Qc(1929,`code`),Sk(1930,`[p-data-label]={ fixed: false }`),Kg(),Sk(1931,`.`),Kg()()()(),Qc(1932,`tr`,113)(1933,`td`,16)(1934,`div`,17)(1935,`span`,18),Sk(1936,` subtitleGauge`),vu(1937,`br`),Kg()()(),Qc(1938,`td`,19)(1939,`code`,44),Sk(1940,`string`),Kg()(),Qc(1941,`td`,23)(1942,`em`)(1943,`strong`),Sk(1944,`(opcional)`),Kg()(),Qc(1945,`p`),Sk(1946,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),Kg(),Qc(1947,`blockquote`)(1948,`p`),Sk(1949,`Válido para gráfico do tipo `),Qc(1950,`code`),Sk(1951,`Gauge`),Kg(),Sk(1952,`.`),Kg()()()(),Qc(1953,`tr`,114)(1954,`td`,16)(1955,`div`,17)(1956,`span`,18),Sk(1957,` textCenterGraph`),vu(1958,`br`),Kg()()(),Qc(1959,`td`,19)(1960,`code`,44),Sk(1961,`string`),Kg()(),Qc(1962,`td`,23)(1963,`em`)(1964,`strong`),Sk(1965,`(opcional)`),Kg()(),Qc(1966,`p`),Sk(1967,`Aplica texto centralizado customizado nos gráficos de `),Qc(1968,`code`),Sk(1969,`Donut`),Kg(),Sk(1970,`.`),Kg()()()(),Qc(1971,`h4`,115)(1972,`code`,5),Sk(1973,`PoChartRadarOptions`),Kg()(),Qc(1974,`div`,2)(1975,`p`)(1976,`em`),Sk(1977,`Interface`),Kg(),Sk(1978,` para configurações do gráfico `),Qc(1979,`code`),Sk(1980,`radar`),Kg(),Sk(1981,`.`),Kg()(),Qc(1982,`h4`,11),Sk(1983,`Propriedades`),Kg(),Qc(1984,`table`,12)(1985,`tr`,13)(1986,`th`,14),Sk(1987,`Nome`),Kg(),Qc(1988,`th`,14),Sk(1989,`Tipo`),Kg(),Qc(1990,`th`,14),Sk(1991,`Descrição`),Kg()(),Qc(1992,`tr`,116)(1993,`td`,16)(1994,`div`,17)(1995,`span`,18),Sk(1996,` indicator`),vu(1997,`br`),Kg()()(),Qc(1998,`td`,19)(1999,`code`,117),Sk(2e3,`Array<PoChartIndicatorOptions>`),Kg()(),Qc(2001,`td`,23)(2002,`em`)(2003,`strong`),Sk(2004,`(opcional)`),Kg()(),Qc(2005,`p`),Sk(2006,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),Kg()()(),Qc(2007,`tr`,118)(2008,`td`,16)(2009,`div`,17)(2010,`span`,18),Sk(2011,` shape`),vu(2012,`br`),Kg()()(),Qc(2013,`td`,19)(2014,`code`,119),Sk(2015,`'polygon' `),Kg(),Qc(2016,`code`,120),Sk(2017,` 'circle'`),Kg()(),Qc(2018,`td`,23)(2019,`em`)(2020,`strong`),Sk(2021,`(opcional)`),Kg()(),Qc(2022,`p`),Sk(2023,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),Kg()()(),Qc(2024,`tr`,121)(2025,`td`,16)(2026,`div`,17)(2027,`span`,18),Sk(2028,` splitArea`),vu(2029,`br`),Kg()()(),Qc(2030,`td`,19)(2031,`code`,59),Sk(2032,`boolean`),Kg()(),Qc(2033,`td`,23)(2034,`em`)(2035,`strong`),Sk(2036,`(opcional)`),Kg()(),Qc(2037,`p`),Sk(2038,`Define o efeito zebrado na grid.`),Kg()()()(),Qc(2039,`h4`,122)(2040,`code`,5),Sk(2041,`PoChartDataLabel`),Kg()(),Qc(2042,`div`,2)(2043,`p`),Sk(2044,`Interface que define as propriedades de exibição dos rótulos das séries no `),Qc(2045,`code`),Sk(2046,`po-chart`),Kg(),Sk(2047,`.`),Kg()(),Qc(2048,`h4`,11),Sk(2049,`Propriedades`),Kg(),Qc(2050,`table`,12)(2051,`tr`,13)(2052,`th`,14),Sk(2053,`Nome`),Kg(),Qc(2054,`th`,14),Sk(2055,`Tipo`),Kg(),Qc(2056,`th`,14),Sk(2057,`Descrição`),Kg()(),Qc(2058,`tr`,123)(2059,`td`,16)(2060,`div`,17)(2061,`span`,18),Sk(2062,` fixed`),vu(2063,`br`),Kg()()(),Qc(2064,`td`,19)(2065,`code`,59),Sk(2066,`boolean`),Kg()(),Qc(2067,`td`,23)(2068,`em`)(2069,`strong`),Sk(2070,`(opcional)`),Kg()(),Qc(2071,`p`),Sk(2072,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),Kg(),Qc(2073,`ul`)(2074,`li`),Sk(2075,`Quando definido como `),Qc(2076,`code`),Sk(2077,`true`),Kg(),Sk(2078,`:`),Qc(2079,`ul`)(2080,`li`),Sk(2081,`O `),Qc(2082,`em`),Sk(2083,`tooltip`),Kg(),Sk(2084,` não será exibido.`),Kg(),Qc(2085,`li`),Sk(2086,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),Kg()()()(),Qc(2087,`blockquote`)(2088,`p`),Sk(2089,`Disponível para os tipo de gráfico `),Qc(2090,`code`),Sk(2091,`PoChartType.Line`),Kg(),Sk(2092,`, `),Qc(2093,`code`),Sk(2094,`PoChartType.Area`),Kg(),Sk(2095,`, `),Qc(2096,`code`),Sk(2097,`PoChartType.Column`),Kg(),Sk(2098,`, `),Qc(2099,`code`),Sk(2100,`PoChartType.Bar e PoChartType.Radar`),Kg(),Sk(2101,`.`),Kg()()()()(),Qc(2102,`h4`,124)(2103,`code`,5),Sk(2104,`PoChartSerie`),Kg()(),Qc(2105,`div`,2)(2106,`p`),Sk(2107,`Interface das series dinâmicas do `),Qc(2108,`code`),Sk(2109,`po-chart`),Kg(),Sk(2110,` que possibilita desenhar gráficos dos tipos `),Qc(2111,`code`),Sk(2112,`area`),Kg(),Sk(2113,`, `),Qc(2114,`code`),Sk(2115,`bar`),Kg(),Sk(2116,`, `),Qc(2117,`code`),Sk(2118,`column`),Kg(),Sk(2119,`, `),Qc(2120,`code`),Sk(2121,`line`),Kg(),Sk(2122,`, `),Qc(2123,`code`),Sk(2124,`donut`),Kg(),Sk(2125,`, `),Qc(2126,`code`),Sk(2127,`pie`),Kg(),Sk(2128,` e `),Qc(2129,`code`),Sk(2130,`radar`),Kg()()(),Qc(2131,`h4`,11),Sk(2132,`Propriedades`),Kg(),Qc(2133,`table`,12)(2134,`tr`,13)(2135,`th`,14),Sk(2136,`Nome`),Kg(),Qc(2137,`th`,14),Sk(2138,`Tipo`),Kg(),Qc(2139,`th`,14),Sk(2140,`Descrição`),Kg()(),Qc(2141,`tr`,125)(2142,`td`,16)(2143,`div`,17)(2144,`span`,18),Sk(2145,` areaStyle`),vu(2146,`br`),Kg()()(),Qc(2147,`td`,19)(2148,`code`,59),Sk(2149,`boolean`),Kg()(),Qc(2150,`td`,23)(2151,`em`)(2152,`strong`),Sk(2153,`(opcional)`),Kg()(),Qc(2154,`p`),Sk(2155,`Define se a série terá sua área preenchida.`),Kg(),Qc(2156,`blockquote`)(2157,`p`),Sk(2158,`Propriedade válida para gráficos do tipo `),Qc(2159,`code`),Sk(2160,`Radar`),Kg(),Sk(2161,`, `),Qc(2162,`code`),Sk(2163,`fillpoints`),Kg(),Sk(2164,` não funciona quando `),Qc(2165,`code`),Sk(2166,`areaStyle`),Kg(),Sk(2167,` está definido como `),Qc(2168,`code`),Sk(2169,`true`),Kg(),Sk(2170,`.`),Kg()()()(),Qc(2171,`tr`,126)(2172,`td`,16)(2173,`div`,17)(2174,`span`,18),Sk(2175,` color`),vu(2176,`br`),Kg()()(),Qc(2177,`td`,19)(2178,`code`,44),Sk(2179,`string`),Kg()(),Qc(2180,`td`,23)(2181,`em`)(2182,`strong`),Sk(2183,`(opcional)`),Kg()(),Qc(2184,`p`),Sk(2185,`Determina a cor da série. As maneiras de customizar o `),Qc(2186,`em`),Sk(2187,`preset`),Kg(),Sk(2188,` padrão de cores são:`),Kg(),Qc(2189,`ul`)(2190,`li`),Sk(2191,`Hexadecimal, por exemplo `),Qc(2192,`code`),Sk(2193,`#c64840`),Kg(),Sk(2194,`;`),Kg(),Qc(2195,`li`),Sk(2196,`RGB, por exemplo `),Qc(2197,`code`),Sk(2198,`rgb(0, 0, 165)`),Kg()(),Qc(2199,`li`),Sk(2200,`O nome da cor, por exemplo `),Qc(2201,`code`),Sk(2202,`blue`),Kg(),Sk(2203,`;`),Kg(),Qc(2204,`li`),Sk(2205,`Variáveis CSS, por exemplo `),Qc(2206,`code`),Sk(2207,`var(--color-01)`),Kg(),Sk(2208,`;`),Kg(),Qc(2209,`li`),Sk(2210,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Qc(2211,`ul`)(2212,`li`),vu(2213,`span`,127),Qc(2214,`code`),Sk(2215,`color-01`),Kg()(),Qc(2216,`li`),vu(2217,`span`,128),Qc(2218,`code`),Sk(2219,`color-02`),Kg()(),Qc(2220,`li`),vu(2221,`span`,129),Qc(2222,`code`),Sk(2223,`color-03`),Kg()(),Qc(2224,`li`),vu(2225,`span`,130),Qc(2226,`code`),Sk(2227,`color-04`),Kg()(),Qc(2228,`li`),vu(2229,`span`,131),Qc(2230,`code`),Sk(2231,`color-05`),Kg()(),Qc(2232,`li`),vu(2233,`span`,132),Qc(2234,`code`),Sk(2235,`color-06`),Kg()(),Qc(2236,`li`),vu(2237,`span`,133),Qc(2238,`code`),Sk(2239,`color-07`),Kg()(),Qc(2240,`li`),vu(2241,`span`,134),Qc(2242,`code`),Sk(2243,`color-08`),Kg()(),Qc(2244,`li`),vu(2245,`span`,135),Qc(2246,`code`),Sk(2247,`color-09`),Kg()(),Qc(2248,`li`),vu(2249,`span`,136),Qc(2250,`code`),Sk(2251,`color-10`),Kg()(),Qc(2252,`li`),vu(2253,`span`,137),Qc(2254,`code`),Sk(2255,`color-11`),Kg()(),Qc(2256,`li`),vu(2257,`span`,138),Qc(2258,`code`),Sk(2259,`color-12`),Kg()()()()(),Qc(2260,`ul`)(2261,`li`),Sk(2262,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),Kg()()()(),Qc(2263,`tr`,139)(2264,`td`,16)(2265,`div`,17)(2266,`span`,18),Sk(2267,` data`),vu(2268,`br`),Kg()()(),Qc(2269,`td`,19)(2270,`code`,30),Sk(2271,`number `),Kg(),Qc(2272,`code`,140),Sk(2273,` Array<number>`),Kg()(),Qc(2274,`td`,23)(2275,`em`)(2276,`strong`),Sk(2277,`(opcional)`),Kg()(),Qc(2278,`p`),Sk(2279,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),Kg(),Qc(2280,`ul`)(2281,`li`),Sk(2282,`Para gráficos dos tipos `),Qc(2283,`code`),Sk(2284,`donut`),Kg(),Sk(2285,` e `),Qc(2286,`code`),Sk(2287,`pie`),Kg(),Sk(2288,`, espera-se `),Qc(2289,`em`),Sk(2290,`number`),Kg(),Sk(2291,`;`),Kg(),Qc(2292,`li`),Sk(2293,`Para gráficos dos tipos `),Qc(2294,`code`),Sk(2295,`area`),Kg(),Sk(2296,`, `),Qc(2297,`code`),Sk(2298,`bar`),Kg(),Sk(2299,`, `),Qc(2300,`code`),Sk(2301,`column`),Kg(),Sk(2302,`, `),Qc(2303,`code`),Sk(2304,`line`),Kg(),Sk(2305,` e `),Qc(2306,`code`),Sk(2307,`radar`),Kg(),Sk(2308,`, espera-se um `),Qc(2309,`em`),Sk(2310,`array`),Kg(),Sk(2311,` de `),Qc(2312,`code`),Sk(2313,`data`),Kg(),Sk(2314,`.`),Kg()(),Qc(2315,`blockquote`)(2316,`p`),Sk(2317,`Se passado valor `),Qc(2318,`code`),Sk(2319,`null`),Kg(),Sk(2320,` em determinado item da lista, a iteração irá ignorá-lo.`),Kg()()()(),Qc(2321,`tr`,141)(2322,`td`,16)(2323,`div`,17)(2324,`span`,18),Sk(2325,` from`),vu(2326,`br`),Kg()()(),Qc(2327,`td`,19)(2328,`code`,30),Sk(2329,`number`),Kg()(),Qc(2330,`td`,23)(2331,`em`)(2332,`strong`),Sk(2333,`(opcional)`),Kg()(),Qc(2334,`p`),Sk(2335,`Alcance inicial da cor.`),Kg(),Qc(2336,`blockquote`)(2337,`p`),Sk(2338,`Propriedade válida para gráfico do tipo `),Qc(2339,`code`),Sk(2340,`Gauge`),Kg(),Sk(2341,`.`),Kg()()()(),Qc(2342,`tr`,142)(2343,`td`,16)(2344,`div`,17)(2345,`span`,18),Sk(2346,` label`),vu(2347,`br`),Kg()()(),Qc(2348,`td`,19)(2349,`code`,44),Sk(2350,`string`),Kg()(),Qc(2351,`td`,23)(2352,`em`)(2353,`strong`),Sk(2354,`(opcional)`),Kg()(),Qc(2355,`p`),Sk(2356,`Rótulo referência da série.`),Kg()()(),Qc(2357,`tr`,143)(2358,`td`,16)(2359,`div`,17)(2360,`span`,18),Sk(2361,` stackGroupName`),vu(2362,`br`),Kg()()(),Qc(2363,`td`,19)(2364,`code`,44),Sk(2365,`string`),Kg()(),Qc(2366,`td`,23)(2367,`em`)(2368,`strong`),Sk(2369,`(opcional)`),Kg()(),Qc(2370,`p`),Sk(2371,`Agrupa as séries em barras ou colunas que receberem o mesmo `),Qc(2372,`code`),Sk(2373,`stackGroupName`),Kg(),Sk(2374,`. Exemplo:`),Kg(),Qc(2375,`ul`)(2376,`li`),Sk(2377,`Serie A: `),Qc(2378,`code`),Sk(2379,`{ data: 500, stackGroupName: 'group1' ... }`),Kg(),Sk(2380,`;`),Kg(),Qc(2381,`li`),Sk(2382,`Série B: `),Qc(2383,`code`),Sk(2384,`{ data: 200, stackGroupName: 'group1' ... }`),Kg(),Sk(2385,`.`),Kg(),Qc(2386,`li`),Sk(2387,`Série C: `),Qc(2388,`code`),Sk(2389,`{ data: 100, stackGroupName: 'group2' ... }`),Kg(),Sk(2390,`.`),Kg(),Qc(2391,`li`),Sk(2392,`Série D: `),Qc(2393,`code`),Sk(2394,`{ data: 400, stackGroupName: 'group2' ... }`),Kg(),Sk(2395,`.`),Kg()(),Qc(2396,`p`),Sk(2397,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),Kg(),Qc(2398,`blockquote`)(2399,`p`),Sk(2400,`Válido para gráfico do tipo `),Qc(2401,`code`),Sk(2402,`Column`),Kg(),Sk(2403,` e `),Qc(2404,`code`),Sk(2405,`Bar`),Kg(),Sk(2406,`. Essa propriedade é ignorada caso a propriedade `),Qc(2407,`code`),Sk(2408,`stacked`),Kg(),Sk(2409,` da interface `),Qc(2410,`code`),Sk(2411,`PoChartOptions`),Kg(),Sk(2412,` esteja como `),Qc(2413,`code`),Sk(2414,`true`),Kg(),Sk(2415,`.`),Kg()(),Qc(2416,`blockquote`)(2417,`p`),Sk(2418,`Essa propriedade habilita a propriedade `),Qc(2419,`code`),Sk(2420,`p-data-label`),Kg(),Sk(2421,` por padrão, podendo ser desabilitada passando `),Qc(2422,`code`),Sk(2423,`[p-data-label]={ fixed: false }`),Kg(),Sk(2424,`.`),Kg()()()(),Qc(2425,`tr`,144)(2426,`td`,16)(2427,`div`,17)(2428,`span`,18),Sk(2429,` to`),vu(2430,`br`),Kg()()(),Qc(2431,`td`,19)(2432,`code`,30),Sk(2433,`number`),Kg()(),Qc(2434,`td`,23)(2435,`em`)(2436,`strong`),Sk(2437,`(opcional)`),Kg()(),Qc(2438,`p`),Sk(2439,`Alcance final da cor.`),Kg(),Qc(2440,`blockquote`)(2441,`p`),Sk(2442,`Propriedade válida para gráfico do tipo `),Qc(2443,`code`),Sk(2444,`Gauge`),Kg(),Sk(2445,`.`),Kg()()()(),Qc(2446,`tr`,145)(2447,`td`,16)(2448,`div`,17)(2449,`span`,18),Sk(2450,` tooltip`),vu(2451,`br`),Kg()()(),Qc(2452,`td`,19)(2453,`code`,44),Sk(2454,`string `),Kg(),Qc(2455,`code`,146),Sk(2456,` ((params: any) => string)`),Kg()(),Qc(2457,`td`,23)(2458,`em`)(2459,`strong`),Sk(2460,`(opcional)`),Kg()(),Qc(2461,`p`),Sk(2462,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),Qc(2463,`em`),Sk(2464,`chart`),Kg(),Sk(2465,`.`),Kg(),Qc(2466,`p`),Sk(2467,`Formatos aceitos:`),Kg(),Qc(2468,`ul`)(2469,`li`)(2470,`p`)(2471,`strong`),Sk(2472,`string`),Kg(),Sk(2473,`: pode conter marcadores dinâmicos e HTML simples.`),Kg()(),Qc(2474,`li`)(2475,`p`),Sk(2476,`Marcadores disponíveis:`),Kg()(),Qc(2477,`li`)(2478,`p`)(2479,`code`),Sk(2480,`{name}`),Kg(),Sk(2481,` → Nome do item/categoria.`),Kg()(),Qc(2482,`li`)(2483,`p`)(2484,`code`),Sk(2485,`{seriesName}`),Kg(),Sk(2486,` → Nome da série.`),Kg()(),Qc(2487,`li`)(2488,`p`)(2489,`code`),Sk(2490,`{value}`),Kg(),Sk(2491,` → Valor correspondente.`),Kg()(),Qc(2492,`li`)(2493,`p`)(2494,`strong`),Sk(2495,`function`),Kg(),Sk(2496,`: função que recebe o objeto `),Qc(2497,`code`),Sk(2498,`params`),Kg(),Sk(2499,` e deve retornar uma `),Qc(2500,`em`),Sk(2501,`string`),Kg(),Sk(2502,` com o conteúdo da tooltip.`),Kg()()(),Qc(2503,`blockquote`)(2504,`p`),Sk(2505,`É possível utilizar marcação HTML simples (`),Qc(2506,`code`),Sk(2507,`<b>`),Kg(),Sk(2508,`, `),Qc(2509,`code`),Sk(2510,`<i>`),Kg(),Sk(2511,`, `),Qc(2512,`code`),Sk(2513,`<br>`),Kg(),Sk(2514,`, `),Qc(2515,`code`),Sk(2516,`<hr>`),Kg(),Sk(2517,`, etc.) que será interpretada via `),Qc(2518,`code`),Sk(2519,`innerHTML`),Kg(),Sk(2520,`.`),Kg()(),Qc(2521,`blockquote`)(2522,`p`),Sk(2523,`Formatação customizada (será convertido internamente para HTML):`),Kg()(),Qc(2524,`ul`)(2525,`li`)(2526,`code`),Sk(2527,`\\n`),Kg(),Sk(2528,` → quebra de linha (`),Qc(2529,`code`),Sk(2530,`<br>`),Kg(),Sk(2531,`).`),Kg(),Qc(2532,`li`)(2533,`code`),Sk(2534,`**texto**`),Kg(),Sk(2535,` → negrito (`),Qc(2536,`code`),Sk(2537,`<b>`),Kg(),Sk(2538,`).`),Kg(),Qc(2539,`li`)(2540,`code`),Sk(2541,`__texto__`),Kg(),Sk(2542,` → itálico (`),Qc(2543,`code`),Sk(2544,`<i>`),Kg(),Sk(2545,`).`),Kg()(),Qc(2546,`blockquote`)(2547,`p`),Sk(2548,`Caso não seja informado um valor para o `),Qc(2549,`em`),Sk(2550,`tooltip`),Kg(),Sk(2551,`, será exibido da seguinte forma:`),Kg()(),Qc(2552,`ul`)(2553,`li`)(2554,`code`),Sk(2555,`donut`),Kg(),Sk(2556,`, `),Qc(2557,`code`),Sk(2558,`label`),Kg(),Sk(2559,`: valor proporcional ao total em porcentagem.`),Kg(),Qc(2560,`li`)(2561,`code`),Sk(2562,`radar`),Kg(),Sk(2563,`: nome da série, o nome do indicator e os valores correspondentes.`),Kg(),Qc(2564,`li`)(2565,`code`),Sk(2566,`area`),Kg(),Sk(2567,`, `),Qc(2568,`code`),Sk(2569,`bar`),Kg(),Sk(2570,`, `),Qc(2571,`code`),Sk(2572,`column`),Kg(),Sk(2573,`, `),Qc(2574,`code`),Sk(2575,`line`),Kg(),Sk(2576,` e `),Qc(2577,`code`),Sk(2578,`pie`),Kg(),Sk(2579,`: `),Qc(2580,`code`),Sk(2581,`label`),Kg(),Sk(2582,`: `),Qc(2583,`code`),Sk(2584,`data`),Kg(),Sk(2585,`.`),Kg()(),Qc(2586,`h3`),Sk(2587,`Exemplos:`),Kg(),Qc(2588,`p`)(2589,`strong`),Sk(2590,`Usando string com placeholders:`),Kg()(),Qc(2591,`pre`)(2592,`code`,147),Sk(2593,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),Kg()(),Qc(2594,`p`)(2595,`strong`),Sk(2596,`Usando função de callback:`),Kg()(),Qc(2597,`pre`)(2598,`code`,147),Sk(2599,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),Kg()()()(),Qc(2600,`tr`,148)(2601,`td`,16)(2602,`div`,17)(2603,`span`,18),Sk(2604,` type`),vu(2605,`br`),Kg()()(),Qc(2606,`td`,19)(2607,`code`,46),Sk(2608,`PoChartType`),Kg()(),Qc(2609,`td`,23)(2610,`em`)(2611,`strong`),Sk(2612,`(opcional)`),Kg()(),Qc(2613,`p`),Sk(2614,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),Qc(2615,`code`),Sk(2616,`column`),Kg(),Sk(2617,` e `),Qc(2618,`code`),Sk(2619,`line`),Kg(),Sk(2620,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),Kg(),Qc(2621,`ul`)(2622,`li`),Sk(2623,`Serie A: `),Qc(2624,`code`),Sk(2625,`{ type: ChartType.Column, data: ... }`),Kg(),Sk(2626,`;`),Kg(),Qc(2627,`li`),Sk(2628,`Série B: `),Qc(2629,`code`),Sk(2630,`{ type: ChartType.Line, data: ... }`),Kg(),Sk(2631,`.`),Kg()(),Qc(2632,`p`),Sk(2633,`Se tanto `),Qc(2634,`code`),Sk(2635,`p-type`),Kg(),Sk(2636,` quanto `),Qc(2637,`code`),Sk(2638,`{ type }`),Kg(),Sk(2639,` forem ignorados, o padrão gerado pelo componente será:`),Kg(),Qc(2640,`ul`)(2641,`li`)(2642,`code`),Sk(2643,`column`),Kg(),Sk(2644,`: se `),Qc(2645,`code`),Sk(2646,`data`),Kg(),Sk(2647,` receber `),Qc(2648,`code`),Sk(2649,`Array<number>`),Kg(),Sk(2650,`;`),Kg(),Qc(2651,`li`)(2652,`code`),Sk(2653,`pie`),Kg(),Sk(2654,`: se `),Qc(2655,`code`),Sk(2656,`data`),Kg(),Sk(2657,` for `),Qc(2658,`em`),Sk(2659,`number`),Kg(),Sk(2660,`.`),Kg()(),Qc(2661,`blockquote`)(2662,`p`),Sk(2663,`Se utilizada a propriedade `),Qc(2664,`code`),Sk(2665,`p-type`),Kg(),Sk(2666,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),Qc(2667,`code`),Sk(2668,`{type}`),Kg(),Sk(2669,` da primeira série sobrescreverá o valor definido em `),Qc(2670,`code`),Sk(2671,`p-type`),Kg(),Sk(2672,`.`),Kg()(),Qc(2673,`blockquote`)(2674,`p`),Sk(2675,`O componente só exibirá as séries que tiverem o mesmo `),Qc(2676,`code`),Sk(2677,`type`),Kg(),Sk(2678,` definido, exceto para mesclagem para tipos `),Qc(2679,`code`),Sk(2680,`column`),Kg(),Sk(2681,` e `),Qc(2682,`code`),Sk(2683,`line`),Kg(),Sk(2684,`.`),Kg()()()()(),Qc(2685,`h3`),Sk(2686,`Enums`),Kg(),Qc(2687,`h4`,149)(2688,`code`,5),Sk(2689,`PoChartLabelFormat`),Kg()(),Qc(2690,`div`,2)(2691,`p`)(2692,`em`),Sk(2693,`Enum`),Kg(),Qc(2694,`code`),Sk(2695,`PoChartLabelFormat`),Kg(),Sk(2696,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),Kg()(),Qc(2697,`h4`,11),Sk(2698,`Propriedades`),Kg(),Qc(2699,`table`,12)(2700,`tr`,13)(2701,`th`,14),Sk(2702,`Nome`),Kg(),Qc(2703,`th`,14),Sk(2704,`Descrição`),Kg()(),Qc(2705,`tr`,150)(2706,`td`,16)(2707,`div`,17)(2708,`span`,18),Sk(2709,` Number`),vu(2710,`br`),Kg()()(),Qc(2711,`td`,23)(2712,`p`),Sk(2713,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),Qc(2714,`code`),Sk(2715,`'1.2-2'`),Kg(),Sk(2716,` da `),Qc(2717,`a`,151),Sk(2718,`DecimalPipe`),Kg(),Sk(2719,`.`),Kg()()(),Qc(2720,`tr`,152)(2721,`td`,16)(2722,`div`,17)(2723,`span`,18),Sk(2724,` Currency`),vu(2725,`br`),Kg()()(),Qc(2726,`td`,23)(2727,`p`),Sk(2728,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),Qc(2729,`a`,153),Sk(2730,`DEFAULT_CURRENCY_CODE`),Kg(),Sk(2731,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),Qc(2732,`a`,154),Sk(2733,`LOCALE_ID`),Kg(),Sk(2734,` da aplicação. A configuração pode ser feita da seguinte forma:`),Kg(),Qc(2735,`pre`)(2736,`code`),Sk(2737,`import { LOCALE_ID } from '@angular/core';
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
`),Kg()()()()(),Qc(2738,`h4`,155)(2739,`code`,5),Sk(2740,`PoChartType`),Kg()(),Qc(2741,`div`,2)(2742,`p`)(2743,`em`),Sk(2744,`Enum`),Kg(),Qc(2745,`code`),Sk(2746,`PoChartType`),Kg(),Sk(2747,` para especificação dos tipos de gráficos.`),Kg()(),Qc(2748,`h4`,11),Sk(2749,`Propriedades`),Kg(),Qc(2750,`table`,12)(2751,`tr`,13)(2752,`th`,14),Sk(2753,`Nome`),Kg(),Qc(2754,`th`,14),Sk(2755,`Descrição`),Kg()(),Qc(2756,`tr`,156)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),Sk(2760,` Area`),vu(2761,`br`),Kg()()(),Qc(2762,`td`,23)(2763,`p`),Sk(2764,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),Kg()()(),Qc(2765,`tr`,157)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),Sk(2769,` Donut`),vu(2770,`br`),Kg()()(),Qc(2771,`td`,23)(2772,`p`),Sk(2773,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),Kg()()(),Qc(2774,`tr`,158)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),Sk(2778,` Pie`),vu(2779,`br`),Kg()()(),Qc(2780,`td`,23)(2781,`p`),Sk(2782,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),Kg()()(),Qc(2783,`tr`,159)(2784,`td`,16)(2785,`div`,17)(2786,`span`,18),Sk(2787,` Line`),vu(2788,`br`),Kg()()(),Qc(2789,`td`,23)(2790,`p`),Sk(2791,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Qc(2792,`code`),Sk(2793,`column`),Kg(),Sk(2794,` e `),Qc(2795,`code`),Sk(2796,`area`),Kg(),Sk(2797,`, definindo-se o tipo através da propriedade `),Qc(2798,`code`),Sk(2799,`PoChartSerie.type`),Kg(),Sk(2800,`.`),Kg()()(),Qc(2801,`tr`,160)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),Sk(2805,` Column`),vu(2806,`br`),Kg()()(),Qc(2807,`td`,23)(2808,`p`),Sk(2809,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),Kg()()(),Qc(2810,`tr`,161)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),Sk(2814,` Bar`),vu(2815,`br`),Kg()()(),Qc(2816,`td`,23)(2817,`p`),Sk(2818,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),Kg()()(),Qc(2819,`tr`,162)(2820,`td`,16)(2821,`div`,17)(2822,`span`,18),Sk(2823,` Gauge`),vu(2824,`br`),Kg()()(),Qc(2825,`td`,23)(2826,`p`),Sk(2827,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),Kg(),Qc(2828,`ul`)(2829,`li`),Sk(2830,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),Kg(),Qc(2831,`li`),Sk(2832,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),Kg()()()(),Qc(2833,`tr`,163)(2834,`td`,16)(2835,`div`,17)(2836,`span`,18),Sk(2837,` Radar`),vu(2838,`br`),Kg()()(),Qc(2839,`td`,23)(2840,`p`),Sk(2841,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function _t(r,N){if(r&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-chart-basic-view`)(2,`sample-po-chart-labs-view`)(3,`sample-po-chart-coffee-ranking-view`)(4,`sample-po-chart-stacked-view`)(5,`sample-po-chart-summary-view`)(6,`sample-po-chart-world-exports-view`)(7,`sample-po-chart-technology-skill-view`),Kg()}if(r&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Pt=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:d||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Chart`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(d,i){d&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,_t,8,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-chart-doc`),Kg()()()),d&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,fe,ve,Pe,Te,Me,De,Ae,Re],encapsulation:2,changeDetection:1})}return r})()}];var Ge=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[GV.forChild(Pt),GV]})}return r})();var Tn=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[M,Ge]})}return r})();export{Tn as DocPoChartModule};