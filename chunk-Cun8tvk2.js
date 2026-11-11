import{n as P,t as M}from"./main-G4GMLTOQ.js";import{$ as R4,Ei as WV,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ii as ZO,Ja as we$1,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,On as sie,Or as H_,Ot as Zte,P as Joe,Pr as JL,Pt as bae,Ri as Zg,Rr as Jn,Sn as q4,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,an as j4,bi as Uk,cr as Bk,ea as ge,er as Ab,f as Cze,fi as RZ,gi as Tk,hi as TZ,ir as BO,it as Sa,j as I4,jr as I,k as Goe,no as yk,nr as An,qa as vt,qi as de,rt as S4,sa as jk,tr as Ak,va as nk,vn as oi,w as Fc,wa as p,xi as VO,ya as nm}from"./chunk-BJubg121.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var Be=()=>({label:`Angular`,data:100});var We=()=>({label:`React`,data:10});var Fe=(r,N)=>[r,N];var Ce=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:2,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&(Jc(0,`po-widget`),_u(1,`po-chart`,0),Zg()),d&2&&(Ig(),Ab(`p-series`,Uk(3,Fe,jk(1,Be),jk(2,We))))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r});var fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Chart Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-widget>
  <po-chart
    [p-series]="[
      { label: 'Angular', data: 100 },
      { label: 'React', data: 10 }
    ]"
  >
  </po-chart>
