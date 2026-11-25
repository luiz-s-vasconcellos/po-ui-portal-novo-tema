import{m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Ar as G0,At as Zte,Ci as Rk,Ea as jk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,It as bae,Kr as Kg,L as Koe,Li as WL,Ma as mk,Ni as Vk,Oi as U_,Pt as are,Qr as Mk,Sa as jO,Si as RZ,Tn as q4,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de,ar as Ab,at as S4,bn as oi,co as wg,eo as tk,f as Cze,fo as xZ,j as I4,jn as sie,jr as GV,k as Goe,mi as QL,or as An,ot as Sa,pa as ge,pr as Bk,qi as Zb,rr as AZ,sn as j4,so as we$1,tt as R4,w as Fc,zr as I}from"./chunk-DdK63a0t.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var Re=()=>({label:`Angular`,data:100});var Oe=()=>({label:`React`,data:10});var Ge=(l,O)=>[l,O];var xe=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-basic`]],standalone:!1,decls:2,vars:6,consts:[[3,`p-series`]],template:function(d,i){d&1&&(Jc(0,`po-widget`),_u(1,`po-chart`,0),Kg()),d&2&&(wg(),Ab(`p-series`,Bk(3,Ge,Vk(1,Re),Vk(2,Oe))))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return l})();var Se=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-chart-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-chart-basic/sample-po-chart-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-chart-basic/sample-po-chart-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Chart Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-chart-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-chart-basic/sample-po-chart-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-widget>
  <po-chart
    [p-series]="[
      { label: 'Angular', data: 100 },
      { label: 'React', data: 10 }
    ]"
  >
  </po-chart>
