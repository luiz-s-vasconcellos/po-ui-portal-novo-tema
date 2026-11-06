import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Ar as Ig,Cn as oi,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Vn as xa,Xt as ere,Y as Nl,Yi as eF,bi as Uk,ca as jk,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,i as Ac,j as Ht,jr as JL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de$1,rn as gze,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var le=(()=>{class o{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(l,i){l&1&&_u(0,`po-helper`,0),l&2&&Rb(`p-helper`,i.poHelper)},dependencies:[Ht],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Helper Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-helper-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,be,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,le],encapsulation:2,changeDetection:1})}return o})();var ge=()=>({label:`Help`,value:`help`});var xe=()=>({label:`Info`,value:`info`});var re=(o,I)=>[o,I];var Ce=()=>({label:`Medium`,value:`medium`});var ve=()=>({label:`Small`,value:`small`});function ye(o,I){if(o&1){let a=ZO();Jc(0,`po-input`,9),W0(),Kb(`ngModelChange`,function(i){U_(a);let c=nk();return Ak(c.footerTitle,i)||(c.footerTitle=i),H_(i)}),vt(`ngModelChange`,function(i){U_(a);let c=nk();return H_(c.setFooterTitle(i))}),Zg()}if(o&2){let a=nk();Yb(`ngModel`,a.footerTitle),Y0()}}var me=(()=>{class o{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(a){this.footerTitle=a,a.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(a){this.helperOptions=s(r({},this.helperOptions),{type:a})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,i){l&1&&(_u(0,`po-helper`,0)(1,`po-divider`),Jc(2,`div`,1)(3,`po-input`,2),W0(),vt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{title:u})}),Zg(),Jc(4,`po-input`,3),W0(),vt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{content:u})}),Zg()(),Jc(5,`div`,1),VO(6,ye,1,1,`po-input`,4),Zg(),Jc(7,`div`,1)(8,`po-radio-group`,5),W0(),vt(`ngModelChange`,function(u){return i.updateHelperType(u)}),Zg()(),Jc(9,`div`,1)(10,`po-radio-group`,6),W0(),Kb(`ngModelChange`,function(u){return Ak(i.helperSize,u)||(i.helperSize=u),u}),Zg()(),Jc(11,`div`,1)(12,`po-checkbox`,7),W0(),Kb(`ngModelChange`,function(u){return Ak(i.helperDisabled,u)||(i.helperDisabled=u),u}),Zg()(),_u(13,`po-divider`),Jc(14,`div`,1)(15,`po-button`,8),vt(`p-click`,function(){return i.reset()}),Zg()()),l&2&&(Rb(`p-helper`,i.helperOptions)(`p-size`,i.helperSize)(`p-disabled`,i.helperDisabled),Ig(3),Rb(`ngModel`,i.helperOptions.title),Y0(),Ig(),Rb(`ngModel`,i.helperOptions.content),Y0(),Ig(2),BO(i.helperOptions.type===`help`?6:-1),Ig(2),Rb(`p-columns`,4)(`ngModel`,i.helperOptions.type)(`p-options`,Uk(15,re,jk(13,ge),jk(14,xe))),Y0(),Ig(2),Yb(`ngModel`,i.helperSize),Rb(`p-columns`,4)(`p-options`,Uk(20,re,jk(18,Ce),jk(19,ve))),Y0(),Ig(2),Yb(`ngModel`,i.helperDisabled),Y0())},dependencies:[TZ,JL,oi,Lf,Nl,U4,Gte,Ht],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Helper Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-helper-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=xa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(l,i){l&1&&(Jc(0,`po-container`)(1,`div`,0)(2,`div`,1),Tk(3,`Sales Performance`),Zg(),_u(4,`po-helper`,2),Zg(),Jc(5,`div`,3)(6,`div`,4),_u(7,`po-chart`,5),Zg()()()),l&2&&(Ig(4),Rb(`p-helper`,i.helperOptions),Ig(3),Rb(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover))},dependencies:[gze,Ac,Ht],encapsulation:2,changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Helper Sales Performance`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-helper-sales-performance`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,He,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(l,i){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoHelperModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-helper`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoHelperComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-helper`),Zg(),Tk(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),Zg(),Jc(18,`p`),Tk(19,`Principais funcionalidades:`),Zg(),Jc(20,`ul`)(21,`li`),Tk(22,`Exibe ícone de ajuda (`),Jc(23,`code`),Tk(24,`help`),Zg(),Tk(25,`) ou informação (`),Jc(26,`code`),Tk(27,`info`),Zg(),Tk(28,`) conforme configuração.`),Zg(),Jc(29,`li`),Tk(30,`Permite definir título, conteúdo e ações no popover via propriedade `),Jc(31,`code`),Tk(32,`p-helper`),Zg(),Tk(33,`.`),Zg(),Jc(34,`li`),Tk(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),Zg(),Jc(36,`li`),Tk(37,`Controle do tamanho do componente via propriedade `),Jc(38,`code`),Tk(39,`p-size`),Zg(),Tk(40,` (`),Jc(41,`code`),Tk(42,`small`),Zg(),Tk(43,` ou `),Jc(44,`code`),Tk(45,`medium`),Zg(),Tk(46,`).`),Zg(),Jc(47,`li`),Tk(48,`Permite customizar ações no rodapé do popover.`),Zg()(),Jc(49,`p`),Tk(50,`Exemplo de uso:`),Zg(),Jc(51,`pre`)(52,`code`,6),Tk(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),Zg()(),Jc(54,`p`),Tk(55,`Também é possível passar apenas uma string para o conteúdo:`),Zg(),Jc(56,`pre`)(57,`code`,6),Tk(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),Zg()(),Jc(59,`p`),Tk(60,`A propriedade `),Jc(61,`code`),Tk(62,`p-helper`),Zg(),Tk(63,` aceita um objeto do tipo `),Jc(64,`code`),Tk(65,`PoHelperOptions`),Zg(),Tk(66,`:`),Zg(),Jc(67,`pre`)(68,`code`,7),Tk(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),Zg()(),Jc(70,`blockquote`)(71,`p`)(72,`strong`),Tk(73,`Importante:`),Zg(),Tk(74,` A propriedade `),Jc(75,`code`),Tk(76,`footerAction`),Zg(),Tk(77,` não pode ser utilizada quando o tipo do helper for `),Jc(78,`code`),Tk(79,`info`),Zg(),Tk(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),Zg()(),Jc(81,`h4`),Tk(82,`Tokens customizáveis`),Zg(),Jc(83,`p`),Tk(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(85,`blockquote`)(86,`p`),Tk(87,`Para maiores informações, acesse o guia `),Jc(88,`a`,8),Tk(89,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(90,`.`),Zg()(),Jc(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),Tk(95,`Propriedade`),Zg(),Jc(96,`th`),Tk(97,`Descrição`),Zg(),Jc(98,`th`),Tk(99,`Valor Padrão`),Zg()()(),Jc(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),Tk(104,`--color`),Zg()(),Jc(105,`td`),Tk(106,`Cor principal do ícone`),Zg(),Jc(107,`td`)(108,`code`),Tk(109,`var(--color-action-default)`),Zg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Tk(113,`--border-color-hover`),Zg()(),Jc(114,`td`),Tk(115,`Cor da borda no estado hover`),Zg(),Jc(116,`td`)(117,`code`),Tk(118,`var(--color-brand-01-darkest)`),Zg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Tk(122,`--background-pressed`),Zg()(),Jc(123,`td`),Tk(124,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(125,`td`)(126,`code`),Tk(127,`var(--color-brand-01-light)`),Zg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Tk(131,`--color-disabled`),Zg()(),Jc(132,`td`),Tk(133,`Cor principal no estado disabled`),Zg(),Jc(134,`td`)(135,`code`),Tk(136,`var(--color-action-disabled)`),Zg()()()()()(),Jc(137,`div`,9)(138,`h4`,10),Tk(139,`Seletor`),Zg(),Jc(140,`pre`,11),Tk(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),Zg()(),Jc(142,`h4`,12),Tk(143,`Propriedades`),Zg(),Jc(144,`table`,13)(145,`tr`,14)(146,`th`,15),Tk(147,`Nome`),Zg(),Jc(148,`th`,15),Tk(149,`Tipo`),Zg(),Jc(150,`th`,15),Tk(151,`Padrão`),Zg(),Jc(152,`th`,15),Tk(153,`Descrição`),Zg()(),Jc(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),Tk(158,` p-append-in-body`),_u(159,`br`),Zg()()(),Jc(160,`td`,20)(161,`code`,21),Tk(162,`boolean`),Zg()(),Jc(163,`td`,22),Tk(164,`-`),Zg(),Jc(165,`td`,23)(166,`em`)(167,`strong`),Tk(168,`(opcional)`),Zg()(),Jc(169,`p`),Tk(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),Jc(171,`code`),Tk(172,`p-target`),Zg(),Tk(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),Zg()()(),Jc(174,`tr`,16)(175,`td`,17)(176,`div`,18)(177,`span`,19),Tk(178,` p-disabled`),_u(179,`br`),Zg()()(),Jc(180,`td`,20)(181,`code`,21),Tk(182,`boolean`),Zg()(),Jc(183,`td`,22)(184,`p`)(185,`code`),Tk(186,`false`),Zg()()(),Jc(187,`td`,23)(188,`em`)(189,`strong`),Tk(190,`(opcional)`),Zg()(),Jc(191,`p`),Tk(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),Zg()()(),Jc(193,`tr`,16)(194,`td`,17)(195,`div`,18)(196,`span`,19),Tk(197,` p-helper`),_u(198,`br`),Zg()()(),Jc(199,`td`,20)(200,`code`,24),Tk(201,`PoHelperOptions `),Zg(),Jc(202,`code`,25),Tk(203,` string`),Zg()(),Jc(204,`td`,22),Tk(205,`-`),Zg(),Jc(206,`td`,23)(207,`em`)(208,`strong`),Tk(209,`(opcional)`),Zg()(),Jc(210,`p`),Tk(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),Zg(),Jc(212,`p`),Tk(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Jc(214,`code`),Tk(215,`PoHelperOptions`),Zg(),Tk(216,` para configuração avançada:`),Zg(),Jc(217,`ul`)(218,`li`)(219,`code`),Tk(220,`title`),Zg(),Tk(221,`: Título do popover.`),Zg(),Jc(222,`li`)(223,`code`),Tk(224,`content`),Zg(),Tk(225,`: Conteúdo explicativo exibido no popover.`),Zg(),Jc(226,`li`)(227,`code`),Tk(228,`type`),Zg(),Tk(229,`: Tipo do ícone (`),Jc(230,`code`),Tk(231,`help`),Zg(),Tk(232,` ou `),Jc(233,`code`),Tk(234,`info`),Zg(),Tk(235,`).`),Zg(),Jc(236,`li`)(237,`code`),Tk(238,`eventOnClick`),Zg(),Tk(239,`: Função chamada ao clicar no ícone.`),Zg(),Jc(240,`li`)(241,`code`),Tk(242,`footerAction`),Zg(),Tk(243,`: Objeto com `),Jc(244,`code`),Tk(245,`label`),Zg(),Tk(246,` e `),Jc(247,`code`),Tk(248,`action`),Zg(),Tk(249,` para ação customizada no rodapé do popover.`),Zg()(),Jc(250,`p`),Tk(251,`Exemplo de uso:`),Zg(),Jc(252,`pre`)(253,`code`,6),Tk(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),Zg()()()(),Jc(255,`tr`,16)(256,`td`,17)(257,`div`,18)(258,`span`,19),Tk(259,` p-size`),_u(260,`br`),Zg()()(),Jc(261,`td`,20)(262,`code`,25),Tk(263,`string`),Zg()(),Jc(264,`td`,22)(265,`p`)(266,`code`),Tk(267,`medium`),Zg()()(),Jc(268,`td`,23)(269,`em`)(270,`strong`),Tk(271,`(opcional)`),Zg()(),Jc(272,`p`),Tk(273,`Define o tamanho do componente:`),Zg(),Jc(274,`ul`)(275,`li`)(276,`code`),Tk(277,`small`),Zg(),Tk(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),Zg(),Jc(279,`li`)(280,`code`),Tk(281,`medium`),Zg(),Tk(282,`: altura do ícone com seu valor de 24px.`),Zg()(),Jc(283,`blockquote`)(284,`p`),Tk(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(286,`code`),Tk(287,`medium`),Zg(),Tk(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(289,`a`,26),Tk(290,`po-theme`),Zg(),Tk(291,`.`),Zg()()()()(),Jc(292,`h3`),Tk(293,`Interfaces`),Zg(),Jc(294,`h4`,27)(295,`code`,5),Tk(296,`PoHelperOptions`),Zg()(),Jc(297,`div`,2)(298,`p`),Tk(299,`Interface para configuração das opções de ajuda (`),Jc(300,`em`),Tk(301,`helper`),Zg(),Tk(302,`).`),Zg()(),Jc(303,`h4`,12),Tk(304,`Propriedades`),Zg(),Jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),Tk(308,`Nome`),Zg(),Jc(309,`th`,15),Tk(310,`Tipo`),Zg(),Jc(311,`th`,15),Tk(312,`Descrição`),Zg()(),Jc(313,`tr`,16)(314,`td`,17)(315,`div`,18)(316,`span`,19),Tk(317,` content`),_u(318,`br`),Zg()()(),Jc(319,`td`,20)(320,`code`,25),Tk(321,`string`),Zg()(),Jc(322,`td`,23)(323,`em`)(324,`strong`),Tk(325,`(opcional)`),Zg()(),Jc(326,`p`),Tk(327,`Texto explicativo exibido no popover.`),Zg(),Jc(328,`p`),Tk(329,`Suporta formatação básica com as tags `),Jc(330,`code`),Tk(331,`<b>`),Zg(),Tk(332,` (negrito), `),Jc(333,`code`),Tk(334,`<strong>`),Zg(),Tk(335,` (negrito), `),Jc(336,`code`),Tk(337,`<i>`),Zg(),Tk(338,` (itálico), `),Jc(339,`code`),Tk(340,`<em>`),Zg(),Tk(341,` (it\xE1lico) e
`),Jc(342,`code`),Tk(343,`<u>`),Zg(),Tk(344,` (sublinhado).`),Zg(),Jc(345,`p`),Tk(346,`Exemplo:`),Zg(),Jc(347,`pre`)(348,`code`,7),Tk(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),Zg()()()(),Jc(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),Tk(354,` eventOnClick`),_u(355,`br`),Zg()()(),Jc(356,`td`,20)(357,`code`,28),Tk(358,`Function`),Zg()(),Jc(359,`td`,23)(360,`em`)(361,`strong`),Tk(362,`(opcional)`),Zg()(),Jc(363,`p`),Tk(364,`Evento disparado ao clicar no ícone do helper.`),Zg(),Jc(365,`p`),Tk(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),Zg(),Jc(367,`p`),Tk(368,`Pode ser uma função ou um `),Jc(369,`code`),Tk(370,`EventEmitter`),Zg(),Tk(371,`.`),Zg(),Jc(372,`p`),Tk(373,`Exemplo:`),Zg(),Jc(374,`pre`)(375,`code`),Tk(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),Zg()()()(),Jc(377,`tr`,16)(378,`td`,17)(379,`div`,18)(380,`span`,19),Tk(381,` footerAction`),_u(382,`br`),Zg()()(),Jc(383,`td`,20)(384,`code`,29),Tk(385,`{ label: string; action: Function;
}`),Zg()(),Jc(386,`td`,23)(387,`em`)(388,`strong`),Tk(389,`(opcional)`),Zg()(),Jc(390,`p`),Tk(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Jc(392,`code`),Tk(393,`help`),Zg(),Tk(394,` e desconsiderada quando o type for `),Jc(395,`code`),Tk(396,`info`),Zg(),Tk(397,`.`),Zg(),Jc(398,`p`),Tk(399,`Deve ser um objeto com as propriedades:`),Zg(),Jc(400,`ul`)(401,`li`)(402,`code`),Tk(403,`label`),Zg(),Tk(404,`: Texto do botão.`),Zg(),Jc(405,`li`)(406,`code`),Tk(407,`action`),Zg(),Tk(408,`: Função executada ao clicar no botão.`),Zg()(),Jc(409,`p`),Tk(410,`Exemplo:`),Zg(),Jc(411,`pre`)(412,`code`,7),Tk(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),Zg()()()(),Jc(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),Tk(418,` title`),_u(419,`br`),Zg()()(),Jc(420,`td`,20)(421,`code`,25),Tk(422,`string`),Zg()(),Jc(423,`td`,23)(424,`em`)(425,`strong`),Tk(426,`(opcional)`),Zg()(),Jc(427,`p`),Tk(428,`Título do helper exibido no popover.`),Zg()()(),Jc(429,`tr`,16)(430,`td`,17)(431,`div`,18)(432,`span`,19),Tk(433,` type`),_u(434,`br`),Zg()()(),Jc(435,`td`,20)(436,`code`,30),Tk(437,`'info' `),Zg(),Jc(438,`code`,31),Tk(439,` 'help'`),Zg()(),Jc(440,`td`,23)(441,`em`)(442,`strong`),Tk(443,`(opcional)`),Zg()(),Jc(444,`p`),Tk(445,`Tipo do ícone exibido: `),Jc(446,`code`),Tk(447,`info`),Zg(),Tk(448,` ou `),Jc(449,`code`),Tk(450,`help`),Zg(),Tk(451,`.`),Zg(),Jc(452,`p`),Tk(453,`Quando o valor é `),Jc(454,`code`),Tk(455,`info`),Zg(),Tk(456,`, o popover exibe apenas informações e não permite ações customizadas.`),Zg(),Jc(457,`p`),Tk(458,`Quando o valor é `),Jc(459,`code`),Tk(460,`help`),Zg(),Tk(461,`, o popover pode exibir ações customizadas no rodapé.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Oe(o,I){if(o&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-helper-basic-view`)(2,`sample-po-helper-labs-view`)(3,`sample-po-helper-sales-performance-view`),Zg()}if(o&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Helper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Oe,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-helper-doc`),Zg()()()),l&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,se,ce,ue],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[WV.forChild(Fe),WV]})}return o})();var lt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,Ee]})}return o})();export{lt as DocPoHelperModule};