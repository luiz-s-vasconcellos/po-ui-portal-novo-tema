import{m as P,p as M}from"./main-5NWS7DIP.js";import{$i as ar,A as Ht,Ar as G0,At as Zte,Ci as Rk,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Kr as Kg,Ni as Vk,Oi as U_,Pt as are,Qr as Mk,Sa as jO,Si as RZ,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de,ar as Ab,bn as oi,bt as Ul,co as wg,eo as tk,f as Cze,jr as GV,mi as QL,or as An,ot as Sa,pa as ge,pr as Bk,qi as Zb,sn as j4,w as Fc,zr as I}from"./chunk-DdK63a0t.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var oe=(()=>{class n{poHelper={title:`PO Helper Basic`,content:`Este é um helper de exemplo. Você pode colocar qualquer informação que desejar aqui, como dicas de uso, explicações sobre funcionalidades, ou qualquer outro conteúdo relevante para ajudar o usuário.`};static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-helper-basic`]],standalone:!1,decls:1,vars:1,consts:[[3,`p-helper`]],template:function(i,l){i&1&&_u(0,`po-helper`,0),i&2&&Ab(`p-helper`,l.poHelper)},dependencies:[Ht],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-helper-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-helper-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-helper-basic/sample-po-helper-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-helper-basic/sample-po-helper-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,l){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Helper Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-helper-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-helper-basic/sample-po-helper-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-helper [p-helper]="poHelper"></po-helper>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-helper-basic/sample-po-helper-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,oe],encapsulation:2,changeDetection:1})}return n})();var he=()=>({label:`Help`,value:`help`});var Ee=()=>({label:`Info`,value:`info`});var ie=(n,k)=>[n,k];var fe=()=>({label:`Medium`,value:`medium`});var be=()=>({label:`Small`,value:`small`});function Se(n,k){if(n&1){let a=KO();Jc(0,`po-input`,9),G0(),Zb(`ngModelChange`,function(l){U_(a);let c=tk();return Rk(c.footerTitle,l)||(c.footerTitle=l),H_(l)}),_t(`ngModelChange`,function(l){U_(a);let c=tk();return H_(c.setFooterTitle(l))}),Kg()}if(n&2){let a=tk();Kb(`ngModel`,a.footerTitle),q0()}}var le=(()=>{class n{helperDisabled=!1;helperSize=`medium`;helperOptions={title:``,content:``,type:`help`};footerTitle=``;footerAction(){alert(`Footer action clicked`)}setFooterTitle(a){this.footerTitle=a,a.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}})}updateHelperType(a){this.helperOptions=s(r({},this.helperOptions),{type:a})}reset(){this.helperDisabled=!1,this.helperOptions={title:``,content:``,type:`help`},this.helperSize=`medium`,this.footerTitle=``}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-helper-labs`]],standalone:!1,decls:16,vars:23,consts:[[3,`p-helper`,`p-size`,`p-disabled`],[1,`po-row`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`content`,`p-clean`,``,`p-label`,`Content`,`p-help`,`Consulte a <b>documentação</b> para mais detalhes.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`p-columns`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`name`,`footerTitle`,`p-clean`,``,`p-label`,`Footer Action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(i,l){i&1&&(_u(0,`po-helper`,0)(1,`po-divider`),Jc(2,`div`,1)(3,`po-input`,2),G0(),_t(`ngModelChange`,function(d){return l.helperOptions=s(r({},l.helperOptions),{title:d})}),Kg(),Jc(4,`po-input`,3),G0(),_t(`ngModelChange`,function(d){return l.helperOptions=s(r({},l.helperOptions),{content:d})}),Kg()(),Jc(5,`div`,1),LO(6,Se,1,1,`po-input`,4),Kg(),Jc(7,`div`,1)(8,`po-radio-group`,5),G0(),_t(`ngModelChange`,function(d){return l.updateHelperType(d)}),Kg()(),Jc(9,`div`,1)(10,`po-radio-group`,6),G0(),Zb(`ngModelChange`,function(d){return Rk(l.helperSize,d)||(l.helperSize=d),d}),Kg()(),Jc(11,`div`,1)(12,`po-checkbox`,7),G0(),Zb(`ngModelChange`,function(d){return Rk(l.helperDisabled,d)||(l.helperDisabled=d),d}),Kg()(),_u(13,`po-divider`),Jc(14,`div`,1)(15,`po-button`,8),_t(`p-click`,function(){return l.reset()}),Kg()()),i&2&&(Ab(`p-helper`,l.helperOptions)(`p-size`,l.helperSize)(`p-disabled`,l.helperDisabled),wg(3),Ab(`ngModel`,l.helperOptions.title),q0(),wg(),Ab(`ngModel`,l.helperOptions.content),q0(),wg(2),jO(l.helperOptions.type===`help`?6:-1),wg(2),Ab(`p-columns`,4)(`ngModel`,l.helperOptions.type)(`p-options`,Bk(15,ie,Vk(13,he),Vk(14,Ee))),q0(),wg(2),Kb(`ngModel`,l.helperSize),Ab(`p-columns`,4)(`p-options`,Bk(20,ie,Vk(18,fe),Vk(19,be))),q0(),wg(2),Kb(`ngModel`,l.helperDisabled),q0())},dependencies:[RZ,QL,oi,Nf,Ul,j4,Zte,Ht],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-helper-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-helper-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-helper-labs/sample-po-helper-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-helper-labs/sample-po-helper-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,l){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Helper Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-helper-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-helper-labs/sample-po-helper-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-helper-labs/sample-po-helper-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,le],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{helperOptions={title:`Sales Performance Overview`,content:`This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.`,type:`info`};type=Sa.Gauge;optionsSingle={descriptionChart:`25% of turnover`};optionsRange={descriptionChart:`The sales increased in 82% in the first bimester of 2020`,showFromToLegend:!0};turnover=[{data:25,label:`Low rate`}];salesRanges=[{from:0,to:50,label:`Sales reduction`},{from:50,to:75,label:`Average sales`},{from:75,to:100,label:`Sales soared`}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-helper-sales-performance`]],standalone:!1,decls:8,vars:4,consts:[[1,`po-row`,`po-mb-3`],[1,`po-font-title`],[3,`p-helper`],[1,`po-row`],[1,`po-lg-12`],[`p-title`,`Employee turnover rate`,`p-value`,`25`,3,`p-type`,`p-options`,`p-series`]],template:function(i,l){i&1&&(Jc(0,`po-container`)(1,`div`,0)(2,`div`,1),Mk(3,`Sales Performance`),Kg(),_u(4,`po-helper`,2),Kg(),Jc(5,`div`,3)(6,`div`,4),_u(7,`po-chart`,5),Kg()()()),i&2&&(wg(4),Ab(`p-helper`,l.helperOptions),wg(3),Ab(`p-type`,l.type)(`p-options`,l.optionsSingle)(`p-series`,l.turnover))},dependencies:[Cze,Fc,Ht],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-helper-sales-performance-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-helper-sales-performance`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,l){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Helper Sales Performance`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-helper-sales-performance`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-helper-doc`]],standalone:!1,decls:462,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-helper-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-helper-options`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-helper-options-content`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-event-on-click`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-helper-options-footer-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`label:`,`string;`,`action:`,`Function;`,`}`],[`id`,`interface-po-helper-options-title`,1,`docs-api-properties-row`],[`id`,`interface-po-helper-options-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`'info'`],[`pan`,``,1,`docs-api-property-type`,`'help'`]],template:function(i,l){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoHelperModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-helper`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoHelperComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-helper`),Kg(),Mk(17,` exibe um ícone de ajuda ou informação ao lado de campos, botões ou outros elementos, permitindo ao usuário acessar conteúdos explicativos em um popover.`),Kg(),Jc(18,`p`),Mk(19,`Principais funcionalidades:`),Kg(),Jc(20,`ul`)(21,`li`),Mk(22,`Exibe ícone de ajuda (`),Jc(23,`code`),Mk(24,`help`),Kg(),Mk(25,`) ou informação (`),Jc(26,`code`),Mk(27,`info`),Kg(),Mk(28,`) conforme configuração.`),Kg(),Jc(29,`li`),Mk(30,`Permite definir título, conteúdo e ações no popover via propriedade `),Jc(31,`code`),Mk(32,`p-helper`),Kg(),Mk(33,`.`),Kg(),Jc(34,`li`),Mk(35,`Suporte a acessibilidade: navegação por teclado, atributos ARIA e leitura do conteúdo por leitores de tela.`),Kg(),Jc(36,`li`),Mk(37,`Controle do tamanho do componente via propriedade `),Jc(38,`code`),Mk(39,`p-size`),Kg(),Mk(40,` (`),Jc(41,`code`),Mk(42,`small`),Kg(),Mk(43,` ou `),Jc(44,`code`),Mk(45,`medium`),Kg(),Mk(46,`).`),Kg(),Jc(47,`li`),Mk(48,`Permite customizar ações no rodapé do popover.`),Kg()(),Jc(49,`p`),Mk(50,`Exemplo de uso:`),Kg(),Jc(51,`pre`)(52,`code`,6),Mk(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),Kg()(),Jc(54,`p`),Mk(55,`Também é possível passar apenas uma string para o conteúdo:`),Kg(),Jc(56,`pre`)(57,`code`,6),Mk(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),Kg()(),Jc(59,`p`),Mk(60,`A propriedade `),Jc(61,`code`),Mk(62,`p-helper`),Kg(),Mk(63,` aceita um objeto do tipo `),Jc(64,`code`),Mk(65,`PoHelperOptions`),Kg(),Mk(66,`:`),Kg(),Jc(67,`pre`)(68,`code`,7),Mk(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),Kg()(),Jc(70,`blockquote`)(71,`p`)(72,`strong`),Mk(73,`Importante:`),Kg(),Mk(74,` A propriedade `),Jc(75,`code`),Mk(76,`footerAction`),Kg(),Mk(77,` não pode ser utilizada quando o tipo do helper for `),Jc(78,`code`),Mk(79,`info`),Kg(),Mk(80,`, pois o ícone de informação é destinado apenas para exibir informações estáticas sem ações adicionais.`),Kg()(),Jc(81,`h4`),Mk(82,`Tokens customizáveis`),Kg(),Jc(83,`p`),Mk(84,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(85,`blockquote`)(86,`p`),Mk(87,`Para maiores informações, acesse o guia `),Jc(88,`a`,8),Mk(89,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(90,`.`),Kg()(),Jc(91,`table`)(92,`thead`)(93,`tr`)(94,`th`),Mk(95,`Propriedade`),Kg(),Jc(96,`th`),Mk(97,`Descrição`),Kg(),Jc(98,`th`),Mk(99,`Valor Padrão`),Kg()()(),Jc(100,`tbody`)(101,`tr`)(102,`td`)(103,`code`),Mk(104,`--color`),Kg()(),Jc(105,`td`),Mk(106,`Cor principal do ícone`),Kg(),Jc(107,`td`)(108,`code`),Mk(109,`var(--color-action-default)`),Kg()()(),Jc(110,`tr`)(111,`td`)(112,`code`),Mk(113,`--border-color-hover`),Kg()(),Jc(114,`td`),Mk(115,`Cor da borda no estado hover`),Kg(),Jc(116,`td`)(117,`code`),Mk(118,`var(--color-brand-01-darkest)`),Kg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Mk(122,`--background-pressed`),Kg()(),Jc(123,`td`),Mk(124,`Cor de background no estado de pressionado\xA0`),Kg(),Jc(125,`td`)(126,`code`),Mk(127,`var(--color-brand-01-light)`),Kg()()(),Jc(128,`tr`)(129,`td`)(130,`code`),Mk(131,`--color-disabled`),Kg()(),Jc(132,`td`),Mk(133,`Cor principal no estado disabled`),Kg(),Jc(134,`td`)(135,`code`),Mk(136,`var(--color-action-disabled)`),Kg()()()()()(),Jc(137,`div`,9)(138,`h4`,10),Mk(139,`Seletor`),Kg(),Jc(140,`pre`,11),Mk(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),Kg()(),Jc(142,`h4`,12),Mk(143,`Propriedades`),Kg(),Jc(144,`table`,13)(145,`tr`,14)(146,`th`,15),Mk(147,`Nome`),Kg(),Jc(148,`th`,15),Mk(149,`Tipo`),Kg(),Jc(150,`th`,15),Mk(151,`Padrão`),Kg(),Jc(152,`th`,15),Mk(153,`Descrição`),Kg()(),Jc(154,`tr`,16)(155,`td`,17)(156,`div`,18)(157,`span`,19),Mk(158,` p-append-in-body`),_u(159,`br`),Kg()()(),Jc(160,`td`,20)(161,`code`,21),Mk(162,`boolean`),Kg()(),Jc(163,`td`,22),Mk(164,`-`),Kg(),Jc(165,`td`,23)(166,`em`)(167,`strong`),Mk(168,`(opcional)`),Kg()(),Jc(169,`p`),Mk(170,`Define que o popover será inserido no body da página em vez do elemento definido em `),Jc(171,`code`),Mk(172,`p-target`),Kg(),Mk(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),Kg()()(),Jc(174,`tr`,24)(175,`td`,17)(176,`div`,18)(177,`span`,19),Mk(178,` p-disabled`),_u(179,`br`),Kg()()(),Jc(180,`td`,20)(181,`code`,21),Mk(182,`boolean`),Kg()(),Jc(183,`td`,22)(184,`p`)(185,`code`),Mk(186,`false`),Kg()()(),Jc(187,`td`,23)(188,`em`)(189,`strong`),Mk(190,`(opcional)`),Kg()(),Jc(191,`p`),Mk(192,`Indica se o helper deve ser exibido no estado desativado, desabilitando interações do usuário.`),Kg()()(),Jc(193,`tr`,25)(194,`td`,17)(195,`div`,18)(196,`span`,19),Mk(197,` p-helper`),_u(198,`br`),Kg()()(),Jc(199,`td`,20)(200,`code`,26),Mk(201,`PoHelperOptions `),Kg(),Jc(202,`code`,27),Mk(203,` string`),Kg()(),Jc(204,`td`,22),Mk(205,`-`),Kg(),Jc(206,`td`,23)(207,`em`)(208,`strong`),Mk(209,`(opcional)`),Kg()(),Jc(210,`p`),Mk(211,`Define o conteúdo e as opções do popover de ajuda/informação.`),Kg(),Jc(212,`p`),Mk(213,`Aceita uma string simples (exibida como conteúdo) ou um objeto do tipo `),Jc(214,`code`),Mk(215,`PoHelperOptions`),Kg(),Mk(216,` para configuração avançada:`),Kg(),Jc(217,`ul`)(218,`li`)(219,`code`),Mk(220,`title`),Kg(),Mk(221,`: Título do popover.`),Kg(),Jc(222,`li`)(223,`code`),Mk(224,`content`),Kg(),Mk(225,`: Conteúdo explicativo exibido no popover.`),Kg(),Jc(226,`li`)(227,`code`),Mk(228,`type`),Kg(),Mk(229,`: Tipo do ícone (`),Jc(230,`code`),Mk(231,`help`),Kg(),Mk(232,` ou `),Jc(233,`code`),Mk(234,`info`),Kg(),Mk(235,`).`),Kg(),Jc(236,`li`)(237,`code`),Mk(238,`eventOnClick`),Kg(),Mk(239,`: Função chamada ao clicar no ícone.`),Kg(),Jc(240,`li`)(241,`code`),Mk(242,`footerAction`),Kg(),Mk(243,`: Objeto com `),Jc(244,`code`),Mk(245,`label`),Kg(),Mk(246,` e `),Jc(247,`code`),Mk(248,`action`),Kg(),Mk(249,` para ação customizada no rodapé do popover.`),Kg()(),Jc(250,`p`),Mk(251,`Exemplo de uso:`),Kg(),Jc(252,`pre`)(253,`code`,6),Mk(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),Kg()()()(),Jc(255,`tr`,28)(256,`td`,17)(257,`div`,18)(258,`span`,19),Mk(259,` p-size`),_u(260,`br`),Kg()()(),Jc(261,`td`,20)(262,`code`,27),Mk(263,`string`),Kg()(),Jc(264,`td`,22)(265,`p`)(266,`code`),Mk(267,`medium`),Kg()()(),Jc(268,`td`,23)(269,`em`)(270,`strong`),Mk(271,`(opcional)`),Kg()(),Jc(272,`p`),Mk(273,`Define o tamanho do componente:`),Kg(),Jc(274,`ul`)(275,`li`)(276,`code`),Mk(277,`small`),Kg(),Mk(278,`: altura do ícone com seu valor de 16px (disponível apenas para acessibilidade AA).`),Kg(),Jc(279,`li`)(280,`code`),Mk(281,`medium`),Kg(),Mk(282,`: altura do ícone com seu valor de 24px.`),Kg()(),Jc(283,`blockquote`)(284,`p`),Mk(285,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(286,`code`),Mk(287,`medium`),Kg(),Mk(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(289,`a`,29),Mk(290,`po-theme`),Kg(),Mk(291,`.`),Kg()()()()(),Jc(292,`h3`),Mk(293,`Interfaces`),Kg(),Jc(294,`h4`,30)(295,`code`,5),Mk(296,`PoHelperOptions`),Kg()(),Jc(297,`div`,2)(298,`p`),Mk(299,`Interface para configuração das opções de ajuda (`),Jc(300,`em`),Mk(301,`helper`),Kg(),Mk(302,`).`),Kg()(),Jc(303,`h4`,12),Mk(304,`Propriedades`),Kg(),Jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),Mk(308,`Nome`),Kg(),Jc(309,`th`,15),Mk(310,`Tipo`),Kg(),Jc(311,`th`,15),Mk(312,`Descrição`),Kg()(),Jc(313,`tr`,31)(314,`td`,17)(315,`div`,18)(316,`span`,19),Mk(317,` content`),_u(318,`br`),Kg()()(),Jc(319,`td`,20)(320,`code`,27),Mk(321,`string`),Kg()(),Jc(322,`td`,23)(323,`em`)(324,`strong`),Mk(325,`(opcional)`),Kg()(),Jc(326,`p`),Mk(327,`Texto explicativo exibido no popover.`),Kg(),Jc(328,`p`),Mk(329,`Suporta formatação básica com as tags `),Jc(330,`code`),Mk(331,`<b>`),Kg(),Mk(332,` (negrito), `),Jc(333,`code`),Mk(334,`<strong>`),Kg(),Mk(335,` (negrito), `),Jc(336,`code`),Mk(337,`<i>`),Kg(),Mk(338,` (itálico), `),Jc(339,`code`),Mk(340,`<em>`),Kg(),Mk(341,` (it\xE1lico) e
`),Jc(342,`code`),Mk(343,`<u>`),Kg(),Mk(344,` (sublinhado).`),Kg(),Jc(345,`p`),Mk(346,`Exemplo:`),Kg(),Jc(347,`pre`)(348,`code`,7),Mk(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),Kg()()()(),Jc(350,`tr`,32)(351,`td`,17)(352,`div`,18)(353,`span`,19),Mk(354,` eventOnClick`),_u(355,`br`),Kg()()(),Jc(356,`td`,20)(357,`code`,33),Mk(358,`Function`),Kg()(),Jc(359,`td`,23)(360,`em`)(361,`strong`),Mk(362,`(opcional)`),Kg()(),Jc(363,`p`),Mk(364,`Evento disparado ao clicar no ícone do helper.`),Kg(),Jc(365,`p`),Mk(366,`O conteúdo do popover não é exibido quando esta propriedade é definida, para controle total do evento pelo desenvolvedor.`),Kg(),Jc(367,`p`),Mk(368,`Pode ser uma função ou um `),Jc(369,`code`),Mk(370,`EventEmitter`),Kg(),Mk(371,`.`),Kg(),Jc(372,`p`),Mk(373,`Exemplo:`),Kg(),Jc(374,`pre`)(375,`code`),Mk(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),Kg()()()(),Jc(377,`tr`,34)(378,`td`,17)(379,`div`,18)(380,`span`,19),Mk(381,` footerAction`),_u(382,`br`),Kg()()(),Jc(383,`td`,20)(384,`code`,35),Mk(385,`{ label: string; action: Function;
}`),Kg()(),Jc(386,`td`,23)(387,`em`)(388,`strong`),Mk(389,`(opcional)`),Kg()(),Jc(390,`p`),Mk(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Jc(392,`code`),Mk(393,`help`),Kg(),Mk(394,` e desconsiderada quando o type for `),Jc(395,`code`),Mk(396,`info`),Kg(),Mk(397,`.`),Kg(),Jc(398,`p`),Mk(399,`Deve ser um objeto com as propriedades:`),Kg(),Jc(400,`ul`)(401,`li`)(402,`code`),Mk(403,`label`),Kg(),Mk(404,`: Texto do botão.`),Kg(),Jc(405,`li`)(406,`code`),Mk(407,`action`),Kg(),Mk(408,`: Função executada ao clicar no botão.`),Kg()(),Jc(409,`p`),Mk(410,`Exemplo:`),Kg(),Jc(411,`pre`)(412,`code`,7),Mk(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),Kg()()()(),Jc(414,`tr`,36)(415,`td`,17)(416,`div`,18)(417,`span`,19),Mk(418,` title`),_u(419,`br`),Kg()()(),Jc(420,`td`,20)(421,`code`,27),Mk(422,`string`),Kg()(),Jc(423,`td`,23)(424,`em`)(425,`strong`),Mk(426,`(opcional)`),Kg()(),Jc(427,`p`),Mk(428,`Título do helper exibido no popover.`),Kg()()(),Jc(429,`tr`,37)(430,`td`,17)(431,`div`,18)(432,`span`,19),Mk(433,` type`),_u(434,`br`),Kg()()(),Jc(435,`td`,20)(436,`code`,38),Mk(437,`'info' `),Kg(),Jc(438,`code`,39),Mk(439,` 'help'`),Kg()(),Jc(440,`td`,23)(441,`em`)(442,`strong`),Mk(443,`(opcional)`),Kg()(),Jc(444,`p`),Mk(445,`Tipo do ícone exibido: `),Jc(446,`code`),Mk(447,`info`),Kg(),Mk(448,` ou `),Jc(449,`code`),Mk(450,`help`),Kg(),Mk(451,`.`),Kg(),Jc(452,`p`),Mk(453,`Quando o valor é `),Jc(454,`code`),Mk(455,`info`),Kg(),Mk(456,`, o popover exibe apenas informações e não permite ações customizadas.`),Kg(),Jc(457,`p`),Mk(458,`Quando o valor é `),Jc(459,`code`),Mk(460,`help`),Kg(),Mk(461,`, o popover pode exibir ações customizadas no rodapé.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Pe(n,k){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-helper-basic-view`)(2,`sample-po-helper-labs-view`)(3,`sample-po-helper-sales-performance-view`),Kg()),n&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var De=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Helper`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Helper · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,l){i&1&&(Jc(0,`po-page-default`,0),LO(1,Pe,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-helper-doc`),Kg()()),i&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,ne,ae,re,me],encapsulation:2,changeDetection:1})}return n})()}];var se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(De),GV]})}return n})();var ot=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,se]})}return n})();export{ot as DocPoHelperModule};