</po-widget>`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-chart-basic`),Zg(),_u(23,`hr`)),d&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Ie,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return r})();var ze=()=>({value:`fillPoints`,label:`fillPoints`});var z=r=>[r];var He=()=>({label:`legend`,value:`legend`});var Ze=()=>({label:`roseType`,value:`roseType`});var Ye=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var je=()=>({label:`pointer`,value:`pointer`});var Ue=()=>({label:`stacked`,value:`stacked`});var Je=()=>({value:`fixed`,label:`Fixed`});function Xe(r,N){if(r&1){let l=ZO();Jc(0,`po-checkbox-group`,54),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),$_(i)}),vt(`p-change`,function(){H_(l);let i=nk();return $_(i.changeDataLabelOptions())}),Zg()}if(r&2){let l=nk();Ab(`p-options`,Bk(3,z,jk(2,Je))),Kb(`ngModel`,l.selectedValuesDataLabel),Y0()}}function Qe(r,N){if(r&1){let l=ZO();Jc(0,`po-number`,55),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.valueGauge,i)||(s.valueGauge=i),$_(i)}),vt(`p-change`,function(i){H_(l);let s=nk();return $_(s.changeValueGauge(i))}),Zg()}if(r&2){let l=nk();Kb(`ngModel`,l.valueGauge),Y0()}}function Ke(r,N){if(r&1){let l=ZO();Jc(0,`po-radio-group`,56),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.selectedShapeOption,i)||(s.selectedShapeOption=i),$_(i)}),Zg(),Jc(1,`po-switch`,57),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.selectedSplitArea,i)||(s.selectedSplitArea=i),$_(i)}),Zg(),Jc(2,`po-switch`,58),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),$_(i)}),Zg()}if(r&2){let l=nk();Ab(`p-options`,l.optionsShapeOption),Kb(`ngModel`,l.selectedShapeOption),Y0(),Ig(),Kb(`ngModel`,l.selectedSplitArea),Y0(),Ig(),Kb(`ngModel`,l.selectedAreaStyle),Y0()}}function $e(r,N){if(r&1){let l=ZO();Jc(0,`po-input`,59),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.data,i)||(s.data=i),$_(i)}),Zg()}if(r&2){let l=nk();Kb(`ngModel`,l.data),Y0()}}function et(r,N){if(r&1){let l=ZO();Jc(0,`po-input`,60),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.stackGroupName,i)||(s.stackGroupName=i),$_(i)}),Zg()}if(r&2){let l=nk();Kb(`ngModel`,l.stackGroupName),Y0()}}function tt(r,N){if(r&1){let l=ZO();Jc(0,`po-number`,61),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.fromGauge,i)||(s.fromGauge=i),$_(i)}),Zg()}if(r&2){let l=nk();Kb(`ngModel`,l.fromGauge),Y0()}}function nt(r,N){if(r&1){let l=ZO();Jc(0,`po-number`,62),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.toGauge,i)||(s.toGauge=i),$_(i)}),Zg()}if(r&2){let l=nk();Kb(`ngModel`,l.toGauge),Y0()}}function it(r,N){if(r&1){let l=ZO();Jc(0,`div`,3)(1,`po-button`,63),vt(`p-click`,function(){H_(l);let i=nk();return $_(i.addData())}),Zg()()}}function ot(r,N){if(r&1){let l=ZO();Jc(0,`po-number`,64),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.min,i)||(s.min=i),$_(i)}),Zg(),Jc(1,`po-number`,65),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.max,i)||(s.max=i),$_(i)}),Zg(),Jc(2,`po-input`,66),W0(),Zb(`ngModelChange`,function(i){H_(l);let s=nk();return Ak(s.colorIndicator,i)||(s.colorIndicator=i),$_(i)}),Zg(),Jc(3,`div`,3)(4,`po-button`,67),vt(`p-click`,function(){H_(l);let i=nk();return $_(i.addData())}),Zg()()}if(r&2){let l=nk();Kb(`ngModel`,l.min),Y0(),Ig(),Kb(`ngModel`,l.max),Y0(),Ig(),Kb(`ngModel`,l.colorIndicator),Y0(),Ig(2),Ab(`p-disabled`,l.isTypeRadar&&!l.categories)}}var ye=(()=>{class r$1{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:Sa.Line},{label:`Area`,value:Sa.Area},{label:`Bar`,value:Sa.Bar},{label:`Column`,value:Sa.Column},{label:`Donut`,value:Sa.Donut},{label:`Pie`,value:Sa.Pie},{label:`Gauge`,value:Sa.Gauge},{label:`Radar`,value:Sa.Radar}];labelTypeOptions=[{label:`Number`,value:S4.Number},{label:`Currency`,value:S4.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:l})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===Sa.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===Sa.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=Sa.Gauge,this.type=Sa.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=Sa.Radar,this.type=Sa.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=r(r({},this.options),l?r({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===Sa.Line||this.type===Sa.Area||this.type===Sa.Column||this.type===Sa.Bar||this.type===Sa.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static ɵfac=function(d){return new(d||r$1)};static ɵcmp=Jn({type:r$1,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:67,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let s=ZO();Jc(0,`po-widget`)(1,`po-chart`,1),vt(`p-series-click`,function(a){return i.changeEvent(`p-series-click`,a)})(`p-series-hover`,function(a){return i.changeEvent(`p-series-hover`,a)}),Zg()(),_u(2,`po-divider`,2),Jc(3,`div`,3),_u(4,`po-info`,4),Zg(),_u(5,`po-divider`,5),Jc(6,`form`)(7,`po-select`,6),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.type,a)||(i.type=a),$_(a)}),vt(`p-change`,function(a){return i.changeType(a)}),Zg(),Jc(8,`po-number`,7),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.height,a)||(i.height=a),$_(a)}),Zg(),Jc(9,`po-input`,8),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.title,a)||(i.title=a),$_(a)}),Zg(),VO(10,Xe,1,5,`po-checkbox-group`,9),Zg(),_u(11,`po-divider`,10),Jc(12,`form`,null,0)(14,`div`,3)(15,`po-switch`,11),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.isTypeGauge,a)||(i.isTypeGauge=a),$_(a)}),vt(`p-change`,function(a){return i.changeSwitchGauge(a)}),Zg(),Jc(16,`po-switch`,12),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.isTypeRadar,a)||(i.isTypeRadar=a),$_(a)}),vt(`p-change`,function(a){return i.changeSwitchRadar(a)}),Zg(),VO(17,Qe,1,1,`po-number`,13),VO(18,Ke,3,4),Zg(),Jc(19,`div`,3)(20,`po-input`,14),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.label,a)||(i.label=a),$_(a)}),Zg(),VO(21,$e,1,1,`po-input`,15),Jc(22,`po-select`,16),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.serieType,a)||(i.serieType=a),$_(a)}),vt(`p-change`,function(a){return i.changeType(a)}),Zg(),Jc(23,`po-input`,17),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.tooltip,a)||(i.tooltip=a),$_(a)}),Zg(),Jc(24,`po-input`,18),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.color,a)||(i.color=a),$_(a)}),Zg(),VO(25,et,1,1,`po-input`,19),VO(26,tt,1,1,`po-number`,20),VO(27,nt,1,1,`po-number`,21),VO(28,it,2,0,`div`,3),Zg()(),Jc(29,`div`,3),_u(30,`po-divider`,22),Jc(31,`po-input`,23),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.categories,a)||(i.categories=a),$_(a)}),vt(`p-blur`,function(){return i.addCategories()}),Zg(),VO(32,ot,5,4),Zg(),Jc(33,`form`)(34,`div`,3),_u(35,`po-divider`,24),Jc(36,`po-number`,25),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.minRange,a)||(i.options.axis.minRange=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(37,`po-number`,26),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(38,`po-number`,27),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(39,`po-select`,28),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.labelType,a)||(i.options.axis.labelType=a),$_(a)}),vt(`p-change`,function(){return i.addOptions()}),Zg(),Jc(40,`po-number`,29),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(41,`po-number`,30),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(42,`po-number`,31),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(43,`po-number`,32),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(44,`po-number`,33),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.innerRadius,a)||(i.options.innerRadius=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(45,`po-number`,34),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.borderRadius,a)||(i.options.borderRadius=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(46,`po-input`,35),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.firstColumnName,a)||(i.options.firstColumnName=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(47,`po-input`,36),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(48,`po-input`,37),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.descriptionChart,a)||(i.options.descriptionChart=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg(),Jc(49,`po-input`,38),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),$_(a)}),vt(`p-blur`,function(){return i.addOptions()}),Zg()(),Jc(50,`div`,3)(51,`po-checkbox-group`,39),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),$_(a)}),vt(`p-change`,function(){return i.changeHeaderOptions()}),Zg(),Jc(52,`po-checkbox-group`,40),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),$_(a)}),vt(`p-change`,function(){return i.changeAxisOptions()}),Zg(),Jc(53,`po-checkbox-group`,41),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),$_(a)}),vt(`p-change`,function(){return i.changeDataZoomOptions()}),Zg(),Jc(54,`po-checkbox-group`,42),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),$_(a)}),vt(`p-change`,function(){return i.changeFillPointsOptions()}),Zg(),Jc(55,`po-checkbox-group`,43),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),$_(a)}),vt(`p-change`,function(){return i.changeLegendOptions()}),Zg(),Jc(56,`po-checkbox-group`,44),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedRoseType,a)||(i.selectedRoseType=a),$_(a)}),vt(`p-change`,function(){return i.changeRoseTypeOptions()}),Zg(),Jc(57,`po-checkbox-group`,45),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),$_(a)}),vt(`p-change`,function(){return i.changeShowFromToLegend()}),Zg(),Jc(58,`po-checkbox-group`,46),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedPointer,a)||(i.selectedPointer=a),$_(a)}),vt(`p-change`,function(){return i.changePointer()}),Zg(),Jc(59,`po-checkbox-group`,47),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedStacked,a)||(i.selectedStacked=a),$_(a)}),vt(`p-change`,function(){return i.changeStacked()}),Zg(),Jc(60,`po-radio-group`,48),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),$_(a)}),vt(`p-change`,function(){return i.changeLegendVerticalPosition()}),Zg(),Jc(61,`po-radio-group`,49),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),$_(a)}),vt(`p-change`,function(){return i.changeLegendPosition()}),Zg(),Jc(62,`po-radio-group`,50),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedLegendType,a)||(i.selectedLegendType=a),$_(a)}),vt(`p-change`,function(){return i.changeLegendType()}),Zg(),Jc(63,`po-radio-group`,51),W0(),Zb(`ngModelChange`,function(a){return H_(s),Ak(i.selectedRendererOption,a)||(i.selectedRendererOption=a),$_(a)}),vt(`p-change`,function(){return i.changeRendererOption()}),Zg()(),_u(64,`po-divider`,52),Jc(65,`div`,3)(66,`po-button`,53),vt(`p-click`,function(){return i.restore()}),Zg()()()}d&2&&(Ig(),Ab(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),Ig(3),Ab(`p-value`,i.event),Ig(3),Kb(`ngModel`,i.type),Ab(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),Y0(),Ig(),Kb(`ngModel`,i.height),Y0(),Ig(),Kb(`ngModel`,i.title),Y0(),Ig(),BO(i.isTypeGrid()?10:-1),Ig(5),Kb(`ngModel`,i.isTypeGauge),Y0(),Ig(),Kb(`ngModel`,i.isTypeRadar),Y0(),Ig(),BO(i.isTypeGauge?17:-1),Ig(),BO(i.isTypeRadar?18:-1),Ig(2),Kb(`ngModel`,i.label),Y0(),Ig(),BO(i.isTypeGauge?-1:21),Ig(),Kb(`ngModel`,i.serieType),Ab(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),Y0(),Ig(),Ab(`p-disabled`,i.disabledTooltip),Kb(`ngModel`,i.tooltip),Y0(),Ig(),Kb(`ngModel`,i.color),Y0(),Ig(),BO(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?25:-1),Ig(),BO(i.isTypeGauge?26:-1),Ig(),BO(i.isTypeGauge?27:-1),Ig(),BO(i.isTypeRadar?-1:28),Ig(3),yk(i.isTypeRadar?`po-md-3`:`po-md-4`),Ab(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),Kb(`ngModel`,i.categories),Y0(),Ig(),BO(i.isTypeRadar?32:-1),Ig(4),Kb(`ngModel`,i.options.axis.minRange),Y0(),Ig(),Kb(`ngModel`,i.options.axis.maxRange),Y0(),Ig(),Kb(`ngModel`,i.options.axis.gridLines),Y0(),Ig(),Ab(`p-options`,i.labelTypeOptions),Kb(`ngModel`,i.options.axis.labelType),Y0(),Ig(),Kb(`ngModel`,i.options.axis.paddingBottom),Y0(),Ig(),Kb(`ngModel`,i.options.axis.paddingLeft),Y0(),Ig(),Kb(`ngModel`,i.options.axis.paddingRight),Y0(),Ig(),Kb(`ngModel`,i.options.axis.rotateLegend),Y0(),Ig(),Kb(`ngModel`,i.options.innerRadius),Y0(),Ig(),Kb(`ngModel`,i.options.borderRadius),Y0(),Ig(),Kb(`ngModel`,i.options.firstColumnName),Y0(),Ig(),Kb(`ngModel`,i.options.textCenterGraph),Y0(),Ig(),Kb(`ngModel`,i.options.descriptionChart),Y0(),Ig(),Kb(`ngModel`,i.options.subtitleGauge),Y0(),Ig(2),Ab(`p-columns`,2)(`p-options`,i.optionsHeader),Kb(`ngModel`,i.selectedValuesHeader),Y0(),Ig(),Ab(`p-columns`,2)(`p-options`,i.optionsAxis),Kb(`ngModel`,i.selectedValuesAxis),Y0(),Ig(),Ab(`p-columns`,2)(`p-options`,i.optionsDataZoom),Kb(`ngModel`,i.selectedValuesDataZoom),Y0(),Ig(),Ab(`p-columns`,1)(`p-options`,Bk(83,z,jk(82,ze))),Kb(`ngModel`,i.selectedValuesFillPoints),Y0(),Ig(),Ab(`p-options`,Bk(86,z,jk(85,He))),Kb(`ngModel`,i.selectedValuesLegend),Y0(),Ig(),Ab(`p-options`,Bk(89,z,jk(88,Ze))),Kb(`ngModel`,i.selectedRoseType),Y0(),Ig(),Ab(`p-options`,Bk(92,z,jk(91,Ye))),Kb(`ngModel`,i.selectedFromToLegend),Y0(),Ig(),Ab(`p-options`,Bk(95,z,jk(94,je))),Kb(`ngModel`,i.selectedPointer),Y0(),Ig(),Ab(`p-options`,Bk(98,z,jk(97,Ue))),Kb(`ngModel`,i.selectedStacked),Y0(),Ig(),Ab(`p-options`,i.optionsLegendVerticalPosition),Kb(`ngModel`,i.selectedLegendVerticalPosition),Y0(),Ig(),Ab(`p-options`,i.optionsLegendPosition),Kb(`ngModel`,i.selectedLegendPosition),Y0(),Ig(),Ab(`p-options`,i.optionsLegendType),Kb(`ngModel`,i.selectedLegendType),Y0(),Ig(),Ab(`p-options`,i.optionsRendererOption),Kb(`ngModel`,i.selectedRendererOption),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Cze,Nf,I4,j4,Goe,Zte,Koe,R4,Joe,bae],encapsulation:2,changeDetection:1})}return r$1})();var rt=r=>({"docs-sample-code-tabs":r});var ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Chart Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-widget>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-chart-labs`),Zg(),_u(23,`hr`)),d&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,rt,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ye],encapsulation:2,changeDetection:1})}return r})();var _e=(()=>{class r{poAlert=p(sie);participationByCountryInWorldExportsType=Sa.Line;evolutionOfCoffeeAndSomeCompetitorsType=Sa.Column;coffeConsumingChartType=Sa.Donut;consumptionPerCapitaType=Sa.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:Sa.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:Sa.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:Sa.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:Sa.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:Sa.Column},{label:`2017`,data:[93,52,18],type:Sa.Column},{label:`2020`,data:[95,21,-17],type:Sa.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:Sa.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:S4.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:S4.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,`_blank`)}showMeTheDates(l){this.poAlert.alert({title:`Statistic`,message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[we$1([sie])],decls:34,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[1,`po-md-12`,`po-mt-2`],[`p-title`,`Participation by country in world exports - %`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[1,`po-lg-6`,`po-mt-2`],[`p-title`,`Top 5 coffee producing countries (in tons)`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[1,`po-md-6`,`po-mt-2`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,3,`p-options`,`p-categories`,`p-series`],[`p-height`,`201`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[`p-height`,`201`,1,`po-mt-2`,2,`display`,`block`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`div`,1)(2,`div`,0)(3,`po-widget`,2),_u(4,`po-chart`,3),Zg(),Jc(5,`po-widget`,2),_u(6,`po-chart`,4),Zg()()(),Jc(7,`div`,1)(8,`po-widget`,2),_u(9,`po-chart`,5),Zg()(),Jc(10,`div`,6)(11,`po-widget`,7)(12,`po-chart`,8),vt(`p-series-click`,function(m){return i.searchMore(m)}),Zg()(),Jc(13,`po-widget`,7)(14,`po-chart`,9),vt(`p-series-click`,function(m){return i.showMeTheDates(m)}),Zg()()(),Jc(15,`div`,0)(16,`po-widget`,10),_u(17,`po-chart`,11),Zg(),Jc(18,`div`,10)(19,`po-widget`,12)(20,`div`,13),Tk(21,`66 billion`),Zg(),Jc(22,`div`,14),Tk(23,`cups of coffee are consumed per year in U.S.`),Zg()(),Jc(24,`po-widget`,15)(25,`div`,13),Tk(26,`2nd most`),Zg(),Jc(27,`div`,14),Tk(28,`traded commodity in the world second to Oil.`),Zg()()()()(),Jc(29,`div`,0)(30,`po-container`,16)(31,`div`,17),Tk(32,`Top 10 Largest Coffee Chains in the World`),Zg(),_u(33,`po-table`,18),Zg()()),d&2&&(Ig(4),Ab(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),Ig(2),Ab(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),Ig(3),Ab(`p-height`,834)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),Ig(3),Ab(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),Ig(2),Ab(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),Ig(3),Ab(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),Ig(16),Ab(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[Cze,Fc,q4,bae],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r});var Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Chart - Coffee Ranking`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-chart-coffee-ranking`),Zg(),_u(23,`hr`)),d&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,pt,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,_e],encapsulation:2,changeDetection:1})}return r})();var Te=(()=>{class r{typeBar=Sa.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:8,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Average Temperature by Region`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(Jc(0,`po-container`)(1,`div`,0),Tk(2,`Energy and Climate Analysis`),Zg(),Jc(3,`div`,1)(4,`po-widget`,2),_u(5,`po-chart`,3),Zg(),Jc(6,`po-widget`,2),_u(7,`po-chart`,4),Zg()()()),d&2&&(Ig(5),Ab(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),Ig(2),Ab(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[Cze,Fc,bae],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r});var we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Chart - Stacked`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-chart-stacked`),Zg(),_u(23,`hr`)),d&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ct,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Te],encapsulation:2,changeDetection:1})}return r})();var Le=(()=>{class r{type=Sa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:10,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(Jc(0,`po-container`)(1,`div`,0),Tk(2,`Sales Performance`),Zg(),Jc(3,`div`,1)(4,`div`,2)(5,`po-widget`),_u(6,`po-chart`,3),Zg()(),Jc(7,`div`,2)(8,`po-widget`),_u(9,`po-chart`,4),Zg()()()()),d&2&&(Ig(6),Ab(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),Ig(3),Ab(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[Cze,Fc,bae],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r});var Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Chart - Summary`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-chart-summary`),Zg(),_u(23,`hr`)),d&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ht,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Le],encapsulation:2,changeDetection:1})}return r})();var De=(()=>{class r{participationByCountryInWorldExportsType=Sa.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:3,vars:5,consts:[[1,`po-row`],[1,`po-md-12`],[`p-title`,`Participation by country in world exports - %`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`po-widget`,1),_u(2,`po-chart`,2),Zg()()),d&2&&(Ig(2),Ab(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r});var ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Chart - World Exports`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-chart-world-exports`),Zg(),_u(23,`hr`)),d&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,bt,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,De],encapsulation:2,changeDetection:1})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=Sa.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:5,vars:6,consts:[[1,`po-row`],[1,`po-md-6`],[`p-title`,`Technology Skill Assessment`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`po-widget`,1),_u(2,`po-chart`,2),Zg(),Jc(3,`po-widget`,1),_u(4,`po-chart`,3),Zg()()),d&2&&(Ig(2),Ab(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),Ig(2),Ab(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r});var Ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Chart - Radar`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-chart-technology-skill`),Zg(),_u(23,`hr`)),d&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ft,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ve],encapsulation:2,changeDetection:1})}return r})();var Re=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵcmp=Jn({type:r,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2842,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoChartModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-chart`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoChartComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`O `),Jc(18,`code`),Tk(19,`po-chart`),Zg(),Tk(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),Zg(),Jc(21,`p`),Tk(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),Zg(),Jc(23,`p`),Tk(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),Zg(),Jc(25,`p`),Tk(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Jc(27,`em`),Tk(28,`mouse`),Zg(),Tk(29,` sobre o elemento.`),Zg(),Jc(30,`h4`),Tk(31,`Guia de uso para Gráficos`),Zg(),Jc(32,`blockquote`)(33,`p`),Tk(34,`Veja nosso `),Jc(35,`a`,6),Tk(36,`guia de uso para gráficos`),Zg(),Tk(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),Zg()(),Jc(38,`h4`),Tk(39,`Tokens customizáveis`),Zg(),Jc(40,`p`),Tk(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(42,`blockquote`)(43,`p`),Tk(44,`Para maiores informações, acesse o guia `),Jc(45,`a`,7),Tk(46,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(47,`.`),Zg()(),Jc(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),Tk(52,`Propriedade`),Zg(),Jc(53,`th`),Tk(54,`Descrição`),Zg(),Jc(55,`th`),Tk(56,`Valor Padrão`),Zg()()(),Jc(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),Tk(61,`Chart (po-chart)`),Zg()(),_u(62,`td`)(63,`td`),Zg(),Jc(64,`tr`)(65,`td`)(66,`code`),Tk(67,`--background-color-grid`),Zg()(),Jc(68,`td`),Tk(69,`Cor de background dos gráficos`),Zg(),Jc(70,`td`)(71,`code`),Tk(72,`var(--color-neutral-light-00)`),Zg()()(),Jc(73,`tr`)(74,`td`)(75,`code`),Tk(76,`--color-description-chart`),Zg()(),Jc(77,`td`),Tk(78,`Cor da descrição dos gráficos`),Zg(),Jc(79,`td`)(80,`code`),Tk(81,`var(--color-neutral-dark-70)`),Zg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Tk(85,`--font-family-description-chart`),Zg()(),Jc(86,`td`),Tk(87,`Fonte da descrição dos gráficos`),Zg(),Jc(88,`td`)(89,`code`),Tk(90,`var(--font-family-theme)`),Zg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Tk(94,`--font-size-description-chart`),Zg()(),Jc(95,`td`),Tk(96,`Tamanho da fonte da descrição dos gráficos`),Zg(),Jc(97,`td`)(98,`code`),Tk(99,`var(--font-size-sm)`),Zg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Tk(103,`--font-weight-description-chart`),Zg()(),Jc(104,`td`),Tk(105,`Peso da fonte da descrição dos gráficos`),Zg(),Jc(106,`td`)(107,`code`),Tk(108,`var(--font-weight-normal)`),Zg()()(),Jc(109,`tr`)(110,`td`)(111,`strong`),Tk(112,`Header (po-chart .po-chart-header )`),Zg()(),_u(113,`td`)(114,`td`),Zg(),Jc(115,`tr`)(116,`td`)(117,`code`),Tk(118,`--background-color`),Zg()(),Jc(119,`td`),Tk(120,`Cor de background do cabeçalho`),Zg(),Jc(121,`td`)(122,`code`),Tk(123,`var(--color-neutral-light-00)`),Zg()()(),Jc(124,`tr`)(125,`td`)(126,`code`),Tk(127,`--color`),Zg()(),Jc(128,`td`),Tk(129,`Cor da fonte do cabeçalho`),Zg(),Jc(130,`td`)(131,`code`),Tk(132,`var(--color-neutral-dark-70)`),Zg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Tk(136,`--font-family`),Zg()(),Jc(137,`td`),Tk(138,`Família tipográfica usada`),Zg(),Jc(139,`td`)(140,`code`),Tk(141,`var(--font-family-theme)`),Zg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Tk(145,`--font-size-title`),Zg()(),Jc(146,`td`),Tk(147,`Tamanho da fonte`),Zg(),Jc(148,`td`)(149,`code`),Tk(150,`var(--font-size-default)`),Zg()()(),Jc(151,`tr`)(152,`td`)(153,`code`),Tk(154,`--font-size-icons`),Zg()(),Jc(155,`td`),Tk(156,`Tamanho dos ícones`),Zg(),Jc(157,`td`)(158,`code`),Tk(159,`var(--font-size-md)`),Zg()()(),Jc(160,`tr`)(161,`td`)(162,`code`),Tk(163,`--font-weight`),Zg()(),Jc(164,`td`),Tk(165,`Peso da fonte`),Zg(),Jc(166,`td`)(167,`code`),Tk(168,`var(--font-weight-bold)`),Zg()()(),Jc(169,`tr`)(170,`td`)(171,`strong`),Tk(172,`Chart (po-chart .po-chart)`),Zg()(),_u(173,`td`)(174,`td`),Zg(),Jc(175,`tr`)(176,`td`)(177,`code`),Tk(178,`--color-grid`),Zg()(),Jc(179,`td`),Tk(180,`Cor da linha dos gráficos que possuem eixo`),Zg(),Jc(181,`td`)(182,`code`),Tk(183,`var(--color-neutral-light-20)`),Zg()()(),Jc(184,`tr`)(185,`td`)(186,`code`),Tk(187,`--font-family-grid`),Zg()(),Jc(188,`td`),Tk(189,`Família tipográfica usada nos valores dos eixos`),Zg(),Jc(190,`td`)(191,`code`),Tk(192,`var(--font-family-theme)`),Zg()()(),Jc(193,`tr`)(194,`td`)(195,`code`),Tk(196,`--font-size-grid`),Zg()(),Jc(197,`td`),Tk(198,`Tamanho da fonte usada nos valores dos eixos`),Zg(),Jc(199,`td`)(200,`code`),Tk(201,`var(--font-size-xs)`),Zg()()(),Jc(202,`tr`)(203,`td`)(204,`code`),Tk(205,`--font-weight-grid`),Zg()(),Jc(206,`td`),Tk(207,`Peso da fonte usada nos valores dos eixos`),Zg(),Jc(208,`td`)(209,`code`),Tk(210,`var(--font-weight-normal)`),Zg()()(),Jc(211,`tr`)(212,`td`)(213,`code`),Tk(214,`--color-legend`),Zg()(),Jc(215,`td`),Tk(216,`Cor da fonte da legenda`),Zg(),Jc(217,`td`)(218,`code`),Tk(219,`var(--color-neutral-dark-70)`),Zg()()(),Jc(220,`tr`)(221,`td`)(222,`code`),Tk(223,`--color-legend-scroll-icon-active`),Zg()(),Jc(224,`td`),Tk(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),Jc(226,`code`),Tk(227,`scroll`),Zg()(),Jc(228,`td`)(229,`code`),Tk(230,`var(--color-action-default)`),Zg()()(),Jc(231,`tr`)(232,`td`)(233,`code`),Tk(234,`--color-legend-scroll-icon-inactive`),Zg()(),Jc(235,`td`),Tk(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),Jc(237,`code`),Tk(238,`scroll`),Zg()(),Jc(239,`td`)(240,`code`),Tk(241,`var(--color-action-disabled)`),Zg()()(),Jc(242,`tr`)(243,`td`)(244,`code`),Tk(245,`--border-radius-bar`),Zg()(),Jc(246,`td`),Tk(247,`Tamanho da borda nos graficos `),Jc(248,`code`),Tk(249,`Bar`),Zg(),Tk(250,` e `),Jc(251,`code`),Tk(252,`Column`),Zg()(),Jc(253,`td`)(254,`code`),Tk(255,`var(--border-radius-none)`),Zg()()(),Jc(256,`tr`)(257,`td`)(258,`code`),Tk(259,`--border-color`),Zg()(),Jc(260,`td`),Tk(261,`Cor da borda do gráfico nos Gráficos `),Jc(262,`code`),Tk(263,`Donut`),Zg(),Tk(264,` e `),Jc(265,`code`),Tk(266,`Pie`),Zg()(),Jc(267,`td`)(268,`code`),Tk(269,`var(--color-neutral-light-00)`),Zg()()(),Jc(270,`tr`)(271,`td`)(272,`code`),Tk(273,`--color-hightlight-value`),Zg()(),Jc(274,`td`),Tk(275,`Cor do valor de destaque nos Gráficos `),Jc(276,`code`),Tk(277,`Donut`),Zg(),Tk(278,` e `),Jc(279,`code`),Tk(280,`Gauge`),Zg()(),Jc(281,`td`)(282,`code`),Tk(283,`var(--color-neutral-dark-70)`),Zg()()(),Jc(284,`tr`)(285,`td`)(286,`code`),Tk(287,`--font-family-hightlight-value`),Zg()(),Jc(288,`td`),Tk(289,`Família tipográfica do valor de destaque nos Gráficos `),Jc(290,`code`),Tk(291,`Donut`),Zg(),Tk(292,` e `),Jc(293,`code`),Tk(294,`Gauge`),Zg()(),Jc(295,`td`)(296,`code`),Tk(297,`var(--font-family-theme)`),Zg()()(),Jc(298,`tr`)(299,`td`)(300,`code`),Tk(301,`--font-weight-hightlight-value`),Zg()(),Jc(302,`td`),Tk(303,`Peso da fonte do valor de destaque nos Gráficos `),Jc(304,`code`),Tk(305,`Donut`),Zg(),Tk(306,` e `),Jc(307,`code`),Tk(308,`Gauge`),Zg()(),Jc(309,`td`)(310,`code`),Tk(311,`var(--font-weight-bold)`),Zg()()(),Jc(312,`tr`)(313,`td`)(314,`code`),Tk(315,`--color-base-gauge`),Zg()(),Jc(316,`td`),Tk(317,`Cor da base do gráfico `),Jc(318,`code`),Tk(319,`Gauge`),Zg()(),Jc(320,`td`)(321,`code`),Tk(322,`var(--color-neutral-light-20)`),Zg()()(),Jc(323,`tr`)(324,`td`)(325,`code`),Tk(326,`--color-gauge-pointer-color`),Zg()(),Jc(327,`td`),Tk(328,`Cor do ponteiro do gráfico `),Jc(329,`code`),Tk(330,`Gauge`),Zg()(),Jc(331,`td`)(332,`code`),Tk(333,`var(--color-neutral-dark-70)`),Zg()()(),Jc(334,`tr`)(335,`td`)(336,`code`),Tk(337,`--color-chart-line-point-fill`),Zg()(),Jc(338,`td`),Tk(339,`Cor de dentro do círculo dos gráficos `),Jc(340,`code`),Tk(341,`Line`),Zg(),Tk(342,` e `),Jc(343,`code`),Tk(344,`Area`),Zg()(),Jc(345,`td`)(346,`code`),Tk(347,`var(--color-neutral-light-00)`),Zg()()(),Jc(348,`tr`)(349,`td`)(350,`code`),Tk(351,`--border-color-radar`),Zg()(),Jc(352,`td`),Tk(353,`Cor do eixo da grid do gráfico `),Jc(354,`code`),Tk(355,`Radar`),Zg()(),Jc(356,`td`)(357,`code`),Tk(358,`var(--color-neutral-light-30)`),Zg()()(),Jc(359,`tr`)(360,`td`)(361,`code`),Tk(362,`--color-background-zebra`),Zg()(),Jc(363,`td`),Tk(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),Jc(365,`code`),Tk(366,`Radar`),Zg()(),Jc(367,`td`)(368,`code`),Tk(369,`var(--color-neutral-light-10)`),Zg()()(),Jc(370,`tr`)(371,`td`)(372,`code`),Tk(373,`--color-background-line`),Zg()(),Jc(374,`td`),Tk(375,`Cor das áreas entre as faixas zebradas da grade do `),Jc(376,`code`),Tk(377,`Radar`),Zg()(),Jc(378,`td`)(379,`code`),Tk(380,`none`),Zg()()(),Jc(381,`tr`)(382,`td`)(383,`strong`),Tk(384,`Wrapper (.po-chart-container-gauge)`),Zg()(),_u(385,`td`)(386,`td`),Zg(),Jc(387,`tr`)(388,`td`)(389,`code`),Tk(390,`--background-color-container-gauge`),Zg()(),Jc(391,`td`),Tk(392,`Cor de background do container do gauge`),Zg(),Jc(393,`td`)(394,`code`),Tk(395,`var(--color-neutral-light-00)`),Zg()()()()()(),Jc(396,`div`,8)(397,`h4`,9),Tk(398,`Seletor`),Zg(),Jc(399,`pre`,10),Tk(400,`<po-chart
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
`),Zg()(),Jc(401,`h4`,11),Tk(402,`Propriedades`),Zg(),Jc(403,`table`,12)(404,`tr`,13)(405,`th`,14),Tk(406,`Nome`),Zg(),Jc(407,`th`,14),Tk(408,`Tipo`),Zg(),Jc(409,`th`,14),Tk(410,`Padrão`),Zg(),Jc(411,`th`,14),Tk(412,`Descrição`),Zg()(),Jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),Tk(417,` p-categories`),_u(418,`br`),Zg()()(),Jc(419,`td`,19)(420,`code`,20),Tk(421,`Array<string> `),Zg(),Jc(422,`code`,21),Tk(423,` PoChartRadarOptions`),Zg()(),Jc(424,`td`,22),Tk(425,`-`),Zg(),Jc(426,`td`,23)(427,`em`)(428,`strong`),Tk(429,`(opcional)`),Zg()(),Jc(430,`p`),Tk(431,`Define os valores utilizados na construção das categorias do gráfico.`),Zg(),Jc(432,`p`),Tk(433,`Para gráficos dos tipos `),Jc(434,`em`),Tk(435,`bar`),Zg(),Tk(436,`, `),Jc(437,`em`),Tk(438,`area`),Zg(),Tk(439,`, `),Jc(440,`em`),Tk(441,`column`),Zg(),Tk(442,` e `),Jc(443,`em`),Tk(444,`line`),Zg(),Tk(445,`, representa os nomes das categorias exibidas no eixo.`),Zg(),Jc(446,`p`),Tk(447,`Para gráficos do tipo `),Jc(448,`em`),Tk(449,`radar`),Zg(),Tk(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Jc(451,`code`),Tk(452,`Radar`),Zg(),Tk(453,`.`),Zg(),Jc(454,`blockquote`)(455,`p`),Tk(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),Zg()(),Jc(457,`blockquote`)(458,`p`),Tk(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),Zg()()()(),Jc(460,`tr`,15)(461,`td`,16)(462,`div`,17)(463,`span`,18),Tk(464,` p-custom-actions`),_u(465,`br`),Zg()()(),Jc(466,`td`,19)(467,`code`,24),Tk(468,`Array<PoPopupAction>`),Zg()(),Jc(469,`td`,22),Tk(470,`-`),Zg(),Jc(471,`td`,23)(472,`em`)(473,`strong`),Tk(474,`(opcional)`),Zg()(),Jc(475,`p`),Tk(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),Zg()()(),Jc(477,`tr`,15)(478,`td`,16)(479,`div`,17)(480,`span`,18),Tk(481,` p-data-label`),_u(482,`br`),Zg()()(),Jc(483,`td`,19)(484,`code`,25),Tk(485,`PoChartDataLabel`),Zg()(),Jc(486,`td`,22),Tk(487,`-`),Zg(),Jc(488,`td`,23)(489,`em`)(490,`strong`),Tk(491,`(opcional)`),Zg()(),Jc(492,`p`),Tk(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),Zg(),Jc(494,`p`),Tk(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),Zg(),Jc(496,`ul`)(497,`li`),Tk(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),Zg(),Jc(499,`li`),Tk(500,`O `),Jc(501,`em`),Tk(502,`tooltip`),Zg(),Tk(503,` não será exibido.`),Zg(),Jc(504,`li`),Tk(505,`Os marcadores (`),Jc(506,`em`),Tk(507,`bullets`),Zg(),Tk(508,`) terão seu estilo ajustado.`),Zg(),Jc(509,`li`),Tk(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),Zg()(),Jc(511,`blockquote`)(512,`p`),Tk(513,`Disponível para gráficos do tipo `),Jc(514,`code`),Tk(515,`line`),Zg(),Tk(516,`, `),Jc(517,`code`),Tk(518,`area`),Zg(),Tk(519,`, `),Jc(520,`code`),Tk(521,`column`),Zg(),Tk(522,`, `),Jc(523,`code`),Tk(524,`bar`),Zg(),Tk(525,` e `),Jc(526,`code`),Tk(527,`radar`),Zg(),Tk(528,`.`),Zg()(),Jc(529,`h4`),Tk(530,`Exemplo de utilização:`),Zg(),Jc(531,`pre`)(532,`code`,26),Tk(533,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),Zg()()()(),Jc(534,`tr`,15)(535,`td`,16)(536,`div`,17)(537,`span`,18),Tk(538,` p-height`),_u(539,`br`),Zg()()(),Jc(540,`td`,19)(541,`code`,27),Tk(542,`number`),Zg()(),Jc(543,`td`,22)(544,`p`)(545,`code`),Tk(546,`400`),Zg()()(),Jc(547,`td`,23)(548,`em`)(549,`strong`),Tk(550,`(opcional)`),Zg()(),Jc(551,`p`),Tk(552,`Define a altura do gráfico em px.`),Zg(),Jc(553,`blockquote`)(554,`p`),Tk(555,`No caso do tipo `),Jc(556,`code`),Tk(557,`Gauge`),Zg(),Tk(558,`, o valor padrão é `),Jc(559,`code`),Tk(560,`300`),Zg(),Tk(561,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),Zg()()()(),Jc(562,`tr`,15)(563,`td`,16)(564,`div`,17)(565,`span`,18),Tk(566,` p-literals`),_u(567,`br`),Zg()()(),Jc(568,`td`,19)(569,`code`,28),Tk(570,`PoChartLiterals`),Zg()(),Jc(571,`td`,22),Tk(572,`-`),Zg(),Jc(573,`td`,23)(574,`em`)(575,`strong`),Tk(576,`(opcional)`),Zg()(),Jc(577,`p`),Tk(578,`Objeto com as literais usadas no `),Jc(579,`code`),Tk(580,`po-chart`),Zg(),Tk(581,`.`),Zg(),Jc(582,`p`),Tk(583,`Para utilizar basta passar a literal que deseja customizar:`),Zg(),Jc(584,`pre`)(585,`code`),Tk(586,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),Zg()(),Jc(587,`p`),Tk(588,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Zg(),Jc(589,`pre`)(590,`code`),Tk(591,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),Zg()(),Jc(592,`blockquote`)(593,`p`),Tk(594,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(595,`a`,29)(596,`code`),Tk(597,`PoI18nService`),Zg()(),Tk(598,` ou do browser.`),Zg()()()(),Jc(599,`tr`,15)(600,`td`,16)(601,`div`,17)(602,`span`,18),Tk(603,` p-options`),_u(604,`br`),Zg()()(),Jc(605,`td`,19)(606,`code`,30),Tk(607,`PoChartOptions`),Zg()(),Jc(608,`td`,22),Tk(609,`-`),Zg(),Jc(610,`td`,23)(611,`em`)(612,`strong`),Tk(613,`(opcional)`),Zg()(),Jc(614,`p`),Tk(615,`Objeto com as configurações usadas no `),Jc(616,`code`),Tk(617,`po-chart`),Zg(),Tk(618,`.`),Zg(),Jc(619,`p`),Tk(620,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Jc(621,`em`),Tk(622,`axis`),Zg(),Tk(623,`) para os gráficos dos tipos `),Jc(624,`code`),Tk(625,`area`),Zg(),Tk(626,`, `),Jc(627,`code`),Tk(628,`line`),Zg(),Tk(629,`, `),Jc(630,`code`),Tk(631,`column`),Zg(),Tk(632,`, `),Jc(633,`code`),Tk(634,`bar`),Zg(),Tk(635,` e `),Jc(636,`code`),Tk(637,`radar`),Zg(),Tk(638,` da seguinte forma:`),Zg(),Jc(639,`pre`)(640,`code`),Tk(641,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),Zg()()()(),Jc(642,`tr`,15)(643,`td`,16)(644,`div`,17)(645,`span`,18),Tk(646,` p-series`),_u(647,`br`),Zg()()(),Jc(648,`td`,19)(649,`code`,31),Tk(650,`Array<PoChartSerie>`),Zg()(),Jc(651,`td`,22),Tk(652,`-`),Zg(),Jc(653,`td`,23)(654,`p`),Tk(655,`Define os elementos do gráfico que serão criados dinamicamente.`),Zg()()(),Jc(656,`tr`,15)(657,`td`,16)(658,`div`,32)(659,`span`,33),Tk(660,` (p-series-click)`),_u(661,`br`),Zg()()(),Jc(662,`td`,19)(663,`code`,34),Tk(664,`EventEmitter`),Zg()(),Jc(665,`td`,22),Tk(666,`-`),Zg(),Jc(667,`td`,23)(668,`em`)(669,`strong`),Tk(670,`(opcional)`),Zg()(),Jc(671,`p`),Tk(672,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),Zg(),Jc(673,`p`),Tk(674,`O evento emitirá o seguinte parâmetro:`),Zg(),Jc(675,`ul`)(676,`li`)(677,`em`),Tk(678,`donut`),Zg(),Tk(679,` e `),Jc(680,`em`),Tk(681,`pie`),Zg(),Tk(682,`: um objeto contendo a categoria e valor da série.`),Zg(),Jc(683,`li`)(684,`em`),Tk(685,`radar`),Zg(),Tk(686,`: um objeto contendo o nome da série e os valores.`),Zg(),Jc(687,`li`)(688,`em`),Tk(689,`area`),Zg(),Tk(690,`, `),Jc(691,`em`),Tk(692,`line`),Zg(),Tk(693,`, `),Jc(694,`em`),Tk(695,`column`),Zg(),Tk(696,` e `),Jc(697,`em`),Tk(698,`bar`),Zg(),Tk(699,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),Zg()()()(),Jc(700,`tr`,15)(701,`td`,16)(702,`div`,32)(703,`span`,33),Tk(704,` (p-series-hover)`),_u(705,`br`),Zg()()(),Jc(706,`td`,19)(707,`code`,34),Tk(708,`EventEmitter`),Zg()(),Jc(709,`td`,22),Tk(710,`-`),Zg(),Jc(711,`td`,23)(712,`em`)(713,`strong`),Tk(714,`(opcional)`),Zg()(),Jc(715,`p`),Tk(716,`Evento executado quando o usuário passar o `),Jc(717,`em`),Tk(718,`mouse`),Zg(),Tk(719,` sobre um elemento do gráfico.`),Zg(),Jc(720,`p`),Tk(721,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),Zg(),Jc(722,`ul`)(723,`li`)(724,`em`),Tk(725,`donut`),Zg(),Tk(726,` e `),Jc(727,`em`),Tk(728,`pie`),Zg(),Tk(729,`: um objeto contendo a categoria e valor da série.`),Zg(),Jc(730,`li`)(731,`em`),Tk(732,`radar`),Zg(),Tk(733,`: um objeto contendo o nome da série e os valores.`),Zg(),Jc(734,`li`)(735,`em`),Tk(736,`area`),Zg(),Tk(737,`, `),Jc(738,`em`),Tk(739,`line`),Zg(),Tk(740,`, `),Jc(741,`em`),Tk(742,`column`),Zg(),Tk(743,` e `),Jc(744,`em`),Tk(745,`bar`),Zg(),Tk(746,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),Zg()()()(),Jc(747,`tr`,15)(748,`td`,16)(749,`div`,17)(750,`span`,18),Tk(751,` p-title`),_u(752,`br`),Zg()()(),Jc(753,`td`,19)(754,`code`,35),Tk(755,`string`),Zg()(),Jc(756,`td`,22),Tk(757,`-`),Zg(),Jc(758,`td`,23)(759,`em`)(760,`strong`),Tk(761,`(opcional)`),Zg()(),Jc(762,`p`),Tk(763,`Define o título do gráfico.`),Zg()()(),Jc(764,`tr`,15)(765,`td`,16)(766,`div`,17)(767,`span`,18),Tk(768,` p-type`),_u(769,`br`),Zg()()(),Jc(770,`td`,19)(771,`code`,36),Tk(772,`PoChartType`),Zg()(),Jc(773,`td`,22),Tk(774,`-`),Zg(),Jc(775,`td`,23)(776,`em`)(777,`strong`),Tk(778,`(opcional)`),Zg()(),Jc(779,`p`),Tk(780,`Define o tipo de gráfico.`),Zg(),Jc(781,`p`),Tk(782,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),Jc(783,`code`),Tk(784,`type`),Zg(),Tk(785,` conforme a interface `),Jc(786,`code`),Tk(787,`PoChartSerie`),Zg(),Tk(788,`.`),Zg(),Jc(789,`blockquote`)(790,`p`),Tk(791,`Note que, se houver declaração de tipo de gráfico tanto em `),Jc(792,`code`),Tk(793,`p-type`),Zg(),Tk(794,` quanto em `),Jc(795,`code`),Tk(796,`PochartSerie.type`),Zg(),Tk(797,`, o valor `),Jc(798,`code`),Tk(799,`{ type }`),Zg(),Tk(800,` da primeira série anulará o valor definido em `),Jc(801,`code`),Tk(802,`p-type`),Zg(),Tk(803,`.`),Zg()(),Jc(804,`p`),Tk(805,`Se não passado valor, o padrão será relativo à primeira série passada em `),Jc(806,`code`),Tk(807,`p-series`),Zg(),Tk(808,`:`),Zg(),Jc(809,`ul`)(810,`li`),Tk(811,`Se `),Jc(812,`code`),Tk(813,`p-series = [{ data: [1,2,3] }]`),Zg(),Tk(814,`: será `),Jc(815,`code`),Tk(816,`PoChartType.Column`),Zg(),Tk(817,`.`),Zg(),Jc(818,`li`),Tk(819,`Se `),Jc(820,`code`),Tk(821,`p-series = [{ data: 1 }]`),Zg(),Tk(822,`: será `),Jc(823,`code`),Tk(824,`PoChartType.Pie`),Zg(),Tk(825,`.`),Zg()(),Jc(826,`blockquote`)(827,`p`),Tk(828,`Veja os valores válidos no `),Jc(829,`em`),Tk(830,`enum`),Zg(),Jc(831,`code`),Tk(832,`PoChartType`),Zg(),Tk(833,`.`),Zg()()()(),Jc(834,`tr`,15)(835,`td`,16)(836,`div`,17)(837,`span`,18),Tk(838,` p-value-gauge-multiple`),_u(839,`br`),Zg()()(),Jc(840,`td`,19)(841,`code`,27),Tk(842,`number`),Zg()(),Jc(843,`td`,22),Tk(844,`-`),Zg(),Jc(845,`td`,23)(846,`em`)(847,`strong`),Tk(848,`(opcional)`),Zg()(),Jc(849,`p`),Tk(850,`Define o valor do gráfico do tipo `),Jc(851,`code`),Tk(852,`Gauge`),Zg(),Tk(853,` quando utliza as propriedades `),Jc(854,`code`),Tk(855,`From`),Zg(),Jc(856,`code`),Tk(857,`To`),Zg(),Tk(858,`.`),Zg()()()(),Jc(859,`h3`),Tk(860,`Interfaces`),Zg(),Jc(861,`h4`,37)(862,`code`,5),Tk(863,`PoChartAxisOptions`),Zg()(),Jc(864,`div`,2)(865,`p`)(866,`em`),Tk(867,`Interface`),Zg(),Tk(868,` que define os eixos do grid.`),Zg()(),Jc(869,`h4`,11),Tk(870,`Propriedades`),Zg(),Jc(871,`table`,12)(872,`tr`,13)(873,`th`,14),Tk(874,`Nome`),Zg(),Jc(875,`th`,14),Tk(876,`Tipo`),Zg(),Jc(877,`th`,14),Tk(878,`Descrição`),Zg()(),Jc(879,`tr`,15)(880,`td`,16)(881,`div`,17)(882,`span`,18),Tk(883,` gridLines`),_u(884,`br`),Zg()()(),Jc(885,`td`,19)(886,`code`,27),Tk(887,`number`),Zg()(),Jc(888,`td`,23)(889,`em`)(890,`strong`),Tk(891,`(opcional)`),Zg()(),Jc(892,`p`),Tk(893,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Jc(894,`code`),Tk(895,`Area`),Zg(),Tk(896,`, `),Jc(897,`code`),Tk(898,`Line`),Zg(),Tk(899,` e `),Jc(900,`code`),Tk(901,`Column`),Zg(),Tk(902,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Jc(903,`code`),Tk(904,`Bar`),Zg(),Tk(905,`, tratará as linhas verticais (eixo Y).`),Zg(),Jc(906,`p`),Tk(907,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),Zg(),Jc(908,`ul`)(909,`li`),Tk(910,`Quantidade padrão de linhas: '5';`),Zg(),Jc(911,`li`),Tk(912,`Quantidade mínima permitida: '2';`),Zg()()()(),Jc(913,`tr`,15)(914,`td`,16)(915,`div`,17)(916,`span`,18),Tk(917,` labelType`),_u(918,`br`),Zg()()(),Jc(919,`td`,19)(920,`code`,38),Tk(921,`PoChartLabelFormat`),Zg()(),Jc(922,`td`,23)(923,`em`)(924,`strong`),Tk(925,`(opcional)`),Zg()(),Jc(926,`p`),Tk(927,`Define o tipo do label e a formatação exibida no eixo de valor.`),Zg()()(),Jc(928,`tr`,15)(929,`td`,16)(930,`div`,17)(931,`span`,18),Tk(932,` maxRange`),_u(933,`br`),Zg()()(),Jc(934,`td`,19)(935,`code`,27),Tk(936,`number`),Zg()(),Jc(937,`td`,23)(938,`em`)(939,`strong`),Tk(940,`(opcional)`),Zg()(),Jc(941,`p`),Tk(942,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),Zg(),Jc(943,`blockquote`)(944,`p`),Tk(945,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),Zg()()()(),Jc(946,`tr`,15)(947,`td`,16)(948,`div`,17)(949,`span`,18),Tk(950,` minRange`),_u(951,`br`),Zg()()(),Jc(952,`td`,19)(953,`code`,27),Tk(954,`number`),Zg()(),Jc(955,`td`,23)(956,`em`)(957,`strong`),Tk(958,`(opcional)`),Zg()(),Jc(959,`p`),Tk(960,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),Zg(),Jc(961,`blockquote`)(962,`p`),Tk(963,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),Zg()()()(),Jc(964,`tr`,15)(965,`td`,16)(966,`div`,17)(967,`span`,18),Tk(968,` paddingBottom`),_u(969,`br`),Zg()()(),Jc(970,`td`,19)(971,`code`,27),Tk(972,`number`),Zg()(),Jc(973,`td`,23)(974,`em`)(975,`strong`),Tk(976,`(opcional)`),Zg()(),Jc(977,`p`),Tk(978,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),Zg()()(),Jc(979,`tr`,15)(980,`td`,16)(981,`div`,17)(982,`span`,18),Tk(983,` paddingLeft`),_u(984,`br`),Zg()()(),Jc(985,`td`,19)(986,`code`,27),Tk(987,`number`),Zg()(),Jc(988,`td`,23)(989,`em`)(990,`strong`),Tk(991,`(opcional)`),Zg()(),Jc(992,`p`),Tk(993,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),Zg()()(),Jc(994,`tr`,15)(995,`td`,16)(996,`div`,17)(997,`span`,18),Tk(998,` paddingRight`),_u(999,`br`),Zg()()(),Jc(1e3,`td`,19)(1001,`code`,27),Tk(1002,`number`),Zg()(),Jc(1003,`td`,23)(1004,`em`)(1005,`strong`),Tk(1006,`(opcional)`),Zg()(),Jc(1007,`p`),Tk(1008,`Permite aumentar ou diminuir o espaço direito do gráfico.`),Zg()()(),Jc(1009,`tr`,15)(1010,`td`,16)(1011,`div`,17)(1012,`span`,18),Tk(1013,` rotateLegend`),_u(1014,`br`),Zg()()(),Jc(1015,`td`,19)(1016,`code`,27),Tk(1017,`number`),Zg()(),Jc(1018,`td`,23)(1019,`em`)(1020,`strong`),Tk(1021,`(opcional)`),Zg()(),Jc(1022,`p`),Tk(1023,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),Zg(),Jc(1024,`ul`)(1025,`li`),Tk(1026,`Valores negativos giram a legenda para a esquerda.`),Zg(),Jc(1027,`li`),Tk(1028,`Valores positivos giram a legenda para a direita.`),Zg()(),Jc(1029,`p`),Tk(1030,`Se não for definido, a legenda será exibida sem rotação.`),Zg()()(),Jc(1031,`tr`,15)(1032,`td`,16)(1033,`div`,17)(1034,`span`,18),Tk(1035,` showAxisDetails`),_u(1036,`br`),Zg()()(),Jc(1037,`td`,19)(1038,`code`,39),Tk(1039,`boolean`),Zg()(),Jc(1040,`td`,23)(1041,`em`)(1042,`strong`),Tk(1043,`(opcional)`),Zg()(),Jc(1044,`p`),Tk(1045,`Exibe a linha de detalhes que acompanha o mouse`),Zg()()(),Jc(1046,`tr`,15)(1047,`td`,16)(1048,`div`,17)(1049,`span`,18),Tk(1050,` showXAxis`),_u(1051,`br`),Zg()()(),Jc(1052,`td`,19)(1053,`code`,39),Tk(1054,`boolean`),Zg()(),Jc(1055,`td`,23)(1056,`em`)(1057,`strong`),Tk(1058,`(opcional)`),Zg()(),Jc(1059,`p`),Tk(1060,`Exibe a linha do eixo X`),Zg()()(),Jc(1061,`tr`,15)(1062,`td`,16)(1063,`div`,17)(1064,`span`,18),Tk(1065,` showYAxis`),_u(1066,`br`),Zg()()(),Jc(1067,`td`,19)(1068,`code`,39),Tk(1069,`boolean`),Zg()(),Jc(1070,`td`,23)(1071,`em`)(1072,`strong`),Tk(1073,`(opcional)`),Zg()(),Jc(1074,`p`),Tk(1075,`Exibe a linha do eixo Y`),Zg()()()(),Jc(1076,`h4`,37)(1077,`code`,5),Tk(1078,`PoChartHeaderOptions`),Zg()(),Jc(1079,`div`,2)(1080,`p`)(1081,`em`),Tk(1082,`Interface`),Zg(),Tk(1083,` para configuração das ações disponíveis no cabeçalho.`),Zg()(),Jc(1084,`h4`,11),Tk(1085,`Propriedades`),Zg(),Jc(1086,`table`,12)(1087,`tr`,13)(1088,`th`,14),Tk(1089,`Nome`),Zg(),Jc(1090,`th`,14),Tk(1091,`Tipo`),Zg(),Jc(1092,`th`,14),Tk(1093,`Descrição`),Zg()(),Jc(1094,`tr`,15)(1095,`td`,16)(1096,`div`,17)(1097,`span`,18),Tk(1098,` hideExpand`),_u(1099,`br`),Zg()()(),Jc(1100,`td`,19)(1101,`code`,39),Tk(1102,`boolean`),Zg()(),Jc(1103,`td`,23)(1104,`em`)(1105,`strong`),Tk(1106,`(opcional)`),Zg()(),Jc(1107,`p`),Tk(1108,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),Zg()()(),Jc(1109,`tr`,15)(1110,`td`,16)(1111,`div`,17)(1112,`span`,18),Tk(1113,` hideExportCsv`),_u(1114,`br`),Zg()()(),Jc(1115,`td`,19)(1116,`code`,39),Tk(1117,`boolean`),Zg()(),Jc(1118,`td`,23)(1119,`em`)(1120,`strong`),Tk(1121,`(opcional)`),Zg()(),Jc(1122,`p`),Tk(1123,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),Zg()()(),Jc(1124,`tr`,15)(1125,`td`,16)(1126,`div`,17)(1127,`span`,18),Tk(1128,` hideExportImage`),_u(1129,`br`),Zg()()(),Jc(1130,`td`,19)(1131,`code`,39),Tk(1132,`boolean`),Zg()(),Jc(1133,`td`,23)(1134,`em`)(1135,`strong`),Tk(1136,`(opcional)`),Zg()(),Jc(1137,`p`),Tk(1138,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),Zg()()(),Jc(1139,`tr`,15)(1140,`td`,16)(1141,`div`,17)(1142,`span`,18),Tk(1143,` hideTableDetails`),_u(1144,`br`),Zg()()(),Jc(1145,`td`,19)(1146,`code`,39),Tk(1147,`boolean`),Zg()(),Jc(1148,`td`,23)(1149,`em`)(1150,`strong`),Tk(1151,`(opcional)`),Zg()(),Jc(1152,`p`),Tk(1153,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),Zg()()()(),Jc(1154,`h4`,37)(1155,`code`,5),Tk(1156,`PoChartIndicatorOptions`),Zg()(),Jc(1157,`div`,2)(1158,`p`),Tk(1159,`Interface para configurações dos indicadores do gráfico `),Jc(1160,`code`),Tk(1161,`radar`),Zg(),Tk(1162,`.`),Zg()(),Jc(1163,`h4`,11),Tk(1164,`Propriedades`),Zg(),Jc(1165,`table`,12)(1166,`tr`,13)(1167,`th`,14),Tk(1168,`Nome`),Zg(),Jc(1169,`th`,14),Tk(1170,`Tipo`),Zg(),Jc(1171,`th`,14),Tk(1172,`Descrição`),Zg()(),Jc(1173,`tr`,15)(1174,`td`,16)(1175,`div`,17)(1176,`span`,18),Tk(1177,` color`),_u(1178,`br`),Zg()()(),Jc(1179,`td`,19)(1180,`code`,35),Tk(1181,`string`),Zg()(),Jc(1182,`td`,23)(1183,`em`)(1184,`strong`),Tk(1185,`(opcional)`),Zg()(),Jc(1186,`p`),Tk(1187,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),Zg(),Jc(1188,`blockquote`)(1189,`p`),Tk(1190,`Nome da cor, hexadecimal ou RGB.`),Zg()()()(),Jc(1191,`tr`,15)(1192,`td`,16)(1193,`div`,17)(1194,`span`,18),Tk(1195,` max`),_u(1196,`br`),Zg()()(),Jc(1197,`td`,19)(1198,`code`,27),Tk(1199,`number`),Zg()(),Jc(1200,`td`,23)(1201,`em`)(1202,`strong`),Tk(1203,`(opcional)`),Zg()(),Jc(1204,`p`),Tk(1205,`Valor máximo do indicator.`),Zg(),Jc(1206,`p`),Tk(1207,`A propriedade `),Jc(1208,`code`),Tk(1209,`max`),Zg(),Tk(1210,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),Zg()()(),Jc(1211,`tr`,15)(1212,`td`,16)(1213,`div`,17)(1214,`span`,18),Tk(1215,` min`),_u(1216,`br`),Zg()()(),Jc(1217,`td`,19)(1218,`code`,27),Tk(1219,`number`),Zg()(),Jc(1220,`td`,23)(1221,`em`)(1222,`strong`),Tk(1223,`(opcional)`),Zg()(),Jc(1224,`p`),Tk(1225,`Valor mínimo do indicator, com valor padrão de 0.`),Zg(),Jc(1226,`p`),Tk(1227,`A propriedade `),Jc(1228,`code`),Tk(1229,`min`),Zg(),Tk(1230,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),Zg()()(),Jc(1231,`tr`,15)(1232,`td`,16)(1233,`div`,17)(1234,`span`,18),Tk(1235,` name`),_u(1236,`br`),Zg()()(),Jc(1237,`td`,19)(1238,`code`,35),Tk(1239,`string`),Zg()(),Jc(1240,`td`,23)(1241,`em`)(1242,`strong`),Tk(1243,`(opcional)`),Zg()(),Jc(1244,`p`),Tk(1245,`Nome do indicator.`),Zg()()()(),Jc(1246,`h4`,37)(1247,`code`,5),Tk(1248,`PoChartLiterals`),Zg()(),Jc(1249,`div`,2)(1250,`p`),Tk(1251,`Interface para definição dos literais usadas no `),Jc(1252,`code`),Tk(1253,`po-chart`),Zg(),Tk(1254,`.`),Zg()(),Jc(1255,`h4`,11),Tk(1256,`Propriedades`),Zg(),Jc(1257,`table`,12)(1258,`tr`,13)(1259,`th`,14),Tk(1260,`Nome`),Zg(),Jc(1261,`th`,14),Tk(1262,`Tipo`),Zg(),Jc(1263,`th`,14),Tk(1264,`Descrição`),Zg()(),Jc(1265,`tr`,15)(1266,`td`,16)(1267,`div`,17)(1268,`span`,18),Tk(1269,` category`),_u(1270,`br`),Zg()()(),Jc(1271,`td`,19)(1272,`code`,35),Tk(1273,`string`),Zg()(),Jc(1274,`td`,23)(1275,`em`)(1276,`strong`),Tk(1277,`(opcional)`),Zg()(),Jc(1278,`p`),Tk(1279,`Texto da primeira coluna da tabela no gráfico do tipo `),Jc(1280,`code`),Tk(1281,`Bar`),Zg(),Tk(1282,`.`),Zg()()(),Jc(1283,`tr`,15)(1284,`td`,16)(1285,`div`,17)(1286,`span`,18),Tk(1287,` downloadCSV`),_u(1288,`br`),Zg()()(),Jc(1289,`td`,19)(1290,`code`,35),Tk(1291,`string`),Zg()(),Jc(1292,`td`,23)(1293,`em`)(1294,`strong`),Tk(1295,`(opcional)`),Zg()(),Jc(1296,`p`),Tk(1297,`Texto exibido para a ação de download de dados em formato CSV.`),Zg()()(),Jc(1298,`tr`,15)(1299,`td`,16)(1300,`div`,17)(1301,`span`,18),Tk(1302,` exportCSV`),_u(1303,`br`),Zg()()(),Jc(1304,`td`,19)(1305,`code`,35),Tk(1306,`string`),Zg()(),Jc(1307,`td`,23)(1308,`em`)(1309,`strong`),Tk(1310,`(opcional)`),Zg()(),Jc(1311,`p`),Tk(1312,`Texto do botão para exportar o gráfico em CSV.`),Zg()()(),Jc(1313,`tr`,15)(1314,`td`,16)(1315,`div`,17)(1316,`span`,18),Tk(1317,` exportJPG`),_u(1318,`br`),Zg()()(),Jc(1319,`td`,19)(1320,`code`,35),Tk(1321,`string`),Zg()(),Jc(1322,`td`,23)(1323,`em`)(1324,`strong`),Tk(1325,`(opcional)`),Zg()(),Jc(1326,`p`),Tk(1327,`Texto do botão para exportar o gráfico como imagem JPG.`),Zg()()(),Jc(1328,`tr`,15)(1329,`td`,16)(1330,`div`,17)(1331,`span`,18),Tk(1332,` exportPNG`),_u(1333,`br`),Zg()()(),Jc(1334,`td`,19)(1335,`code`,35),Tk(1336,`string`),Zg()(),Jc(1337,`td`,23)(1338,`em`)(1339,`strong`),Tk(1340,`(opcional)`),Zg()(),Jc(1341,`p`),Tk(1342,`Texto do botão para exportar o gráfico como imagem PNG.`),Zg()()(),Jc(1343,`tr`,15)(1344,`td`,16)(1345,`div`,17)(1346,`span`,18),Tk(1347,` item`),_u(1348,`br`),Zg()()(),Jc(1349,`td`,19)(1350,`code`,35),Tk(1351,`string`),Zg()(),Jc(1352,`td`,23)(1353,`em`)(1354,`strong`),Tk(1355,`(opcional)`),Zg()(),Jc(1356,`p`),Tk(1357,`Texto dos títulos das colunas `),Jc(1358,`code`),Tk(1359,`Gauge`),Zg(),Tk(1360,` e não possui label.`),Zg()()(),Jc(1361,`tr`,15)(1362,`td`,16)(1363,`div`,17)(1364,`span`,18),Tk(1365,` serie`),_u(1366,`br`),Zg()()(),Jc(1367,`td`,19)(1368,`code`,35),Tk(1369,`string`),Zg()(),Jc(1370,`td`,23)(1371,`em`)(1372,`strong`),Tk(1373,`(opcional)`),Zg()(),Jc(1374,`p`),Tk(1375,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),Jc(1376,`code`),Tk(1377,`Bar`),Zg(),Tk(1378,` e `),Jc(1379,`code`),Tk(1380,`Gauge`),Zg(),Tk(1381,`.`),Zg()()(),Jc(1382,`tr`,15)(1383,`td`,16)(1384,`div`,17)(1385,`span`,18),Tk(1386,` value`),_u(1387,`br`),Zg()()(),Jc(1388,`td`,19)(1389,`code`,35),Tk(1390,`string`),Zg()(),Jc(1391,`td`,23)(1392,`em`)(1393,`strong`),Tk(1394,`(opcional)`),Zg()(),Jc(1395,`p`),Tk(1396,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),Jc(1397,`code`),Tk(1398,`Gauge`),Zg(),Tk(1399,`.`),Zg()()()(),Jc(1400,`h4`,37)(1401,`code`,5),Tk(1402,`PoChartOptions`),Zg()(),Jc(1403,`div`,2)(1404,`p`)(1405,`em`),Tk(1406,`Interface`),Zg(),Tk(1407,` para configurações dos elementos do gráfico.`),Zg()(),Jc(1408,`h4`,11),Tk(1409,`Propriedades`),Zg(),Jc(1410,`table`,12)(1411,`tr`,13)(1412,`th`,14),Tk(1413,`Nome`),Zg(),Jc(1414,`th`,14),Tk(1415,`Tipo`),Zg(),Jc(1416,`th`,14),Tk(1417,`Descrição`),Zg()(),Jc(1418,`tr`,15)(1419,`td`,16)(1420,`div`,17)(1421,`span`,18),Tk(1422,` areaStyle`),_u(1423,`br`),Zg()()(),Jc(1424,`td`,19)(1425,`code`,39),Tk(1426,`boolean`),Zg()(),Jc(1427,`td`,23)(1428,`em`)(1429,`strong`),Tk(1430,`(opcional)`),Zg()(),Jc(1431,`p`),Tk(1432,`Define se as séries terão sua área preenchida.`),Zg(),Jc(1433,`blockquote`)(1434,`p`),Tk(1435,`Esta propriedade tem precedência sobre a definição de `),Jc(1436,`code`),Tk(1437,`areaStyle`),Zg(),Tk(1438,` em cada série, `),Jc(1439,`code`),Tk(1440,`fillpoints`),Zg(),Tk(1441,` não funciona quando `),Jc(1442,`code`),Tk(1443,`areaStyle`),Zg(),Tk(1444,` está definido como `),Jc(1445,`code`),Tk(1446,`true`),Zg(),Tk(1447,`.`),Zg()()()(),Jc(1448,`tr`,15)(1449,`td`,16)(1450,`div`,17)(1451,`span`,18),Tk(1452,` axis`),_u(1453,`br`),Zg()()(),Jc(1454,`td`,19)(1455,`code`,40),Tk(1456,`PoChartAxisOptions`),Zg()(),Jc(1457,`td`,23)(1458,`em`)(1459,`strong`),Tk(1460,`(opcional)`),Zg()(),Jc(1461,`p`),Tk(1462,`Define um objeto do tipo `),Jc(1463,`code`),Tk(1464,`PoChartAxisOptions`),Zg(),Tk(1465,` para configuração dos eixos.`),Zg()()(),Jc(1466,`tr`,15)(1467,`td`,16)(1468,`div`,17)(1469,`span`,18),Tk(1470,` borderRadius`),_u(1471,`br`),Zg()()(),Jc(1472,`td`,19)(1473,`code`,27),Tk(1474,`number`),Zg()(),Jc(1475,`td`,23)(1476,`em`)(1477,`strong`),Tk(1478,`(opcional)`),Zg()(),Jc(1479,`p`),Tk(1480,`Define borda entre os itens do gráfico. Válido para os gráficos `),Jc(1481,`code`),Tk(1482,`Donut`),Zg(),Tk(1483,`, `),Jc(1484,`code`),Tk(1485,`Pie`),Zg(),Tk(1486,`.`),Zg(),Jc(1487,`blockquote`)(1488,`p`),Tk(1489,`Valores válidos entre 0 e 100,`),Zg()()()(),Jc(1490,`tr`,15)(1491,`td`,16)(1492,`div`,17)(1493,`span`,18),Tk(1494,` bottomDataZoom`),_u(1495,`br`),Zg()()(),Jc(1496,`td`,19)(1497,`code`,39),Tk(1498,`boolean `),Zg(),Jc(1499,`code`,27),Tk(1500,` number`),Zg()(),Jc(1501,`td`,23)(1502,`em`)(1503,`strong`),Tk(1504,`(opcional)`),Zg()(),Jc(1505,`p`),Tk(1506,`Define a distância inferior do componente DataZoom.`),Zg(),Jc(1507,`p`),Tk(1508,`Esta propriedade aceita os seguintes valores:`),Zg(),Jc(1509,`ul`)(1510,`li`)(1511,`p`)(1512,`code`),Tk(1513,`false`),Zg(),Tk(1514,` (padrão): não aplica ajustes.`),Zg()(),Jc(1515,`li`)(1516,`p`)(1517,`code`),Tk(1518,`true`),Zg(),Tk(1519,`: aplica um valor automático com base no posicionamento da legenda:`),Zg(),Jc(1520,`ul`)(1521,`li`)(1522,`code`),Tk(1523,`8`),Zg(),Tk(1524,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),Zg(),Jc(1525,`li`)(1526,`code`),Tk(1527,`32`),Zg(),Tk(1528,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),Zg()()(),Jc(1529,`li`)(1530,`p`)(1531,`code`),Tk(1532,`number`),Zg(),Tk(1533,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),Zg()()(),Jc(1534,`blockquote`)(1535,`p`),Tk(1536,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),Jc(1537,`code`),Tk(1538,`dataZoom: true`),Zg(),Tk(1539,`).`),Zg()()()(),Jc(1540,`tr`,15)(1541,`td`,16)(1542,`div`,17)(1543,`span`,18),Tk(1544,` dataZoom`),_u(1545,`br`),Zg()()(),Jc(1546,`td`,19)(1547,`code`,39),Tk(1548,`boolean`),Zg()(),Jc(1549,`td`,23)(1550,`em`)(1551,`strong`),Tk(1552,`(opcional)`),Zg()(),Jc(1553,`p`),Tk(1554,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),Zg()()(),Jc(1555,`tr`,15)(1556,`td`,16)(1557,`div`,17)(1558,`span`,18),Tk(1559,` descriptionChart`),_u(1560,`br`),Zg()()(),Jc(1561,`td`,19)(1562,`code`,35),Tk(1563,`string`),Zg()(),Jc(1564,`td`,23)(1565,`em`)(1566,`strong`),Tk(1567,`(opcional)`),Zg()(),Jc(1568,`p`),Tk(1569,`Define a descrição do gráfico exibido acima do gráfico.`),Zg()()(),Jc(1570,`tr`,15)(1571,`td`,16)(1572,`div`,17)(1573,`span`,18),Tk(1574,` fillPoints`),_u(1575,`br`),Zg()()(),Jc(1576,`td`,19)(1577,`code`,39),Tk(1578,`boolean`),Zg()(),Jc(1579,`td`,23)(1580,`em`)(1581,`strong`),Tk(1582,`(opcional)`),Zg()(),Jc(1583,`p`),Tk(1584,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),Zg(),Jc(1585,`blockquote`)(1586,`p`),Tk(1587,`Esta propriedade é utilizável para os gráficos dos tipos `),Jc(1588,`code`),Tk(1589,`Area`),Zg(),Tk(1590,`, `),Jc(1591,`code`),Tk(1592,`Line`),Zg(),Tk(1593,` e `),Jc(1594,`code`),Tk(1595,`Radar`),Zg(),Tk(1596,`.
Para o tipo `),Jc(1597,`code`),Tk(1598,`Radar`),Zg(),Tk(1599,`, o valor padrão é `),Jc(1600,`code`),Tk(1601,`true`),Zg(),Tk(1602,`.`),Zg()()()(),Jc(1603,`tr`,15)(1604,`td`,16)(1605,`div`,17)(1606,`span`,18),Tk(1607,` firstColumnName`),_u(1608,`br`),Zg()()(),Jc(1609,`td`,19)(1610,`code`,35),Tk(1611,`string`),Zg()(),Jc(1612,`td`,23)(1613,`em`)(1614,`strong`),Tk(1615,`(opcional)`),Zg()(),Jc(1616,`p`),Tk(1617,`Valor que permite customizar o nome da `),Jc(1618,`code`),Tk(1619,`TH`),Zg(),Tk(1620,` da primeira coluna da tabela descritiva.`),Zg()()(),Jc(1621,`tr`,15)(1622,`td`,16)(1623,`div`,17)(1624,`span`,18),Tk(1625,` header`),_u(1626,`br`),Zg()()(),Jc(1627,`td`,19)(1628,`code`,41),Tk(1629,`PoChartHeaderOptions`),Zg()(),Jc(1630,`td`,23)(1631,`em`)(1632,`strong`),Tk(1633,`(opcional)`),Zg()(),Jc(1634,`p`),Tk(1635,`Define um objeto do tipo `),Jc(1636,`code`),Tk(1637,`PoChartHeaderOptions`),Zg(),Tk(1638,` para configurar a exibição de botões no cabeçalho do gráfico.`),Zg()()(),Jc(1639,`tr`,15)(1640,`td`,16)(1641,`div`,17)(1642,`span`,18),Tk(1643,` innerRadius`),_u(1644,`br`),Zg()()(),Jc(1645,`td`,19)(1646,`code`,27),Tk(1647,`number`),Zg()(),Jc(1648,`td`,23)(1649,`em`)(1650,`strong`),Tk(1651,`(opcional)`),Zg()(),Jc(1652,`p`),Tk(1653,`Define o diâmetro, em valor percentual entre `),Jc(1654,`code`),Tk(1655,`0`),Zg(),Tk(1656,` e `),Jc(1657,`code`),Tk(1658,`100`),Zg(),Tk(1659,`, da área central para gráficos do tipo `),Jc(1660,`code`),Tk(1661,`donut`),Zg(),Tk(1662,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Jc(1663,`code`),Tk(1664,`40px`),Zg(),Tk(1665,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),Zg()()(),Jc(1666,`tr`,15)(1667,`td`,16)(1668,`div`,17)(1669,`span`,18),Tk(1670,` legend`),_u(1671,`br`),Zg()()(),Jc(1672,`td`,19)(1673,`code`,39),Tk(1674,`boolean`),Zg()(),Jc(1675,`td`,23)(1676,`em`)(1677,`strong`),Tk(1678,`(opcional)`),Zg()(),Jc(1679,`p`),Tk(1680,`Define a exibição da legenda do gráfico. Valor padrão é `),Jc(1681,`code`),Tk(1682,`true`),Zg()()()(),Jc(1683,`tr`,15)(1684,`td`,16)(1685,`div`,17)(1686,`span`,18),Tk(1687,` legendPosition`),_u(1688,`br`),Zg()()(),Jc(1689,`td`,19)(1690,`code`,42),Tk(1691,`'left' `),Zg(),Jc(1692,`code`,43),Tk(1693,` 'center' `),Zg(),Jc(1694,`code`,44),Tk(1695,` 'right'`),Zg()(),Jc(1696,`td`,23)(1697,`em`)(1698,`strong`),Tk(1699,`(opcional)`),Zg()(),Jc(1700,`p`),Tk(1701,`Define o alinhamento horizontal da legenda.`),Zg(),Jc(1702,`blockquote`)(1703,`p`),Tk(1704,`Propriedade inválida para o gráfico do tipo `),Jc(1705,`code`),Tk(1706,`Gauge`),Zg(),Tk(1707,`.`),Zg()()()(),Jc(1708,`tr`,15)(1709,`td`,16)(1710,`div`,17)(1711,`span`,18),Tk(1712,` legendType`),_u(1713,`br`),Zg()()(),Jc(1714,`td`,19)(1715,`code`,45),Tk(1716,`'plain' `),Zg(),Jc(1717,`code`,46),Tk(1718,` 'scroll'`),Zg()(),Jc(1719,`td`,23)(1720,`em`)(1721,`strong`),Tk(1722,`(opcional)`),Zg()(),Jc(1723,`p`),Tk(1724,`Define o tipo da legenda.`),Zg(),Jc(1725,`ul`)(1726,`li`)(1727,`code`),Tk(1728,`plain`),Zg(),Tk(1729,`: exibe todas as legendas de forma estática.`),Zg(),Jc(1730,`li`)(1731,`code`),Tk(1732,`scroll`),Zg(),Tk(1733,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),Zg()(),Jc(1734,`blockquote`)(1735,`p`),Tk(1736,`Propriedade inválida para o gráfico do tipo `),Jc(1737,`code`),Tk(1738,`Gauge`),Zg(),Tk(1739,`.`),Zg()()()(),Jc(1740,`tr`,15)(1741,`td`,16)(1742,`div`,17)(1743,`span`,18),Tk(1744,` legendVerticalPosition`),_u(1745,`br`),Zg()()(),Jc(1746,`td`,19)(1747,`code`,47),Tk(1748,`'top' `),Zg(),Jc(1749,`code`,48),Tk(1750,` 'bottom'`),Zg()(),Jc(1751,`td`,23)(1752,`em`)(1753,`strong`),Tk(1754,`(opcional)`),Zg()(),Jc(1755,`p`),Tk(1756,`Define a posição vertical da legenda no gráfico.`),Zg(),Jc(1757,`blockquote`)(1758,`p`),Tk(1759,`Quando utilizada com o valor `),Jc(1760,`code`),Tk(1761,`top`),Zg(),Tk(1762,`, recomenda-se configurar também a propriedade `),Jc(1763,`code`),Tk(1764,`bottomDataZoom`),Zg(),Tk(1765,` caso o `),Jc(1766,`code`),Tk(1767,`dataZoom`),Zg(),Tk(1768,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Jc(1769,`code`),Tk(1770,`Gauge`),Zg(),Tk(1771,`.`),Zg()()()(),Jc(1772,`tr`,15)(1773,`td`,16)(1774,`div`,17)(1775,`span`,18),Tk(1776,` pointer`),_u(1777,`br`),Zg()()(),Jc(1778,`td`,19)(1779,`code`,39),Tk(1780,`boolean`),Zg()(),Jc(1781,`td`,23)(1782,`em`)(1783,`strong`),Tk(1784,`(opcional)`),Zg()(),Jc(1785,`p`),Tk(1786,`Define a exibição do ponteiro.`),Zg(),Jc(1787,`blockquote`)(1788,`p`),Tk(1789,`Válido para gráfico do tipo `),Jc(1790,`code`),Tk(1791,`Gauge`),Zg(),Tk(1792,`.`),Zg()()()(),Jc(1793,`tr`,15)(1794,`td`,16)(1795,`div`,17)(1796,`span`,18),Tk(1797,` rendererOption`),_u(1798,`br`),Zg()()(),Jc(1799,`td`,19)(1800,`code`,49),Tk(1801,`'canvas' `),Zg(),Jc(1802,`code`,50),Tk(1803,` 'svg'`),Zg()(),Jc(1804,`td`,23)(1805,`em`)(1806,`strong`),Tk(1807,`(opcional)`),Zg()(),Jc(1808,`p`),Tk(1809,`Define como o gráfico será renderizado.`),Zg(),Jc(1810,`blockquote`)(1811,`p`),Tk(1812,`Recomenda-se não modificar o valor da propriedade `),Jc(1813,`code`),Tk(1814,`rendererOption`),Zg(),Tk(1815,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),Zg()()()(),Jc(1816,`tr`,15)(1817,`td`,16)(1818,`div`,17)(1819,`span`,18),Tk(1820,` roseType`),_u(1821,`br`),Zg()()(),Jc(1822,`td`,19)(1823,`code`,39),Tk(1824,`boolean`),Zg()(),Jc(1825,`td`,23)(1826,`em`)(1827,`strong`),Tk(1828,`(opcional)`),Zg()(),Jc(1829,`p`),Tk(1830,`Transforma os gráficos do tipo `),Jc(1831,`code`),Tk(1832,`Donut`),Zg(),Tk(1833,` ou `),Jc(1834,`code`),Tk(1835,`Pie`),Zg(),Tk(1836,` num gráfico de área polar.`),Zg(),Jc(1837,`blockquote`)(1838,`p`),Tk(1839,`Válido para os gráficos `),Jc(1840,`code`),Tk(1841,`Donut`),Zg(),Tk(1842,` e `),Jc(1843,`code`),Tk(1844,`Pie`),Zg(),Tk(1845,`.`),Zg()()()(),Jc(1846,`tr`,15)(1847,`td`,16)(1848,`div`,17)(1849,`span`,18),Tk(1850,` showContainerGauge`),_u(1851,`br`),Zg()()(),Jc(1852,`td`,19)(1853,`code`,39),Tk(1854,`boolean`),Zg()(),Jc(1855,`td`,23)(1856,`em`)(1857,`strong`),Tk(1858,`(opcional)`),Zg()(),Jc(1859,`p`),Tk(1860,`Esconde a estilização do container em volta do gráfico.`),Zg(),Jc(1861,`blockquote`)(1862,`p`),Tk(1863,`Válido para gráfico do tipo `),Jc(1864,`code`),Tk(1865,`Gauge`),Zg(),Tk(1866,`.`),Zg()()()(),Jc(1867,`tr`,15)(1868,`td`,16)(1869,`div`,17)(1870,`span`,18),Tk(1871,` showFromToLegend`),_u(1872,`br`),Zg()()(),Jc(1873,`td`,19)(1874,`code`,39),Tk(1875,`boolean`),Zg()(),Jc(1876,`td`,23)(1877,`em`)(1878,`strong`),Tk(1879,`(opcional)`),Zg()(),Jc(1880,`p`),Tk(1881,`Exibe os valores das propriedades `),Jc(1882,`code`),Tk(1883,`from`),Zg(),Tk(1884,` e `),Jc(1885,`code`),Tk(1886,`to`),Zg(),Tk(1887,` no gráfico do no texto da legenda entre parênteses.`),Zg(),Jc(1888,`blockquote`)(1889,`p`),Tk(1890,`Válido para gráfico do tipo `),Jc(1891,`code`),Tk(1892,`Gauge`),Zg(),Tk(1893,`.`),Zg()()()(),Jc(1894,`tr`,15)(1895,`td`,16)(1896,`div`,17)(1897,`span`,18),Tk(1898,` stacked`),_u(1899,`br`),Zg()()(),Jc(1900,`td`,19)(1901,`code`,39),Tk(1902,`boolean`),Zg()(),Jc(1903,`td`,23)(1904,`em`)(1905,`strong`),Tk(1906,`(opcional)`),Zg()(),Jc(1907,`p`),Tk(1908,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),Jc(1909,`code`),Tk(1910,`stackGroupName`),Zg(),Tk(1911,` da interface `),Jc(1912,`code`),Tk(1913,`PoChartSerie`),Zg()(),Jc(1914,`blockquote`)(1915,`p`),Tk(1916,`Válido para gráfico do tipo `),Jc(1917,`code`),Tk(1918,`Column`),Zg(),Tk(1919,` e `),Jc(1920,`code`),Tk(1921,`Bar`),Zg(),Tk(1922,`.`),Zg()(),Jc(1923,`blockquote`)(1924,`p`),Tk(1925,`Essa propriedade habilita a propriedade `),Jc(1926,`code`),Tk(1927,`p-data-label`),Zg(),Tk(1928,` por padrão, podendo ser desabilitada passando `),Jc(1929,`code`),Tk(1930,`[p-data-label]={ fixed: false }`),Zg(),Tk(1931,`.`),Zg()()()(),Jc(1932,`tr`,15)(1933,`td`,16)(1934,`div`,17)(1935,`span`,18),Tk(1936,` subtitleGauge`),_u(1937,`br`),Zg()()(),Jc(1938,`td`,19)(1939,`code`,35),Tk(1940,`string`),Zg()(),Jc(1941,`td`,23)(1942,`em`)(1943,`strong`),Tk(1944,`(opcional)`),Zg()(),Jc(1945,`p`),Tk(1946,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),Zg(),Jc(1947,`blockquote`)(1948,`p`),Tk(1949,`Válido para gráfico do tipo `),Jc(1950,`code`),Tk(1951,`Gauge`),Zg(),Tk(1952,`.`),Zg()()()(),Jc(1953,`tr`,15)(1954,`td`,16)(1955,`div`,17)(1956,`span`,18),Tk(1957,` textCenterGraph`),_u(1958,`br`),Zg()()(),Jc(1959,`td`,19)(1960,`code`,35),Tk(1961,`string`),Zg()(),Jc(1962,`td`,23)(1963,`em`)(1964,`strong`),Tk(1965,`(opcional)`),Zg()(),Jc(1966,`p`),Tk(1967,`Aplica texto centralizado customizado nos gráficos de `),Jc(1968,`code`),Tk(1969,`Donut`),Zg(),Tk(1970,`.`),Zg()()()(),Jc(1971,`h4`,37)(1972,`code`,5),Tk(1973,`PoChartRadarOptions`),Zg()(),Jc(1974,`div`,2)(1975,`p`)(1976,`em`),Tk(1977,`Interface`),Zg(),Tk(1978,` para configurações do gráfico `),Jc(1979,`code`),Tk(1980,`radar`),Zg(),Tk(1981,`.`),Zg()(),Jc(1982,`h4`,11),Tk(1983,`Propriedades`),Zg(),Jc(1984,`table`,12)(1985,`tr`,13)(1986,`th`,14),Tk(1987,`Nome`),Zg(),Jc(1988,`th`,14),Tk(1989,`Tipo`),Zg(),Jc(1990,`th`,14),Tk(1991,`Descrição`),Zg()(),Jc(1992,`tr`,15)(1993,`td`,16)(1994,`div`,17)(1995,`span`,18),Tk(1996,` indicator`),_u(1997,`br`),Zg()()(),Jc(1998,`td`,19)(1999,`code`,51),Tk(2e3,`Array<PoChartIndicatorOptions>`),Zg()(),Jc(2001,`td`,23)(2002,`em`)(2003,`strong`),Tk(2004,`(opcional)`),Zg()(),Jc(2005,`p`),Tk(2006,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),Zg()()(),Jc(2007,`tr`,15)(2008,`td`,16)(2009,`div`,17)(2010,`span`,18),Tk(2011,` shape`),_u(2012,`br`),Zg()()(),Jc(2013,`td`,19)(2014,`code`,52),Tk(2015,`'polygon' `),Zg(),Jc(2016,`code`,53),Tk(2017,` 'circle'`),Zg()(),Jc(2018,`td`,23)(2019,`em`)(2020,`strong`),Tk(2021,`(opcional)`),Zg()(),Jc(2022,`p`),Tk(2023,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),Zg()()(),Jc(2024,`tr`,15)(2025,`td`,16)(2026,`div`,17)(2027,`span`,18),Tk(2028,` splitArea`),_u(2029,`br`),Zg()()(),Jc(2030,`td`,19)(2031,`code`,39),Tk(2032,`boolean`),Zg()(),Jc(2033,`td`,23)(2034,`em`)(2035,`strong`),Tk(2036,`(opcional)`),Zg()(),Jc(2037,`p`),Tk(2038,`Define o efeito zebrado na grid.`),Zg()()()(),Jc(2039,`h4`,37)(2040,`code`,5),Tk(2041,`PoChartDataLabel`),Zg()(),Jc(2042,`div`,2)(2043,`p`),Tk(2044,`Interface que define as propriedades de exibição dos rótulos das séries no `),Jc(2045,`code`),Tk(2046,`po-chart`),Zg(),Tk(2047,`.`),Zg()(),Jc(2048,`h4`,11),Tk(2049,`Propriedades`),Zg(),Jc(2050,`table`,12)(2051,`tr`,13)(2052,`th`,14),Tk(2053,`Nome`),Zg(),Jc(2054,`th`,14),Tk(2055,`Tipo`),Zg(),Jc(2056,`th`,14),Tk(2057,`Descrição`),Zg()(),Jc(2058,`tr`,15)(2059,`td`,16)(2060,`div`,17)(2061,`span`,18),Tk(2062,` fixed`),_u(2063,`br`),Zg()()(),Jc(2064,`td`,19)(2065,`code`,39),Tk(2066,`boolean`),Zg()(),Jc(2067,`td`,23)(2068,`em`)(2069,`strong`),Tk(2070,`(opcional)`),Zg()(),Jc(2071,`p`),Tk(2072,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),Zg(),Jc(2073,`ul`)(2074,`li`),Tk(2075,`Quando definido como `),Jc(2076,`code`),Tk(2077,`true`),Zg(),Tk(2078,`:`),Jc(2079,`ul`)(2080,`li`),Tk(2081,`O `),Jc(2082,`em`),Tk(2083,`tooltip`),Zg(),Tk(2084,` não será exibido.`),Zg(),Jc(2085,`li`),Tk(2086,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),Zg()()()(),Jc(2087,`blockquote`)(2088,`p`),Tk(2089,`Disponível para os tipo de gráfico `),Jc(2090,`code`),Tk(2091,`PoChartType.Line`),Zg(),Tk(2092,`, `),Jc(2093,`code`),Tk(2094,`PoChartType.Area`),Zg(),Tk(2095,`, `),Jc(2096,`code`),Tk(2097,`PoChartType.Column`),Zg(),Tk(2098,`, `),Jc(2099,`code`),Tk(2100,`PoChartType.Bar e PoChartType.Radar`),Zg(),Tk(2101,`.`),Zg()()()()(),Jc(2102,`h4`,37)(2103,`code`,5),Tk(2104,`PoChartSerie`),Zg()(),Jc(2105,`div`,2)(2106,`p`),Tk(2107,`Interface das series dinâmicas do `),Jc(2108,`code`),Tk(2109,`po-chart`),Zg(),Tk(2110,` que possibilita desenhar gráficos dos tipos `),Jc(2111,`code`),Tk(2112,`area`),Zg(),Tk(2113,`, `),Jc(2114,`code`),Tk(2115,`bar`),Zg(),Tk(2116,`, `),Jc(2117,`code`),Tk(2118,`column`),Zg(),Tk(2119,`, `),Jc(2120,`code`),Tk(2121,`line`),Zg(),Tk(2122,`, `),Jc(2123,`code`),Tk(2124,`donut`),Zg(),Tk(2125,`, `),Jc(2126,`code`),Tk(2127,`pie`),Zg(),Tk(2128,` e `),Jc(2129,`code`),Tk(2130,`radar`),Zg()()(),Jc(2131,`h4`,11),Tk(2132,`Propriedades`),Zg(),Jc(2133,`table`,12)(2134,`tr`,13)(2135,`th`,14),Tk(2136,`Nome`),Zg(),Jc(2137,`th`,14),Tk(2138,`Tipo`),Zg(),Jc(2139,`th`,14),Tk(2140,`Descrição`),Zg()(),Jc(2141,`tr`,15)(2142,`td`,16)(2143,`div`,17)(2144,`span`,18),Tk(2145,` areaStyle`),_u(2146,`br`),Zg()()(),Jc(2147,`td`,19)(2148,`code`,39),Tk(2149,`boolean`),Zg()(),Jc(2150,`td`,23)(2151,`em`)(2152,`strong`),Tk(2153,`(opcional)`),Zg()(),Jc(2154,`p`),Tk(2155,`Define se a série terá sua área preenchida.`),Zg(),Jc(2156,`blockquote`)(2157,`p`),Tk(2158,`Propriedade válida para gráficos do tipo `),Jc(2159,`code`),Tk(2160,`Radar`),Zg(),Tk(2161,`, `),Jc(2162,`code`),Tk(2163,`fillpoints`),Zg(),Tk(2164,` não funciona quando `),Jc(2165,`code`),Tk(2166,`areaStyle`),Zg(),Tk(2167,` está definido como `),Jc(2168,`code`),Tk(2169,`true`),Zg(),Tk(2170,`.`),Zg()()()(),Jc(2171,`tr`,15)(2172,`td`,16)(2173,`div`,17)(2174,`span`,18),Tk(2175,` color`),_u(2176,`br`),Zg()()(),Jc(2177,`td`,19)(2178,`code`,35),Tk(2179,`string`),Zg()(),Jc(2180,`td`,23)(2181,`em`)(2182,`strong`),Tk(2183,`(opcional)`),Zg()(),Jc(2184,`p`),Tk(2185,`Determina a cor da série. As maneiras de customizar o `),Jc(2186,`em`),Tk(2187,`preset`),Zg(),Tk(2188,` padrão de cores são:`),Zg(),Jc(2189,`ul`)(2190,`li`),Tk(2191,`Hexadecimal, por exemplo `),Jc(2192,`code`),Tk(2193,`#c64840`),Zg(),Tk(2194,`;`),Zg(),Jc(2195,`li`),Tk(2196,`RGB, por exemplo `),Jc(2197,`code`),Tk(2198,`rgb(0, 0, 165)`),Zg()(),Jc(2199,`li`),Tk(2200,`O nome da cor, por exemplo `),Jc(2201,`code`),Tk(2202,`blue`),Zg(),Tk(2203,`;`),Zg(),Jc(2204,`li`),Tk(2205,`Variáveis CSS, por exemplo `),Jc(2206,`code`),Tk(2207,`var(--color-01)`),Zg(),Tk(2208,`;`),Zg(),Jc(2209,`li`),Tk(2210,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Jc(2211,`ul`)(2212,`li`),_u(2213,`span`,54),Jc(2214,`code`),Tk(2215,`color-01`),Zg()(),Jc(2216,`li`),_u(2217,`span`,55),Jc(2218,`code`),Tk(2219,`color-02`),Zg()(),Jc(2220,`li`),_u(2221,`span`,56),Jc(2222,`code`),Tk(2223,`color-03`),Zg()(),Jc(2224,`li`),_u(2225,`span`,57),Jc(2226,`code`),Tk(2227,`color-04`),Zg()(),Jc(2228,`li`),_u(2229,`span`,58),Jc(2230,`code`),Tk(2231,`color-05`),Zg()(),Jc(2232,`li`),_u(2233,`span`,59),Jc(2234,`code`),Tk(2235,`color-06`),Zg()(),Jc(2236,`li`),_u(2237,`span`,60),Jc(2238,`code`),Tk(2239,`color-07`),Zg()(),Jc(2240,`li`),_u(2241,`span`,61),Jc(2242,`code`),Tk(2243,`color-08`),Zg()(),Jc(2244,`li`),_u(2245,`span`,62),Jc(2246,`code`),Tk(2247,`color-09`),Zg()(),Jc(2248,`li`),_u(2249,`span`,63),Jc(2250,`code`),Tk(2251,`color-10`),Zg()(),Jc(2252,`li`),_u(2253,`span`,64),Jc(2254,`code`),Tk(2255,`color-11`),Zg()(),Jc(2256,`li`),_u(2257,`span`,65),Jc(2258,`code`),Tk(2259,`color-12`),Zg()()()()(),Jc(2260,`ul`)(2261,`li`),Tk(2262,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),Zg()()()(),Jc(2263,`tr`,15)(2264,`td`,16)(2265,`div`,17)(2266,`span`,18),Tk(2267,` data`),_u(2268,`br`),Zg()()(),Jc(2269,`td`,19)(2270,`code`,27),Tk(2271,`number `),Zg(),Jc(2272,`code`,66),Tk(2273,` Array<number>`),Zg()(),Jc(2274,`td`,23)(2275,`em`)(2276,`strong`),Tk(2277,`(opcional)`),Zg()(),Jc(2278,`p`),Tk(2279,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),Zg(),Jc(2280,`ul`)(2281,`li`),Tk(2282,`Para gráficos dos tipos `),Jc(2283,`code`),Tk(2284,`donut`),Zg(),Tk(2285,` e `),Jc(2286,`code`),Tk(2287,`pie`),Zg(),Tk(2288,`, espera-se `),Jc(2289,`em`),Tk(2290,`number`),Zg(),Tk(2291,`;`),Zg(),Jc(2292,`li`),Tk(2293,`Para gráficos dos tipos `),Jc(2294,`code`),Tk(2295,`area`),Zg(),Tk(2296,`, `),Jc(2297,`code`),Tk(2298,`bar`),Zg(),Tk(2299,`, `),Jc(2300,`code`),Tk(2301,`column`),Zg(),Tk(2302,`, `),Jc(2303,`code`),Tk(2304,`line`),Zg(),Tk(2305,` e `),Jc(2306,`code`),Tk(2307,`radar`),Zg(),Tk(2308,`, espera-se um `),Jc(2309,`em`),Tk(2310,`array`),Zg(),Tk(2311,` de `),Jc(2312,`code`),Tk(2313,`data`),Zg(),Tk(2314,`.`),Zg()(),Jc(2315,`blockquote`)(2316,`p`),Tk(2317,`Se passado valor `),Jc(2318,`code`),Tk(2319,`null`),Zg(),Tk(2320,` em determinado item da lista, a iteração irá ignorá-lo.`),Zg()()()(),Jc(2321,`tr`,15)(2322,`td`,16)(2323,`div`,17)(2324,`span`,18),Tk(2325,` from`),_u(2326,`br`),Zg()()(),Jc(2327,`td`,19)(2328,`code`,27),Tk(2329,`number`),Zg()(),Jc(2330,`td`,23)(2331,`em`)(2332,`strong`),Tk(2333,`(opcional)`),Zg()(),Jc(2334,`p`),Tk(2335,`Alcance inicial da cor.`),Zg(),Jc(2336,`blockquote`)(2337,`p`),Tk(2338,`Propriedade válida para gráfico do tipo `),Jc(2339,`code`),Tk(2340,`Gauge`),Zg(),Tk(2341,`.`),Zg()()()(),Jc(2342,`tr`,15)(2343,`td`,16)(2344,`div`,17)(2345,`span`,18),Tk(2346,` label`),_u(2347,`br`),Zg()()(),Jc(2348,`td`,19)(2349,`code`,35),Tk(2350,`string`),Zg()(),Jc(2351,`td`,23)(2352,`em`)(2353,`strong`),Tk(2354,`(opcional)`),Zg()(),Jc(2355,`p`),Tk(2356,`Rótulo referência da série.`),Zg()()(),Jc(2357,`tr`,15)(2358,`td`,16)(2359,`div`,17)(2360,`span`,18),Tk(2361,` stackGroupName`),_u(2362,`br`),Zg()()(),Jc(2363,`td`,19)(2364,`code`,35),Tk(2365,`string`),Zg()(),Jc(2366,`td`,23)(2367,`em`)(2368,`strong`),Tk(2369,`(opcional)`),Zg()(),Jc(2370,`p`),Tk(2371,`Agrupa as séries em barras ou colunas que receberem o mesmo `),Jc(2372,`code`),Tk(2373,`stackGroupName`),Zg(),Tk(2374,`. Exemplo:`),Zg(),Jc(2375,`ul`)(2376,`li`),Tk(2377,`Serie A: `),Jc(2378,`code`),Tk(2379,`{ data: 500, stackGroupName: 'group1' ... }`),Zg(),Tk(2380,`;`),Zg(),Jc(2381,`li`),Tk(2382,`Série B: `),Jc(2383,`code`),Tk(2384,`{ data: 200, stackGroupName: 'group1' ... }`),Zg(),Tk(2385,`.`),Zg(),Jc(2386,`li`),Tk(2387,`Série C: `),Jc(2388,`code`),Tk(2389,`{ data: 100, stackGroupName: 'group2' ... }`),Zg(),Tk(2390,`.`),Zg(),Jc(2391,`li`),Tk(2392,`Série D: `),Jc(2393,`code`),Tk(2394,`{ data: 400, stackGroupName: 'group2' ... }`),Zg(),Tk(2395,`.`),Zg()(),Jc(2396,`p`),Tk(2397,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),Zg(),Jc(2398,`blockquote`)(2399,`p`),Tk(2400,`Válido para gráfico do tipo `),Jc(2401,`code`),Tk(2402,`Column`),Zg(),Tk(2403,` e `),Jc(2404,`code`),Tk(2405,`Bar`),Zg(),Tk(2406,`. Essa propriedade é ignorada caso a propriedade `),Jc(2407,`code`),Tk(2408,`stacked`),Zg(),Tk(2409,` da interface `),Jc(2410,`code`),Tk(2411,`PoChartOptions`),Zg(),Tk(2412,` esteja como `),Jc(2413,`code`),Tk(2414,`true`),Zg(),Tk(2415,`.`),Zg()(),Jc(2416,`blockquote`)(2417,`p`),Tk(2418,`Essa propriedade habilita a propriedade `),Jc(2419,`code`),Tk(2420,`p-data-label`),Zg(),Tk(2421,` por padrão, podendo ser desabilitada passando `),Jc(2422,`code`),Tk(2423,`[p-data-label]={ fixed: false }`),Zg(),Tk(2424,`.`),Zg()()()(),Jc(2425,`tr`,15)(2426,`td`,16)(2427,`div`,17)(2428,`span`,18),Tk(2429,` to`),_u(2430,`br`),Zg()()(),Jc(2431,`td`,19)(2432,`code`,27),Tk(2433,`number`),Zg()(),Jc(2434,`td`,23)(2435,`em`)(2436,`strong`),Tk(2437,`(opcional)`),Zg()(),Jc(2438,`p`),Tk(2439,`Alcance final da cor.`),Zg(),Jc(2440,`blockquote`)(2441,`p`),Tk(2442,`Propriedade válida para gráfico do tipo `),Jc(2443,`code`),Tk(2444,`Gauge`),Zg(),Tk(2445,`.`),Zg()()()(),Jc(2446,`tr`,15)(2447,`td`,16)(2448,`div`,17)(2449,`span`,18),Tk(2450,` tooltip`),_u(2451,`br`),Zg()()(),Jc(2452,`td`,19)(2453,`code`,35),Tk(2454,`string `),Zg(),Jc(2455,`code`,67),Tk(2456,` ((params: any) => string)`),Zg()(),Jc(2457,`td`,23)(2458,`em`)(2459,`strong`),Tk(2460,`(opcional)`),Zg()(),Jc(2461,`p`),Tk(2462,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),Jc(2463,`em`),Tk(2464,`chart`),Zg(),Tk(2465,`.`),Zg(),Jc(2466,`p`),Tk(2467,`Formatos aceitos:`),Zg(),Jc(2468,`ul`)(2469,`li`)(2470,`p`)(2471,`strong`),Tk(2472,`string`),Zg(),Tk(2473,`: pode conter marcadores dinâmicos e HTML simples.`),Zg()(),Jc(2474,`li`)(2475,`p`),Tk(2476,`Marcadores disponíveis:`),Zg()(),Jc(2477,`li`)(2478,`p`)(2479,`code`),Tk(2480,`{name}`),Zg(),Tk(2481,` → Nome do item/categoria.`),Zg()(),Jc(2482,`li`)(2483,`p`)(2484,`code`),Tk(2485,`{seriesName}`),Zg(),Tk(2486,` → Nome da série.`),Zg()(),Jc(2487,`li`)(2488,`p`)(2489,`code`),Tk(2490,`{value}`),Zg(),Tk(2491,` → Valor correspondente.`),Zg()(),Jc(2492,`li`)(2493,`p`)(2494,`strong`),Tk(2495,`function`),Zg(),Tk(2496,`: função que recebe o objeto `),Jc(2497,`code`),Tk(2498,`params`),Zg(),Tk(2499,` e deve retornar uma `),Jc(2500,`em`),Tk(2501,`string`),Zg(),Tk(2502,` com o conteúdo da tooltip.`),Zg()()(),Jc(2503,`blockquote`)(2504,`p`),Tk(2505,`É possível utilizar marcação HTML simples (`),Jc(2506,`code`),Tk(2507,`<b>`),Zg(),Tk(2508,`, `),Jc(2509,`code`),Tk(2510,`<i>`),Zg(),Tk(2511,`, `),Jc(2512,`code`),Tk(2513,`<br>`),Zg(),Tk(2514,`, `),Jc(2515,`code`),Tk(2516,`<hr>`),Zg(),Tk(2517,`, etc.) que será interpretada via `),Jc(2518,`code`),Tk(2519,`innerHTML`),Zg(),Tk(2520,`.`),Zg()(),Jc(2521,`blockquote`)(2522,`p`),Tk(2523,`Formatação customizada (será convertido internamente para HTML):`),Zg()(),Jc(2524,`ul`)(2525,`li`)(2526,`code`),Tk(2527,`\\n`),Zg(),Tk(2528,` → quebra de linha (`),Jc(2529,`code`),Tk(2530,`<br>`),Zg(),Tk(2531,`).`),Zg(),Jc(2532,`li`)(2533,`code`),Tk(2534,`**texto**`),Zg(),Tk(2535,` → negrito (`),Jc(2536,`code`),Tk(2537,`<b>`),Zg(),Tk(2538,`).`),Zg(),Jc(2539,`li`)(2540,`code`),Tk(2541,`__texto__`),Zg(),Tk(2542,` → itálico (`),Jc(2543,`code`),Tk(2544,`<i>`),Zg(),Tk(2545,`).`),Zg()(),Jc(2546,`blockquote`)(2547,`p`),Tk(2548,`Caso não seja informado um valor para o `),Jc(2549,`em`),Tk(2550,`tooltip`),Zg(),Tk(2551,`, será exibido da seguinte forma:`),Zg()(),Jc(2552,`ul`)(2553,`li`)(2554,`code`),Tk(2555,`donut`),Zg(),Tk(2556,`, `),Jc(2557,`code`),Tk(2558,`label`),Zg(),Tk(2559,`: valor proporcional ao total em porcentagem.`),Zg(),Jc(2560,`li`)(2561,`code`),Tk(2562,`radar`),Zg(),Tk(2563,`: nome da série, o nome do indicator e os valores correspondentes.`),Zg(),Jc(2564,`li`)(2565,`code`),Tk(2566,`area`),Zg(),Tk(2567,`, `),Jc(2568,`code`),Tk(2569,`bar`),Zg(),Tk(2570,`, `),Jc(2571,`code`),Tk(2572,`column`),Zg(),Tk(2573,`, `),Jc(2574,`code`),Tk(2575,`line`),Zg(),Tk(2576,` e `),Jc(2577,`code`),Tk(2578,`pie`),Zg(),Tk(2579,`: `),Jc(2580,`code`),Tk(2581,`label`),Zg(),Tk(2582,`: `),Jc(2583,`code`),Tk(2584,`data`),Zg(),Tk(2585,`.`),Zg()(),Jc(2586,`h3`),Tk(2587,`Exemplos:`),Zg(),Jc(2588,`p`)(2589,`strong`),Tk(2590,`Usando string com placeholders:`),Zg()(),Jc(2591,`pre`)(2592,`code`,68),Tk(2593,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),Zg()(),Jc(2594,`p`)(2595,`strong`),Tk(2596,`Usando função de callback:`),Zg()(),Jc(2597,`pre`)(2598,`code`,68),Tk(2599,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),Zg()()()(),Jc(2600,`tr`,15)(2601,`td`,16)(2602,`div`,17)(2603,`span`,18),Tk(2604,` type`),_u(2605,`br`),Zg()()(),Jc(2606,`td`,19)(2607,`code`,36),Tk(2608,`PoChartType`),Zg()(),Jc(2609,`td`,23)(2610,`em`)(2611,`strong`),Tk(2612,`(opcional)`),Zg()(),Jc(2613,`p`),Tk(2614,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),Jc(2615,`code`),Tk(2616,`column`),Zg(),Tk(2617,` e `),Jc(2618,`code`),Tk(2619,`line`),Zg(),Tk(2620,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),Zg(),Jc(2621,`ul`)(2622,`li`),Tk(2623,`Serie A: `),Jc(2624,`code`),Tk(2625,`{ type: ChartType.Column, data: ... }`),Zg(),Tk(2626,`;`),Zg(),Jc(2627,`li`),Tk(2628,`Série B: `),Jc(2629,`code`),Tk(2630,`{ type: ChartType.Line, data: ... }`),Zg(),Tk(2631,`.`),Zg()(),Jc(2632,`p`),Tk(2633,`Se tanto `),Jc(2634,`code`),Tk(2635,`p-type`),Zg(),Tk(2636,` quanto `),Jc(2637,`code`),Tk(2638,`{ type }`),Zg(),Tk(2639,` forem ignorados, o padrão gerado pelo componente será:`),Zg(),Jc(2640,`ul`)(2641,`li`)(2642,`code`),Tk(2643,`column`),Zg(),Tk(2644,`: se `),Jc(2645,`code`),Tk(2646,`data`),Zg(),Tk(2647,` receber `),Jc(2648,`code`),Tk(2649,`Array<number>`),Zg(),Tk(2650,`;`),Zg(),Jc(2651,`li`)(2652,`code`),Tk(2653,`pie`),Zg(),Tk(2654,`: se `),Jc(2655,`code`),Tk(2656,`data`),Zg(),Tk(2657,` for `),Jc(2658,`em`),Tk(2659,`number`),Zg(),Tk(2660,`.`),Zg()(),Jc(2661,`blockquote`)(2662,`p`),Tk(2663,`Se utilizada a propriedade `),Jc(2664,`code`),Tk(2665,`p-type`),Zg(),Tk(2666,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),Jc(2667,`code`),Tk(2668,`{type}`),Zg(),Tk(2669,` da primeira série sobrescreverá o valor definido em `),Jc(2670,`code`),Tk(2671,`p-type`),Zg(),Tk(2672,`.`),Zg()(),Jc(2673,`blockquote`)(2674,`p`),Tk(2675,`O componente só exibirá as séries que tiverem o mesmo `),Jc(2676,`code`),Tk(2677,`type`),Zg(),Tk(2678,` definido, exceto para mesclagem para tipos `),Jc(2679,`code`),Tk(2680,`column`),Zg(),Tk(2681,` e `),Jc(2682,`code`),Tk(2683,`line`),Zg(),Tk(2684,`.`),Zg()()()()(),Jc(2685,`h3`),Tk(2686,`Enums`),Zg(),Jc(2687,`h4`,4)(2688,`code`,5),Tk(2689,`PoChartLabelFormat`),Zg()(),Jc(2690,`div`,2)(2691,`p`)(2692,`em`),Tk(2693,`Enum`),Zg(),Jc(2694,`code`),Tk(2695,`PoChartLabelFormat`),Zg(),Tk(2696,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),Zg()(),Jc(2697,`h4`,11),Tk(2698,`Propriedades`),Zg(),Jc(2699,`table`,12)(2700,`tr`,13)(2701,`th`,14),Tk(2702,`Nome`),Zg(),Jc(2703,`th`,14),Tk(2704,`Descrição`),Zg()(),Jc(2705,`tr`,15)(2706,`td`,16)(2707,`div`,17)(2708,`span`,18),Tk(2709,` Number`),_u(2710,`br`),Zg()()(),Jc(2711,`td`,23)(2712,`p`),Tk(2713,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),Jc(2714,`code`),Tk(2715,`'1.2-2'`),Zg(),Tk(2716,` da `),Jc(2717,`a`,69),Tk(2718,`DecimalPipe`),Zg(),Tk(2719,`.`),Zg()()(),Jc(2720,`tr`,15)(2721,`td`,16)(2722,`div`,17)(2723,`span`,18),Tk(2724,` Currency`),_u(2725,`br`),Zg()()(),Jc(2726,`td`,23)(2727,`p`),Tk(2728,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),Jc(2729,`a`,70),Tk(2730,`DEFAULT_CURRENCY_CODE`),Zg(),Tk(2731,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),Jc(2732,`a`,71),Tk(2733,`LOCALE_ID`),Zg(),Tk(2734,` da aplicação. A configuração pode ser feita da seguinte forma:`),Zg(),Jc(2735,`pre`)(2736,`code`),Tk(2737,`import { LOCALE_ID } from '@angular/core';
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
`),Zg()()()()(),Jc(2738,`h4`,4)(2739,`code`,5),Tk(2740,`PoChartType`),Zg()(),Jc(2741,`div`,2)(2742,`p`)(2743,`em`),Tk(2744,`Enum`),Zg(),Jc(2745,`code`),Tk(2746,`PoChartType`),Zg(),Tk(2747,` para especificação dos tipos de gráficos.`),Zg()(),Jc(2748,`h4`,11),Tk(2749,`Propriedades`),Zg(),Jc(2750,`table`,12)(2751,`tr`,13)(2752,`th`,14),Tk(2753,`Nome`),Zg(),Jc(2754,`th`,14),Tk(2755,`Descrição`),Zg()(),Jc(2756,`tr`,15)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),Tk(2760,` Area`),_u(2761,`br`),Zg()()(),Jc(2762,`td`,23)(2763,`p`),Tk(2764,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),Zg()()(),Jc(2765,`tr`,15)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),Tk(2769,` Donut`),_u(2770,`br`),Zg()()(),Jc(2771,`td`,23)(2772,`p`),Tk(2773,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),Zg()()(),Jc(2774,`tr`,15)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),Tk(2778,` Pie`),_u(2779,`br`),Zg()()(),Jc(2780,`td`,23)(2781,`p`),Tk(2782,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),Zg()()(),Jc(2783,`tr`,15)(2784,`td`,16)(2785,`div`,17)(2786,`span`,18),Tk(2787,` Line`),_u(2788,`br`),Zg()()(),Jc(2789,`td`,23)(2790,`p`),Tk(2791,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Jc(2792,`code`),Tk(2793,`column`),Zg(),Tk(2794,` e `),Jc(2795,`code`),Tk(2796,`area`),Zg(),Tk(2797,`, definindo-se o tipo através da propriedade `),Jc(2798,`code`),Tk(2799,`PoChartSerie.type`),Zg(),Tk(2800,`.`),Zg()()(),Jc(2801,`tr`,15)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),Tk(2805,` Column`),_u(2806,`br`),Zg()()(),Jc(2807,`td`,23)(2808,`p`),Tk(2809,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),Zg()()(),Jc(2810,`tr`,15)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),Tk(2814,` Bar`),_u(2815,`br`),Zg()()(),Jc(2816,`td`,23)(2817,`p`),Tk(2818,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),Zg()()(),Jc(2819,`tr`,15)(2820,`td`,16)(2821,`div`,17)(2822,`span`,18),Tk(2823,` Gauge`),_u(2824,`br`),Zg()()(),Jc(2825,`td`,23)(2826,`p`),Tk(2827,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),Zg(),Jc(2828,`ul`)(2829,`li`),Tk(2830,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),Zg(),Jc(2831,`li`),Tk(2832,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),Zg()()()(),Jc(2833,`tr`,15)(2834,`td`,16)(2835,`div`,17)(2836,`span`,18),Tk(2837,` Radar`),_u(2838,`br`),Zg()()(),Jc(2839,`td`,23)(2840,`p`),Tk(2841,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return r})();function _t(r,N){if(r&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(l);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-chart-basic-view`)(2,`sample-po-chart-labs-view`)(3,`sample-po-chart-coffee-ranking-view`)(4,`sample-po-chart-stacked-view`)(5,`sample-po-chart-summary-view`)(6,`sample-po-chart-world-exports-view`)(7,`sample-po-chart-technology-skill-view`),Zg()}if(r&2){let l=nk();Ab(`p-active`,l.activeTab===`web`)}}var Pt=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:d||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||r)(I(ar),I(An))};static ɵcmp=Jn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Chart`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(d,i){d&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,_t,8,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-chart-doc`),Zg()()()),d&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,fe,ve,Pe,we,Me,ke,Ae,Re],encapsulation:2,changeDetection:1})}return r})()}];var Ge=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[WV.forChild(Pt),WV]})}return r})();var vn=(()=>{class r{static ɵfac=function(d){return new(d||r)};static ɵmod=ge({type:r});static ɵinj=de({imports:[M,Ge]})}return r})();export{vn as DocPoChartModule};