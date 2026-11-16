import{m as P,p as M}from"./main-5ZHUK4IE.js";import{A as Ht,Ar as I,At as Zte,G as Nf,Hr as Lk,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ta as jk,Ti as U_,Ui as YO,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bn as oi,bt as Ul,ci as QP,cr as B_,da as gk,f as Cze,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de$1,oo as wg,ot as Sa,ro as vt,sa as ek,si as QL,sn as j4,ua as ge$1,vi as Sk,w as Fc,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var le=(()=>{class o{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(l,i){l&1&&vu(0,`po-helper`,0),l&2&&Rb(`p-helper`,i.poHelper)},dependencies:[Ht],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-helper-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Helper Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-basic',
  templateUrl: './sample-po-helper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperBasicComponent {
  poHelper: PoHelperOptions = {
    title: 'PO Helper Basic',
    content:
      'Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.'
  };
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-helper-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,be,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,le],encapsulation:2,changeDetection:1})}return o})();var ge=()=>({label:`Help`,value:`help`});var xe=()=>({label:`Info`,value:`info`});var re=(o,I)=>[o,I];var Ce=()=>({label:`Medium`,value:`medium`});var ve=()=>({label:`Small`,value:`small`});function ye(o,I){if(o&1){let a=YO();Qc(0,`po-input`,9),z0(),Kb(`ngModelChange`,function(i){B_(a);let c=ek();return Tk(c.footerTitle,i)||(c.footerTitle=i),U_(i)}),vt(`ngModelChange`,function(i){B_(a);let c=ek();return U_(c.setFooterTitle(i))}),Kg()}if(o&2){let a=ek();Yb(`ngModel`,a.footerTitle),W0()}}var me=(()=>{class o{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(a){this.footerTitle=a,a.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(a){this.helperOptions=s(r({},this.helperOptions),{type:a})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,i){l&1&&(vu(0,`po-helper`,0)(1,`po-divider`),Qc(2,`div`,1)(3,`po-input`,2),z0(),vt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{title:u})}),Kg(),Qc(4,`po-input`,3),z0(),vt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{content:u})}),Kg()(),Qc(5,`div`,1),FO(6,ye,1,1,`po-input`,4),Kg(),Qc(7,`div`,1)(8,`po-radio-group`,5),z0(),vt(`ngModelChange`,function(u){return i.updateHelperType(u)}),Kg()(),Qc(9,`div`,1)(10,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(u){return Tk(i.helperSize,u)||(i.helperSize=u),u}),Kg()(),Qc(11,`div`,1)(12,`po-checkbox`,7),z0(),Kb(`ngModelChange`,function(u){return Tk(i.helperDisabled,u)||(i.helperDisabled=u),u}),Kg()(),vu(13,`po-divider`),Qc(14,`div`,1)(15,`po-button`,8),vt(`p-click`,function(){return i.reset()}),Kg()()),l&2&&(Rb(`p-helper`,i.helperOptions)(`p-size`,i.helperSize)(`p-disabled`,i.helperDisabled),wg(3),Rb(`ngModel`,i.helperOptions.title),W0(),wg(),Rb(`ngModel`,i.helperOptions.content),W0(),wg(2),VO(i.helperOptions.type===`help`?6:-1),wg(2),Rb(`p-columns`,4)(`ngModel`,i.helperOptions.type)(`p-options`,jk(15,re,Lk(13,ge),Lk(14,xe))),W0(),wg(2),Yb(`ngModel`,i.helperSize),Rb(`p-columns`,4)(`p-options`,jk(20,re,Lk(18,Ce),Lk(19,ve))),W0(),wg(2),Yb(`ngModel`,i.helperDisabled),W0())},dependencies:[MZ,QL,oi,Nf,Ul,j4,Zte,Ht],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-helper-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Helper Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

<po-divider></po-divider>

<div class="po-row">
  <po-input
    class="po-md-6"
    name="title"
    [ngModel]="helperOptions.title"
    (ngModelChange)="helperOptions = { ...helperOptions, title: $event }"
    p-clean
    p-label="Title"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="content"
    [ngModel]="helperOptions.content"
    (ngModelChange)="helperOptions = { ...helperOptions, content: $event }"
    p-clean
    p-label="Content"
    p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
  >
  </po-input>
</div>

<div class="po-row">
  @if (helperOptions.type === 'help') {
    <po-input
      class="po-md-6"
      name="footerTitle"
      [(ngModel)]="footerTitle"
      (ngModelChange)="setFooterTitle($event)"
      p-clean
      p-label="Footer Action"
    >
    </po-input>
  }