</po-widget>`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-chart-basic/sample-po-chart-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,xe],encapsulation:2,changeDetection:1})}return l})();var Fe=()=>({value:`fillPoints`,label:`fillPoints`});var N=l=>[l];var Ne=()=>({label:`legend`,value:`legend`});var qe=()=>({label:`roseType`,value:`roseType`});var Ie=()=>({label:`showFromToLegend`,value:`showFromToLegend`});var ze=()=>({label:`pointer`,value:`pointer`});var He=()=>({label:`stacked`,value:`stacked`});var Ze=()=>({value:`fixed`,label:`Fixed`});function Ye(l,O){if(l&1){let r=KO();Jc(0,`po-checkbox-group`,54),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.selectedValuesDataLabel,i)||(p.selectedValuesDataLabel=i),H_(i)}),_t(`p-change`,function(){U_(r);let i=tk();return H_(i.changeDataLabelOptions())}),Kg()}if(l&2){let r=tk();Ab(`p-options`,jk(3,N,Vk(2,Ze))),Kb(`ngModel`,r.selectedValuesDataLabel),q0()}}function je(l,O){if(l&1){let r=KO();Jc(0,`po-number`,55),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.valueGauge,i)||(p.valueGauge=i),H_(i)}),_t(`p-change`,function(i){U_(r);let p=tk();return H_(p.changeValueGauge(i))}),Kg()}if(l&2){let r=tk();Kb(`ngModel`,r.valueGauge),q0()}}function Ue(l,O){if(l&1){let r=KO();Jc(0,`po-radio-group`,56),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.selectedShapeOption,i)||(p.selectedShapeOption=i),H_(i)}),Kg(),Jc(1,`po-switch`,57),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.selectedSplitArea,i)||(p.selectedSplitArea=i),H_(i)}),Kg(),Jc(2,`po-switch`,58),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.selectedAreaStyle,i)||(p.selectedAreaStyle=i),H_(i)}),Kg()}if(l&2){let r=tk();Ab(`p-options`,r.optionsShapeOption),Kb(`ngModel`,r.selectedShapeOption),q0(),wg(),Kb(`ngModel`,r.selectedSplitArea),q0(),wg(),Kb(`ngModel`,r.selectedAreaStyle),q0()}}function Je(l,O){if(l&1){let r=KO();Jc(0,`po-input`,59),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.data,i)||(p.data=i),H_(i)}),Kg()}if(l&2){let r=tk();Kb(`ngModel`,r.data),q0()}}function Xe(l,O){if(l&1){let r=KO();Jc(0,`po-input`,60),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.stackGroupName,i)||(p.stackGroupName=i),H_(i)}),Kg()}if(l&2){let r=tk();Kb(`ngModel`,r.stackGroupName),q0()}}function Qe(l,O){if(l&1){let r=KO();Jc(0,`po-number`,61),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.fromGauge,i)||(p.fromGauge=i),H_(i)}),Kg()}if(l&2){let r=tk();Kb(`ngModel`,r.fromGauge),q0()}}function Ke(l,O){if(l&1){let r=KO();Jc(0,`po-number`,62),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.toGauge,i)||(p.toGauge=i),H_(i)}),Kg()}if(l&2){let r=tk();Kb(`ngModel`,r.toGauge),q0()}}function $e(l,O){if(l&1){let r=KO();Jc(0,`div`,3)(1,`po-button`,63),_t(`p-click`,function(){U_(r);let i=tk();return H_(i.addData())}),Kg()()}}function et(l,O){if(l&1){let r=KO();Jc(0,`po-number`,64),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.min,i)||(p.min=i),H_(i)}),Kg(),Jc(1,`po-number`,65),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.max,i)||(p.max=i),H_(i)}),Kg(),Jc(2,`po-input`,66),G0(),Zb(`ngModelChange`,function(i){U_(r);let p=tk();return Rk(p.colorIndicator,i)||(p.colorIndicator=i),H_(i)}),Kg(),Jc(3,`div`,3)(4,`po-button`,67),_t(`p-click`,function(){U_(r);let i=tk();return H_(i.addData())}),Kg()()}if(l&2){let r=tk();Kb(`ngModel`,r.min),q0(),wg(),Kb(`ngModel`,r.max),q0(),wg(),Kb(`ngModel`,r.colorIndicator),q0(),wg(2),Ab(`p-disabled`,r.isTypeRadar&&!r.categories)}}var be=(()=>{class l{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=[`legend`];selectedLegendVerticalPosition=`bottom`;selectedLegendPosition=`center`;selectedLegendType=`plain`;selectedRendererOption=`canvas`;selectedShapeOption=`polygon`;helpRadar=`Example: ["Bold", "Keen", "Calm", "Wise"]`;helpGeneric=`Example: ["Jan", "Feb", "Mar", "Apr"]`;optionsAxis=[{value:`showXAxis`,label:`showXAxis`},{value:`showYAxis`,label:`showYAxis`},{value:`showAxisDetails`,label:`showAxisDetails`}];optionsHeader=[{value:`hideTableDetails`,label:`hideTableDetails`},{value:`hideExpand`,label:`hideExpand`},{value:`hideExportCsv`,label:`hideExportCsv`},{value:`hideExportImage`,label:`hideExportImage`}];optionsDataZoom=[{value:`dataZoom`,label:`dataZoom`},{value:`bottomDataZoom`,label:`bottomDataZoom`}];optionsLegendVerticalPosition=[{value:`top`,label:`top`},{value:`bottom`,label:`bottom`}];optionsLegendPosition=[{value:`left`,label:`left`},{value:`center`,label:`center`},{value:`right`,label:`right`}];optionsLegendType=[{value:`plain`,label:`plain`},{value:`scroll`,label:`scroll`}];optionsRendererOption=[{value:`canvas`,label:`canvas`},{value:`svg`,label:`svg`}];optionsShapeOption=[{value:`polygon`,label:`polygon`},{value:`circle`,label:`circle`}];typeOptions=[{label:`Line`,value:Sa.Line},{label:`Area`,value:Sa.Area},{label:`Bar`,value:Sa.Bar},{label:`Column`,value:Sa.Column},{label:`Donut`,value:Sa.Donut},{label:`Pie`,value:Sa.Pie},{label:`Gauge`,value:Sa.Gauge},{label:`Radar`,value:Sa.Radar}];labelTypeOptions=[{label:`Number`,value:S4.Number},{label:`Currency`,value:S4.Currency}];changeDataLabelOptions(){this.dataLabel=s(r({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes(`fixed`)})}changeAxisOptions(){let r$1={showXAxis:this.selectedValuesAxis.includes(`showXAxis`),showYAxis:this.selectedValuesAxis.includes(`showYAxis`),showAxisDetails:this.selectedValuesAxis.includes(`showAxisDetails`)};this.options=s(r({},this.options),{axis:r$1})}changeHeaderOptions(){let r$2={hideExpand:this.selectedValuesHeader.includes(`hideExpand`),hideExportCsv:this.selectedValuesHeader.includes(`hideExportCsv`),hideExportImage:this.selectedValuesHeader.includes(`hideExportImage`),hideTableDetails:this.selectedValuesHeader.includes(`hideTableDetails`)};this.options=s(r({},this.options),{header:r$2})}changeDataZoomOptions(){this.options=s(r({},this.options),{dataZoom:this.selectedValuesDataZoom.includes(`dataZoom`),bottomDataZoom:this.selectedValuesDataZoom.includes(`bottomDataZoom`)}),this.options=r({},this.options)}changeFillPointsOptions(){this.options=s(r({},this.options),{fillPoints:this.selectedValuesFillPoints.includes(`fillPoints`)})}changeLegendOptions(){this.options=s(r({},this.options),{legend:this.selectedValuesLegend.includes(`legend`)})}changeRoseTypeOptions(){this.options=s(r({},this.options),{roseType:this.selectedRoseType.includes(`roseType`)})}changeShowFromToLegend(){this.options=s(r({},this.options),{showFromToLegend:this.selectedFromToLegend.includes(`showFromToLegend`)})}changePointer(){this.options=s(r({},this.options),{pointer:this.selectedPointer.includes(`pointer`)})}changeStacked(){this.options=s(r({},this.options),{stacked:this.selectedStacked.includes(`stacked`)})}changeLegendVerticalPosition(){this.options=s(r({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=s(r({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=s(r({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=s(r({},this.options),{rendererOption:this.selectedRendererOption})}changeType(r){r===Sa.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),r===Sa.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(r){this.restore(!0),this.disabledTooltip=r,this.disabledType=r,r?(this.serieType=Sa.Gauge,this.type=Sa.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(r){this.restore(!0,!0),this.disabledType=r,r?(this.serieType=Sa.Radar,this.type=Sa.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(r){this.series?.length===1&&!this.toGauge&&(this.series[0].data=r,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(r$3){this.options=r(r({},this.options),r$3?r({},r$3):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let r=this.convertToArray(this.categories);this.radarConfig={indicator:r.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let r$4=this.serieType??this.type,d;r$4===`radar`?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:r$4,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===Sa.Line||this.type===Sa.Area||this.type===Sa.Column||this.type===Sa.Bar||this.type===Sa.Radar}changeEvent(r,d){this.event=`${r}: ${JSON.stringify(d)}`}restore(r$5=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=s(r({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],r$5||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(r){try{return JSON.parse(r)}catch(d){return}}static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-labs`]],standalone:!1,decls:67,vars:100,consts:[[`chartSeries`,`ngForm`],[3,`p-series-click`,`p-series-hover`,`p-categories`,`p-height`,`p-data-label`,`p-options`,`p-series`,`p-title`,`p-type`,`p-value-gauge-multiple`],[`p-label`,`Events`,1,`po-md-12`],[1,`po-row`],[`p-label`,`Event`,3,`p-value`],[`p-label`,`Properties`,1,`po-md-12`],[`name`,`type`,`p-columns`,`3`,`p-label`,`Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`height`,`p-label`,`Height`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`p-options`,`ngModel`],[`p-label`,`Chart series`,1,`po-md-12`],[`name`,`switch`,`p-label`,`Gauge Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radar`,`p-label`,`Radar Type`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModel`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModel`],[`name`,`serieType`,`p-help`,`Serie Type`,`p-label`,`Type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`tooltip`,`p-label`,`Tooltip`,`p-help`,`Custom Tooltip`,1,`po-md-4`,3,`ngModelChange`,`p-disabled`,`ngModel`],[`name`,`color`,`p-label`,`Color`,`p-help`,`Custom Color`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModel`],[`p-label`,`Chart categories`,1,`po-md-12`],[`name`,`categories`,3,`ngModelChange`,`p-blur`,`p-label`,`p-help`,`ngModel`],[`p-label`,`Chart options`,1,`po-md-12`],[`name`,`minRange`,`p-label`,`minRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`maxRange`,`p-label`,`maxRange`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`gridLines`,`p-label`,`gridLines`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`labelType`,`p-label`,`labelType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`paddingBottom`,`p-label`,`paddingBottom`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingLeft`,`p-label`,`paddingLeft`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`paddingRight`,`p-label`,`paddingRight`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`rotateLegend`,`p-label`,`rotateLegend`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`innerRadius`,`p-label`,`innerRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`borderRadius`,`p-label`,`borderRadius`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`firstColumnName`,`p-label`,`firstColumnName`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`textCenterGraph`,`p-label`,`textCenterGraph`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`descriptionChart`,`p-label`,`descriptionChart`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`subtitleGauge`,`p-label`,`subtitleGauge`,1,`po-md-4`,3,`ngModelChange`,`p-blur`,`ngModel`],[`name`,`headerGroup`,`p-label`,`Header`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`axisGroup`,`p-label`,`Axis`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`dataZoomGroup`,`p-label`,`DataZoom`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`fillPoints`,`p-label`,`FillPoints`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-columns`,`p-options`,`ngModel`],[`name`,`legend`,`p-label`,`Legend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`roseType`,`p-label`,`RoseType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`showFromToLegend`,`p-label`,`ShowFromToLegend`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`pointer`,`p-label`,`Pointer`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`stacked`,`p-label`,`Stacked`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendVerticalPosition`,`p-label`,`LegendVerticalPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendPosition`,`p-label`,`LegendPosition`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioLegendType`,`p-label`,`LegendType`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`name`,`radioRendererOption`,`p-label`,`RendererOption`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[1,`po-md-12`],[`p-label`,`Sample Restore`,1,`po-md-4`,3,`p-click`],[`name`,`dataLabel`,`p-label`,`DataLabel`,1,`po-md-3`,3,`ngModelChange`,`p-change`,`p-options`,`ngModel`],[`p-label`,`Value Gauge`,`name`,`valueGauge`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`radioShapeOption`,`p-label`,`ShapeOption`,1,`po-md-3`,3,`ngModelChange`,`p-options`,`ngModel`],[`name`,`splitArea`,`p-label`,`splitArea`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`areaStyle`,`p-label`,`areaStyle`,1,`po-md-1`,3,`ngModelChange`,`ngModel`],[`name`,`data`,`p-label`,`Data`,`p-help`,`Example: [25, 58, 83, 66] or 25`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`stackGroupName`,`p-label`,`Stack Group Name`,`p-help`,`Custom Group Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`From`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`To`,`name`,`from`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`],[`name`,`min`,`p-label`,`Min`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-label`,`Max`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`colorIndicator`,`p-label`,`Color`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Serie`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(d,i){if(d&1){let p=KO();Jc(0,`po-widget`)(1,`po-chart`,1),_t(`p-series-click`,function(o){return i.changeEvent(`p-series-click`,o)})(`p-series-hover`,function(o){return i.changeEvent(`p-series-hover`,o)}),Kg()(),_u(2,`po-divider`,2),Jc(3,`div`,3),_u(4,`po-info`,4),Kg(),_u(5,`po-divider`,5),Jc(6,`form`)(7,`po-select`,6),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.type,o)||(i.type=o),H_(o)}),_t(`p-change`,function(o){return i.changeType(o)}),Kg(),Jc(8,`po-number`,7),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.height,o)||(i.height=o),H_(o)}),Kg(),Jc(9,`po-input`,8),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.title,o)||(i.title=o),H_(o)}),Kg(),LO(10,Ye,1,5,`po-checkbox-group`,9),Kg(),_u(11,`po-divider`,10),Jc(12,`form`,null,0)(14,`div`,3)(15,`po-switch`,11),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.isTypeGauge,o)||(i.isTypeGauge=o),H_(o)}),_t(`p-change`,function(o){return i.changeSwitchGauge(o)}),Kg(),Jc(16,`po-switch`,12),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.isTypeRadar,o)||(i.isTypeRadar=o),H_(o)}),_t(`p-change`,function(o){return i.changeSwitchRadar(o)}),Kg(),LO(17,je,1,1,`po-number`,13),LO(18,Ue,3,4),Kg(),Jc(19,`div`,3)(20,`po-input`,14),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.label,o)||(i.label=o),H_(o)}),Kg(),LO(21,Je,1,1,`po-input`,15),Jc(22,`po-select`,16),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.serieType,o)||(i.serieType=o),H_(o)}),_t(`p-change`,function(o){return i.changeType(o)}),Kg(),Jc(23,`po-input`,17),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.tooltip,o)||(i.tooltip=o),H_(o)}),Kg(),Jc(24,`po-input`,18),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.color,o)||(i.color=o),H_(o)}),Kg(),LO(25,Xe,1,1,`po-input`,19),LO(26,Qe,1,1,`po-number`,20),LO(27,Ke,1,1,`po-number`,21),LO(28,$e,2,0,`div`,3),Kg()(),Jc(29,`div`,3),_u(30,`po-divider`,22),Jc(31,`po-input`,23),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.categories,o)||(i.categories=o),H_(o)}),_t(`p-blur`,function(){return i.addCategories()}),Kg(),LO(32,et,5,4),Kg(),Jc(33,`form`)(34,`div`,3),_u(35,`po-divider`,24),Jc(36,`po-number`,25),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.minRange,o)||(i.options.axis.minRange=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(37,`po-number`,26),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.maxRange,o)||(i.options.axis.maxRange=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(38,`po-number`,27),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.gridLines,o)||(i.options.axis.gridLines=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(39,`po-select`,28),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.labelType,o)||(i.options.axis.labelType=o),H_(o)}),_t(`p-change`,function(){return i.addOptions()}),Kg(),Jc(40,`po-number`,29),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.paddingBottom,o)||(i.options.axis.paddingBottom=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(41,`po-number`,30),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.paddingLeft,o)||(i.options.axis.paddingLeft=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(42,`po-number`,31),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.paddingRight,o)||(i.options.axis.paddingRight=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(43,`po-number`,32),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.axis.rotateLegend,o)||(i.options.axis.rotateLegend=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(44,`po-number`,33),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.innerRadius,o)||(i.options.innerRadius=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(45,`po-number`,34),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.borderRadius,o)||(i.options.borderRadius=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(46,`po-input`,35),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.firstColumnName,o)||(i.options.firstColumnName=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(47,`po-input`,36),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.textCenterGraph,o)||(i.options.textCenterGraph=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(48,`po-input`,37),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.descriptionChart,o)||(i.options.descriptionChart=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg(),Jc(49,`po-input`,38),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.options.subtitleGauge,o)||(i.options.subtitleGauge=o),H_(o)}),_t(`p-blur`,function(){return i.addOptions()}),Kg()(),Jc(50,`div`,3)(51,`po-checkbox-group`,39),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedValuesHeader,o)||(i.selectedValuesHeader=o),H_(o)}),_t(`p-change`,function(){return i.changeHeaderOptions()}),Kg(),Jc(52,`po-checkbox-group`,40),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedValuesAxis,o)||(i.selectedValuesAxis=o),H_(o)}),_t(`p-change`,function(){return i.changeAxisOptions()}),Kg(),Jc(53,`po-checkbox-group`,41),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedValuesDataZoom,o)||(i.selectedValuesDataZoom=o),H_(o)}),_t(`p-change`,function(){return i.changeDataZoomOptions()}),Kg(),Jc(54,`po-checkbox-group`,42),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedValuesFillPoints,o)||(i.selectedValuesFillPoints=o),H_(o)}),_t(`p-change`,function(){return i.changeFillPointsOptions()}),Kg(),Jc(55,`po-checkbox-group`,43),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedValuesLegend,o)||(i.selectedValuesLegend=o),H_(o)}),_t(`p-change`,function(){return i.changeLegendOptions()}),Kg(),Jc(56,`po-checkbox-group`,44),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedRoseType,o)||(i.selectedRoseType=o),H_(o)}),_t(`p-change`,function(){return i.changeRoseTypeOptions()}),Kg(),Jc(57,`po-checkbox-group`,45),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedFromToLegend,o)||(i.selectedFromToLegend=o),H_(o)}),_t(`p-change`,function(){return i.changeShowFromToLegend()}),Kg(),Jc(58,`po-checkbox-group`,46),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedPointer,o)||(i.selectedPointer=o),H_(o)}),_t(`p-change`,function(){return i.changePointer()}),Kg(),Jc(59,`po-checkbox-group`,47),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedStacked,o)||(i.selectedStacked=o),H_(o)}),_t(`p-change`,function(){return i.changeStacked()}),Kg(),Jc(60,`po-radio-group`,48),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedLegendVerticalPosition,o)||(i.selectedLegendVerticalPosition=o),H_(o)}),_t(`p-change`,function(){return i.changeLegendVerticalPosition()}),Kg(),Jc(61,`po-radio-group`,49),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedLegendPosition,o)||(i.selectedLegendPosition=o),H_(o)}),_t(`p-change`,function(){return i.changeLegendPosition()}),Kg(),Jc(62,`po-radio-group`,50),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedLegendType,o)||(i.selectedLegendType=o),H_(o)}),_t(`p-change`,function(){return i.changeLegendType()}),Kg(),Jc(63,`po-radio-group`,51),G0(),Zb(`ngModelChange`,function(o){return U_(p),Rk(i.selectedRendererOption,o)||(i.selectedRendererOption=o),H_(o)}),_t(`p-change`,function(){return i.changeRendererOption()}),Kg()(),_u(64,`po-divider`,52),Jc(65,`div`,3)(66,`po-button`,53),_t(`p-click`,function(){return i.restore()}),Kg()()()}d&2&&(wg(),Ab(`p-categories`,i.isTypeRadar?i.radarConfig:i.allCategories)(`p-height`,i.height)(`p-data-label`,i.dataLabel)(`p-options`,i.options)(`p-series`,i.series)(`p-title`,i.title)(`p-type`,i.type)(`p-value-gauge-multiple`,i.valueGauge),wg(3),Ab(`p-value`,i.event),wg(3),Kb(`ngModel`,i.type),Ab(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),q0(),wg(),Kb(`ngModel`,i.height),q0(),wg(),Kb(`ngModel`,i.title),q0(),wg(),jO(i.isTypeGrid()?10:-1),wg(5),Kb(`ngModel`,i.isTypeGauge),q0(),wg(),Kb(`ngModel`,i.isTypeRadar),q0(),wg(),jO(i.isTypeGauge?17:-1),wg(),jO(i.isTypeRadar?18:-1),wg(2),Kb(`ngModel`,i.label),q0(),wg(),jO(i.isTypeGauge?-1:21),wg(),Kb(`ngModel`,i.serieType),Ab(`p-disabled`,i.disabledType)(`p-options`,i.typeOptions),q0(),wg(),Ab(`p-disabled`,i.disabledTooltip),Kb(`ngModel`,i.tooltip),q0(),wg(),Kb(`ngModel`,i.color),q0(),wg(),jO(i.type===`bar`||i.serieType===`bar`||i.type===`column`||i.serieType===`column`?25:-1),wg(),jO(i.isTypeGauge?26:-1),wg(),jO(i.isTypeGauge?27:-1),wg(),jO(i.isTypeRadar?-1:28),wg(3),mk(i.isTypeRadar?`po-md-3`:`po-md-4`),Ab(`p-label`,i.isTypeRadar?`Indicators`:`Categories`)(`p-help`,i.isTypeRadar?i.helpRadar:i.helpGeneric),Kb(`ngModel`,i.categories),q0(),wg(),jO(i.isTypeRadar?32:-1),wg(4),Kb(`ngModel`,i.options.axis.minRange),q0(),wg(),Kb(`ngModel`,i.options.axis.maxRange),q0(),wg(),Kb(`ngModel`,i.options.axis.gridLines),q0(),wg(),Ab(`p-options`,i.labelTypeOptions),Kb(`ngModel`,i.options.axis.labelType),q0(),wg(),Kb(`ngModel`,i.options.axis.paddingBottom),q0(),wg(),Kb(`ngModel`,i.options.axis.paddingLeft),q0(),wg(),Kb(`ngModel`,i.options.axis.paddingRight),q0(),wg(),Kb(`ngModel`,i.options.axis.rotateLegend),q0(),wg(),Kb(`ngModel`,i.options.innerRadius),q0(),wg(),Kb(`ngModel`,i.options.borderRadius),q0(),wg(),Kb(`ngModel`,i.options.firstColumnName),q0(),wg(),Kb(`ngModel`,i.options.textCenterGraph),q0(),wg(),Kb(`ngModel`,i.options.descriptionChart),q0(),wg(),Kb(`ngModel`,i.options.subtitleGauge),q0(),wg(2),Ab(`p-columns`,2)(`p-options`,i.optionsHeader),Kb(`ngModel`,i.selectedValuesHeader),q0(),wg(),Ab(`p-columns`,2)(`p-options`,i.optionsAxis),Kb(`ngModel`,i.selectedValuesAxis),q0(),wg(),Ab(`p-columns`,2)(`p-options`,i.optionsDataZoom),Kb(`ngModel`,i.selectedValuesDataZoom),q0(),wg(),Ab(`p-columns`,1)(`p-options`,jk(83,N,Vk(82,Fe))),Kb(`ngModel`,i.selectedValuesFillPoints),q0(),wg(),Ab(`p-options`,jk(86,N,Vk(85,Ne))),Kb(`ngModel`,i.selectedValuesLegend),q0(),wg(),Ab(`p-options`,jk(89,N,Vk(88,qe))),Kb(`ngModel`,i.selectedRoseType),q0(),wg(),Ab(`p-options`,jk(92,N,Vk(91,Ie))),Kb(`ngModel`,i.selectedFromToLegend),q0(),wg(),Ab(`p-options`,jk(95,N,Vk(94,ze))),Kb(`ngModel`,i.selectedPointer),q0(),wg(),Ab(`p-options`,jk(98,N,Vk(97,He))),Kb(`ngModel`,i.selectedStacked),q0(),wg(),Ab(`p-options`,i.optionsLegendVerticalPosition),Kb(`ngModel`,i.selectedLegendVerticalPosition),q0(),wg(),Ab(`p-options`,i.optionsLegendPosition),Kb(`ngModel`,i.selectedLegendPosition),q0(),wg(),Ab(`p-options`,i.optionsLegendType),Kb(`ngModel`,i.selectedLegendType),q0(),wg(),Ab(`p-options`,i.optionsRendererOption),Kb(`ngModel`,i.selectedRendererOption),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Cze,Nf,I4,j4,Goe,Zte,Koe,R4,Joe,bae],encapsulation:2,changeDetection:1})}return l})();var fe=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-chart-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-chart-labs/sample-po-chart-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-chart-labs/sample-po-chart-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Chart Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-chart-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-chart-labs/sample-po-chart-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-widget>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-chart-labs/sample-po-chart-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,be],encapsulation:2,changeDetection:1})}return l})();var Ce=(()=>{class l{poAlert=p(sie);participationByCountryInWorldExportsType=Sa.Line;evolutionOfCoffeeAndSomeCompetitorsType=Sa.Column;coffeConsumingChartType=Sa.Donut;consumptionPerCapitaType=Sa.Bar;categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];chartAreaCategories=[`Jan-18`,`Jul-18`,`Jan-19`,`Jul-19`,`Jan-20`,`Jul-20`,`Jan-21`];categoriesColumn=[`coffee`,`chocolate`,`tea`];consumptionPerCapitaItems=[`Water`,`Fruit Juice`,`Coffee`,`Cola drinks`,`Pils`,`Tea`,`Red Wine`,`Prosecco`,`Sodas`,`Beer 0% A.`,`Wheat Beer`,`Milk Shakes`];chartAreaSeries=[{label:`Starbucks`,data:[550,497,532,550,530,565,572],type:Sa.Area},{label:`Green Mntn Coffee Roaster`,data:[420,511,493,525,522,510,567],type:Sa.Area},{label:`Dunkin Brands Group`,data:[312,542,497,610,542,661,674],type:Sa.Area},{label:`Coffee Arabica Price`,data:[550,612,525,373,342,297,282],type:Sa.Line}];coffeeConsumption=[{label:`Finland`,data:9.6,tooltip:`Finland (Europe)`},{label:`Norway`,data:7.2,tooltip:`Norway (Europe)`},{label:`Netherlands`,data:6.7,tooltip:`Netherlands (Europe)`},{label:`Slovenia`,data:6.1,tooltip:`Slovenia (Europe)`},{label:`Austria`,data:5.5,tooltip:`Austria (Europe)`},{label:`Germany`,data:5.2,tooltip:`Germany (Europe)`},{label:`Denmark`,data:5.1,tooltip:`Denmark (Europe)`},{label:`Sweden`,data:4.9,tooltip:`Sweden (Europe)`},{label:`Switzerland`,data:4.8,tooltip:`Switzerland (Europe)`},{label:`Belgium`,data:4.6,tooltip:`Belgium (Europe)`},{label:`Canada`,data:4.5,tooltip:`Canada (North America)`},{label:`Brazil`,data:4.3,tooltip:`Brazil (South America)`},{label:`Italy`,data:4.2,tooltip:`Italy (Europe)`},{label:`France`,data:4.1,tooltip:`France (Europe)`},{label:`USA`,data:4,tooltip:`USA (North America)`}];consumptionPerCapita=[{label:`2018`,data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:`2020`,data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,25,29,33,33],color:`color-10`,tooltip:r=>`Pa\xEDs: ${r.seriesName}<br><b>Ano:</b> ${r.name}<br><b>Exporta\xE7\xF5es:</b> ${r.value}%`},{label:`Vietnam`,data:[15,17,23,19,22,18],tooltip:`Exportações de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participação: {value}%`},{label:`Colombia`,data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:`India`,data:[5,6,5,4,5,5]},{label:`Indonesia`,data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:`2014`,data:[91,40,42],type:Sa.Column},{label:`2017`,data:[93,52,18],type:Sa.Column},{label:`2020`,data:[95,21,-17],type:Sa.Column},{label:`Coffee consumption in Brazil`,data:[34,27,79],type:Sa.Line,color:`color-10`}];coffeeProduction=[{label:`Brazil`,data:1796,tooltip:`Brazil (South America)`,color:`color-10`},{label:`Vietnam`,data:1076,tooltip:`Vietnam (Asia)`},{label:`Colombia`,data:688,tooltip:`Colombia (South America)`},{label:`Indonesia`,data:682,tooltip:`Indonesia (Asia/Oceania)`},{label:`Peru`,data:273,tooltip:`Peru (South America)`}];items=[{position:`1`,company:`Tim Hortons`,location:`Hamilton, Ontario, Canada`,foundation:`1964`},{position:`2`,company:`Bewley’s`,location:`Dublin, Ireland`,foundation:`1840`},{position:`3`,company:`Lavazza Coffee`,location:`Italy`,foundation:`1895`},{position:`4`,company:`Peet’s Tea and Coffee`,location:`Emeryville, California, US`,foundation:`1966`},{position:`5`,company:`Tully’s Coffee`,location:`Seattle, Washington, US`,foundation:`1992`},{position:`6`,company:`Costa Coffee`,location:`Dunstable, England`,foundation:`1971`},{position:`7`,company:`McCafe`,location:`Oak Brook, Illinois, United States`,foundation:`1993`},{position:`8`,company:`Starbucks Coffee`,location:`Seattle, Washington, US`,foundation:`1971`},{position:`9`,company:`Dunkin’ Donuts`,location:`Quincy, Massachusetts, US`,foundation:`1950`},{position:`10`,company:`Coffee Beanery`,location:`Flushing, Michigan, US`,foundation:`1976`}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:`scroll`};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:S4.Number,rotateLegend:45},legendVerticalPosition:`top`};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:S4.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(r){window.open(`http://google.com/search?q=coffee+producing+${r.label}`,`_blank`)}showMeTheDates(r){this.poAlert.alert({title:`Statistic`,message:`${r.label} consuming ${r.data}kg per capita!`,ok:()=>{}})}static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-coffee-ranking`]],standalone:!1,features:[we$1([sie])],decls:34,vars:22,consts:[[1,`po-row`],[1,`po-md-12`,`po-lg-6`],[1,`po-md-12`,`po-mt-2`],[`p-title`,`Participation by country in world exports - %`,3,`p-options`,`p-categories`,`p-series`,`p-type`],[`p-title`,`Evolution of coffee and some competitors - %`,3,`p-options`,`p-categories`,`p-series`],[`p-title`,`Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %`,3,`p-height`,`p-categories`,`p-series`,`p-type`,`p-options`],[1,`po-md-12`],[1,`po-lg-6`,`po-mt-2`],[`p-title`,`Top 5 coffee producing countries (in tons)`,3,`p-series-click`,`p-options`,`p-series`],[`p-title`,`Top 15 Coffee Consuming Countries (in kg per capita)`,3,`p-series-click`,`p-series`,`p-options`,`p-type`],[1,`po-md-6`,`po-mt-2`],[`p-title`,`While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)`,3,`p-options`,`p-categories`,`p-series`],[`p-height`,`201`],[1,`po-font-title`,`po-text-center`,`po-pt-5`],[1,`po-text-center`],[`p-height`,`201`,1,`po-mt-2`,2,`display`,`block`],[1,`po-lg-12`,`po-mt-2`],[1,`po-font-text-bold`],[`p-container`,`shadow`,3,`p-items`,`p-hide-table-search`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`div`,1)(2,`div`,0)(3,`po-widget`,2),_u(4,`po-chart`,3),Kg(),Jc(5,`po-widget`,2),_u(6,`po-chart`,4),Kg()()(),Jc(7,`div`,1)(8,`po-widget`,2),_u(9,`po-chart`,5),Kg()(),Jc(10,`div`,6)(11,`po-widget`,7)(12,`po-chart`,8),_t(`p-series-click`,function(m){return i.searchMore(m)}),Kg()(),Jc(13,`po-widget`,7)(14,`po-chart`,9),_t(`p-series-click`,function(m){return i.showMeTheDates(m)}),Kg()()(),Jc(15,`div`,0)(16,`po-widget`,10),_u(17,`po-chart`,11),Kg(),Jc(18,`div`,10)(19,`po-widget`,12)(20,`div`,13),Mk(21,`66 billion`),Kg(),Jc(22,`div`,14),Mk(23,`cups of coffee are consumed per year in U.S.`),Kg()(),Jc(24,`po-widget`,15)(25,`div`,13),Mk(26,`2nd most`),Kg(),Jc(27,`div`,14),Mk(28,`traded commodity in the world second to Oil.`),Kg()()()()(),Jc(29,`div`,0)(30,`po-container`,16)(31,`div`,17),Mk(32,`Top 10 Largest Coffee Chains in the World`),Kg(),_u(33,`po-table`,18),Kg()()),d&2&&(wg(4),Ab(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType),wg(2),Ab(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.evolutionOfCoffeeAndSomeCompetitors),wg(3),Ab(`p-height`,834)(`p-categories`,i.consumptionPerCapitaItems)(`p-series`,i.consumptionPerCapita)(`p-type`,i.consumptionPerCapitaType)(`p-options`,i.consumptionPerCapitaOptions),wg(3),Ab(`p-options`,i.coffeeProductionOptions)(`p-series`,i.coffeeProduction),wg(2),Ab(`p-series`,i.coffeeConsumption)(`p-options`,i.coffeeConsumptionOptions)(`p-type`,i.coffeConsumingChartType),wg(3),Ab(`p-options`,i.chartAreaOptions)(`p-categories`,i.chartAreaCategories)(`p-series`,i.chartAreaSeries),wg(16),Ab(`p-items`,i.items)(`p-hide-table-search`,!1))},dependencies:[Cze,Fc,q4,bae],encapsulation:2,changeDetection:1})}return l})();var ye=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-coffee-ranking-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-chart-coffee-ranking`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Chart - Coffee Ranking`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-chart-coffee-ranking`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ce],encapsulation:2,changeDetection:1})}return l})();var ve=(()=>{class l{typeBar=Sa.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=[`North Region`,`Central Region`,`South Region`];seriesColumn=[{label:`Year 2014`,data:[51,40,42],stackGroupName:`group1`},{label:`Year 2017`,data:[53,52,18]},{label:`Year 2020`,data:[55,21,-17],stackGroupName:`group1`},{label:`Year 2023`,data:[35,27,23],stackGroupName:`group2`},{label:`Year 2026`,data:[45,34,17],stackGroupName:`group2`},{label:`Year 2029`,data:[23,63,56],stackGroupName:`group1`}];optionsBar={stacked:!0};categoriesBar=[`North Region`,`Central Region`,`South Region`,`Southeast Region`,`Northeast Region`];seriesBar=[{label:`Year 2014`,data:[199,340,247,236,222]},{label:`Year 2017`,data:[221,252,225,241,225]},{label:`Year 2020`,data:[229,213,196,212,237]},{label:`Year 2023`,data:[240,237,230,223,231]},{label:`Year 2026`,data:[235,270,239,255,242]}];static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-stacked`]],standalone:!1,decls:8,vars:9,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Average Temperature by Region`,3,`p-height`,`p-options`,`p-categories`,`p-series`],[`p-title`,`Energy Consumption by Region`,3,`p-type`,`p-height`,`p-options`,`p-categories`,`p-series`]],template:function(d,i){d&1&&(Jc(0,`po-container`)(1,`div`,0),Mk(2,`Energy and Climate Analysis`),Kg(),Jc(3,`div`,1)(4,`po-widget`,2),_u(5,`po-chart`,3),Kg(),Jc(6,`po-widget`,2),_u(7,`po-chart`,4),Kg()()()),d&2&&(wg(5),Ab(`p-height`,500)(`p-options`,i.optionsColumn)(`p-categories`,i.categoriesColumn)(`p-series`,i.seriesColumn),wg(2),Ab(`p-type`,i.typeBar)(`p-height`,500)(`p-options`,i.optionsBar)(`p-categories`,i.categoriesBar)(`p-series`,i.seriesBar))},dependencies:[Cze,Fc,bae],encapsulation:2,changeDetection:1})}return l})();var _e=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-stacked-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-chart-stacked`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Chart - Stacked`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-chart-stacked`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-chart-stacked/sample-po-chart-stacked.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-chart-stacked/sample-po-chart-stacked.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ve],encapsulation:2,changeDetection:1})}return l})();var Pe=(()=>{class l{type=Sa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-summary`]],standalone:!1,decls:10,vars:7,consts:[[1,`po-font-title`,`po-mb-3`],[1,`po-row`],[1,`po-lg-6`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`],[`p-title`,`Sales performance`,3,`p-type`,`p-options`,`p-value-gauge-multiple`,`p-series`]],template:function(d,i){d&1&&(Jc(0,`po-container`)(1,`div`,0),Mk(2,`Sales Performance`),Kg(),Jc(3,`div`,1)(4,`div`,2)(5,`po-widget`),_u(6,`po-chart`,3),Kg()(),Jc(7,`div`,2)(8,`po-widget`),_u(9,`po-chart`,4),Kg()()()()),d&2&&(wg(6),Ab(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover),wg(3),Ab(`p-type`,i.type)(`p-options`,i.optionsRange)(`p-value-gauge-multiple`,50)(`p-series`,i.salesRanges))},dependencies:[Cze,Fc,bae],encapsulation:2,changeDetection:1})}return l})();var we=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-summary-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-chart-summary`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-chart-summary/sample-po-chart-summary.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-chart-summary/sample-po-chart-summary.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Chart - Summary`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-chart-summary`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-chart-summary/sample-po-chart-summary.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-chart-summary/sample-po-chart-summary.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Pe],encapsulation:2,changeDetection:1})}return l})();var Te=(()=>{class l{participationByCountryInWorldExportsType=Sa.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=[`2010`,`2011`,`2012`,`2013`,`2014`,`2015`];participationByCountryInWorldExports=[{label:`Brazil`,data:[35,32,27,29,33,33]},{label:`Vietnam`,data:[15,17,18,19,22,18]},{label:`Colombia`,data:[8,7,6,9,10,11]}];static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-world-exports`]],standalone:!1,decls:3,vars:5,consts:[[1,`po-row`],[1,`po-md-12`],[`p-title`,`Participation by country in world exports - %`,3,`p-options`,`p-categories`,`p-series`,`p-type`,`p-data-label`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`po-widget`,1),_u(2,`po-chart`,2),Kg()()),d&2&&(wg(2),Ab(`p-options`,i.options)(`p-categories`,i.categories)(`p-series`,i.participationByCountryInWorldExports)(`p-type`,i.participationByCountryInWorldExportsType)(`p-data-label`,i.dataLabel))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return l})();var Le=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-world-exports-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-chart-world-exports`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Chart - World Exports`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-chart-world-exports`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Te],encapsulation:2,changeDetection:1})}return l})();var Me=(()=>{class l{radarConfig={indicator:[{name:`Frontend Development`,max:100},{name:`Backend Development`,max:100},{name:`Database Design`,max:100},{name:`Cloud & DevOps`,max:100},{name:`Testing & Quality`,max:100},{name:`System Architecture`,max:100}],splitArea:!0,shape:`circle`};radarConfigMovies={indicator:[{name:`Storytelling`,max:100},{name:`Characters`,max:100},{name:`Visual Effects`,max:100},{name:`Soundtrack`,max:100},{name:`Pacing`,max:100},{name:`Rewatchability`,max:100}],splitArea:!0};type=Sa.Radar;series=[{label:`Team Alpha`,data:[82,50,78,70,88,81]},{label:`Team Beta`,data:[65,83,72,89,60,74]},{label:`Team Delta`,data:[45,21,33,65,24,58]},{label:`Team Omega`,data:[60,49,19,58,94,59]}];seriesMovies=[{label:`Sci-Fi`,data:[60,53,45,58,42,55]},{label:`Fantasy`,data:[53,80,66,71,75,88]},{label:`Drama`,data:[92,31,98,60,88,72]},{label:`Thriller`,data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-technology-skill`]],standalone:!1,decls:5,vars:6,consts:[[1,`po-row`],[1,`po-md-6`],[`p-title`,`Technology Skill Assessment`,3,`p-categories`,`p-type`,`p-series`],[`p-title`,`Genre Popularity`,`p-type`,`radar`,3,`p-categories`,`p-series`,`p-options`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`po-widget`,1),_u(2,`po-chart`,2),Kg(),Jc(3,`po-widget`,1),_u(4,`po-chart`,3),Kg()()),d&2&&(wg(2),Ab(`p-categories`,i.radarConfig)(`p-type`,i.type)(`p-series`,i.series),wg(2),Ab(`p-categories`,i.radarConfigMovies)(`p-series`,i.seriesMovies)(`p-options`,i.radarOptions))},dependencies:[Cze,bae],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-technology-skill-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-chart-technology-skill`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(d,i){d&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Chart - Radar`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-chart-technology-skill`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Me],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(d){return new(d||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-chart-doc`]],standalone:!1,decls:2842,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-chart-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/guide-charts`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-categories`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`PoChartRadarOptions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-custom-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`id`,`prop-p-data-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartDataLabel`],[1,`language-typescript`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartOptions`],[`id`,`prop-p-series`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartSerie>`],[`id`,`event-p-series-click`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-series-hover`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartType`],[`id`,`prop-p-value-gauge-multiple`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-axis-options-grid-lines`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-label-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartLabelFormat`],[`id`,`interface-po-chart-axis-options-max-range`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-min-range`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-padding-bottom`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-padding-left`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-padding-right`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-rotate-legend`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-show-axis-details`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-chart-axis-options-show-xaxis`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-axis-options-show-yaxis`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-header-options-hide-expand`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options-hide-export-csv`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options-hide-export-image`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-header-options-hide-table-details`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-indicator-options-color`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options-max`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options-min`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-indicator-options-name`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-literals-category`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-download-csv`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-export-csv`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-export-jpg`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-export-png`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-item`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-serie`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-literals-value`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-options-area-style`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-axis`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartAxisOptions`],[`id`,`interface-po-chart-options-border-radius`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-bottom-data-zoom`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-data-zoom`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-description-chart`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-fill-points`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-first-column-name`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-header`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoChartHeaderOptions`],[`id`,`interface-po-chart-options-inner-radius`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-legend`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-legend-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'left'`],[`pan`,``,1,`docs-api-property-type`,`'center'`],[`pan`,``,1,`docs-api-property-type`,`'right'`],[`id`,`interface-po-chart-options-legend-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'plain'`],[`pan`,``,1,`docs-api-property-type`,`'scroll'`],[`id`,`interface-po-chart-options-legend-vertical-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`id`,`interface-po-chart-options-pointer`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-renderer-option`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'canvas'`],[`pan`,``,1,`docs-api-property-type`,`'svg'`],[`id`,`interface-po-chart-options-rose-type`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-show-container-gauge`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-show-from-to-legend`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-stacked`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-subtitle-gauge`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-options-text-center-graph`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-radar-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-radar-options-indicator`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoChartIndicatorOptions>`],[`id`,`interface-po-chart-radar-options-shape`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'polygon'`],[`pan`,``,1,`docs-api-property-type`,`'circle'`],[`id`,`interface-po-chart-radar-options-split-area`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-data-label`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-data-label-fixed`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-chart-serie-area-style`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-color`,1,`docs-api-properties-row`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`id`,`interface-po-chart-serie-data`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<number>`],[`id`,`interface-po-chart-serie-from`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-label`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-stack-group-name`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-to`,1,`docs-api-properties-row`],[`id`,`interface-po-chart-serie-tooltip`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((params:`,`any)`,`=>`,`string)`],[1,`language-ts`],[`id`,`interface-po-chart-serie-type`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-label-format`,1,`docs-api-class-name`],[`id`,`enum-po-chart-label-format-number`,1,`docs-api-properties-row`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`id`,`enum-po-chart-label-format-currency`,1,`docs-api-properties-row`],[`href`,`https://angular.dev/api/core/DEFAULT_CURRENCY_CODE`],[`href`,`https://angular.dev/api/core/LOCALE_ID`],[`id`,`enum-po-chart-type`,1,`docs-api-class-name`],[`id`,`enum-po-chart-type-area`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-donut`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-pie`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-line`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-column`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-bar`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-gauge`,1,`docs-api-properties-row`],[`id`,`enum-po-chart-type-radar`,1,`docs-api-properties-row`]],template:function(d,i){d&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoChartModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-chart`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`h3`,3),Mk(11,`Componente`),Kg(),Jc(12,`h4`,4)(13,`code`,5),Mk(14,`PoChartComponent`),Kg()(),Jc(15,`div`,2)(16,`p`),Mk(17,`O `),Jc(18,`code`),Mk(19,`po-chart`),Kg(),Mk(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),Kg(),Jc(21,`p`),Mk(22,`Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.`),Kg(),Jc(23,`p`),Mk(24,`O componente permite utilizar em conjunto séries do tipo linha e coluna.`),Kg(),Jc(25,`p`),Mk(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Jc(27,`em`),Mk(28,`mouse`),Kg(),Mk(29,` sobre o elemento.`),Kg(),Jc(30,`h4`),Mk(31,`Guia de uso para Gráficos`),Kg(),Jc(32,`blockquote`)(33,`p`),Mk(34,`Veja nosso `),Jc(35,`a`,6),Mk(36,`guia de uso para gráficos`),Kg(),Mk(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),Kg()(),Jc(38,`h4`),Mk(39,`Tokens customizáveis`),Kg(),Jc(40,`p`),Mk(41,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(42,`blockquote`)(43,`p`),Mk(44,`Para maiores informações, acesse o guia `),Jc(45,`a`,7),Mk(46,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(47,`.`),Kg()(),Jc(48,`table`)(49,`thead`)(50,`tr`)(51,`th`),Mk(52,`Propriedade`),Kg(),Jc(53,`th`),Mk(54,`Descrição`),Kg(),Jc(55,`th`),Mk(56,`Valor Padrão`),Kg()()(),Jc(57,`tbody`)(58,`tr`)(59,`td`)(60,`strong`),Mk(61,`Chart (po-chart)`),Kg()(),_u(62,`td`)(63,`td`),Kg(),Jc(64,`tr`)(65,`td`)(66,`code`),Mk(67,`--background-color-grid`),Kg()(),Jc(68,`td`),Mk(69,`Cor de background dos gráficos`),Kg(),Jc(70,`td`)(71,`code`),Mk(72,`var(--color-neutral-light-00)`),Kg()()(),Jc(73,`tr`)(74,`td`)(75,`code`),Mk(76,`--color-description-chart`),Kg()(),Jc(77,`td`),Mk(78,`Cor da descrição dos gráficos`),Kg(),Jc(79,`td`)(80,`code`),Mk(81,`var(--color-neutral-dark-70)`),Kg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Mk(85,`--font-family-description-chart`),Kg()(),Jc(86,`td`),Mk(87,`Fonte da descrição dos gráficos`),Kg(),Jc(88,`td`)(89,`code`),Mk(90,`var(--font-family-theme)`),Kg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Mk(94,`--font-size-description-chart`),Kg()(),Jc(95,`td`),Mk(96,`Tamanho da fonte da descrição dos gráficos`),Kg(),Jc(97,`td`)(98,`code`),Mk(99,`var(--font-size-sm)`),Kg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Mk(103,`--font-weight-description-chart`),Kg()(),Jc(104,`td`),Mk(105,`Peso da fonte da descrição dos gráficos`),Kg(),Jc(106,`td`)(107,`code`),Mk(108,`var(--font-weight-normal)`),Kg()()(),Jc(109,`tr`)(110,`td`)(111,`strong`),Mk(112,`Header (po-chart .po-chart-header )`),Kg()(),_u(113,`td`)(114,`td`),Kg(),Jc(115,`tr`)(116,`td`)(117,`code`),Mk(118,`--background-color`),Kg()(),Jc(119,`td`),Mk(120,`Cor de background do cabeçalho`),Kg(),Jc(121,`td`)(122,`code`),Mk(123,`var(--color-neutral-light-00)`),Kg()()(),Jc(124,`tr`)(125,`td`)(126,`code`),Mk(127,`--color`),Kg()(),Jc(128,`td`),Mk(129,`Cor da fonte do cabeçalho`),Kg(),Jc(130,`td`)(131,`code`),Mk(132,`var(--color-neutral-dark-70)`),Kg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Mk(136,`--font-family`),Kg()(),Jc(137,`td`),Mk(138,`Família tipográfica usada`),Kg(),Jc(139,`td`)(140,`code`),Mk(141,`var(--font-family-theme)`),Kg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Mk(145,`--font-size-title`),Kg()(),Jc(146,`td`),Mk(147,`Tamanho da fonte`),Kg(),Jc(148,`td`)(149,`code`),Mk(150,`var(--font-size-default)`),Kg()()(),Jc(151,`tr`)(152,`td`)(153,`code`),Mk(154,`--font-size-icons`),Kg()(),Jc(155,`td`),Mk(156,`Tamanho dos ícones`),Kg(),Jc(157,`td`)(158,`code`),Mk(159,`var(--font-size-md)`),Kg()()(),Jc(160,`tr`)(161,`td`)(162,`code`),Mk(163,`--font-weight`),Kg()(),Jc(164,`td`),Mk(165,`Peso da fonte`),Kg(),Jc(166,`td`)(167,`code`),Mk(168,`var(--font-weight-bold)`),Kg()()(),Jc(169,`tr`)(170,`td`)(171,`strong`),Mk(172,`Chart (po-chart .po-chart)`),Kg()(),_u(173,`td`)(174,`td`),Kg(),Jc(175,`tr`)(176,`td`)(177,`code`),Mk(178,`--color-grid`),Kg()(),Jc(179,`td`),Mk(180,`Cor da linha dos gráficos que possuem eixo`),Kg(),Jc(181,`td`)(182,`code`),Mk(183,`var(--color-neutral-light-20)`),Kg()()(),Jc(184,`tr`)(185,`td`)(186,`code`),Mk(187,`--font-family-grid`),Kg()(),Jc(188,`td`),Mk(189,`Família tipográfica usada nos valores dos eixos`),Kg(),Jc(190,`td`)(191,`code`),Mk(192,`var(--font-family-theme)`),Kg()()(),Jc(193,`tr`)(194,`td`)(195,`code`),Mk(196,`--font-size-grid`),Kg()(),Jc(197,`td`),Mk(198,`Tamanho da fonte usada nos valores dos eixos`),Kg(),Jc(199,`td`)(200,`code`),Mk(201,`var(--font-size-xs)`),Kg()()(),Jc(202,`tr`)(203,`td`)(204,`code`),Mk(205,`--font-weight-grid`),Kg()(),Jc(206,`td`),Mk(207,`Peso da fonte usada nos valores dos eixos`),Kg(),Jc(208,`td`)(209,`code`),Mk(210,`var(--font-weight-normal)`),Kg()()(),Jc(211,`tr`)(212,`td`)(213,`code`),Mk(214,`--color-legend`),Kg()(),Jc(215,`td`),Mk(216,`Cor da fonte da legenda`),Kg(),Jc(217,`td`)(218,`code`),Mk(219,`var(--color-neutral-dark-70)`),Kg()()(),Jc(220,`tr`)(221,`td`)(222,`code`),Mk(223,`--color-legend-scroll-icon-active`),Kg()(),Jc(224,`td`),Mk(225,`Cor do ícone de scroll da legenda no estado ativo, pro tipo `),Jc(226,`code`),Mk(227,`scroll`),Kg()(),Jc(228,`td`)(229,`code`),Mk(230,`var(--color-action-default)`),Kg()()(),Jc(231,`tr`)(232,`td`)(233,`code`),Mk(234,`--color-legend-scroll-icon-inactive`),Kg()(),Jc(235,`td`),Mk(236,`Cor do ícone de scroll da legenda no estado inativo, pro tipo `),Jc(237,`code`),Mk(238,`scroll`),Kg()(),Jc(239,`td`)(240,`code`),Mk(241,`var(--color-action-disabled)`),Kg()()(),Jc(242,`tr`)(243,`td`)(244,`code`),Mk(245,`--border-radius-bar`),Kg()(),Jc(246,`td`),Mk(247,`Tamanho da borda nos graficos `),Jc(248,`code`),Mk(249,`Bar`),Kg(),Mk(250,` e `),Jc(251,`code`),Mk(252,`Column`),Kg()(),Jc(253,`td`)(254,`code`),Mk(255,`var(--border-radius-none)`),Kg()()(),Jc(256,`tr`)(257,`td`)(258,`code`),Mk(259,`--border-color`),Kg()(),Jc(260,`td`),Mk(261,`Cor da borda do gráfico nos Gráficos `),Jc(262,`code`),Mk(263,`Donut`),Kg(),Mk(264,` e `),Jc(265,`code`),Mk(266,`Pie`),Kg()(),Jc(267,`td`)(268,`code`),Mk(269,`var(--color-neutral-light-00)`),Kg()()(),Jc(270,`tr`)(271,`td`)(272,`code`),Mk(273,`--color-hightlight-value`),Kg()(),Jc(274,`td`),Mk(275,`Cor do valor de destaque nos Gráficos `),Jc(276,`code`),Mk(277,`Donut`),Kg(),Mk(278,` e `),Jc(279,`code`),Mk(280,`Gauge`),Kg()(),Jc(281,`td`)(282,`code`),Mk(283,`var(--color-neutral-dark-70)`),Kg()()(),Jc(284,`tr`)(285,`td`)(286,`code`),Mk(287,`--font-family-hightlight-value`),Kg()(),Jc(288,`td`),Mk(289,`Família tipográfica do valor de destaque nos Gráficos `),Jc(290,`code`),Mk(291,`Donut`),Kg(),Mk(292,` e `),Jc(293,`code`),Mk(294,`Gauge`),Kg()(),Jc(295,`td`)(296,`code`),Mk(297,`var(--font-family-theme)`),Kg()()(),Jc(298,`tr`)(299,`td`)(300,`code`),Mk(301,`--font-weight-hightlight-value`),Kg()(),Jc(302,`td`),Mk(303,`Peso da fonte do valor de destaque nos Gráficos `),Jc(304,`code`),Mk(305,`Donut`),Kg(),Mk(306,` e `),Jc(307,`code`),Mk(308,`Gauge`),Kg()(),Jc(309,`td`)(310,`code`),Mk(311,`var(--font-weight-bold)`),Kg()()(),Jc(312,`tr`)(313,`td`)(314,`code`),Mk(315,`--color-base-gauge`),Kg()(),Jc(316,`td`),Mk(317,`Cor da base do gráfico `),Jc(318,`code`),Mk(319,`Gauge`),Kg()(),Jc(320,`td`)(321,`code`),Mk(322,`var(--color-neutral-light-20)`),Kg()()(),Jc(323,`tr`)(324,`td`)(325,`code`),Mk(326,`--color-gauge-pointer-color`),Kg()(),Jc(327,`td`),Mk(328,`Cor do ponteiro do gráfico `),Jc(329,`code`),Mk(330,`Gauge`),Kg()(),Jc(331,`td`)(332,`code`),Mk(333,`var(--color-neutral-dark-70)`),Kg()()(),Jc(334,`tr`)(335,`td`)(336,`code`),Mk(337,`--color-chart-line-point-fill`),Kg()(),Jc(338,`td`),Mk(339,`Cor de dentro do círculo dos gráficos `),Jc(340,`code`),Mk(341,`Line`),Kg(),Mk(342,` e `),Jc(343,`code`),Mk(344,`Area`),Kg()(),Jc(345,`td`)(346,`code`),Mk(347,`var(--color-neutral-light-00)`),Kg()()(),Jc(348,`tr`)(349,`td`)(350,`code`),Mk(351,`--border-color-radar`),Kg()(),Jc(352,`td`),Mk(353,`Cor do eixo da grid do gráfico `),Jc(354,`code`),Mk(355,`Radar`),Kg()(),Jc(356,`td`)(357,`code`),Mk(358,`var(--color-neutral-light-30)`),Kg()()(),Jc(359,`tr`)(360,`td`)(361,`code`),Mk(362,`--color-background-zebra`),Kg()(),Jc(363,`td`),Mk(364,`Cor das áreas alternadas (efeito zebrado) da grid do gráfico `),Jc(365,`code`),Mk(366,`Radar`),Kg()(),Jc(367,`td`)(368,`code`),Mk(369,`var(--color-neutral-light-10)`),Kg()()(),Jc(370,`tr`)(371,`td`)(372,`code`),Mk(373,`--color-background-line`),Kg()(),Jc(374,`td`),Mk(375,`Cor das áreas entre as faixas zebradas da grade do `),Jc(376,`code`),Mk(377,`Radar`),Kg()(),Jc(378,`td`)(379,`code`),Mk(380,`none`),Kg()()(),Jc(381,`tr`)(382,`td`)(383,`strong`),Mk(384,`Wrapper (.po-chart-container-gauge)`),Kg()(),_u(385,`td`)(386,`td`),Kg(),Jc(387,`tr`)(388,`td`)(389,`code`),Mk(390,`--background-color-container-gauge`),Kg()(),Jc(391,`td`),Mk(392,`Cor de background do container do gauge`),Kg(),Jc(393,`td`)(394,`code`),Mk(395,`var(--color-neutral-light-00)`),Kg()()()()()(),Jc(396,`div`,8)(397,`h4`,9),Mk(398,`Seletor`),Kg(),Jc(399,`pre`,10),Mk(400,`<po-chart
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
`),Kg()(),Jc(401,`h4`,11),Mk(402,`Propriedades`),Kg(),Jc(403,`table`,12)(404,`tr`,13)(405,`th`,14),Mk(406,`Nome`),Kg(),Jc(407,`th`,14),Mk(408,`Tipo`),Kg(),Jc(409,`th`,14),Mk(410,`Padrão`),Kg(),Jc(411,`th`,14),Mk(412,`Descrição`),Kg()(),Jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),Mk(417,` p-categories`),_u(418,`br`),Kg()()(),Jc(419,`td`,19)(420,`code`,20),Mk(421,`Array<string> `),Kg(),Jc(422,`code`,21),Mk(423,` PoChartRadarOptions`),Kg()(),Jc(424,`td`,22),Mk(425,`-`),Kg(),Jc(426,`td`,23)(427,`em`)(428,`strong`),Mk(429,`(opcional)`),Kg()(),Jc(430,`p`),Mk(431,`Define os valores utilizados na construção das categorias do gráfico.`),Kg(),Jc(432,`p`),Mk(433,`Para gráficos dos tipos `),Jc(434,`em`),Mk(435,`bar`),Kg(),Mk(436,`, `),Jc(437,`em`),Mk(438,`area`),Kg(),Mk(439,`, `),Jc(440,`em`),Mk(441,`column`),Kg(),Mk(442,` e `),Jc(443,`em`),Mk(444,`line`),Kg(),Mk(445,`, representa os nomes das categorias exibidas no eixo.`),Kg(),Jc(446,`p`),Mk(447,`Para gráficos do tipo `),Jc(448,`em`),Mk(449,`radar`),Kg(),Mk(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Jc(451,`code`),Mk(452,`Radar`),Kg(),Mk(453,`.`),Kg(),Jc(454,`blockquote`)(455,`p`),Mk(456,`Caso nenhum valor seja informado, será utilizado um hífen como categoria correspondente para cada série.`),Kg()(),Jc(457,`blockquote`)(458,`p`),Mk(459,`Gráficos do tipo bar dimensionam sua área considerando a largura do maior texto da categoria, sendo recomendável utilizar rótulos curtos para facilitar a leitura.`),Kg()()()(),Jc(460,`tr`,24)(461,`td`,16)(462,`div`,17)(463,`span`,18),Mk(464,` p-custom-actions`),_u(465,`br`),Kg()()(),Jc(466,`td`,19)(467,`code`,25),Mk(468,`Array<PoPopupAction>`),Kg()(),Jc(469,`td`,22),Mk(470,`-`),Kg(),Jc(471,`td`,23)(472,`em`)(473,`strong`),Mk(474,`(opcional)`),Kg()(),Jc(475,`p`),Mk(476,`Essa propriedade permite que o desenvolvedor adicione ações customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as interações do componente.`),Kg()()(),Jc(477,`tr`,26)(478,`td`,16)(479,`div`,17)(480,`span`,18),Mk(481,` p-data-label`),_u(482,`br`),Kg()()(),Jc(483,`td`,19)(484,`code`,27),Mk(485,`PoChartDataLabel`),Kg()(),Jc(486,`td`,22),Mk(487,`-`),Kg(),Jc(488,`td`,23)(489,`em`)(490,`strong`),Mk(491,`(opcional)`),Kg()(),Jc(492,`p`),Mk(493,`Permite configurar as propriedades de exibição dos rótulos das séries no gráfico.`),Kg(),Jc(494,`p`),Mk(495,`Essa configuração possibilita fixar os valores das séries diretamente no gráfico, alterando o comportamento visual:`),Kg(),Jc(496,`ul`)(497,`li`),Mk(498,`Os valores das séries permanecem visíveis, sem a necessidade de hover.`),Kg(),Jc(499,`li`),Mk(500,`O `),Jc(501,`em`),Mk(502,`tooltip`),Kg(),Mk(503,` não será exibido.`),Kg(),Jc(504,`li`),Mk(505,`Os marcadores (`),Jc(506,`em`),Mk(507,`bullets`),Kg(),Mk(508,`) terão seu estilo ajustado.`),Kg(),Jc(509,`li`),Mk(510,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),Kg()(),Jc(511,`blockquote`)(512,`p`),Mk(513,`Disponível para gráficos do tipo `),Jc(514,`code`),Mk(515,`line`),Kg(),Mk(516,`, `),Jc(517,`code`),Mk(518,`area`),Kg(),Mk(519,`, `),Jc(520,`code`),Mk(521,`column`),Kg(),Mk(522,`, `),Jc(523,`code`),Mk(524,`bar`),Kg(),Mk(525,` e `),Jc(526,`code`),Mk(527,`radar`),Kg(),Mk(528,`.`),Kg()(),Jc(529,`h4`),Mk(530,`Exemplo de utilização:`),Kg(),Jc(531,`pre`)(532,`code`,28),Mk(533,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),Kg()()()(),Jc(534,`tr`,29)(535,`td`,16)(536,`div`,17)(537,`span`,18),Mk(538,` p-height`),_u(539,`br`),Kg()()(),Jc(540,`td`,19)(541,`code`,30),Mk(542,`number`),Kg()(),Jc(543,`td`,22)(544,`p`)(545,`code`),Mk(546,`400`),Kg()()(),Jc(547,`td`,23)(548,`em`)(549,`strong`),Mk(550,`(opcional)`),Kg()(),Jc(551,`p`),Mk(552,`Define a altura do gráfico em px.`),Kg(),Jc(553,`blockquote`)(554,`p`),Mk(555,`No caso do tipo `),Jc(556,`code`),Mk(557,`Gauge`),Kg(),Mk(558,`, o valor padrão é `),Jc(559,`code`),Mk(560,`300`),Kg(),Mk(561,` e esse é seu valor minimo aceito. Nos outros tipos, o valor mínimo aceito nesta propriedade é 200.`),Kg()()()(),Jc(562,`tr`,31)(563,`td`,16)(564,`div`,17)(565,`span`,18),Mk(566,` p-literals`),_u(567,`br`),Kg()()(),Jc(568,`td`,19)(569,`code`,32),Mk(570,`PoChartLiterals`),Kg()(),Jc(571,`td`,22),Mk(572,`-`),Kg(),Jc(573,`td`,23)(574,`em`)(575,`strong`),Mk(576,`(opcional)`),Kg()(),Jc(577,`p`),Mk(578,`Objeto com as literais usadas no `),Jc(579,`code`),Mk(580,`po-chart`),Kg(),Mk(581,`.`),Kg(),Jc(582,`p`),Mk(583,`Para utilizar basta passar a literal que deseja customizar:`),Kg(),Jc(584,`pre`)(585,`code`),Mk(586,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),Kg()(),Jc(587,`p`),Mk(588,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Kg(),Jc(589,`pre`)(590,`code`),Mk(591,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),Kg()(),Jc(592,`blockquote`)(593,`p`),Mk(594,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(595,`a`,33)(596,`code`),Mk(597,`PoI18nService`),Kg()(),Mk(598,` ou do browser.`),Kg()()()(),Jc(599,`tr`,34)(600,`td`,16)(601,`div`,17)(602,`span`,18),Mk(603,` p-options`),_u(604,`br`),Kg()()(),Jc(605,`td`,19)(606,`code`,35),Mk(607,`PoChartOptions`),Kg()(),Jc(608,`td`,22),Mk(609,`-`),Kg(),Jc(610,`td`,23)(611,`em`)(612,`strong`),Mk(613,`(opcional)`),Kg()(),Jc(614,`p`),Mk(615,`Objeto com as configurações usadas no `),Jc(616,`code`),Mk(617,`po-chart`),Kg(),Mk(618,`.`),Kg(),Jc(619,`p`),Mk(620,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Jc(621,`em`),Mk(622,`axis`),Kg(),Mk(623,`) para os gráficos dos tipos `),Jc(624,`code`),Mk(625,`area`),Kg(),Mk(626,`, `),Jc(627,`code`),Mk(628,`line`),Kg(),Mk(629,`, `),Jc(630,`code`),Mk(631,`column`),Kg(),Mk(632,`, `),Jc(633,`code`),Mk(634,`bar`),Kg(),Mk(635,` e `),Jc(636,`code`),Mk(637,`radar`),Kg(),Mk(638,` da seguinte forma:`),Kg(),Jc(639,`pre`)(640,`code`),Mk(641,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),Kg()()()(),Jc(642,`tr`,36)(643,`td`,16)(644,`div`,17)(645,`span`,18),Mk(646,` p-series`),_u(647,`br`),Kg()()(),Jc(648,`td`,19)(649,`code`,37),Mk(650,`Array<PoChartSerie>`),Kg()(),Jc(651,`td`,22),Mk(652,`-`),Kg(),Jc(653,`td`,23)(654,`p`),Mk(655,`Define os elementos do gráfico que serão criados dinamicamente.`),Kg()()(),Jc(656,`tr`,38)(657,`td`,16)(658,`div`,39)(659,`span`,40),Mk(660,` (p-series-click)`),_u(661,`br`),Kg()()(),Jc(662,`td`,19)(663,`code`,41),Mk(664,`EventEmitter`),Kg()(),Jc(665,`td`,22),Mk(666,`-`),Kg(),Jc(667,`td`,23)(668,`em`)(669,`strong`),Mk(670,`(opcional)`),Kg()(),Jc(671,`p`),Mk(672,`Evento executado quando o usuário clicar sobre um elemento do gráfico.`),Kg(),Jc(673,`p`),Mk(674,`O evento emitirá o seguinte parâmetro:`),Kg(),Jc(675,`ul`)(676,`li`)(677,`em`),Mk(678,`donut`),Kg(),Mk(679,` e `),Jc(680,`em`),Mk(681,`pie`),Kg(),Mk(682,`: um objeto contendo a categoria e valor da série.`),Kg(),Jc(683,`li`)(684,`em`),Mk(685,`radar`),Kg(),Mk(686,`: um objeto contendo o nome da série e os valores.`),Kg(),Jc(687,`li`)(688,`em`),Mk(689,`area`),Kg(),Mk(690,`, `),Jc(691,`em`),Mk(692,`line`),Kg(),Mk(693,`, `),Jc(694,`em`),Mk(695,`column`),Kg(),Mk(696,` e `),Jc(697,`em`),Mk(698,`bar`),Kg(),Mk(699,`: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.`),Kg()()()(),Jc(700,`tr`,42)(701,`td`,16)(702,`div`,39)(703,`span`,40),Mk(704,` (p-series-hover)`),_u(705,`br`),Kg()()(),Jc(706,`td`,19)(707,`code`,41),Mk(708,`EventEmitter`),Kg()(),Jc(709,`td`,22),Mk(710,`-`),Kg(),Jc(711,`td`,23)(712,`em`)(713,`strong`),Mk(714,`(opcional)`),Kg()(),Jc(715,`p`),Mk(716,`Evento executado quando o usuário passar o `),Jc(717,`em`),Mk(718,`mouse`),Kg(),Mk(719,` sobre um elemento do gráfico.`),Kg(),Jc(720,`p`),Mk(721,`O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:`),Kg(),Jc(722,`ul`)(723,`li`)(724,`em`),Mk(725,`donut`),Kg(),Mk(726,` e `),Jc(727,`em`),Mk(728,`pie`),Kg(),Mk(729,`: um objeto contendo a categoria e valor da série.`),Kg(),Jc(730,`li`)(731,`em`),Mk(732,`radar`),Kg(),Mk(733,`: um objeto contendo o nome da série e os valores.`),Kg(),Jc(734,`li`)(735,`em`),Mk(736,`area`),Kg(),Mk(737,`, `),Jc(738,`em`),Mk(739,`line`),Kg(),Mk(740,`, `),Jc(741,`em`),Mk(742,`column`),Kg(),Mk(743,` e `),Jc(744,`em`),Mk(745,`bar`),Kg(),Mk(746,`: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.`),Kg()()()(),Jc(747,`tr`,43)(748,`td`,16)(749,`div`,17)(750,`span`,18),Mk(751,` p-title`),_u(752,`br`),Kg()()(),Jc(753,`td`,19)(754,`code`,44),Mk(755,`string`),Kg()(),Jc(756,`td`,22),Mk(757,`-`),Kg(),Jc(758,`td`,23)(759,`em`)(760,`strong`),Mk(761,`(opcional)`),Kg()(),Jc(762,`p`),Mk(763,`Define o título do gráfico.`),Kg()()(),Jc(764,`tr`,45)(765,`td`,16)(766,`div`,17)(767,`span`,18),Mk(768,` p-type`),_u(769,`br`),Kg()()(),Jc(770,`td`,19)(771,`code`,46),Mk(772,`PoChartType`),Kg()(),Jc(773,`td`,22),Mk(774,`-`),Kg(),Jc(775,`td`,23)(776,`em`)(777,`strong`),Mk(778,`(opcional)`),Kg()(),Jc(779,`p`),Mk(780,`Define o tipo de gráfico.`),Kg(),Jc(781,`p`),Mk(782,`É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `),Jc(783,`code`),Mk(784,`type`),Kg(),Mk(785,` conforme a interface `),Jc(786,`code`),Mk(787,`PoChartSerie`),Kg(),Mk(788,`.`),Kg(),Jc(789,`blockquote`)(790,`p`),Mk(791,`Note que, se houver declaração de tipo de gráfico tanto em `),Jc(792,`code`),Mk(793,`p-type`),Kg(),Mk(794,` quanto em `),Jc(795,`code`),Mk(796,`PochartSerie.type`),Kg(),Mk(797,`, o valor `),Jc(798,`code`),Mk(799,`{ type }`),Kg(),Mk(800,` da primeira série anulará o valor definido em `),Jc(801,`code`),Mk(802,`p-type`),Kg(),Mk(803,`.`),Kg()(),Jc(804,`p`),Mk(805,`Se não passado valor, o padrão será relativo à primeira série passada em `),Jc(806,`code`),Mk(807,`p-series`),Kg(),Mk(808,`:`),Kg(),Jc(809,`ul`)(810,`li`),Mk(811,`Se `),Jc(812,`code`),Mk(813,`p-series = [{ data: [1,2,3] }]`),Kg(),Mk(814,`: será `),Jc(815,`code`),Mk(816,`PoChartType.Column`),Kg(),Mk(817,`.`),Kg(),Jc(818,`li`),Mk(819,`Se `),Jc(820,`code`),Mk(821,`p-series = [{ data: 1 }]`),Kg(),Mk(822,`: será `),Jc(823,`code`),Mk(824,`PoChartType.Pie`),Kg(),Mk(825,`.`),Kg()(),Jc(826,`blockquote`)(827,`p`),Mk(828,`Veja os valores válidos no `),Jc(829,`em`),Mk(830,`enum`),Kg(),Jc(831,`code`),Mk(832,`PoChartType`),Kg(),Mk(833,`.`),Kg()()()(),Jc(834,`tr`,47)(835,`td`,16)(836,`div`,17)(837,`span`,18),Mk(838,` p-value-gauge-multiple`),_u(839,`br`),Kg()()(),Jc(840,`td`,19)(841,`code`,30),Mk(842,`number`),Kg()(),Jc(843,`td`,22),Mk(844,`-`),Kg(),Jc(845,`td`,23)(846,`em`)(847,`strong`),Mk(848,`(opcional)`),Kg()(),Jc(849,`p`),Mk(850,`Define o valor do gráfico do tipo `),Jc(851,`code`),Mk(852,`Gauge`),Kg(),Mk(853,` quando utliza as propriedades `),Jc(854,`code`),Mk(855,`From`),Kg(),Jc(856,`code`),Mk(857,`To`),Kg(),Mk(858,`.`),Kg()()()(),Jc(859,`h3`),Mk(860,`Interfaces`),Kg(),Jc(861,`h4`,48)(862,`code`,5),Mk(863,`PoChartAxisOptions`),Kg()(),Jc(864,`div`,2)(865,`p`)(866,`em`),Mk(867,`Interface`),Kg(),Mk(868,` que define os eixos do grid.`),Kg()(),Jc(869,`h4`,11),Mk(870,`Propriedades`),Kg(),Jc(871,`table`,12)(872,`tr`,13)(873,`th`,14),Mk(874,`Nome`),Kg(),Jc(875,`th`,14),Mk(876,`Tipo`),Kg(),Jc(877,`th`,14),Mk(878,`Descrição`),Kg()(),Jc(879,`tr`,49)(880,`td`,16)(881,`div`,17)(882,`span`,18),Mk(883,` gridLines`),_u(884,`br`),Kg()()(),Jc(885,`td`,19)(886,`code`,30),Mk(887,`number`),Kg()(),Jc(888,`td`,23)(889,`em`)(890,`strong`),Mk(891,`(opcional)`),Kg()(),Jc(892,`p`),Mk(893,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Jc(894,`code`),Mk(895,`Area`),Kg(),Mk(896,`, `),Jc(897,`code`),Mk(898,`Line`),Kg(),Mk(899,` e `),Jc(900,`code`),Mk(901,`Column`),Kg(),Mk(902,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Jc(903,`code`),Mk(904,`Bar`),Kg(),Mk(905,`, tratará as linhas verticais (eixo Y).`),Kg(),Jc(906,`p`),Mk(907,`A propriedade contém as seguintes diretrizes para seu correto funcionamento:`),Kg(),Jc(908,`ul`)(909,`li`),Mk(910,`Quantidade padrão de linhas: '5';`),Kg(),Jc(911,`li`),Mk(912,`Quantidade mínima permitida: '2';`),Kg()()()(),Jc(913,`tr`,50)(914,`td`,16)(915,`div`,17)(916,`span`,18),Mk(917,` labelType`),_u(918,`br`),Kg()()(),Jc(919,`td`,19)(920,`code`,51),Mk(921,`PoChartLabelFormat`),Kg()(),Jc(922,`td`,23)(923,`em`)(924,`strong`),Mk(925,`(opcional)`),Kg()(),Jc(926,`p`),Mk(927,`Define o tipo do label e a formatação exibida no eixo de valor.`),Kg()()(),Jc(928,`tr`,52)(929,`td`,16)(930,`div`,17)(931,`span`,18),Mk(932,` maxRange`),_u(933,`br`),Kg()()(),Jc(934,`td`,19)(935,`code`,30),Mk(936,`number`),Kg()(),Jc(937,`td`,23)(938,`em`)(939,`strong`),Mk(940,`(opcional)`),Kg()(),Jc(941,`p`),Mk(942,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),Kg(),Jc(943,`blockquote`)(944,`p`),Mk(945,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),Kg()()()(),Jc(946,`tr`,53)(947,`td`,16)(948,`div`,17)(949,`span`,18),Mk(950,` minRange`),_u(951,`br`),Kg()()(),Jc(952,`td`,19)(953,`code`,30),Mk(954,`number`),Kg()(),Jc(955,`td`,23)(956,`em`)(957,`strong`),Mk(958,`(opcional)`),Kg()(),Jc(959,`p`),Mk(960,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),Kg(),Jc(961,`blockquote`)(962,`p`),Mk(963,`Esta definição não deve refletir na plotagem das séries. Os valores máximos e mínimos encontrados nas séries serão as bases para seus alcance.`),Kg()()()(),Jc(964,`tr`,54)(965,`td`,16)(966,`div`,17)(967,`span`,18),Mk(968,` paddingBottom`),_u(969,`br`),Kg()()(),Jc(970,`td`,19)(971,`code`,30),Mk(972,`number`),Kg()(),Jc(973,`td`,23)(974,`em`)(975,`strong`),Mk(976,`(opcional)`),Kg()(),Jc(977,`p`),Mk(978,`Permite aumentar ou diminuir o espaço inferior do gráfico.`),Kg()()(),Jc(979,`tr`,55)(980,`td`,16)(981,`div`,17)(982,`span`,18),Mk(983,` paddingLeft`),_u(984,`br`),Kg()()(),Jc(985,`td`,19)(986,`code`,30),Mk(987,`number`),Kg()(),Jc(988,`td`,23)(989,`em`)(990,`strong`),Mk(991,`(opcional)`),Kg()(),Jc(992,`p`),Mk(993,`Permite aumentar ou diminuir o espaço esquerdo do gráfico.`),Kg()()(),Jc(994,`tr`,56)(995,`td`,16)(996,`div`,17)(997,`span`,18),Mk(998,` paddingRight`),_u(999,`br`),Kg()()(),Jc(1e3,`td`,19)(1001,`code`,30),Mk(1002,`number`),Kg()(),Jc(1003,`td`,23)(1004,`em`)(1005,`strong`),Mk(1006,`(opcional)`),Kg()(),Jc(1007,`p`),Mk(1008,`Permite aumentar ou diminuir o espaço direito do gráfico.`),Kg()()(),Jc(1009,`tr`,57)(1010,`td`,16)(1011,`div`,17)(1012,`span`,18),Mk(1013,` rotateLegend`),_u(1014,`br`),Kg()()(),Jc(1015,`td`,19)(1016,`code`,30),Mk(1017,`number`),Kg()(),Jc(1018,`td`,23)(1019,`em`)(1020,`strong`),Mk(1021,`(opcional)`),Kg()(),Jc(1022,`p`),Mk(1023,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),Kg(),Jc(1024,`ul`)(1025,`li`),Mk(1026,`Valores negativos giram a legenda para a esquerda.`),Kg(),Jc(1027,`li`),Mk(1028,`Valores positivos giram a legenda para a direita.`),Kg()(),Jc(1029,`p`),Mk(1030,`Se não for definido, a legenda será exibida sem rotação.`),Kg()()(),Jc(1031,`tr`,58)(1032,`td`,16)(1033,`div`,17)(1034,`span`,18),Mk(1035,` showAxisDetails`),_u(1036,`br`),Kg()()(),Jc(1037,`td`,19)(1038,`code`,59),Mk(1039,`boolean`),Kg()(),Jc(1040,`td`,23)(1041,`em`)(1042,`strong`),Mk(1043,`(opcional)`),Kg()(),Jc(1044,`p`),Mk(1045,`Exibe a linha de detalhes que acompanha o mouse`),Kg()()(),Jc(1046,`tr`,60)(1047,`td`,16)(1048,`div`,17)(1049,`span`,18),Mk(1050,` showXAxis`),_u(1051,`br`),Kg()()(),Jc(1052,`td`,19)(1053,`code`,59),Mk(1054,`boolean`),Kg()(),Jc(1055,`td`,23)(1056,`em`)(1057,`strong`),Mk(1058,`(opcional)`),Kg()(),Jc(1059,`p`),Mk(1060,`Exibe a linha do eixo X`),Kg()()(),Jc(1061,`tr`,61)(1062,`td`,16)(1063,`div`,17)(1064,`span`,18),Mk(1065,` showYAxis`),_u(1066,`br`),Kg()()(),Jc(1067,`td`,19)(1068,`code`,59),Mk(1069,`boolean`),Kg()(),Jc(1070,`td`,23)(1071,`em`)(1072,`strong`),Mk(1073,`(opcional)`),Kg()(),Jc(1074,`p`),Mk(1075,`Exibe a linha do eixo Y`),Kg()()()(),Jc(1076,`h4`,62)(1077,`code`,5),Mk(1078,`PoChartHeaderOptions`),Kg()(),Jc(1079,`div`,2)(1080,`p`)(1081,`em`),Mk(1082,`Interface`),Kg(),Mk(1083,` para configuração das ações disponíveis no cabeçalho.`),Kg()(),Jc(1084,`h4`,11),Mk(1085,`Propriedades`),Kg(),Jc(1086,`table`,12)(1087,`tr`,13)(1088,`th`,14),Mk(1089,`Nome`),Kg(),Jc(1090,`th`,14),Mk(1091,`Tipo`),Kg(),Jc(1092,`th`,14),Mk(1093,`Descrição`),Kg()(),Jc(1094,`tr`,63)(1095,`td`,16)(1096,`div`,17)(1097,`span`,18),Mk(1098,` hideExpand`),_u(1099,`br`),Kg()()(),Jc(1100,`td`,19)(1101,`code`,59),Mk(1102,`boolean`),Kg()(),Jc(1103,`td`,23)(1104,`em`)(1105,`strong`),Mk(1106,`(opcional)`),Kg()(),Jc(1107,`p`),Mk(1108,`Define se o botão responsável por expandir o gráfico deve ser ocultado.`),Kg()()(),Jc(1109,`tr`,64)(1110,`td`,16)(1111,`div`,17)(1112,`span`,18),Mk(1113,` hideExportCsv`),_u(1114,`br`),Kg()()(),Jc(1115,`td`,19)(1116,`code`,59),Mk(1117,`boolean`),Kg()(),Jc(1118,`td`,23)(1119,`em`)(1120,`strong`),Mk(1121,`(opcional)`),Kg()(),Jc(1122,`p`),Mk(1123,`Define se a opção de exportação do gráfico em formato CSV deve ser ocultada.`),Kg()()(),Jc(1124,`tr`,65)(1125,`td`,16)(1126,`div`,17)(1127,`span`,18),Mk(1128,` hideExportImage`),_u(1129,`br`),Kg()()(),Jc(1130,`td`,19)(1131,`code`,59),Mk(1132,`boolean`),Kg()(),Jc(1133,`td`,23)(1134,`em`)(1135,`strong`),Mk(1136,`(opcional)`),Kg()(),Jc(1137,`p`),Mk(1138,`Define se a opção de exportação do gráfico nos formatos JPG e PNG deve ser ocultada.`),Kg()()(),Jc(1139,`tr`,66)(1140,`td`,16)(1141,`div`,17)(1142,`span`,18),Mk(1143,` hideTableDetails`),_u(1144,`br`),Kg()()(),Jc(1145,`td`,19)(1146,`code`,59),Mk(1147,`boolean`),Kg()(),Jc(1148,`td`,23)(1149,`em`)(1150,`strong`),Mk(1151,`(opcional)`),Kg()(),Jc(1152,`p`),Mk(1153,`Define se o botão responsável por exibir os detalhes do gráfico em formato de tabela deve ser ocultado.`),Kg()()()(),Jc(1154,`h4`,67)(1155,`code`,5),Mk(1156,`PoChartIndicatorOptions`),Kg()(),Jc(1157,`div`,2)(1158,`p`),Mk(1159,`Interface para configurações dos indicadores do gráfico `),Jc(1160,`code`),Mk(1161,`radar`),Kg(),Mk(1162,`.`),Kg()(),Jc(1163,`h4`,11),Mk(1164,`Propriedades`),Kg(),Jc(1165,`table`,12)(1166,`tr`,13)(1167,`th`,14),Mk(1168,`Nome`),Kg(),Jc(1169,`th`,14),Mk(1170,`Tipo`),Kg(),Jc(1171,`th`,14),Mk(1172,`Descrição`),Kg()(),Jc(1173,`tr`,68)(1174,`td`,16)(1175,`div`,17)(1176,`span`,18),Mk(1177,` color`),_u(1178,`br`),Kg()()(),Jc(1179,`td`,19)(1180,`code`,44),Mk(1181,`string`),Kg()(),Jc(1182,`td`,23)(1183,`em`)(1184,`strong`),Mk(1185,`(opcional)`),Kg()(),Jc(1186,`p`),Mk(1187,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),Kg(),Jc(1188,`blockquote`)(1189,`p`),Mk(1190,`Nome da cor, hexadecimal ou RGB.`),Kg()()()(),Jc(1191,`tr`,69)(1192,`td`,16)(1193,`div`,17)(1194,`span`,18),Mk(1195,` max`),_u(1196,`br`),Kg()()(),Jc(1197,`td`,19)(1198,`code`,30),Mk(1199,`number`),Kg()(),Jc(1200,`td`,23)(1201,`em`)(1202,`strong`),Mk(1203,`(opcional)`),Kg()(),Jc(1204,`p`),Mk(1205,`Valor máximo do indicator.`),Kg(),Jc(1206,`p`),Mk(1207,`A propriedade `),Jc(1208,`code`),Mk(1209,`max`),Kg(),Mk(1210,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),Kg()()(),Jc(1211,`tr`,70)(1212,`td`,16)(1213,`div`,17)(1214,`span`,18),Mk(1215,` min`),_u(1216,`br`),Kg()()(),Jc(1217,`td`,19)(1218,`code`,30),Mk(1219,`number`),Kg()(),Jc(1220,`td`,23)(1221,`em`)(1222,`strong`),Mk(1223,`(opcional)`),Kg()(),Jc(1224,`p`),Mk(1225,`Valor mínimo do indicator, com valor padrão de 0.`),Kg(),Jc(1226,`p`),Mk(1227,`A propriedade `),Jc(1228,`code`),Mk(1229,`min`),Kg(),Mk(1230,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),Kg()()(),Jc(1231,`tr`,71)(1232,`td`,16)(1233,`div`,17)(1234,`span`,18),Mk(1235,` name`),_u(1236,`br`),Kg()()(),Jc(1237,`td`,19)(1238,`code`,44),Mk(1239,`string`),Kg()(),Jc(1240,`td`,23)(1241,`em`)(1242,`strong`),Mk(1243,`(opcional)`),Kg()(),Jc(1244,`p`),Mk(1245,`Nome do indicator.`),Kg()()()(),Jc(1246,`h4`,72)(1247,`code`,5),Mk(1248,`PoChartLiterals`),Kg()(),Jc(1249,`div`,2)(1250,`p`),Mk(1251,`Interface para definição dos literais usadas no `),Jc(1252,`code`),Mk(1253,`po-chart`),Kg(),Mk(1254,`.`),Kg()(),Jc(1255,`h4`,11),Mk(1256,`Propriedades`),Kg(),Jc(1257,`table`,12)(1258,`tr`,13)(1259,`th`,14),Mk(1260,`Nome`),Kg(),Jc(1261,`th`,14),Mk(1262,`Tipo`),Kg(),Jc(1263,`th`,14),Mk(1264,`Descrição`),Kg()(),Jc(1265,`tr`,73)(1266,`td`,16)(1267,`div`,17)(1268,`span`,18),Mk(1269,` category`),_u(1270,`br`),Kg()()(),Jc(1271,`td`,19)(1272,`code`,44),Mk(1273,`string`),Kg()(),Jc(1274,`td`,23)(1275,`em`)(1276,`strong`),Mk(1277,`(opcional)`),Kg()(),Jc(1278,`p`),Mk(1279,`Texto da primeira coluna da tabela no gráfico do tipo `),Jc(1280,`code`),Mk(1281,`Bar`),Kg(),Mk(1282,`.`),Kg()()(),Jc(1283,`tr`,74)(1284,`td`,16)(1285,`div`,17)(1286,`span`,18),Mk(1287,` downloadCSV`),_u(1288,`br`),Kg()()(),Jc(1289,`td`,19)(1290,`code`,44),Mk(1291,`string`),Kg()(),Jc(1292,`td`,23)(1293,`em`)(1294,`strong`),Mk(1295,`(opcional)`),Kg()(),Jc(1296,`p`),Mk(1297,`Texto exibido para a ação de download de dados em formato CSV.`),Kg()()(),Jc(1298,`tr`,75)(1299,`td`,16)(1300,`div`,17)(1301,`span`,18),Mk(1302,` exportCSV`),_u(1303,`br`),Kg()()(),Jc(1304,`td`,19)(1305,`code`,44),Mk(1306,`string`),Kg()(),Jc(1307,`td`,23)(1308,`em`)(1309,`strong`),Mk(1310,`(opcional)`),Kg()(),Jc(1311,`p`),Mk(1312,`Texto do botão para exportar o gráfico em CSV.`),Kg()()(),Jc(1313,`tr`,76)(1314,`td`,16)(1315,`div`,17)(1316,`span`,18),Mk(1317,` exportJPG`),_u(1318,`br`),Kg()()(),Jc(1319,`td`,19)(1320,`code`,44),Mk(1321,`string`),Kg()(),Jc(1322,`td`,23)(1323,`em`)(1324,`strong`),Mk(1325,`(opcional)`),Kg()(),Jc(1326,`p`),Mk(1327,`Texto do botão para exportar o gráfico como imagem JPG.`),Kg()()(),Jc(1328,`tr`,77)(1329,`td`,16)(1330,`div`,17)(1331,`span`,18),Mk(1332,` exportPNG`),_u(1333,`br`),Kg()()(),Jc(1334,`td`,19)(1335,`code`,44),Mk(1336,`string`),Kg()(),Jc(1337,`td`,23)(1338,`em`)(1339,`strong`),Mk(1340,`(opcional)`),Kg()(),Jc(1341,`p`),Mk(1342,`Texto do botão para exportar o gráfico como imagem PNG.`),Kg()()(),Jc(1343,`tr`,78)(1344,`td`,16)(1345,`div`,17)(1346,`span`,18),Mk(1347,` item`),_u(1348,`br`),Kg()()(),Jc(1349,`td`,19)(1350,`code`,44),Mk(1351,`string`),Kg()(),Jc(1352,`td`,23)(1353,`em`)(1354,`strong`),Mk(1355,`(opcional)`),Kg()(),Jc(1356,`p`),Mk(1357,`Texto dos títulos das colunas `),Jc(1358,`code`),Mk(1359,`Gauge`),Kg(),Mk(1360,` e não possui label.`),Kg()()(),Jc(1361,`tr`,79)(1362,`td`,16)(1363,`div`,17)(1364,`span`,18),Mk(1365,` serie`),_u(1366,`br`),Kg()()(),Jc(1367,`td`,19)(1368,`code`,44),Mk(1369,`string`),Kg()(),Jc(1370,`td`,23)(1371,`em`)(1372,`strong`),Mk(1373,`(opcional)`),Kg()(),Jc(1374,`p`),Mk(1375,`Texto da primeira coluna da tabela em todos os gráficos com exceção do `),Jc(1376,`code`),Mk(1377,`Bar`),Kg(),Mk(1378,` e `),Jc(1379,`code`),Mk(1380,`Gauge`),Kg(),Mk(1381,`.`),Kg()()(),Jc(1382,`tr`,80)(1383,`td`,16)(1384,`div`,17)(1385,`span`,18),Mk(1386,` value`),_u(1387,`br`),Kg()()(),Jc(1388,`td`,19)(1389,`code`,44),Mk(1390,`string`),Kg()(),Jc(1391,`td`,23)(1392,`em`)(1393,`strong`),Mk(1394,`(opcional)`),Kg()(),Jc(1395,`p`),Mk(1396,`Texto da primeira coluna da tabela quando o gráfico é do tipo `),Jc(1397,`code`),Mk(1398,`Gauge`),Kg(),Mk(1399,`.`),Kg()()()(),Jc(1400,`h4`,81)(1401,`code`,5),Mk(1402,`PoChartOptions`),Kg()(),Jc(1403,`div`,2)(1404,`p`)(1405,`em`),Mk(1406,`Interface`),Kg(),Mk(1407,` para configurações dos elementos do gráfico.`),Kg()(),Jc(1408,`h4`,11),Mk(1409,`Propriedades`),Kg(),Jc(1410,`table`,12)(1411,`tr`,13)(1412,`th`,14),Mk(1413,`Nome`),Kg(),Jc(1414,`th`,14),Mk(1415,`Tipo`),Kg(),Jc(1416,`th`,14),Mk(1417,`Descrição`),Kg()(),Jc(1418,`tr`,82)(1419,`td`,16)(1420,`div`,17)(1421,`span`,18),Mk(1422,` areaStyle`),_u(1423,`br`),Kg()()(),Jc(1424,`td`,19)(1425,`code`,59),Mk(1426,`boolean`),Kg()(),Jc(1427,`td`,23)(1428,`em`)(1429,`strong`),Mk(1430,`(opcional)`),Kg()(),Jc(1431,`p`),Mk(1432,`Define se as séries terão sua área preenchida.`),Kg(),Jc(1433,`blockquote`)(1434,`p`),Mk(1435,`Esta propriedade tem precedência sobre a definição de `),Jc(1436,`code`),Mk(1437,`areaStyle`),Kg(),Mk(1438,` em cada série, `),Jc(1439,`code`),Mk(1440,`fillpoints`),Kg(),Mk(1441,` não funciona quando `),Jc(1442,`code`),Mk(1443,`areaStyle`),Kg(),Mk(1444,` está definido como `),Jc(1445,`code`),Mk(1446,`true`),Kg(),Mk(1447,`.`),Kg()()()(),Jc(1448,`tr`,83)(1449,`td`,16)(1450,`div`,17)(1451,`span`,18),Mk(1452,` axis`),_u(1453,`br`),Kg()()(),Jc(1454,`td`,19)(1455,`code`,84),Mk(1456,`PoChartAxisOptions`),Kg()(),Jc(1457,`td`,23)(1458,`em`)(1459,`strong`),Mk(1460,`(opcional)`),Kg()(),Jc(1461,`p`),Mk(1462,`Define um objeto do tipo `),Jc(1463,`code`),Mk(1464,`PoChartAxisOptions`),Kg(),Mk(1465,` para configuração dos eixos.`),Kg()()(),Jc(1466,`tr`,85)(1467,`td`,16)(1468,`div`,17)(1469,`span`,18),Mk(1470,` borderRadius`),_u(1471,`br`),Kg()()(),Jc(1472,`td`,19)(1473,`code`,30),Mk(1474,`number`),Kg()(),Jc(1475,`td`,23)(1476,`em`)(1477,`strong`),Mk(1478,`(opcional)`),Kg()(),Jc(1479,`p`),Mk(1480,`Define borda entre os itens do gráfico. Válido para os gráficos `),Jc(1481,`code`),Mk(1482,`Donut`),Kg(),Mk(1483,`, `),Jc(1484,`code`),Mk(1485,`Pie`),Kg(),Mk(1486,`.`),Kg(),Jc(1487,`blockquote`)(1488,`p`),Mk(1489,`Valores válidos entre 0 e 100,`),Kg()()()(),Jc(1490,`tr`,86)(1491,`td`,16)(1492,`div`,17)(1493,`span`,18),Mk(1494,` bottomDataZoom`),_u(1495,`br`),Kg()()(),Jc(1496,`td`,19)(1497,`code`,59),Mk(1498,`boolean `),Kg(),Jc(1499,`code`,30),Mk(1500,` number`),Kg()(),Jc(1501,`td`,23)(1502,`em`)(1503,`strong`),Mk(1504,`(opcional)`),Kg()(),Jc(1505,`p`),Mk(1506,`Define a distância inferior do componente DataZoom.`),Kg(),Jc(1507,`p`),Mk(1508,`Esta propriedade aceita os seguintes valores:`),Kg(),Jc(1509,`ul`)(1510,`li`)(1511,`p`)(1512,`code`),Mk(1513,`false`),Kg(),Mk(1514,` (padrão): não aplica ajustes.`),Kg()(),Jc(1515,`li`)(1516,`p`)(1517,`code`),Mk(1518,`true`),Kg(),Mk(1519,`: aplica um valor automático com base no posicionamento da legenda:`),Kg(),Jc(1520,`ul`)(1521,`li`)(1522,`code`),Mk(1523,`8`),Kg(),Mk(1524,` pixels quando o DataZoom estiver habilitado e não houver legenda, ou quando a legenda estiver posicionada no topo.`),Kg(),Jc(1525,`li`)(1526,`code`),Mk(1527,`32`),Kg(),Mk(1528,` pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior.`),Kg()()(),Jc(1529,`li`)(1530,`p`)(1531,`code`),Mk(1532,`number`),Kg(),Mk(1533,`: aplica o valor numérico informado como distância inferior. Este valor tem prioridade sobre a configuração booleana.`),Kg()()(),Jc(1534,`blockquote`)(1535,`p`),Mk(1536,`Esta configuração é considerada apenas quando o DataZoom estiver habilitado (`),Jc(1537,`code`),Mk(1538,`dataZoom: true`),Kg(),Mk(1539,`).`),Kg()()()(),Jc(1540,`tr`,87)(1541,`td`,16)(1542,`div`,17)(1543,`span`,18),Mk(1544,` dataZoom`),_u(1545,`br`),Kg()()(),Jc(1546,`td`,19)(1547,`code`,59),Mk(1548,`boolean`),Kg()(),Jc(1549,`td`,23)(1550,`em`)(1551,`strong`),Mk(1552,`(opcional)`),Kg()(),Jc(1553,`p`),Mk(1554,`Permite aplicar zoom ao gráfico com o scroll do mouse;`),Kg()()(),Jc(1555,`tr`,88)(1556,`td`,16)(1557,`div`,17)(1558,`span`,18),Mk(1559,` descriptionChart`),_u(1560,`br`),Kg()()(),Jc(1561,`td`,19)(1562,`code`,44),Mk(1563,`string`),Kg()(),Jc(1564,`td`,23)(1565,`em`)(1566,`strong`),Mk(1567,`(opcional)`),Kg()(),Jc(1568,`p`),Mk(1569,`Define a descrição do gráfico exibido acima do gráfico.`),Kg()()(),Jc(1570,`tr`,89)(1571,`td`,16)(1572,`div`,17)(1573,`span`,18),Mk(1574,` fillPoints`),_u(1575,`br`),Kg()()(),Jc(1576,`td`,19)(1577,`code`,59),Mk(1578,`boolean`),Kg()(),Jc(1579,`td`,23)(1580,`em`)(1581,`strong`),Mk(1582,`(opcional)`),Kg()(),Jc(1583,`p`),Mk(1584,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),Kg(),Jc(1585,`blockquote`)(1586,`p`),Mk(1587,`Esta propriedade é utilizável para os gráficos dos tipos `),Jc(1588,`code`),Mk(1589,`Area`),Kg(),Mk(1590,`, `),Jc(1591,`code`),Mk(1592,`Line`),Kg(),Mk(1593,` e `),Jc(1594,`code`),Mk(1595,`Radar`),Kg(),Mk(1596,`.
Para o tipo `),Jc(1597,`code`),Mk(1598,`Radar`),Kg(),Mk(1599,`, o valor padrão é `),Jc(1600,`code`),Mk(1601,`true`),Kg(),Mk(1602,`.`),Kg()()()(),Jc(1603,`tr`,90)(1604,`td`,16)(1605,`div`,17)(1606,`span`,18),Mk(1607,` firstColumnName`),_u(1608,`br`),Kg()()(),Jc(1609,`td`,19)(1610,`code`,44),Mk(1611,`string`),Kg()(),Jc(1612,`td`,23)(1613,`em`)(1614,`strong`),Mk(1615,`(opcional)`),Kg()(),Jc(1616,`p`),Mk(1617,`Valor que permite customizar o nome da `),Jc(1618,`code`),Mk(1619,`TH`),Kg(),Mk(1620,` da primeira coluna da tabela descritiva.`),Kg()()(),Jc(1621,`tr`,91)(1622,`td`,16)(1623,`div`,17)(1624,`span`,18),Mk(1625,` header`),_u(1626,`br`),Kg()()(),Jc(1627,`td`,19)(1628,`code`,92),Mk(1629,`PoChartHeaderOptions`),Kg()(),Jc(1630,`td`,23)(1631,`em`)(1632,`strong`),Mk(1633,`(opcional)`),Kg()(),Jc(1634,`p`),Mk(1635,`Define um objeto do tipo `),Jc(1636,`code`),Mk(1637,`PoChartHeaderOptions`),Kg(),Mk(1638,` para configurar a exibição de botões no cabeçalho do gráfico.`),Kg()()(),Jc(1639,`tr`,93)(1640,`td`,16)(1641,`div`,17)(1642,`span`,18),Mk(1643,` innerRadius`),_u(1644,`br`),Kg()()(),Jc(1645,`td`,19)(1646,`code`,30),Mk(1647,`number`),Kg()(),Jc(1648,`td`,23)(1649,`em`)(1650,`strong`),Mk(1651,`(opcional)`),Kg()(),Jc(1652,`p`),Mk(1653,`Define o diâmetro, em valor percentual entre `),Jc(1654,`code`),Mk(1655,`0`),Kg(),Mk(1656,` e `),Jc(1657,`code`),Mk(1658,`100`),Kg(),Mk(1659,`, da área central para gráficos do tipo `),Jc(1660,`code`),Mk(1661,`donut`),Kg(),Mk(1662,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Jc(1663,`code`),Mk(1664,`40px`),Kg(),Mk(1665,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),Kg()()(),Jc(1666,`tr`,94)(1667,`td`,16)(1668,`div`,17)(1669,`span`,18),Mk(1670,` legend`),_u(1671,`br`),Kg()()(),Jc(1672,`td`,19)(1673,`code`,59),Mk(1674,`boolean`),Kg()(),Jc(1675,`td`,23)(1676,`em`)(1677,`strong`),Mk(1678,`(opcional)`),Kg()(),Jc(1679,`p`),Mk(1680,`Define a exibição da legenda do gráfico. Valor padrão é `),Jc(1681,`code`),Mk(1682,`true`),Kg()()()(),Jc(1683,`tr`,95)(1684,`td`,16)(1685,`div`,17)(1686,`span`,18),Mk(1687,` legendPosition`),_u(1688,`br`),Kg()()(),Jc(1689,`td`,19)(1690,`code`,96),Mk(1691,`'left' `),Kg(),Jc(1692,`code`,97),Mk(1693,` 'center' `),Kg(),Jc(1694,`code`,98),Mk(1695,` 'right'`),Kg()(),Jc(1696,`td`,23)(1697,`em`)(1698,`strong`),Mk(1699,`(opcional)`),Kg()(),Jc(1700,`p`),Mk(1701,`Define o alinhamento horizontal da legenda.`),Kg(),Jc(1702,`blockquote`)(1703,`p`),Mk(1704,`Propriedade inválida para o gráfico do tipo `),Jc(1705,`code`),Mk(1706,`Gauge`),Kg(),Mk(1707,`.`),Kg()()()(),Jc(1708,`tr`,99)(1709,`td`,16)(1710,`div`,17)(1711,`span`,18),Mk(1712,` legendType`),_u(1713,`br`),Kg()()(),Jc(1714,`td`,19)(1715,`code`,100),Mk(1716,`'plain' `),Kg(),Jc(1717,`code`,101),Mk(1718,` 'scroll'`),Kg()(),Jc(1719,`td`,23)(1720,`em`)(1721,`strong`),Mk(1722,`(opcional)`),Kg()(),Jc(1723,`p`),Mk(1724,`Define o tipo da legenda.`),Kg(),Jc(1725,`ul`)(1726,`li`)(1727,`code`),Mk(1728,`plain`),Kg(),Mk(1729,`: exibe todas as legendas de forma estática.`),Kg(),Jc(1730,`li`)(1731,`code`),Mk(1732,`scroll`),Kg(),Mk(1733,`: habilita rolagem quando a quantidade de legendas exceder o espaço disponível no gráfico.`),Kg()(),Jc(1734,`blockquote`)(1735,`p`),Mk(1736,`Propriedade inválida para o gráfico do tipo `),Jc(1737,`code`),Mk(1738,`Gauge`),Kg(),Mk(1739,`.`),Kg()()()(),Jc(1740,`tr`,102)(1741,`td`,16)(1742,`div`,17)(1743,`span`,18),Mk(1744,` legendVerticalPosition`),_u(1745,`br`),Kg()()(),Jc(1746,`td`,19)(1747,`code`,103),Mk(1748,`'top' `),Kg(),Jc(1749,`code`,104),Mk(1750,` 'bottom'`),Kg()(),Jc(1751,`td`,23)(1752,`em`)(1753,`strong`),Mk(1754,`(opcional)`),Kg()(),Jc(1755,`p`),Mk(1756,`Define a posição vertical da legenda no gráfico.`),Kg(),Jc(1757,`blockquote`)(1758,`p`),Mk(1759,`Quando utilizada com o valor `),Jc(1760,`code`),Mk(1761,`top`),Kg(),Mk(1762,`, recomenda-se configurar também a propriedade `),Jc(1763,`code`),Mk(1764,`bottomDataZoom`),Kg(),Mk(1765,` caso o `),Jc(1766,`code`),Mk(1767,`dataZoom`),Kg(),Mk(1768,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Jc(1769,`code`),Mk(1770,`Gauge`),Kg(),Mk(1771,`.`),Kg()()()(),Jc(1772,`tr`,105)(1773,`td`,16)(1774,`div`,17)(1775,`span`,18),Mk(1776,` pointer`),_u(1777,`br`),Kg()()(),Jc(1778,`td`,19)(1779,`code`,59),Mk(1780,`boolean`),Kg()(),Jc(1781,`td`,23)(1782,`em`)(1783,`strong`),Mk(1784,`(opcional)`),Kg()(),Jc(1785,`p`),Mk(1786,`Define a exibição do ponteiro.`),Kg(),Jc(1787,`blockquote`)(1788,`p`),Mk(1789,`Válido para gráfico do tipo `),Jc(1790,`code`),Mk(1791,`Gauge`),Kg(),Mk(1792,`.`),Kg()()()(),Jc(1793,`tr`,106)(1794,`td`,16)(1795,`div`,17)(1796,`span`,18),Mk(1797,` rendererOption`),_u(1798,`br`),Kg()()(),Jc(1799,`td`,19)(1800,`code`,107),Mk(1801,`'canvas' `),Kg(),Jc(1802,`code`,108),Mk(1803,` 'svg'`),Kg()(),Jc(1804,`td`,23)(1805,`em`)(1806,`strong`),Mk(1807,`(opcional)`),Kg()(),Jc(1808,`p`),Mk(1809,`Define como o gráfico será renderizado.`),Kg(),Jc(1810,`blockquote`)(1811,`p`),Mk(1812,`Recomenda-se não modificar o valor da propriedade `),Jc(1813,`code`),Mk(1814,`rendererOption`),Kg(),Mk(1815,` após a inicialização da aplicação, uma vez que tal alteração pode ocasionar comportamentos inconsistentes na renderização do gráfico.`),Kg()()()(),Jc(1816,`tr`,109)(1817,`td`,16)(1818,`div`,17)(1819,`span`,18),Mk(1820,` roseType`),_u(1821,`br`),Kg()()(),Jc(1822,`td`,19)(1823,`code`,59),Mk(1824,`boolean`),Kg()(),Jc(1825,`td`,23)(1826,`em`)(1827,`strong`),Mk(1828,`(opcional)`),Kg()(),Jc(1829,`p`),Mk(1830,`Transforma os gráficos do tipo `),Jc(1831,`code`),Mk(1832,`Donut`),Kg(),Mk(1833,` ou `),Jc(1834,`code`),Mk(1835,`Pie`),Kg(),Mk(1836,` num gráfico de área polar.`),Kg(),Jc(1837,`blockquote`)(1838,`p`),Mk(1839,`Válido para os gráficos `),Jc(1840,`code`),Mk(1841,`Donut`),Kg(),Mk(1842,` e `),Jc(1843,`code`),Mk(1844,`Pie`),Kg(),Mk(1845,`.`),Kg()()()(),Jc(1846,`tr`,110)(1847,`td`,16)(1848,`div`,17)(1849,`span`,18),Mk(1850,` showContainerGauge`),_u(1851,`br`),Kg()()(),Jc(1852,`td`,19)(1853,`code`,59),Mk(1854,`boolean`),Kg()(),Jc(1855,`td`,23)(1856,`em`)(1857,`strong`),Mk(1858,`(opcional)`),Kg()(),Jc(1859,`p`),Mk(1860,`Esconde a estilização do container em volta do gráfico.`),Kg(),Jc(1861,`blockquote`)(1862,`p`),Mk(1863,`Válido para gráfico do tipo `),Jc(1864,`code`),Mk(1865,`Gauge`),Kg(),Mk(1866,`.`),Kg()()()(),Jc(1867,`tr`,111)(1868,`td`,16)(1869,`div`,17)(1870,`span`,18),Mk(1871,` showFromToLegend`),_u(1872,`br`),Kg()()(),Jc(1873,`td`,19)(1874,`code`,59),Mk(1875,`boolean`),Kg()(),Jc(1876,`td`,23)(1877,`em`)(1878,`strong`),Mk(1879,`(opcional)`),Kg()(),Jc(1880,`p`),Mk(1881,`Exibe os valores das propriedades `),Jc(1882,`code`),Mk(1883,`from`),Kg(),Mk(1884,` e `),Jc(1885,`code`),Mk(1886,`to`),Kg(),Mk(1887,` no gráfico do no texto da legenda entre parênteses.`),Kg(),Jc(1888,`blockquote`)(1889,`p`),Mk(1890,`Válido para gráfico do tipo `),Jc(1891,`code`),Mk(1892,`Gauge`),Kg(),Mk(1893,`.`),Kg()()()(),Jc(1894,`tr`,112)(1895,`td`,16)(1896,`div`,17)(1897,`span`,18),Mk(1898,` stacked`),_u(1899,`br`),Kg()()(),Jc(1900,`td`,19)(1901,`code`,59),Mk(1902,`boolean`),Kg()(),Jc(1903,`td`,23)(1904,`em`)(1905,`strong`),Mk(1906,`(opcional)`),Kg()(),Jc(1907,`p`),Mk(1908,`Agrupa todas as séries numa única coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade `),Jc(1909,`code`),Mk(1910,`stackGroupName`),Kg(),Mk(1911,` da interface `),Jc(1912,`code`),Mk(1913,`PoChartSerie`),Kg()(),Jc(1914,`blockquote`)(1915,`p`),Mk(1916,`Válido para gráfico do tipo `),Jc(1917,`code`),Mk(1918,`Column`),Kg(),Mk(1919,` e `),Jc(1920,`code`),Mk(1921,`Bar`),Kg(),Mk(1922,`.`),Kg()(),Jc(1923,`blockquote`)(1924,`p`),Mk(1925,`Essa propriedade habilita a propriedade `),Jc(1926,`code`),Mk(1927,`p-data-label`),Kg(),Mk(1928,` por padrão, podendo ser desabilitada passando `),Jc(1929,`code`),Mk(1930,`[p-data-label]={ fixed: false }`),Kg(),Mk(1931,`.`),Kg()()()(),Jc(1932,`tr`,113)(1933,`td`,16)(1934,`div`,17)(1935,`span`,18),Mk(1936,` subtitleGauge`),_u(1937,`br`),Kg()()(),Jc(1938,`td`,19)(1939,`code`,44),Mk(1940,`string`),Kg()(),Jc(1941,`td`,23)(1942,`em`)(1943,`strong`),Mk(1944,`(opcional)`),Kg()(),Jc(1945,`p`),Mk(1946,`Define um subtítulo para o Gauge. Indicamos um subtítulo pequeno, com uma quantidade máxima de 32 caracteres na altura padrão.`),Kg(),Jc(1947,`blockquote`)(1948,`p`),Mk(1949,`Válido para gráfico do tipo `),Jc(1950,`code`),Mk(1951,`Gauge`),Kg(),Mk(1952,`.`),Kg()()()(),Jc(1953,`tr`,114)(1954,`td`,16)(1955,`div`,17)(1956,`span`,18),Mk(1957,` textCenterGraph`),_u(1958,`br`),Kg()()(),Jc(1959,`td`,19)(1960,`code`,44),Mk(1961,`string`),Kg()(),Jc(1962,`td`,23)(1963,`em`)(1964,`strong`),Mk(1965,`(opcional)`),Kg()(),Jc(1966,`p`),Mk(1967,`Aplica texto centralizado customizado nos gráficos de `),Jc(1968,`code`),Mk(1969,`Donut`),Kg(),Mk(1970,`.`),Kg()()()(),Jc(1971,`h4`,115)(1972,`code`,5),Mk(1973,`PoChartRadarOptions`),Kg()(),Jc(1974,`div`,2)(1975,`p`)(1976,`em`),Mk(1977,`Interface`),Kg(),Mk(1978,` para configurações do gráfico `),Jc(1979,`code`),Mk(1980,`radar`),Kg(),Mk(1981,`.`),Kg()(),Jc(1982,`h4`,11),Mk(1983,`Propriedades`),Kg(),Jc(1984,`table`,12)(1985,`tr`,13)(1986,`th`,14),Mk(1987,`Nome`),Kg(),Jc(1988,`th`,14),Mk(1989,`Tipo`),Kg(),Jc(1990,`th`,14),Mk(1991,`Descrição`),Kg()(),Jc(1992,`tr`,116)(1993,`td`,16)(1994,`div`,17)(1995,`span`,18),Mk(1996,` indicator`),_u(1997,`br`),Kg()()(),Jc(1998,`td`,19)(1999,`code`,117),Mk(2e3,`Array<PoChartIndicatorOptions>`),Kg()(),Jc(2001,`td`,23)(2002,`em`)(2003,`strong`),Mk(2004,`(opcional)`),Kg()(),Jc(2005,`p`),Mk(2006,`Define as configurações dos indicadores do gráfico, como nome, cor, valor mínimo e valor máximo.`),Kg()()(),Jc(2007,`tr`,118)(2008,`td`,16)(2009,`div`,17)(2010,`span`,18),Mk(2011,` shape`),_u(2012,`br`),Kg()()(),Jc(2013,`td`,19)(2014,`code`,119),Mk(2015,`'polygon' `),Kg(),Jc(2016,`code`,120),Mk(2017,` 'circle'`),Kg()(),Jc(2018,`td`,23)(2019,`em`)(2020,`strong`),Mk(2021,`(opcional)`),Kg()(),Jc(2022,`p`),Mk(2023,`Define o formato da grid, podendo ser exibida como polígono ou círculo.`),Kg()()(),Jc(2024,`tr`,121)(2025,`td`,16)(2026,`div`,17)(2027,`span`,18),Mk(2028,` splitArea`),_u(2029,`br`),Kg()()(),Jc(2030,`td`,19)(2031,`code`,59),Mk(2032,`boolean`),Kg()(),Jc(2033,`td`,23)(2034,`em`)(2035,`strong`),Mk(2036,`(opcional)`),Kg()(),Jc(2037,`p`),Mk(2038,`Define o efeito zebrado na grid.`),Kg()()()(),Jc(2039,`h4`,122)(2040,`code`,5),Mk(2041,`PoChartDataLabel`),Kg()(),Jc(2042,`div`,2)(2043,`p`),Mk(2044,`Interface que define as propriedades de exibição dos rótulos das séries no `),Jc(2045,`code`),Mk(2046,`po-chart`),Kg(),Mk(2047,`.`),Kg()(),Jc(2048,`h4`,11),Mk(2049,`Propriedades`),Kg(),Jc(2050,`table`,12)(2051,`tr`,13)(2052,`th`,14),Mk(2053,`Nome`),Kg(),Jc(2054,`th`,14),Mk(2055,`Tipo`),Kg(),Jc(2056,`th`,14),Mk(2057,`Descrição`),Kg()(),Jc(2058,`tr`,123)(2059,`td`,16)(2060,`div`,17)(2061,`span`,18),Mk(2062,` fixed`),_u(2063,`br`),Kg()()(),Jc(2064,`td`,19)(2065,`code`,59),Mk(2066,`boolean`),Kg()(),Jc(2067,`td`,23)(2068,`em`)(2069,`strong`),Mk(2070,`(opcional)`),Kg()(),Jc(2071,`p`),Mk(2072,`Indica se o texto associado aos pontos da série deve permanecer fixo na exibição do gráfico.`),Kg(),Jc(2073,`ul`)(2074,`li`),Mk(2075,`Quando definido como `),Jc(2076,`code`),Mk(2077,`true`),Kg(),Mk(2078,`:`),Jc(2079,`ul`)(2080,`li`),Mk(2081,`O `),Jc(2082,`em`),Mk(2083,`tooltip`),Kg(),Mk(2084,` não será exibido.`),Kg(),Jc(2085,`li`),Mk(2086,`As outras séries ficarão com opacidade reduzida ao passar o mouse sobre a série ativa.`),Kg()()()(),Jc(2087,`blockquote`)(2088,`p`),Mk(2089,`Disponível para os tipo de gráfico `),Jc(2090,`code`),Mk(2091,`PoChartType.Line`),Kg(),Mk(2092,`, `),Jc(2093,`code`),Mk(2094,`PoChartType.Area`),Kg(),Mk(2095,`, `),Jc(2096,`code`),Mk(2097,`PoChartType.Column`),Kg(),Mk(2098,`, `),Jc(2099,`code`),Mk(2100,`PoChartType.Bar e PoChartType.Radar`),Kg(),Mk(2101,`.`),Kg()()()()(),Jc(2102,`h4`,124)(2103,`code`,5),Mk(2104,`PoChartSerie`),Kg()(),Jc(2105,`div`,2)(2106,`p`),Mk(2107,`Interface das series dinâmicas do `),Jc(2108,`code`),Mk(2109,`po-chart`),Kg(),Mk(2110,` que possibilita desenhar gráficos dos tipos `),Jc(2111,`code`),Mk(2112,`area`),Kg(),Mk(2113,`, `),Jc(2114,`code`),Mk(2115,`bar`),Kg(),Mk(2116,`, `),Jc(2117,`code`),Mk(2118,`column`),Kg(),Mk(2119,`, `),Jc(2120,`code`),Mk(2121,`line`),Kg(),Mk(2122,`, `),Jc(2123,`code`),Mk(2124,`donut`),Kg(),Mk(2125,`, `),Jc(2126,`code`),Mk(2127,`pie`),Kg(),Mk(2128,` e `),Jc(2129,`code`),Mk(2130,`radar`),Kg()()(),Jc(2131,`h4`,11),Mk(2132,`Propriedades`),Kg(),Jc(2133,`table`,12)(2134,`tr`,13)(2135,`th`,14),Mk(2136,`Nome`),Kg(),Jc(2137,`th`,14),Mk(2138,`Tipo`),Kg(),Jc(2139,`th`,14),Mk(2140,`Descrição`),Kg()(),Jc(2141,`tr`,125)(2142,`td`,16)(2143,`div`,17)(2144,`span`,18),Mk(2145,` areaStyle`),_u(2146,`br`),Kg()()(),Jc(2147,`td`,19)(2148,`code`,59),Mk(2149,`boolean`),Kg()(),Jc(2150,`td`,23)(2151,`em`)(2152,`strong`),Mk(2153,`(opcional)`),Kg()(),Jc(2154,`p`),Mk(2155,`Define se a série terá sua área preenchida.`),Kg(),Jc(2156,`blockquote`)(2157,`p`),Mk(2158,`Propriedade válida para gráficos do tipo `),Jc(2159,`code`),Mk(2160,`Radar`),Kg(),Mk(2161,`, `),Jc(2162,`code`),Mk(2163,`fillpoints`),Kg(),Mk(2164,` não funciona quando `),Jc(2165,`code`),Mk(2166,`areaStyle`),Kg(),Mk(2167,` está definido como `),Jc(2168,`code`),Mk(2169,`true`),Kg(),Mk(2170,`.`),Kg()()()(),Jc(2171,`tr`,126)(2172,`td`,16)(2173,`div`,17)(2174,`span`,18),Mk(2175,` color`),_u(2176,`br`),Kg()()(),Jc(2177,`td`,19)(2178,`code`,44),Mk(2179,`string`),Kg()(),Jc(2180,`td`,23)(2181,`em`)(2182,`strong`),Mk(2183,`(opcional)`),Kg()(),Jc(2184,`p`),Mk(2185,`Determina a cor da série. As maneiras de customizar o `),Jc(2186,`em`),Mk(2187,`preset`),Kg(),Mk(2188,` padrão de cores são:`),Kg(),Jc(2189,`ul`)(2190,`li`),Mk(2191,`Hexadecimal, por exemplo `),Jc(2192,`code`),Mk(2193,`#c64840`),Kg(),Mk(2194,`;`),Kg(),Jc(2195,`li`),Mk(2196,`RGB, por exemplo `),Jc(2197,`code`),Mk(2198,`rgb(0, 0, 165)`),Kg()(),Jc(2199,`li`),Mk(2200,`O nome da cor, por exemplo `),Jc(2201,`code`),Mk(2202,`blue`),Kg(),Mk(2203,`;`),Kg(),Jc(2204,`li`),Mk(2205,`Variáveis CSS, por exemplo `),Jc(2206,`code`),Mk(2207,`var(--color-01)`),Kg(),Mk(2208,`;`),Kg(),Jc(2209,`li`),Mk(2210,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Jc(2211,`ul`)(2212,`li`),_u(2213,`span`,127),Jc(2214,`code`),Mk(2215,`color-01`),Kg()(),Jc(2216,`li`),_u(2217,`span`,128),Jc(2218,`code`),Mk(2219,`color-02`),Kg()(),Jc(2220,`li`),_u(2221,`span`,129),Jc(2222,`code`),Mk(2223,`color-03`),Kg()(),Jc(2224,`li`),_u(2225,`span`,130),Jc(2226,`code`),Mk(2227,`color-04`),Kg()(),Jc(2228,`li`),_u(2229,`span`,131),Jc(2230,`code`),Mk(2231,`color-05`),Kg()(),Jc(2232,`li`),_u(2233,`span`,132),Jc(2234,`code`),Mk(2235,`color-06`),Kg()(),Jc(2236,`li`),_u(2237,`span`,133),Jc(2238,`code`),Mk(2239,`color-07`),Kg()(),Jc(2240,`li`),_u(2241,`span`,134),Jc(2242,`code`),Mk(2243,`color-08`),Kg()(),Jc(2244,`li`),_u(2245,`span`,135),Jc(2246,`code`),Mk(2247,`color-09`),Kg()(),Jc(2248,`li`),_u(2249,`span`,136),Jc(2250,`code`),Mk(2251,`color-10`),Kg()(),Jc(2252,`li`),_u(2253,`span`,137),Jc(2254,`code`),Mk(2255,`color-11`),Kg()(),Jc(2256,`li`),_u(2257,`span`,138),Jc(2258,`code`),Mk(2259,`color-12`),Kg()()()()(),Jc(2260,`ul`)(2261,`li`),Mk(2262,`A partir da 13° série o valor da cor será preta caso não seja enviada uma cor customizada.`),Kg()()()(),Jc(2263,`tr`,139)(2264,`td`,16)(2265,`div`,17)(2266,`span`,18),Mk(2267,` data`),_u(2268,`br`),Kg()()(),Jc(2269,`td`,19)(2270,`code`,30),Mk(2271,`number `),Kg(),Jc(2272,`code`,140),Mk(2273,` Array<number>`),Kg()(),Jc(2274,`td`,23)(2275,`em`)(2276,`strong`),Mk(2277,`(opcional)`),Kg()(),Jc(2278,`p`),Mk(2279,`Define a lista de valores para a série. Os tipos esperados são de acordo com o tipo de gráfico:`),Kg(),Jc(2280,`ul`)(2281,`li`),Mk(2282,`Para gráficos dos tipos `),Jc(2283,`code`),Mk(2284,`donut`),Kg(),Mk(2285,` e `),Jc(2286,`code`),Mk(2287,`pie`),Kg(),Mk(2288,`, espera-se `),Jc(2289,`em`),Mk(2290,`number`),Kg(),Mk(2291,`;`),Kg(),Jc(2292,`li`),Mk(2293,`Para gráficos dos tipos `),Jc(2294,`code`),Mk(2295,`area`),Kg(),Mk(2296,`, `),Jc(2297,`code`),Mk(2298,`bar`),Kg(),Mk(2299,`, `),Jc(2300,`code`),Mk(2301,`column`),Kg(),Mk(2302,`, `),Jc(2303,`code`),Mk(2304,`line`),Kg(),Mk(2305,` e `),Jc(2306,`code`),Mk(2307,`radar`),Kg(),Mk(2308,`, espera-se um `),Jc(2309,`em`),Mk(2310,`array`),Kg(),Mk(2311,` de `),Jc(2312,`code`),Mk(2313,`data`),Kg(),Mk(2314,`.`),Kg()(),Jc(2315,`blockquote`)(2316,`p`),Mk(2317,`Se passado valor `),Jc(2318,`code`),Mk(2319,`null`),Kg(),Mk(2320,` em determinado item da lista, a iteração irá ignorá-lo.`),Kg()()()(),Jc(2321,`tr`,141)(2322,`td`,16)(2323,`div`,17)(2324,`span`,18),Mk(2325,` from`),_u(2326,`br`),Kg()()(),Jc(2327,`td`,19)(2328,`code`,30),Mk(2329,`number`),Kg()(),Jc(2330,`td`,23)(2331,`em`)(2332,`strong`),Mk(2333,`(opcional)`),Kg()(),Jc(2334,`p`),Mk(2335,`Alcance inicial da cor.`),Kg(),Jc(2336,`blockquote`)(2337,`p`),Mk(2338,`Propriedade válida para gráfico do tipo `),Jc(2339,`code`),Mk(2340,`Gauge`),Kg(),Mk(2341,`.`),Kg()()()(),Jc(2342,`tr`,142)(2343,`td`,16)(2344,`div`,17)(2345,`span`,18),Mk(2346,` label`),_u(2347,`br`),Kg()()(),Jc(2348,`td`,19)(2349,`code`,44),Mk(2350,`string`),Kg()(),Jc(2351,`td`,23)(2352,`em`)(2353,`strong`),Mk(2354,`(opcional)`),Kg()(),Jc(2355,`p`),Mk(2356,`Rótulo referência da série.`),Kg()()(),Jc(2357,`tr`,143)(2358,`td`,16)(2359,`div`,17)(2360,`span`,18),Mk(2361,` stackGroupName`),_u(2362,`br`),Kg()()(),Jc(2363,`td`,19)(2364,`code`,44),Mk(2365,`string`),Kg()(),Jc(2366,`td`,23)(2367,`em`)(2368,`strong`),Mk(2369,`(opcional)`),Kg()(),Jc(2370,`p`),Mk(2371,`Agrupa as séries em barras ou colunas que receberem o mesmo `),Jc(2372,`code`),Mk(2373,`stackGroupName`),Kg(),Mk(2374,`. Exemplo:`),Kg(),Jc(2375,`ul`)(2376,`li`),Mk(2377,`Serie A: `),Jc(2378,`code`),Mk(2379,`{ data: 500, stackGroupName: 'group1' ... }`),Kg(),Mk(2380,`;`),Kg(),Jc(2381,`li`),Mk(2382,`Série B: `),Jc(2383,`code`),Mk(2384,`{ data: 200, stackGroupName: 'group1' ... }`),Kg(),Mk(2385,`.`),Kg(),Jc(2386,`li`),Mk(2387,`Série C: `),Jc(2388,`code`),Mk(2389,`{ data: 100, stackGroupName: 'group2' ... }`),Kg(),Mk(2390,`.`),Kg(),Jc(2391,`li`),Mk(2392,`Série D: `),Jc(2393,`code`),Mk(2394,`{ data: 400, stackGroupName: 'group2' ... }`),Kg(),Mk(2395,`.`),Kg()(),Jc(2396,`p`),Mk(2397,`Nesse caso será criado duas barras ou colunas com duas series agrupadas em cada uma por categoria.`),Kg(),Jc(2398,`blockquote`)(2399,`p`),Mk(2400,`Válido para gráfico do tipo `),Jc(2401,`code`),Mk(2402,`Column`),Kg(),Mk(2403,` e `),Jc(2404,`code`),Mk(2405,`Bar`),Kg(),Mk(2406,`. Essa propriedade é ignorada caso a propriedade `),Jc(2407,`code`),Mk(2408,`stacked`),Kg(),Mk(2409,` da interface `),Jc(2410,`code`),Mk(2411,`PoChartOptions`),Kg(),Mk(2412,` esteja como `),Jc(2413,`code`),Mk(2414,`true`),Kg(),Mk(2415,`.`),Kg()(),Jc(2416,`blockquote`)(2417,`p`),Mk(2418,`Essa propriedade habilita a propriedade `),Jc(2419,`code`),Mk(2420,`p-data-label`),Kg(),Mk(2421,` por padrão, podendo ser desabilitada passando `),Jc(2422,`code`),Mk(2423,`[p-data-label]={ fixed: false }`),Kg(),Mk(2424,`.`),Kg()()()(),Jc(2425,`tr`,144)(2426,`td`,16)(2427,`div`,17)(2428,`span`,18),Mk(2429,` to`),_u(2430,`br`),Kg()()(),Jc(2431,`td`,19)(2432,`code`,30),Mk(2433,`number`),Kg()(),Jc(2434,`td`,23)(2435,`em`)(2436,`strong`),Mk(2437,`(opcional)`),Kg()(),Jc(2438,`p`),Mk(2439,`Alcance final da cor.`),Kg(),Jc(2440,`blockquote`)(2441,`p`),Mk(2442,`Propriedade válida para gráfico do tipo `),Jc(2443,`code`),Mk(2444,`Gauge`),Kg(),Mk(2445,`.`),Kg()()()(),Jc(2446,`tr`,145)(2447,`td`,16)(2448,`div`,17)(2449,`span`,18),Mk(2450,` tooltip`),_u(2451,`br`),Kg()()(),Jc(2452,`td`,19)(2453,`code`,44),Mk(2454,`string `),Kg(),Jc(2455,`code`,146),Mk(2456,` ((params: any) => string)`),Kg()(),Jc(2457,`td`,23)(2458,`em`)(2459,`strong`),Mk(2460,`(opcional)`),Kg()(),Jc(2461,`p`),Mk(2462,`Define o texto que será exibido na tooltip ao passar o mouse por cima das séries do `),Jc(2463,`em`),Mk(2464,`chart`),Kg(),Mk(2465,`.`),Kg(),Jc(2466,`p`),Mk(2467,`Formatos aceitos:`),Kg(),Jc(2468,`ul`)(2469,`li`)(2470,`p`)(2471,`strong`),Mk(2472,`string`),Kg(),Mk(2473,`: pode conter marcadores dinâmicos e HTML simples.`),Kg()(),Jc(2474,`li`)(2475,`p`),Mk(2476,`Marcadores disponíveis:`),Kg()(),Jc(2477,`li`)(2478,`p`)(2479,`code`),Mk(2480,`{name}`),Kg(),Mk(2481,` → Nome do item/categoria.`),Kg()(),Jc(2482,`li`)(2483,`p`)(2484,`code`),Mk(2485,`{seriesName}`),Kg(),Mk(2486,` → Nome da série.`),Kg()(),Jc(2487,`li`)(2488,`p`)(2489,`code`),Mk(2490,`{value}`),Kg(),Mk(2491,` → Valor correspondente.`),Kg()(),Jc(2492,`li`)(2493,`p`)(2494,`strong`),Mk(2495,`function`),Kg(),Mk(2496,`: função que recebe o objeto `),Jc(2497,`code`),Mk(2498,`params`),Kg(),Mk(2499,` e deve retornar uma `),Jc(2500,`em`),Mk(2501,`string`),Kg(),Mk(2502,` com o conteúdo da tooltip.`),Kg()()(),Jc(2503,`blockquote`)(2504,`p`),Mk(2505,`É possível utilizar marcação HTML simples (`),Jc(2506,`code`),Mk(2507,`<b>`),Kg(),Mk(2508,`, `),Jc(2509,`code`),Mk(2510,`<i>`),Kg(),Mk(2511,`, `),Jc(2512,`code`),Mk(2513,`<br>`),Kg(),Mk(2514,`, `),Jc(2515,`code`),Mk(2516,`<hr>`),Kg(),Mk(2517,`, etc.) que será interpretada via `),Jc(2518,`code`),Mk(2519,`innerHTML`),Kg(),Mk(2520,`.`),Kg()(),Jc(2521,`blockquote`)(2522,`p`),Mk(2523,`Formatação customizada (será convertido internamente para HTML):`),Kg()(),Jc(2524,`ul`)(2525,`li`)(2526,`code`),Mk(2527,`\\n`),Kg(),Mk(2528,` → quebra de linha (`),Jc(2529,`code`),Mk(2530,`<br>`),Kg(),Mk(2531,`).`),Kg(),Jc(2532,`li`)(2533,`code`),Mk(2534,`**texto**`),Kg(),Mk(2535,` → negrito (`),Jc(2536,`code`),Mk(2537,`<b>`),Kg(),Mk(2538,`).`),Kg(),Jc(2539,`li`)(2540,`code`),Mk(2541,`__texto__`),Kg(),Mk(2542,` → itálico (`),Jc(2543,`code`),Mk(2544,`<i>`),Kg(),Mk(2545,`).`),Kg()(),Jc(2546,`blockquote`)(2547,`p`),Mk(2548,`Caso não seja informado um valor para o `),Jc(2549,`em`),Mk(2550,`tooltip`),Kg(),Mk(2551,`, será exibido da seguinte forma:`),Kg()(),Jc(2552,`ul`)(2553,`li`)(2554,`code`),Mk(2555,`donut`),Kg(),Mk(2556,`, `),Jc(2557,`code`),Mk(2558,`label`),Kg(),Mk(2559,`: valor proporcional ao total em porcentagem.`),Kg(),Jc(2560,`li`)(2561,`code`),Mk(2562,`radar`),Kg(),Mk(2563,`: nome da série, o nome do indicator e os valores correspondentes.`),Kg(),Jc(2564,`li`)(2565,`code`),Mk(2566,`area`),Kg(),Mk(2567,`, `),Jc(2568,`code`),Mk(2569,`bar`),Kg(),Mk(2570,`, `),Jc(2571,`code`),Mk(2572,`column`),Kg(),Mk(2573,`, `),Jc(2574,`code`),Mk(2575,`line`),Kg(),Mk(2576,` e `),Jc(2577,`code`),Mk(2578,`pie`),Kg(),Mk(2579,`: `),Jc(2580,`code`),Mk(2581,`label`),Kg(),Mk(2582,`: `),Jc(2583,`code`),Mk(2584,`data`),Kg(),Mk(2585,`.`),Kg()(),Jc(2586,`h3`),Mk(2587,`Exemplos:`),Kg(),Jc(2588,`p`)(2589,`strong`),Mk(2590,`Usando string com placeholders:`),Kg()(),Jc(2591,`pre`)(2592,`code`,147),Mk(2593,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),Kg()(),Jc(2594,`p`)(2595,`strong`),Mk(2596,`Usando função de callback:`),Kg()(),Jc(2597,`pre`)(2598,`code`,147),Mk(2599,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),Kg()()()(),Jc(2600,`tr`,148)(2601,`td`,16)(2602,`div`,17)(2603,`span`,18),Mk(2604,` type`),_u(2605,`br`),Kg()()(),Jc(2606,`td`,19)(2607,`code`,46),Mk(2608,`PoChartType`),Kg()(),Jc(2609,`td`,23)(2610,`em`)(2611,`strong`),Mk(2612,`(opcional)`),Kg()(),Jc(2613,`p`),Mk(2614,`Define em qual tipo de gráfico que será exibida a série. É possível combinar séries dos tipos `),Jc(2615,`code`),Mk(2616,`column`),Kg(),Mk(2617,` e `),Jc(2618,`code`),Mk(2619,`line`),Kg(),Mk(2620,` no mesmo gráfico. Para isso, basta criar as séries com as configurações:`),Kg(),Jc(2621,`ul`)(2622,`li`),Mk(2623,`Serie A: `),Jc(2624,`code`),Mk(2625,`{ type: ChartType.Column, data: ... }`),Kg(),Mk(2626,`;`),Kg(),Jc(2627,`li`),Mk(2628,`Série B: `),Jc(2629,`code`),Mk(2630,`{ type: ChartType.Line, data: ... }`),Kg(),Mk(2631,`.`),Kg()(),Jc(2632,`p`),Mk(2633,`Se tanto `),Jc(2634,`code`),Mk(2635,`p-type`),Kg(),Mk(2636,` quanto `),Jc(2637,`code`),Mk(2638,`{ type }`),Kg(),Mk(2639,` forem ignorados, o padrão gerado pelo componente será:`),Kg(),Jc(2640,`ul`)(2641,`li`)(2642,`code`),Mk(2643,`column`),Kg(),Mk(2644,`: se `),Jc(2645,`code`),Mk(2646,`data`),Kg(),Mk(2647,` receber `),Jc(2648,`code`),Mk(2649,`Array<number>`),Kg(),Mk(2650,`;`),Kg(),Jc(2651,`li`)(2652,`code`),Mk(2653,`pie`),Kg(),Mk(2654,`: se `),Jc(2655,`code`),Mk(2656,`data`),Kg(),Mk(2657,` for `),Jc(2658,`em`),Mk(2659,`number`),Kg(),Mk(2660,`.`),Kg()(),Jc(2661,`blockquote`)(2662,`p`),Mk(2663,`Se utilizada a propriedade `),Jc(2664,`code`),Mk(2665,`p-type`),Kg(),Mk(2666,`, dispensa-se a definição desta propriedade. Porém, se houver declaração para ambas, o valor `),Jc(2667,`code`),Mk(2668,`{type}`),Kg(),Mk(2669,` da primeira série sobrescreverá o valor definido em `),Jc(2670,`code`),Mk(2671,`p-type`),Kg(),Mk(2672,`.`),Kg()(),Jc(2673,`blockquote`)(2674,`p`),Mk(2675,`O componente só exibirá as séries que tiverem o mesmo `),Jc(2676,`code`),Mk(2677,`type`),Kg(),Mk(2678,` definido, exceto para mesclagem para tipos `),Jc(2679,`code`),Mk(2680,`column`),Kg(),Mk(2681,` e `),Jc(2682,`code`),Mk(2683,`line`),Kg(),Mk(2684,`.`),Kg()()()()(),Jc(2685,`h3`),Mk(2686,`Enums`),Kg(),Jc(2687,`h4`,149)(2688,`code`,5),Mk(2689,`PoChartLabelFormat`),Kg()(),Jc(2690,`div`,2)(2691,`p`)(2692,`em`),Mk(2693,`Enum`),Kg(),Jc(2694,`code`),Mk(2695,`PoChartLabelFormat`),Kg(),Mk(2696,` para especificação dos tipos de formatação do eixo de valor no gráfico.`),Kg()(),Jc(2697,`h4`,11),Mk(2698,`Propriedades`),Kg(),Jc(2699,`table`,12)(2700,`tr`,13)(2701,`th`,14),Mk(2702,`Nome`),Kg(),Jc(2703,`th`,14),Mk(2704,`Descrição`),Kg()(),Jc(2705,`tr`,150)(2706,`td`,16)(2707,`div`,17)(2708,`span`,18),Mk(2709,` Number`),_u(2710,`br`),Kg()()(),Jc(2711,`td`,23)(2712,`p`),Mk(2713,`Os valores serão exibidos no formato numérico com duas casas decimais. Equivalente ao formato `),Jc(2714,`code`),Mk(2715,`'1.2-2'`),Kg(),Mk(2716,` da `),Jc(2717,`a`,151),Mk(2718,`DecimalPipe`),Kg(),Mk(2719,`.`),Kg()()(),Jc(2720,`tr`,152)(2721,`td`,16)(2722,`div`,17)(2723,`span`,18),Mk(2724,` Currency`),_u(2725,`br`),Kg()()(),Jc(2726,`td`,23)(2727,`p`),Mk(2728,`Os valores serão exibidos com o símbolo monetário de acordo com a formatação padrão da aplicação, isto é, o valor do token `),Jc(2729,`a`,153),Mk(2730,`DEFAULT_CURRENCY_CODE`),Kg(),Mk(2731,`. Para adequar ao padrão numérico brasileiro, é necessário configurar o `),Jc(2732,`a`,154),Mk(2733,`LOCALE_ID`),Kg(),Mk(2734,` da aplicação. A configuração pode ser feita da seguinte forma:`),Kg(),Jc(2735,`pre`)(2736,`code`),Mk(2737,`import { LOCALE_ID } from '@angular/core';
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
`),Kg()()()()(),Jc(2738,`h4`,155)(2739,`code`,5),Mk(2740,`PoChartType`),Kg()(),Jc(2741,`div`,2)(2742,`p`)(2743,`em`),Mk(2744,`Enum`),Kg(),Jc(2745,`code`),Mk(2746,`PoChartType`),Kg(),Mk(2747,` para especificação dos tipos de gráficos.`),Kg()(),Jc(2748,`h4`,11),Mk(2749,`Propriedades`),Kg(),Jc(2750,`table`,12)(2751,`tr`,13)(2752,`th`,14),Mk(2753,`Nome`),Kg(),Jc(2754,`th`,14),Mk(2755,`Descrição`),Kg()(),Jc(2756,`tr`,156)(2757,`td`,16)(2758,`div`,17)(2759,`span`,18),Mk(2760,` Area`),_u(2761,`br`),Kg()()(),Jc(2762,`td`,23)(2763,`p`),Mk(2764,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),Kg()()(),Jc(2765,`tr`,157)(2766,`td`,16)(2767,`div`,17)(2768,`span`,18),Mk(2769,` Donut`),_u(2770,`br`),Kg()()(),Jc(2771,`td`,23)(2772,`p`),Mk(2773,`Exibe os dados em formato de rosca, dividindo em partes proporcionais.`),Kg()()(),Jc(2774,`tr`,158)(2775,`td`,16)(2776,`div`,17)(2777,`span`,18),Mk(2778,` Pie`),_u(2779,`br`),Kg()()(),Jc(2780,`td`,23)(2781,`p`),Mk(2782,`Exibe os dados em formato circular, dividindo proporcionalmente em fatias.`),Kg()()(),Jc(2783,`tr`,159)(2784,`td`,16)(2785,`div`,17)(2786,`span`,18),Mk(2787,` Line`),_u(2788,`br`),Kg()()(),Jc(2789,`td`,23)(2790,`p`),Mk(2791,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Jc(2792,`code`),Mk(2793,`column`),Kg(),Mk(2794,` e `),Jc(2795,`code`),Mk(2796,`area`),Kg(),Mk(2797,`, definindo-se o tipo através da propriedade `),Jc(2798,`code`),Mk(2799,`PoChartSerie.type`),Kg(),Mk(2800,`.`),Kg()()(),Jc(2801,`tr`,160)(2802,`td`,16)(2803,`div`,17)(2804,`span`,18),Mk(2805,` Column`),_u(2806,`br`),Kg()()(),Jc(2807,`td`,23)(2808,`p`),Mk(2809,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),Kg()()(),Jc(2810,`tr`,161)(2811,`td`,16)(2812,`div`,17)(2813,`span`,18),Mk(2814,` Bar`),_u(2815,`br`),Kg()()(),Jc(2816,`td`,23)(2817,`p`),Mk(2818,`Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.`),Kg()()(),Jc(2819,`tr`,162)(2820,`td`,16)(2821,`div`,17)(2822,`span`,18),Mk(2823,` Gauge`),_u(2824,`br`),Kg()()(),Jc(2825,`td`,23)(2826,`p`),Mk(2827,`Gráfico que provê a representação de um valor através de um arco. Possui dois tipos de tratamentos:`),Kg(),Jc(2828,`ul`)(2829,`li`),Mk(2830,`É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;`),Kg(),Jc(2831,`li`),Mk(2832,`Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.`),Kg()()()(),Jc(2833,`tr`,163)(2834,`td`,16)(2835,`div`,17)(2836,`span`,18),Mk(2837,` Radar`),_u(2838,`br`),Kg()()(),Jc(2839,`td`,23)(2840,`p`),Mk(2841,`Tipo de gráfico utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function gt(l,O){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-chart-basic-view`)(2,`sample-po-chart-labs-view`)(3,`sample-po-chart-coffee-ranking-view`)(4,`sample-po-chart-stacked-view`)(5,`sample-po-chart-summary-view`)(6,`sample-po-chart-world-exports-view`)(7,`sample-po-chart-technology-skill-view`),Kg()),l&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var ht=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;title=`Chart`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,d){this.route=r,this.router=d}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let d=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:d||`web`,this.title=`Chart · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(d){return new(d||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(d,i){d&1&&(Jc(0,`po-page-default`,0),LO(1,gt,8,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-chart-doc`),Kg()()),d&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,Se,fe,ye,_e,we,Le,De,ke],encapsulation:2,changeDetection:1})}return l})()}];var Ae=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[GV.forChild(ht),GV]})}return l})();var xn=(()=>{class l{static ɵfac=function(d){return new(d||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,Ae]})}return l})();export{xn as DocPoChartModule};