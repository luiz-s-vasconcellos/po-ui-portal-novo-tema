import{Da as pe,Fa as rg,Ga as vx,Ha as v_,Ii as b,L as Joe,Mr as I1,Ra as ue,Si as Xx,Wt as bze,Xt as ere,Ya as wg,Zt as fae,ai as Sn,at as R4,dr as DO,gr as Dx,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mi as VE,mt as Tze,nr as Ag,qr as Ok,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu}from"./chunk-VuVfKKNQ.js";import{_ as pn,m as ln,n as P,t as M,u as ea}from"./main-7FOYFSS2.js";var U=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(o,l){o&1&&nu(0,`po-page-job-scheduler`,0),o&2&&UE(`p-breadcrumb`,l.breadcrumb)},dependencies:[ea],encapsulation:2,changeDetection:1})}return i})();var ae=i=>({"docs-sample-code-tabs":i});var $=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Job Scheduler - Background Process`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-job-scheduler-background-process`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ae,l.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,U],encapsulation:2,changeDetection:1})}return i})();function le(i,j){if(i&1){let r=Ax();jc(0,`h1`),lO(1,`Etapa 1`),wg(),jc(2,`po-dynamic-form`,4),mt(`p-form`,function(l){v_(r);let S=Fx();return __(S.getFormExample(l))}),wg()}if(i&2){let r=Fx();rg(2),UE(`p-fields`,r.parametersForm)}}function me(i,j){if(i&1){let r=Ax();jc(0,`po-table`,5),mt(`p-selected`,function(l){v_(r);let S=Fx();return __(S.selectedItem(l))}),wg()}if(i&2){let r=Fx();UE(`p-items`,r.items)(`p-selectable`,!0)}}function de(i,j){if(i&1&&(jc(0,`po-widget`,6),nu(1,`po-dynamic-view`,7),wg()),i&2){let r=Fx();rg(),UE(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var K=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(o,l){o&1&&(jc(0,`po-page-job-scheduler`,0),VE(1,le,3,1,`ng-template`,1)(2,me,1,2,`ng-template`,2)(3,de,2,2,`ng-template`,3),wg()),o&2&&(UE(`p-step-execution-last`,!0),rg(),UE(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),rg(),UE(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[Joe,bze,R4,fae,ea,ln,pn],encapsulation:2,changeDetection:1})}return i})();var se=i=>({"docs-sample-code-tabs":i});var Y=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Job Scheduler - Directives`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="dynamicForm?.form.invalid"
    [p-execution-parameter]="dynamicForm?.form.value"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-job-scheduler-directives`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,se,l.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,K],encapsulation:2,changeDetection:1})}return i})();var Z=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(o,l){o&1&&nu(0,`po-page-job-scheduler`,0),o&2&&UE(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[ea],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i});var ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Job Scheduler - Navegação Flexível`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-flexible-navigation',
  templateUrl: './sample-po-page-job-scheduler-flexible-navigation.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerFlexibleNavigationComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Navega\xE7\xE3o Flex\xEDvel' }]
  };

  parameters: Array<PoDynamicFormField> = [
    {
      property: 'server',
      label: 'Servidor',
      required: true,
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'port',
      label: 'Porta',
      type: 'number',
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'environment',
      label: 'Ambiente',
      options: ['Desenvolvimento', 'Homologa\xE7\xE3o', 'Produ\xE7\xE3o'],
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'notify',
      label: 'Notificar por e-mail',
      type: 'boolean',
      booleanTrue: 'Sim',
      booleanFalse: 'N\xE3o',
      gridLgColumns: 6,
      gridXlColumns: 6
    }
  ];
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-job-scheduler-flexible-navigation`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ee,l.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Z],encapsulation:2,changeDetection:1})}return i})();var te=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:650,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`href`,`/documentation/po-dynamic-form`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(o,l){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),lO(6,`Componente`),wg(),jc(7,`h4`,4)(8,`code`,5),lO(9,`PoPageJobSchedulerComponent`),wg()(),jc(10,`div`,2)(11,`p`),lO(12,`O `),jc(13,`code`),lO(14,`po-page-job-scheduler`),wg(),lO(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),wg(),jc(16,`p`),lO(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),wg(),jc(18,`p`),lO(19,`Veja mais sobre os padrões utilizados nas requisições no `),jc(20,`a`,6),lO(21,`Guia de implementação de APIs`),wg(),lO(22,`.`),wg(),jc(23,`h4`),lO(24,`Tokens customizáveis`),wg(),jc(25,`blockquote`)(26,`p`),lO(27,`Para maiores informações, acesse o guia `),jc(28,`a`,7),lO(29,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(30,`.`),wg()(),jc(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),lO(35,`Propriedade`),wg(),jc(36,`th`),lO(37,`Descrição`),wg(),jc(38,`th`),lO(39,`Valor Padrão`),wg()()(),jc(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),lO(44,`Header`),wg()(),nu(45,`td`)(46,`td`),wg(),jc(47,`tr`)(48,`td`)(49,`code`),lO(50,`--padding`),wg()(),jc(51,`td`),lO(52,`Espaçamento do header`),wg(),jc(53,`td`)(54,`code`),lO(55,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(56,`tr`)(57,`td`)(58,`code`),lO(59,`--gap`),wg()(),jc(60,`td`),lO(61,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(62,`td`)(63,`code`),lO(64,`var(--spacing-md)`),wg()()(),jc(65,`tr`)(66,`td`)(67,`code`),lO(68,`--gap-actions`),wg()(),jc(69,`td`),lO(70,`Espaçamento entre as ações`),wg(),jc(71,`td`)(72,`code`),lO(73,`var(--spacing-xs)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),lO(77,`--font-family`),wg()(),jc(78,`td`),lO(79,`Família tipográfica do título`),wg(),jc(80,`td`)(81,`code`),lO(82,`var(--font-family-theme)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`strong`),lO(86,`Content`),wg()(),nu(87,`td`)(88,`td`),wg(),jc(89,`tr`)(90,`td`)(91,`code`),lO(92,`--padding-content`),wg()(),jc(93,`td`),lO(94,`Espaçamento do conteúdo`),wg(),jc(95,`td`)(96,`code`),lO(97,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(98,`div`,8)(99,`h4`,9),lO(100,`Seletor`),wg(),jc(101,`pre`,10),lO(102,`<po-page-job-scheduler
    p-allow-direct-navigation="boolean"
    p-before-send="unknown"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),wg()(),jc(103,`h4`,11),lO(104,`Propriedades`),wg(),jc(105,`table`,12)(106,`tr`,13)(107,`th`,14),lO(108,`Nome`),wg(),jc(109,`th`,14),lO(110,`Tipo`),wg(),jc(111,`th`,14),lO(112,`Padrão`),wg(),jc(113,`th`,14),lO(114,`Descrição`),wg()(),jc(115,`tr`,15)(116,`td`,16)(117,`div`,17)(118,`span`,18),lO(119,` p-allow-direct-navigation`),nu(120,`br`),wg()()(),jc(121,`td`,19)(122,`code`,20),lO(123,`boolean`),wg()(),jc(124,`td`,21)(125,`p`)(126,`code`),lO(127,`false`),wg()()(),jc(128,`td`,22)(129,`em`)(130,`strong`),lO(131,`(opcional)`),wg()(),jc(132,`p`),lO(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),wg(),jc(134,`p`),lO(135,`Quando habilitado (`),jc(136,`code`),lO(137,`true`),wg(),lO(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),wg(),jc(139,`blockquote`)(140,`p`),lO(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),wg()()()(),jc(142,`tr`,15)(143,`td`,16)(144,`div`,17)(145,`span`,18),lO(146,` p-before-send`),nu(147,`br`),wg()()(),jc(148,`td`,19)(149,`code`,23),lO(150,`unknown`),wg()(),jc(151,`td`,21),lO(152,`-`),wg(),jc(153,`td`,22)(154,`em`)(155,`strong`),lO(156,`(opcional)`),wg()(),jc(157,`p`),lO(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),wg(),jc(159,`blockquote`)(160,`p`),lO(161,`Deve retornar um objeto do tipo `),jc(162,`code`),lO(163,`PoPageJobScheduler`),wg(),lO(164,` para ser adicionado ao model do PoPageJobScheduler.`),wg()(),jc(165,`blockquote`)(166,`p`),lO(167,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),jc(168,`code`),lO(169,`PoJobSchedulerInternal`),wg(),lO(170,`.`),wg()(),jc(171,`p`),lO(172,`O contexto da função que será chamada, será o mesmo que o do `),jc(173,`code`),lO(174,`PoPageJobScheduler`),wg(),lO(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),jc(176,`code`),lO(177,`bind`),wg(),lO(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),jc(179,`code`),lO(180,`beforeSend`),wg(),lO(181,`:`),wg(),jc(182,`pre`)(183,`code`),lO(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),wg()()()(),jc(185,`tr`,15)(186,`td`,16)(187,`div`,17)(188,`span`,18),lO(189,` p-breadcrumb`),nu(190,`br`),wg()()(),jc(191,`td`,19)(192,`code`,24),lO(193,`PoBreadcrumb`),wg()(),jc(194,`td`,21),lO(195,`-`),wg(),jc(196,`td`,22)(197,`em`)(198,`strong`),lO(199,`(opcional)`),wg()(),jc(200,`p`),lO(201,`Objeto com as propriedades do breadcrumb.`),wg()()(),jc(202,`tr`,15)(203,`td`,16)(204,`div`,17)(205,`span`,18),lO(206,` p-components-size`),nu(207,`br`),wg()()(),jc(208,`td`,19)(209,`code`,25),lO(210,`string`),wg()(),jc(211,`td`,21)(212,`p`)(213,`code`),lO(214,`medium`),wg()()(),jc(215,`td`,22)(216,`em`)(217,`strong`),lO(218,`(opcional)`),wg()(),jc(219,`p`),lO(220,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(221,`ul`)(222,`li`)(223,`code`),lO(224,`small`),wg(),lO(225,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(226,`li`)(227,`code`),lO(228,`medium`),wg(),lO(229,`: aplica a medida medium de cada componente.`),wg()(),jc(230,`blockquote`)(231,`p`),lO(232,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(233,`code`),lO(234,`medium`),wg(),lO(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(236,`a`,26),lO(237,`po-theme`),wg(),lO(238,`.`),wg()()()(),jc(239,`tr`,15)(240,`td`,16)(241,`div`,27)(242,`span`,28),lO(243,` (p-error)`),nu(244,`br`),wg()()(),jc(245,`td`,19)(246,`code`,29),lO(247,`EventEmitter`),wg()(),jc(248,`td`,21),lO(249,`-`),wg(),jc(250,`td`,22)(251,`em`)(252,`strong`),lO(253,`(opcional)`),wg()(),jc(254,`p`),lO(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),wg()()(),jc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),lO(260,` p-parameters`),nu(261,`br`),wg()()(),jc(262,`td`,19)(263,`code`,30),lO(264,`Array<PoDynamicFormField>`),wg()(),jc(265,`td`,21),lO(266,`-`),wg(),jc(267,`td`,22)(268,`p`),lO(269,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),wg(),jc(270,`p`),lO(271,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),wg()()(),jc(272,`tr`,15)(273,`td`,16)(274,`div`,17)(275,`span`,18),lO(276,` p-service-api`),nu(277,`br`),wg()()(),jc(278,`td`,19)(279,`code`,25),lO(280,`string`),wg()(),jc(281,`td`,21),lO(282,`-`),wg(),jc(283,`td`,22)(284,`p`),lO(285,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),wg(),jc(286,`h4`),lO(287,`Processos`),wg(),jc(288,`p`),lO(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),jc(290,`code`),lO(291,`GET`),wg(),lO(292,` para o endpoint `),jc(293,`code`),lO(294,`{service-api}/processes`),wg(),lO(295,`, para buscar
essa lista de processos.`),wg(),jc(296,`p`),lO(297,`Este endpoint `),jc(298,`code`),lO(299,`{service-api}/processes`),wg(),lO(300,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),wg(),jc(301,`pre`)(302,`code`),lO(303,`GET {service-api}/processes
`),wg()(),jc(304,`pre`)(305,`code`),lO(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),wg()(),jc(307,`p`),lO(308,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),wg(),jc(309,`p`),lO(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),jc(311,`code`),lO(312,`search`),wg(),lO(313,`. Da seguinte forma:`),wg(),jc(314,`pre`)(315,`code`),lO(316,`GET {service-api}/processes?search=relatorio
`),wg()(),jc(317,`blockquote`)(318,`p`),lO(319,`Veja mais sobre paginação e filtros no `),jc(320,`a`,6),lO(321,`Guia de implementação de APIs`),wg(),lO(322,`.
Caso seja informada a propriedade `),jc(323,`code`),lO(324,`p-parameters`),wg(),lO(325,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),wg()(),jc(326,`p`),lO(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),jc(328,`code`),lO(329,`{service-api}/processes`),wg(),lO(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),jc(331,`strong`),lO(332,`identificador do processo - `),jc(333,`code`),lO(334,`processID`),wg()(),lO(335,` e ao salvar será enviado um `),jc(336,`code`),lO(337,`POST`),wg(),lO(338,` para o endpoint difinido `),jc(339,`code`),lO(340,`serviceApi`),wg(),lO(341,` conforme abaixo:`),wg(),jc(342,`pre`)(343,`code`),lO(344,`POST {service-api}
`),wg()(),jc(345,`p`)(346,`em`),lO(347,`Request payload`),wg(),lO(348,` - estrutura de dados enviada no corpo da requisição conforme interface `),jc(349,`code`),lO(350,`PoJobScheduler`),wg(),lO(351,`:`),wg(),jc(352,`pre`)(353,`code`),lO(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),wg()(),jc(355,`p`),lO(356,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),jc(357,`code`),lO(358,`GET`),wg(),lO(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),jc(360,`a`,31),lO(361,`PoDynamicFormField`),wg(),lO(362,`. Porém, caso utilizar a propriedade `),jc(363,`code`),lO(364,`p-parameters`),wg(),lO(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),wg(),jc(366,`pre`)(367,`code`),lO(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),wg()(),jc(369,`h4`),lO(370,`Salvar e Atualizar`),wg(),jc(371,`p`),lO(372,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),jc(373,`em`),lO(374,`payload`),wg(),lO(375,`.
Abaixo uma requisi\xE7\xE3o `),jc(376,`code`),lO(377,`POST`),wg(),lO(378,` disparada, onde as propriedades do `),jc(379,`em`),lO(380,`Job Scheduler`),wg(),lO(381,` foram preenchidas:`),wg(),jc(382,`pre`)(383,`code`),lO(384,`POST {service-api}
`),wg()(),jc(385,`p`)(386,`em`),lO(387,`Request payload`),wg(),lO(388,` - estrutura de dados enviada no corpo da requisição conforme interface `),jc(389,`code`),lO(390,`PoJobScheduler`),wg(),lO(391,`:`),wg(),jc(392,`pre`)(393,`code`),lO(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),wg()(),jc(395,`p`),lO(396,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),jc(397,`code`),lO(398,`id`),wg(),lO(399,`.`),wg(),jc(400,`p`),lO(401,`Exemplo de configuração de rota:`),wg(),jc(402,`pre`)(403,`code`),lO(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),wg()(),jc(405,`p`),lO(406,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),wg(),jc(407,`pre`)(408,`code`),lO(409,`GET {service-api}/{id}
`),wg()(),jc(410,`p`),lO(411,`Ao atualizar o agendamento, será disparado um `),jc(412,`code`),lO(413,`PUT`),wg(),lO(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),jc(415,`code`),lO(416,`PUT`),wg(),lO(417,` disparada, onde a propriedade `),jc(418,`em`),lO(419,`recurrent`),wg(),lO(420,` e `),jc(421,`em`),lO(422,`daily`),wg(),lO(423,` foram atualizadas:`),wg(),jc(424,`pre`)(425,`code`),lO(426,`PUT {service-api}/{id}
`),wg()(),jc(427,`p`)(428,`em`),lO(429,`Request payload`),wg(),lO(430,` - estrutura de dados enviada no corpo da requisição conforme interface `),jc(431,`code`),lO(432,`PoJobScheduler`),wg(),lO(433,`:`),wg(),jc(434,`pre`)(435,`code`),lO(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),wg()()()(),jc(437,`tr`,15)(438,`td`,16)(439,`div`,17)(440,`span`,18),lO(441,` p-step-execution-last`),nu(442,`br`),wg()()(),jc(443,`td`,19)(444,`code`,20),lO(445,`boolean`),wg()(),jc(446,`td`,21),lO(447,`-`),wg(),jc(448,`td`,22)(449,`em`)(450,`strong`),lO(451,`(opcional)`),wg()(),jc(452,`p`),lO(453,`Define se o step `),jc(454,`code`),lO(455,`Agendamento`),wg(),lO(456,` deve ser exibido como o último na sequência de steps`),wg(),jc(457,`blockquote`)(458,`p`),lO(459,`Aplicável apenas quando utilizado `),jc(460,`code`),lO(461,`PoJobSchedulerParametersTemplateDirective`),wg()()()()(),jc(462,`tr`,15)(463,`td`,16)(464,`div`,17)(465,`span`,18),lO(466,` p-orientation`),nu(467,`br`),wg()()(),jc(468,`td`,19)(469,`code`,32),lO(470,`PoStepperOrientation`),wg()(),jc(471,`td`,21),lO(472,`-`),wg(),jc(473,`td`,22)(474,`em`)(475,`strong`),lO(476,`(opcional)`),wg()(),jc(477,`p`),lO(478,`Define a orientação de exibição do `),jc(479,`code`),lO(480,`po-stepper`),wg(),lO(481,`.`),wg(),jc(482,`blockquote`)(483,`p`),lO(484,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),wg()(),jc(485,`blockquote`)(486,`p`),lO(487,`Veja os valores válidos no `),jc(488,`em`),lO(489,`enum`),wg(),jc(490,`a`,33),lO(491,`PoStepperOrientation`),wg(),lO(492,`.`),wg()()()(),jc(493,`tr`,15)(494,`td`,16)(495,`div`,27)(496,`span`,28),lO(497,` (p-success)`),nu(498,`br`),wg()()(),jc(499,`td`,19)(500,`code`,29),lO(501,`EventEmitter`),wg()(),jc(502,`td`,21),lO(503,`-`),wg(),jc(504,`td`,22)(505,`em`)(506,`strong`),lO(507,`(opcional)`),wg()(),jc(508,`p`),lO(509,`Evento disparado ao concluir o processo de agendamento com sucesso.`),wg()()(),jc(510,`tr`,15)(511,`td`,16)(512,`div`,17)(513,`span`,18),lO(514,` p-title`),nu(515,`br`),wg()()(),jc(516,`td`,19)(517,`code`,25),lO(518,`string`),wg()(),jc(519,`td`,21),lO(520,`-`),wg(),jc(521,`td`,22)(522,`p`),lO(523,`Título da página.`),wg()()()(),jc(524,`h3`),lO(525,`Interfaces`),wg(),jc(526,`h4`,34)(527,`code`,5),lO(528,`PoJobScheduler`),wg()(),jc(529,`div`,2)(530,`p`),lO(531,`Estrutura do `),jc(532,`em`),lO(533,`payload`),wg(),lO(534,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),jc(535,`em`),lO(536,`Job Scheduler`),wg(),lO(537,`.`),wg()(),jc(538,`h4`,11),lO(539,`Propriedades`),wg(),jc(540,`table`,12)(541,`tr`,13)(542,`th`,14),lO(543,`Nome`),wg(),jc(544,`th`,14),lO(545,`Tipo`),wg(),jc(546,`th`,14),lO(547,`Descrição`),wg()(),jc(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),lO(552,` daily`),nu(553,`br`),wg()()(),jc(554,`td`,19)(555,`code`,35),lO(556,`{ hour: number; minute: number;
}`),wg()(),jc(557,`td`,22)(558,`em`)(559,`strong`),lO(560,`(opcional)`),wg()(),jc(561,`p`),lO(562,`Define uma repetição diária.`),wg()()(),jc(563,`tr`,15)(564,`td`,16)(565,`div`,17)(566,`span`,18),lO(567,` executionParameter`),nu(568,`br`),wg()()(),jc(569,`td`,19)(570,`code`,36),lO(571,`object`),wg()(),jc(572,`td`,22)(573,`em`)(574,`strong`),lO(575,`(opcional)`),wg()(),jc(576,`p`),lO(577,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),wg()()(),jc(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),lO(582,` firstExecution`),nu(583,`br`),wg()()(),jc(584,`td`,19)(585,`code`,25),lO(586,`string`),wg()(),jc(587,`td`,22)(588,`em`)(589,`strong`),lO(590,`(opcional)`),wg()(),jc(591,`p`),lO(592,`Data da primeira execução.`),wg()()(),jc(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),lO(597,` monthly`),nu(598,`br`),wg()()(),jc(599,`td`,19)(600,`code`,37),lO(601,`{ day: number; hour: number; minute: number;
}`),wg()(),jc(602,`td`,22)(603,`em`)(604,`strong`),lO(605,`(opcional)`),wg()(),jc(606,`p`),lO(607,`Define uma repetição mensal.`),wg()()(),jc(608,`tr`,15)(609,`td`,16)(610,`div`,17)(611,`span`,18),lO(612,` processID`),nu(613,`br`),wg()()(),jc(614,`td`,19)(615,`code`,25),lO(616,`string`),wg()(),jc(617,`td`,22)(618,`p`),lO(619,`Identificador do processo.`),wg()()(),jc(620,`tr`,15)(621,`td`,16)(622,`div`,17)(623,`span`,18),lO(624,` recurrent`),nu(625,`br`),wg()()(),jc(626,`td`,19)(627,`code`,20),lO(628,`boolean`),wg()(),jc(629,`td`,22)(630,`em`)(631,`strong`),lO(632,`(opcional)`),wg()(),jc(633,`p`),lO(634,`Permite uma execução recorrente.`),wg()()(),jc(635,`tr`,15)(636,`td`,16)(637,`div`,17)(638,`span`,18),lO(639,` weekly`),nu(640,`br`),wg()()(),jc(641,`td`,19)(642,`code`,38),lO(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),wg()(),jc(644,`td`,22)(645,`em`)(646,`strong`),lO(647,`(opcional)`),wg()(),jc(648,`p`),lO(649,`Define uma repetição semanal.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Se(i,j){if(i&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let l=Fx();return __(l.changeTab(`web`))}),nu(1,`sample-po-page-job-scheduler-background-process-view`)(2,`sample-po-page-job-scheduler-directives-view`)(3,`sample-po-page-job-scheduler-flexible-navigation-view`),wg()}if(i&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var he=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,l){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Se,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(4,`sample-po-page-job-scheduler-doc`),wg()()()),o&2&&(UE(`p-actions`,l.actions),rg(2),Dx(l.hidePoWebSample?-1:2),rg(),UE(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,$,Y,ee,te],encapsulation:2,changeDetection:1})}return i})()}];var ie=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[I1.forChild(he),I1]})}return i})();var Le=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[M,ie]})}return i})();export{Le as DocPoPageJobSchedulerModule};