</div>

<div class="po-row">
  <po-radio-group
    name="type"
    class="po-md-12"
    [p-columns]="4"
    p-label="Type"
    [ngModel]="helperOptions.type"
    (ngModelChange)="updateHelperType($event)"
    [p-options]="[
      { label: 'Help', value: 'help' },
      { label: 'Info', value: 'info' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="helperSize"
    [p-columns]="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="[
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-checkbox class="po-md-12" name="disabled" [(ngModel)]="helperDisabled" p-label="Disabled"> </po-checkbox>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="reset()"></po-button>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-labs',
  templateUrl: './sample-po-helper-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperLabsComponent {
  helperDisabled: boolean = false;
  helperSize: string = 'medium';

  helperOptions: PoHelperOptions = {
    title: '',
    content: '',
    type: 'help'
  };

  footerTitle: string = '';

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  setFooterTitle(title: string) {
    this.footerTitle = title;
    if (title.length === 0) {
      delete this.helperOptions.footerAction;
    } else {
      this.helperOptions = {
        ...this.helperOptions,
        footerAction: {
          label: this.footerTitle,
          action: this.footerAction.bind(this)
        }
      };
    }
  }

  updateHelperType(type: string) {
    this.helperOptions = {
      ...this.helperOptions,
      type: type as 'help' | 'info'
    };
  }

  reset() {
    this.helperDisabled = false;
    this.helperOptions = {
      title: '',
      content: '',
      type: 'help'
    };
    this.helperSize = 'medium';
    this.footerTitle = '';
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-helper-labs`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Te,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=Sa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(l,i){l&1&&(Qc(0,`po-container`)(1,`div`,0)(2,`div`,1),Sk(3,`Sales Performance`),Kg(),vu(4,`po-helper`,2),Kg(),Qc(5,`div`,3)(6,`div`,4),vu(7,`po-chart`,5),Kg()()()),l&2&&(wg(4),Rb(`p-helper`,i.helperOptions),wg(3),Rb(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover))},dependencies:[Cze,Fc,Ht],encapsulation:2,changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-helper-sales-performance`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Helper Sales Performance`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-container>
  <div class="po-row po-mb-3">
    <div class="po-font-title">Sales Performance</div>
    <po-helper [p-helper]="helperOptions"></po-helper>
  </div>
  <div class="po-row">
    <div class="po-lg-12">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
  </div>
</po-container>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions, PoChartType, PoChartOptions, PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-sales-performance',
  templateUrl: './sample-po-helper-sales-performance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperSalesPerformanceComponent {
  helperOptions: PoHelperOptions = {
    title: 'Sales Performance Overview',
    content:
      'This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.',
    type: 'info'
  };

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-helper-sales-performance`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,He,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-helper-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-helper-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-helper-options-content`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-event-on-click`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-helper-options-footer-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`id`,`interface-po-helper-options-title`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(l,i){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoHelperModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-helper`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoHelperComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-helper`),Kg(),Sk(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),Kg(),Qc(18,`p`),Sk(19,`Principais funcionalidades:`),Kg(),Qc(20,`ul`)(21,`li`),Sk(22,`Exibe ícone de ajuda (`),Qc(23,`code`),Sk(24,`help`),Kg(),Sk(25,`) ou informação (`),Qc(26,`code`),Sk(27,`info`),Kg(),Sk(28,`) conforme configuração.`),Kg(),Qc(29,`li`),Sk(30,`Permite definir título, conteúdo e ações no popover via propriedade `),Qc(31,`code`),Sk(32,`p-helper`),Kg(),Sk(33,`.`),Kg(),Qc(34,`li`),Sk(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),Kg(),Qc(36,`li`),Sk(37,`Controle do tamanho do componente via propriedade `),Qc(38,`code`),Sk(39,`p-size`),Kg(),Sk(40,` (`),Qc(41,`code`),Sk(42,`small`),Kg(),Sk(43,` ou `),Qc(44,`code`),Sk(45,`medium`),Kg(),Sk(46,`).`),Kg(),Qc(47,`li`),Sk(48,`Permite customizar ações no rodapé do popover.`),Kg()(),Qc(49,`p`),Sk(50,`Exemplo de uso:`),Kg(),Qc(51,`pre`)(52,`code`,6),Sk(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),Kg()(),Qc(54,`p`),Sk(55,`Também é possível passar apenas uma string para o conteúdo:`),Kg(),Qc(56,`pre`)(57,`code`,6),Sk(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),Kg()(),Qc(59,`p`),Sk(60,`A propriedade `),Qc(61,`code`),Sk(62,`p-helper`),Kg(),Sk(63,` aceita um objeto do tipo `),Qc(64,`code`),Sk(65,`PoHelperOptions`),Kg(),Sk(66,`:`),Kg(),Qc(67,`pre`)(68,`code`,7),Sk(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),Kg()(),Qc(70,`blockquote`)(71,`p`)(72,`strong`),Sk(73,`Importante:`),Kg(),Sk(74,` A propriedade `),Qc(75,`code`),Sk(76,`footerAction`),Kg(),Sk(77,` não pode ser utilizada quando o tipo do helper for `),Qc(78,`code`),Sk(79,`info`),Kg(),Sk(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),Kg()(),Qc(81,`h4`),Sk(82,`Tokens customizáveis`),Kg(),Qc(83,`p`),Sk(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(85,`blockquote`)(86,`p`),Sk(87,`Para maiores informações, acesse o guia `),Qc(88,`a`,8),Sk(89,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(90,`.`),Kg()(),Qc(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),Sk(95,`Propriedade`),Kg(),Qc(96,`th`),Sk(97,`Descrição`),Kg(),Qc(98,`th`),Sk(99,`Valor Padrão`),Kg()()(),Qc(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),Sk(104,`--color`),Kg()(),Qc(105,`td`),Sk(106,`Cor principal do ícone`),Kg(),Qc(107,`td`)(108,`code`),Sk(109,`var(--color-action-default)`),Kg()()(),Qc(110,`tr`)(111,`td`)(112,`code`),Sk(113,`--border-color-hover`),Kg()(),Qc(114,`td`),Sk(115,`Cor da borda no estado hover`),Kg(),Qc(116,`td`)(117,`code`),Sk(118,`var(--color-brand-01-darkest)`),Kg()()(),Qc(119,`tr`)(120,`td`)(121,`code`),Sk(122,`--background-pressed`),Kg()(),Qc(123,`td`),Sk(124,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(125,`td`)(126,`code`),Sk(127,`var(--color-brand-01-light)`),Kg()()(),Qc(128,`tr`)(129,`td`)(130,`code`),Sk(131,`--color-disabled`),Kg()(),Qc(132,`td`),Sk(133,`Cor principal no estado disabled`),Kg(),Qc(134,`td`)(135,`code`),Sk(136,`var(--color-action-disabled)`),Kg()()()()()(),Qc(137,`div`,9)(138,`h4`,10),Sk(139,`Seletor`),Kg(),Qc(140,`pre`,11),Sk(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),Kg()(),Qc(142,`h4`,12),Sk(143,`Propriedades`),Kg(),Qc(144,`table`,13)(145,`tr`,14)(146,`th`,15),Sk(147,`Nome`),Kg(),Qc(148,`th`,15),Sk(149,`Tipo`),Kg(),Qc(150,`th`,15),Sk(151,`Padrão`),Kg(),Qc(152,`th`,15),Sk(153,`Descrição`),Kg()(),Qc(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),Sk(158,` p-append-in-body`),vu(159,`br`),Kg()()(),Qc(160,`td`,20)(161,`code`,21),Sk(162,`boolean`),Kg()(),Qc(163,`td`,22),Sk(164,`-`),Kg(),Qc(165,`td`,23)(166,`em`)(167,`strong`),Sk(168,`(opcional)`),Kg()(),Qc(169,`p`),Sk(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),Qc(171,`code`),Sk(172,`p-target`),Kg(),Sk(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),Kg()()(),Qc(174,`tr`,24)(175,`td`,17)(176,`div`,18)(177,`span`,19),Sk(178,` p-disabled`),vu(179,`br`),Kg()()(),Qc(180,`td`,20)(181,`code`,21),Sk(182,`boolean`),Kg()(),Qc(183,`td`,22)(184,`p`)(185,`code`),Sk(186,`false`),Kg()()(),Qc(187,`td`,23)(188,`em`)(189,`strong`),Sk(190,`(opcional)`),Kg()(),Qc(191,`p`),Sk(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),Kg()()(),Qc(193,`tr`,25)(194,`td`,17)(195,`div`,18)(196,`span`,19),Sk(197,` p-helper`),vu(198,`br`),Kg()()(),Qc(199,`td`,20)(200,`code`,26),Sk(201,`PoHelperOptions `),Kg(),Qc(202,`code`,27),Sk(203,` string`),Kg()(),Qc(204,`td`,22),Sk(205,`-`),Kg(),Qc(206,`td`,23)(207,`em`)(208,`strong`),Sk(209,`(opcional)`),Kg()(),Qc(210,`p`),Sk(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),Kg(),Qc(212,`p`),Sk(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Qc(214,`code`),Sk(215,`PoHelperOptions`),Kg(),Sk(216,` para configuração avançada:`),Kg(),Qc(217,`ul`)(218,`li`)(219,`code`),Sk(220,`title`),Kg(),Sk(221,`: Título do popover.`),Kg(),Qc(222,`li`)(223,`code`),Sk(224,`content`),Kg(),Sk(225,`: Conteúdo explicativo exibido no popover.`),Kg(),Qc(226,`li`)(227,`code`),Sk(228,`type`),Kg(),Sk(229,`: Tipo do ícone (`),Qc(230,`code`),Sk(231,`help`),Kg(),Sk(232,` ou `),Qc(233,`code`),Sk(234,`info`),Kg(),Sk(235,`).`),Kg(),Qc(236,`li`)(237,`code`),Sk(238,`eventOnClick`),Kg(),Sk(239,`: Função chamada ao clicar no ícone.`),Kg(),Qc(240,`li`)(241,`code`),Sk(242,`footerAction`),Kg(),Sk(243,`: Objeto com `),Qc(244,`code`),Sk(245,`label`),Kg(),Sk(246,` e `),Qc(247,`code`),Sk(248,`action`),Kg(),Sk(249,` para ação customizada no rodapé do popover.`),Kg()(),Qc(250,`p`),Sk(251,`Exemplo de uso:`),Kg(),Qc(252,`pre`)(253,`code`,6),Sk(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),Kg()()()(),Qc(255,`tr`,28)(256,`td`,17)(257,`div`,18)(258,`span`,19),Sk(259,` p-size`),vu(260,`br`),Kg()()(),Qc(261,`td`,20)(262,`code`,27),Sk(263,`string`),Kg()(),Qc(264,`td`,22)(265,`p`)(266,`code`),Sk(267,`medium`),Kg()()(),Qc(268,`td`,23)(269,`em`)(270,`strong`),Sk(271,`(opcional)`),Kg()(),Qc(272,`p`),Sk(273,`Define o tamanho do componente:`),Kg(),Qc(274,`ul`)(275,`li`)(276,`code`),Sk(277,`small`),Kg(),Sk(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),Kg(),Qc(279,`li`)(280,`code`),Sk(281,`medium`),Kg(),Sk(282,`: altura do ícone com seu valor de 24px.`),Kg()(),Qc(283,`blockquote`)(284,`p`),Sk(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(286,`code`),Sk(287,`medium`),Kg(),Sk(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(289,`a`,29),Sk(290,`po-theme`),Kg(),Sk(291,`.`),Kg()()()()(),Qc(292,`h3`),Sk(293,`Interfaces`),Kg(),Qc(294,`h4`,30)(295,`code`,5),Sk(296,`PoHelperOptions`),Kg()(),Qc(297,`div`,2)(298,`p`),Sk(299,`Interface para configuração das opções de ajuda (`),Qc(300,`em`),Sk(301,`helper`),Kg(),Sk(302,`).`),Kg()(),Qc(303,`h4`,12),Sk(304,`Propriedades`),Kg(),Qc(305,`table`,13)(306,`tr`,14)(307,`th`,15),Sk(308,`Nome`),Kg(),Qc(309,`th`,15),Sk(310,`Tipo`),Kg(),Qc(311,`th`,15),Sk(312,`Descrição`),Kg()(),Qc(313,`tr`,31)(314,`td`,17)(315,`div`,18)(316,`span`,19),Sk(317,` content`),vu(318,`br`),Kg()()(),Qc(319,`td`,20)(320,`code`,27),Sk(321,`string`),Kg()(),Qc(322,`td`,23)(323,`em`)(324,`strong`),Sk(325,`(opcional)`),Kg()(),Qc(326,`p`),Sk(327,`Texto explicativo exibido no popover.`),Kg(),Qc(328,`p`),Sk(329,`Suporta formatação básica com as tags `),Qc(330,`code`),Sk(331,`<b>`),Kg(),Sk(332,` (negrito), `),Qc(333,`code`),Sk(334,`<strong>`),Kg(),Sk(335,` (negrito), `),Qc(336,`code`),Sk(337,`<i>`),Kg(),Sk(338,` (itálico), `),Qc(339,`code`),Sk(340,`<em>`),Kg(),Sk(341,` (it\xE1lico) e
`),Qc(342,`code`),Sk(343,`<u>`),Kg(),Sk(344,` (sublinhado).`),Kg(),Qc(345,`p`),Sk(346,`Exemplo:`),Kg(),Qc(347,`pre`)(348,`code`,7),Sk(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),Kg()()()(),Qc(350,`tr`,32)(351,`td`,17)(352,`div`,18)(353,`span`,19),Sk(354,` eventOnClick`),vu(355,`br`),Kg()()(),Qc(356,`td`,20)(357,`code`,33),Sk(358,`Function`),Kg()(),Qc(359,`td`,23)(360,`em`)(361,`strong`),Sk(362,`(opcional)`),Kg()(),Qc(363,`p`),Sk(364,`Evento disparado ao clicar no ícone do helper.`),Kg(),Qc(365,`p`),Sk(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),Kg(),Qc(367,`p`),Sk(368,`Pode ser uma função ou um `),Qc(369,`code`),Sk(370,`EventEmitter`),Kg(),Sk(371,`.`),Kg(),Qc(372,`p`),Sk(373,`Exemplo:`),Kg(),Qc(374,`pre`)(375,`code`),Sk(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),Kg()()()(),Qc(377,`tr`,34)(378,`td`,17)(379,`div`,18)(380,`span`,19),Sk(381,` footerAction`),vu(382,`br`),Kg()()(),Qc(383,`td`,20)(384,`code`,35),Sk(385,`{ label: string; action: Function;
}`),Kg()(),Qc(386,`td`,23)(387,`em`)(388,`strong`),Sk(389,`(opcional)`),Kg()(),Qc(390,`p`),Sk(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Qc(392,`code`),Sk(393,`help`),Kg(),Sk(394,` e desconsiderada quando o type for `),Qc(395,`code`),Sk(396,`info`),Kg(),Sk(397,`.`),Kg(),Qc(398,`p`),Sk(399,`Deve ser um objeto com as propriedades:`),Kg(),Qc(400,`ul`)(401,`li`)(402,`code`),Sk(403,`label`),Kg(),Sk(404,`: Texto do botão.`),Kg(),Qc(405,`li`)(406,`code`),Sk(407,`action`),Kg(),Sk(408,`: Função executada ao clicar no botão.`),Kg()(),Qc(409,`p`),Sk(410,`Exemplo:`),Kg(),Qc(411,`pre`)(412,`code`,7),Sk(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),Kg()()()(),Qc(414,`tr`,36)(415,`td`,17)(416,`div`,18)(417,`span`,19),Sk(418,` title`),vu(419,`br`),Kg()()(),Qc(420,`td`,20)(421,`code`,27),Sk(422,`string`),Kg()(),Qc(423,`td`,23)(424,`em`)(425,`strong`),Sk(426,`(opcional)`),Kg()(),Qc(427,`p`),Sk(428,`Título do helper exibido no popover.`),Kg()()(),Qc(429,`tr`,37)(430,`td`,17)(431,`div`,18)(432,`span`,19),Sk(433,` type`),vu(434,`br`),Kg()()(),Qc(435,`td`,20)(436,`code`,38),Sk(437,`'info' `),Kg(),Qc(438,`code`,39),Sk(439,` 'help'`),Kg()(),Qc(440,`td`,23)(441,`em`)(442,`strong`),Sk(443,`(opcional)`),Kg()(),Qc(444,`p`),Sk(445,`Tipo do ícone exibido: `),Qc(446,`code`),Sk(447,`info`),Kg(),Sk(448,` ou `),Qc(449,`code`),Sk(450,`help`),Kg(),Sk(451,`.`),Kg(),Qc(452,`p`),Sk(453,`Quando o valor é `),Qc(454,`code`),Sk(455,`info`),Kg(),Sk(456,`, o popover exibe apenas informações e não permite ações customizadas.`),Kg(),Qc(457,`p`),Sk(458,`Quando o valor é `),Qc(459,`code`),Sk(460,`help`),Kg(),Sk(461,`, o popover pode exibir ações customizadas no rodapé.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Oe(o,I){if(o&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-helper-basic-view`)(2,`sample-po-helper-labs-view`)(3,`sample-po-helper-sales-performance-view`),Kg()}if(o&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Helper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Oe,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-helper-doc`),Kg()()()),l&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,pe,se,ce,ue],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Fe),GV]})}return o})();var lt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,Ee]})}return o})();export{lt as DocPoHelperModule};