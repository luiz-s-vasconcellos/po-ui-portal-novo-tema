import{n as s,t as r}from"./chunk-zystk1pz.js";import{Ai as _O,Cn as oi,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Vn as xa,Xt as ere,Y as Nl,Ya as wg,Za as xF,ai as Sn,cr as CO,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,j as Ht,ji as __,ki as Zn,ma as lO,mt as Tze,nr as Ag,qr as Ok,ri as SK,rn as gze,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var le=(()=>{class o{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(l,i){l&1&&nu(0,`po-helper`,0),l&2&&UE(`p-helper`,i.poHelper)},dependencies:[Ht],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Helper Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-helper-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,be,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,le],encapsulation:2,changeDetection:1})}return o})();var ge=()=>({label:`Help`,value:`help`});var xe=()=>({label:`Info`,value:`info`});var re=(o,I)=>[o,I];var Ce=()=>({label:`Medium`,value:`medium`});var ve=()=>({label:`Small`,value:`small`});function ye(o,I){if(o&1){let a=Ax();jc(0,`po-input`,9),r0(),ab(`ngModelChange`,function(i){v_(a);let c=Fx();return uO(c.footerTitle,i)||(c.footerTitle=i),__(i)}),mt(`ngModelChange`,function(i){v_(a);let c=Fx();return __(c.setFooterTitle(i))}),wg()}if(o&2){let a=Fx();sb(`ngModel`,a.footerTitle),o0()}}var me=(()=>{class o{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(a){this.footerTitle=a,a.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(a){this.helperOptions=s(r({},this.helperOptions),{type:a})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,i){l&1&&(nu(0,`po-helper`,0)(1,`po-divider`),jc(2,`div`,1)(3,`po-input`,2),r0(),mt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{title:u})}),wg(),jc(4,`po-input`,3),r0(),mt(`ngModelChange`,function(u){return i.helperOptions=s(r({},i.helperOptions),{content:u})}),wg()(),jc(5,`div`,1),vx(6,ye,1,1,`po-input`,4),wg(),jc(7,`div`,1)(8,`po-radio-group`,5),r0(),mt(`ngModelChange`,function(u){return i.updateHelperType(u)}),wg()(),jc(9,`div`,1)(10,`po-radio-group`,6),r0(),ab(`ngModelChange`,function(u){return uO(i.helperSize,u)||(i.helperSize=u),u}),wg()(),jc(11,`div`,1)(12,`po-checkbox`,7),r0(),ab(`ngModelChange`,function(u){return uO(i.helperDisabled,u)||(i.helperDisabled=u),u}),wg()(),nu(13,`po-divider`),jc(14,`div`,1)(15,`po-button`,8),mt(`p-click`,function(){return i.reset()}),wg()()),l&2&&(UE(`p-helper`,i.helperOptions)(`p-size`,i.helperSize)(`p-disabled`,i.helperDisabled),rg(3),UE(`ngModel`,i.helperOptions.title),o0(),rg(),UE(`ngModel`,i.helperOptions.content),o0(),rg(2),Dx(i.helperOptions.type===`help`?6:-1),rg(2),UE(`p-columns`,4)(`ngModel`,i.helperOptions.type)(`p-options`,CO(15,re,_O(13,ge),_O(14,xe))),o0(),rg(2),sb(`ngModel`,i.helperSize),UE(`p-columns`,4)(`p-options`,CO(20,re,_O(18,Ce),_O(19,ve))),o0(),rg(2),sb(`ngModel`,i.helperDisabled),o0())},dependencies:[SK,xF,oi,Lf,Nl,U4,Gte,Ht],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Helper Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-helper-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Te,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=xa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(l,i){l&1&&(jc(0,`po-container`)(1,`div`,0)(2,`div`,1),lO(3,`Sales Performance`),wg(),nu(4,`po-helper`,2),wg(),jc(5,`div`,3)(6,`div`,4),nu(7,`po-chart`,5),wg()()()),l&2&&(rg(4),UE(`p-helper`,i.helperOptions),rg(3),UE(`p-type`,i.type)(`p-options`,i.optionsSingle)(`p-series`,i.turnover))},dependencies:[gze,Ac,Ht],encapsulation:2,changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Helper Sales Performance`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-container>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-helper-sales-performance`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,He,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoHelperModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-helper`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoHelperComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-helper`),wg(),lO(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),wg(),jc(18,`p`),lO(19,`Principais funcionalidades:`),wg(),jc(20,`ul`)(21,`li`),lO(22,`Exibe ícone de ajuda (`),jc(23,`code`),lO(24,`help`),wg(),lO(25,`) ou informação (`),jc(26,`code`),lO(27,`info`),wg(),lO(28,`) conforme configuração.`),wg(),jc(29,`li`),lO(30,`Permite definir título, conteúdo e ações no popover via propriedade `),jc(31,`code`),lO(32,`p-helper`),wg(),lO(33,`.`),wg(),jc(34,`li`),lO(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),wg(),jc(36,`li`),lO(37,`Controle do tamanho do componente via propriedade `),jc(38,`code`),lO(39,`p-size`),wg(),lO(40,` (`),jc(41,`code`),lO(42,`small`),wg(),lO(43,` ou `),jc(44,`code`),lO(45,`medium`),wg(),lO(46,`).`),wg(),jc(47,`li`),lO(48,`Permite customizar ações no rodapé do popover.`),wg()(),jc(49,`p`),lO(50,`Exemplo de uso:`),wg(),jc(51,`pre`)(52,`code`,6),lO(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),wg()(),jc(54,`p`),lO(55,`Também é possível passar apenas uma string para o conteúdo:`),wg(),jc(56,`pre`)(57,`code`,6),lO(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),wg()(),jc(59,`p`),lO(60,`A propriedade `),jc(61,`code`),lO(62,`p-helper`),wg(),lO(63,` aceita um objeto do tipo `),jc(64,`code`),lO(65,`PoHelperOptions`),wg(),lO(66,`:`),wg(),jc(67,`pre`)(68,`code`,7),lO(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),wg()(),jc(70,`blockquote`)(71,`p`)(72,`strong`),lO(73,`Importante:`),wg(),lO(74,` A propriedade `),jc(75,`code`),lO(76,`footerAction`),wg(),lO(77,` não pode ser utilizada quando o tipo do helper for `),jc(78,`code`),lO(79,`info`),wg(),lO(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),wg()(),jc(81,`h4`),lO(82,`Tokens customizáveis`),wg(),jc(83,`p`),lO(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(85,`blockquote`)(86,`p`),lO(87,`Para maiores informações, acesse o guia `),jc(88,`a`,8),lO(89,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(90,`.`),wg()(),jc(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),lO(95,`Propriedade`),wg(),jc(96,`th`),lO(97,`Descrição`),wg(),jc(98,`th`),lO(99,`Valor Padrão`),wg()()(),jc(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),lO(104,`--color`),wg()(),jc(105,`td`),lO(106,`Cor principal do ícone`),wg(),jc(107,`td`)(108,`code`),lO(109,`var(--color-action-default)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),lO(113,`--border-color-hover`),wg()(),jc(114,`td`),lO(115,`Cor da borda no estado hover`),wg(),jc(116,`td`)(117,`code`),lO(118,`var(--color-brand-01-darkest)`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),lO(122,`--background-pressed`),wg()(),jc(123,`td`),lO(124,`Cor de background no estado de pressionado\xA0`),wg(),jc(125,`td`)(126,`code`),lO(127,`var(--color-brand-01-light)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),lO(131,`--color-disabled`),wg()(),jc(132,`td`),lO(133,`Cor principal no estado disabled`),wg(),jc(134,`td`)(135,`code`),lO(136,`var(--color-action-disabled)`),wg()()()()()(),jc(137,`div`,9)(138,`h4`,10),lO(139,`Seletor`),wg(),jc(140,`pre`,11),lO(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),wg()(),jc(142,`h4`,12),lO(143,`Propriedades`),wg(),jc(144,`table`,13)(145,`tr`,14)(146,`th`,15),lO(147,`Nome`),wg(),jc(148,`th`,15),lO(149,`Tipo`),wg(),jc(150,`th`,15),lO(151,`Padrão`),wg(),jc(152,`th`,15),lO(153,`Descrição`),wg()(),jc(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),lO(158,` p-append-in-body`),nu(159,`br`),wg()()(),jc(160,`td`,20)(161,`code`,21),lO(162,`boolean`),wg()(),jc(163,`td`,22),lO(164,`-`),wg(),jc(165,`td`,23)(166,`em`)(167,`strong`),lO(168,`(opcional)`),wg()(),jc(169,`p`),lO(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),jc(171,`code`),lO(172,`p-target`),wg(),lO(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),wg()()(),jc(174,`tr`,16)(175,`td`,17)(176,`div`,18)(177,`span`,19),lO(178,` p-disabled`),nu(179,`br`),wg()()(),jc(180,`td`,20)(181,`code`,21),lO(182,`boolean`),wg()(),jc(183,`td`,22)(184,`p`)(185,`code`),lO(186,`false`),wg()()(),jc(187,`td`,23)(188,`em`)(189,`strong`),lO(190,`(opcional)`),wg()(),jc(191,`p`),lO(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),wg()()(),jc(193,`tr`,16)(194,`td`,17)(195,`div`,18)(196,`span`,19),lO(197,` p-helper`),nu(198,`br`),wg()()(),jc(199,`td`,20)(200,`code`,24),lO(201,`PoHelperOptions `),wg(),jc(202,`code`,25),lO(203,` string`),wg()(),jc(204,`td`,22),lO(205,`-`),wg(),jc(206,`td`,23)(207,`em`)(208,`strong`),lO(209,`(opcional)`),wg()(),jc(210,`p`),lO(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),wg(),jc(212,`p`),lO(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),jc(214,`code`),lO(215,`PoHelperOptions`),wg(),lO(216,` para configuração avançada:`),wg(),jc(217,`ul`)(218,`li`)(219,`code`),lO(220,`title`),wg(),lO(221,`: Título do popover.`),wg(),jc(222,`li`)(223,`code`),lO(224,`content`),wg(),lO(225,`: Conteúdo explicativo exibido no popover.`),wg(),jc(226,`li`)(227,`code`),lO(228,`type`),wg(),lO(229,`: Tipo do ícone (`),jc(230,`code`),lO(231,`help`),wg(),lO(232,` ou `),jc(233,`code`),lO(234,`info`),wg(),lO(235,`).`),wg(),jc(236,`li`)(237,`code`),lO(238,`eventOnClick`),wg(),lO(239,`: Função chamada ao clicar no ícone.`),wg(),jc(240,`li`)(241,`code`),lO(242,`footerAction`),wg(),lO(243,`: Objeto com `),jc(244,`code`),lO(245,`label`),wg(),lO(246,` e `),jc(247,`code`),lO(248,`action`),wg(),lO(249,` para ação customizada no rodapé do popover.`),wg()(),jc(250,`p`),lO(251,`Exemplo de uso:`),wg(),jc(252,`pre`)(253,`code`,6),lO(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),wg()()()(),jc(255,`tr`,16)(256,`td`,17)(257,`div`,18)(258,`span`,19),lO(259,` p-size`),nu(260,`br`),wg()()(),jc(261,`td`,20)(262,`code`,25),lO(263,`string`),wg()(),jc(264,`td`,22)(265,`p`)(266,`code`),lO(267,`medium`),wg()()(),jc(268,`td`,23)(269,`em`)(270,`strong`),lO(271,`(opcional)`),wg()(),jc(272,`p`),lO(273,`Define o tamanho do componente:`),wg(),jc(274,`ul`)(275,`li`)(276,`code`),lO(277,`small`),wg(),lO(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),wg(),jc(279,`li`)(280,`code`),lO(281,`medium`),wg(),lO(282,`: altura do ícone com seu valor de 24px.`),wg()(),jc(283,`blockquote`)(284,`p`),lO(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(286,`code`),lO(287,`medium`),wg(),lO(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(289,`a`,26),lO(290,`po-theme`),wg(),lO(291,`.`),wg()()()()(),jc(292,`h3`),lO(293,`Interfaces`),wg(),jc(294,`h4`,27)(295,`code`,5),lO(296,`PoHelperOptions`),wg()(),jc(297,`div`,2)(298,`p`),lO(299,`Interface para configuração das opções de ajuda (`),jc(300,`em`),lO(301,`helper`),wg(),lO(302,`).`),wg()(),jc(303,`h4`,12),lO(304,`Propriedades`),wg(),jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),lO(308,`Nome`),wg(),jc(309,`th`,15),lO(310,`Tipo`),wg(),jc(311,`th`,15),lO(312,`Descrição`),wg()(),jc(313,`tr`,16)(314,`td`,17)(315,`div`,18)(316,`span`,19),lO(317,` content`),nu(318,`br`),wg()()(),jc(319,`td`,20)(320,`code`,25),lO(321,`string`),wg()(),jc(322,`td`,23)(323,`em`)(324,`strong`),lO(325,`(opcional)`),wg()(),jc(326,`p`),lO(327,`Texto explicativo exibido no popover.`),wg(),jc(328,`p`),lO(329,`Suporta formatação básica com as tags `),jc(330,`code`),lO(331,`<b>`),wg(),lO(332,` (negrito), `),jc(333,`code`),lO(334,`<strong>`),wg(),lO(335,` (negrito), `),jc(336,`code`),lO(337,`<i>`),wg(),lO(338,` (itálico), `),jc(339,`code`),lO(340,`<em>`),wg(),lO(341,` (it\xE1lico) e
`),jc(342,`code`),lO(343,`<u>`),wg(),lO(344,` (sublinhado).`),wg(),jc(345,`p`),lO(346,`Exemplo:`),wg(),jc(347,`pre`)(348,`code`,7),lO(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),wg()()()(),jc(350,`tr`,16)(351,`td`,17)(352,`div`,18)(353,`span`,19),lO(354,` eventOnClick`),nu(355,`br`),wg()()(),jc(356,`td`,20)(357,`code`,28),lO(358,`Function`),wg()(),jc(359,`td`,23)(360,`em`)(361,`strong`),lO(362,`(opcional)`),wg()(),jc(363,`p`),lO(364,`Evento disparado ao clicar no ícone do helper.`),wg(),jc(365,`p`),lO(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),wg(),jc(367,`p`),lO(368,`Pode ser uma função ou um `),jc(369,`code`),lO(370,`EventEmitter`),wg(),lO(371,`.`),wg(),jc(372,`p`),lO(373,`Exemplo:`),wg(),jc(374,`pre`)(375,`code`),lO(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),wg()()()(),jc(377,`tr`,16)(378,`td`,17)(379,`div`,18)(380,`span`,19),lO(381,` footerAction`),nu(382,`br`),wg()()(),jc(383,`td`,20)(384,`code`,29),lO(385,`{ label: string; action: Function;
}`),wg()(),jc(386,`td`,23)(387,`em`)(388,`strong`),lO(389,`(opcional)`),wg()(),jc(390,`p`),lO(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),jc(392,`code`),lO(393,`help`),wg(),lO(394,` e desconsiderada quando o type for `),jc(395,`code`),lO(396,`info`),wg(),lO(397,`.`),wg(),jc(398,`p`),lO(399,`Deve ser um objeto com as propriedades:`),wg(),jc(400,`ul`)(401,`li`)(402,`code`),lO(403,`label`),wg(),lO(404,`: Texto do botão.`),wg(),jc(405,`li`)(406,`code`),lO(407,`action`),wg(),lO(408,`: Função executada ao clicar no botão.`),wg()(),jc(409,`p`),lO(410,`Exemplo:`),wg(),jc(411,`pre`)(412,`code`,7),lO(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),wg()()()(),jc(414,`tr`,16)(415,`td`,17)(416,`div`,18)(417,`span`,19),lO(418,` title`),nu(419,`br`),wg()()(),jc(420,`td`,20)(421,`code`,25),lO(422,`string`),wg()(),jc(423,`td`,23)(424,`em`)(425,`strong`),lO(426,`(opcional)`),wg()(),jc(427,`p`),lO(428,`Título do helper exibido no popover.`),wg()()(),jc(429,`tr`,16)(430,`td`,17)(431,`div`,18)(432,`span`,19),lO(433,` type`),nu(434,`br`),wg()()(),jc(435,`td`,20)(436,`code`,30),lO(437,`'info' `),wg(),jc(438,`code`,31),lO(439,` 'help'`),wg()(),jc(440,`td`,23)(441,`em`)(442,`strong`),lO(443,`(opcional)`),wg()(),jc(444,`p`),lO(445,`Tipo do ícone exibido: `),jc(446,`code`),lO(447,`info`),wg(),lO(448,` ou `),jc(449,`code`),lO(450,`help`),wg(),lO(451,`.`),wg(),jc(452,`p`),lO(453,`Quando o valor é `),jc(454,`code`),lO(455,`info`),wg(),lO(456,`, o popover exibe apenas informações e não permite ações customizadas.`),wg(),jc(457,`p`),lO(458,`Quando o valor é `),jc(459,`code`),lO(460,`help`),wg(),lO(461,`, o popover pode exibir ações customizadas no rodapé.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Oe(o,I){if(o&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-helper-basic-view`)(2,`sample-po-helper-labs-view`)(3,`sample-po-helper-sales-performance-view`),wg()}if(o&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Helper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Oe,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-helper-doc`),wg()()()),l&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,se,ce,ue],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[I1.forChild(Fe),I1]})}return o})();var lt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[M,Ee]})}return o})();export{lt as DocPoHelperModule};