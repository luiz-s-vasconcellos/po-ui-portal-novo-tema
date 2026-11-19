import{E as ln,S as ea,k as pn,m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,It as bae,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,_t as Tze,ar as An,ci as QP,cr as B_,da as gk,gi as Rb,hr as Db,io as vu,ji as Vk,li as Qc,lt as Ss,na as de$1,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wn as q4,wr as GV,xr as FO,yn as oae}from"./chunk-DtUf9FxZ.js";var Q=(()=>{class n{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(i,l){i&1&&vu(0,`po-page-job-scheduler`,0),i&2&&Rb(`p-breadcrumb`,l.breadcrumb)},dependencies:[ea],encapsulation:2,changeDetection:1})}return n})();var re=n=>({"docs-sample-code-tabs":n});var K=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-job-scheduler-background-process`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,l){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Job Scheduler - Background Process`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-job-scheduler-background-process`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,re,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Q],encapsulation:2,changeDetection:1})}return n})();function me(n,_){if(n&1){let r=YO();Qc(0,`h1`),Sk(1,`Etapa 1`),Kg(),Qc(2,`po-dynamic-form`,4),vt(`p-form`,function(l){B_(r);let c=ek();return U_(c.getFormExample(l))}),Kg()}if(n&2){let r=ek();wg(2),Rb(`p-fields`,r.parametersForm)}}function pe(n,_){if(n&1){let r=YO();Qc(0,`po-table`,5),vt(`p-selected`,function(l){B_(r);let c=ek();return U_(c.selectedItem(l))}),Kg()}if(n&2){let r=ek();Rb(`p-items`,r.items)(`p-selectable`,!0)}}function de(n,_){if(n&1&&(Qc(0,`po-widget`,6),vu(1,`po-dynamic-view`,7),Kg()),n&2){let r=ek();wg(),Rb(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var Y=(()=>{class n{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(i,l){i&1&&(Qc(0,`po-page-job-scheduler`,0),Db(1,me,3,1,`ng-template`,1)(2,pe,1,2,`ng-template`,2)(3,de,2,2,`ng-template`,3),Kg()),i&2&&(Rb(`p-step-execution-last`,!0),wg(),Rb(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),wg(),Rb(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[oae,Tze,q4,bae,ea,ln,pn],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n});var Z=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-job-scheduler-directives`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,l){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Job Scheduler - Directives`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-job-scheduler
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-job-scheduler-directives`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ce,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Y],encapsulation:2,changeDetection:1})}return n})();var ee=(()=>{class n{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(i,l){i&1&&vu(0,`po-page-job-scheduler`,0),i&2&&Rb(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[ea],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var te=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-page-job-scheduler-flexible-navigation`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,l){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Job Scheduler - Navegação Flexível`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-page-job-scheduler-flexible-navigation`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ee,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ee],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Job Scheduler Parameters Template`,3,`p-click`],[`p-value`,`Job Scheduler Summary Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-page-job-scheduler-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-allow-direct-navigation`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-before-send`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-parameters`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`id`,`prop-p-service-api`,1,`docs-api-properties-row`],[`href`,`/documentation/po-dynamic-form`],[`id`,`prop-p-step-execution-last`,1,`docs-api-properties-row`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`id`,`event-p-success`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-job-scheduler-daily`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`id`,`interface-po-job-scheduler-execution-parameter`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-job-scheduler-first-execution`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-monthly`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`id`,`interface-po-job-scheduler-process-id`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-recurrent`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-weekly`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(i,l){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),Kg()(),vu(4,`div`,2),Qc(5,`blockquote`,3)(6,`strong`),Sk(7,`Subcomponentes:`),Kg(),Qc(8,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-job-scheduler-parameters-template`)}),Kg(),Qc(9,`po-tag`,5),vt(`p-click`,function(){return l.openDoc(`po-job-scheduler-summary-template`)}),Kg()(),Qc(10,`h3`,6),Sk(11,`Componente`),Kg(),Qc(12,`h4`,7)(13,`code`,8),Sk(14,`PoPageJobSchedulerComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`O `),Qc(18,`code`),Sk(19,`po-page-job-scheduler`),Kg(),Sk(20,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),Kg(),Qc(21,`p`),Sk(22,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),Kg(),Qc(23,`p`),Sk(24,`Veja mais sobre os padrões utilizados nas requisições no `),Qc(25,`a`,9),Sk(26,`Guia de implementação de APIs`),Kg(),Sk(27,`.`),Kg(),Qc(28,`h4`),Sk(29,`Tokens customizáveis`),Kg(),Qc(30,`blockquote`)(31,`p`),Sk(32,`Para maiores informações, acesse o guia `),Qc(33,`a`,10),Sk(34,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(35,`.`),Kg()(),Qc(36,`table`)(37,`thead`)(38,`tr`)(39,`th`),Sk(40,`Propriedade`),Kg(),Qc(41,`th`),Sk(42,`Descrição`),Kg(),Qc(43,`th`),Sk(44,`Valor Padrão`),Kg()()(),Qc(45,`tbody`)(46,`tr`)(47,`td`)(48,`strong`),Sk(49,`Header`),Kg()(),vu(50,`td`)(51,`td`),Kg(),Qc(52,`tr`)(53,`td`)(54,`code`),Sk(55,`--padding`),Kg()(),Qc(56,`td`),Sk(57,`Espaçamento do header`),Kg(),Qc(58,`td`)(59,`code`),Sk(60,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Qc(61,`tr`)(62,`td`)(63,`code`),Sk(64,`--gap`),Kg()(),Qc(65,`td`),Sk(66,`Espaçamento entre os breadcrumbs e o título`),Kg(),Qc(67,`td`)(68,`code`),Sk(69,`var(--spacing-md)`),Kg()()(),Qc(70,`tr`)(71,`td`)(72,`code`),Sk(73,`--gap-actions`),Kg()(),Qc(74,`td`),Sk(75,`Espaçamento entre as ações`),Kg(),Qc(76,`td`)(77,`code`),Sk(78,`var(--spacing-xs)`),Kg()()(),Qc(79,`tr`)(80,`td`)(81,`code`),Sk(82,`--font-family`),Kg()(),Qc(83,`td`),Sk(84,`Família tipográfica do título`),Kg(),Qc(85,`td`)(86,`code`),Sk(87,`var(--font-family-theme)`),Kg()()(),Qc(88,`tr`)(89,`td`)(90,`strong`),Sk(91,`Content`),Kg()(),vu(92,`td`)(93,`td`),Kg(),Qc(94,`tr`)(95,`td`)(96,`code`),Sk(97,`--padding-content`),Kg()(),Qc(98,`td`),Sk(99,`Espaçamento do conteúdo`),Kg(),Qc(100,`td`)(101,`code`),Sk(102,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Qc(103,`div`,11)(104,`h4`,12),Sk(105,`Seletor`),Kg(),Qc(106,`pre`,13),Sk(107,`<po-page-job-scheduler
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
`),Kg()(),Qc(108,`h4`,14),Sk(109,`Propriedades`),Kg(),Qc(110,`table`,15)(111,`tr`,16)(112,`th`,17),Sk(113,`Nome`),Kg(),Qc(114,`th`,17),Sk(115,`Tipo`),Kg(),Qc(116,`th`,17),Sk(117,`Padrão`),Kg(),Qc(118,`th`,17),Sk(119,`Descrição`),Kg()(),Qc(120,`tr`,18)(121,`td`,19)(122,`div`,20)(123,`span`,21),Sk(124,` p-allow-direct-navigation`),vu(125,`br`),Kg()()(),Qc(126,`td`,22)(127,`code`,23),Sk(128,`boolean`),Kg()(),Qc(129,`td`,24)(130,`p`)(131,`code`),Sk(132,`false`),Kg()()(),Qc(133,`td`,25)(134,`em`)(135,`strong`),Sk(136,`(opcional)`),Kg()(),Qc(137,`p`),Sk(138,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),Kg(),Qc(139,`p`),Sk(140,`Quando habilitado (`),Qc(141,`code`),Sk(142,`true`),Kg(),Sk(143,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),Kg(),Qc(144,`blockquote`)(145,`p`),Sk(146,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),Kg()()()(),Qc(147,`tr`,26)(148,`td`,19)(149,`div`,20)(150,`span`,21),Sk(151,` p-before-send`),vu(152,`br`),Kg()()(),Qc(153,`td`,22)(154,`code`,27),Sk(155,`unknown`),Kg()(),Qc(156,`td`,24),Sk(157,`-`),Kg(),Qc(158,`td`,25)(159,`em`)(160,`strong`),Sk(161,`(opcional)`),Kg()(),Qc(162,`p`),Sk(163,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),Kg(),Qc(164,`blockquote`)(165,`p`),Sk(166,`Deve retornar um objeto do tipo `),Qc(167,`code`),Sk(168,`PoPageJobScheduler`),Kg(),Sk(169,` para ser adicionado ao model do PoPageJobScheduler.`),Kg()(),Qc(170,`blockquote`)(171,`p`),Sk(172,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),Qc(173,`code`),Sk(174,`PoJobSchedulerInternal`),Kg(),Sk(175,`.`),Kg()(),Qc(176,`p`),Sk(177,`O contexto da função que será chamada, será o mesmo que o do `),Qc(178,`code`),Sk(179,`PoPageJobScheduler`),Kg(),Sk(180,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Qc(181,`code`),Sk(182,`bind`),Kg(),Sk(183,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Qc(184,`code`),Sk(185,`beforeSend`),Kg(),Sk(186,`:`),Kg(),Qc(187,`pre`)(188,`code`),Sk(189,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),Kg()()()(),Qc(190,`tr`,28)(191,`td`,19)(192,`div`,20)(193,`span`,21),Sk(194,` p-breadcrumb`),vu(195,`br`),Kg()()(),Qc(196,`td`,22)(197,`code`,29),Sk(198,`PoBreadcrumb`),Kg()(),Qc(199,`td`,24),Sk(200,`-`),Kg(),Qc(201,`td`,25)(202,`em`)(203,`strong`),Sk(204,`(opcional)`),Kg()(),Qc(205,`p`),Sk(206,`Objeto com as propriedades do breadcrumb.`),Kg()()(),Qc(207,`tr`,30)(208,`td`,19)(209,`div`,20)(210,`span`,21),Sk(211,` p-components-size`),vu(212,`br`),Kg()()(),Qc(213,`td`,22)(214,`code`,31),Sk(215,`string`),Kg()(),Qc(216,`td`,24)(217,`p`)(218,`code`),Sk(219,`medium`),Kg()()(),Qc(220,`td`,25)(221,`em`)(222,`strong`),Sk(223,`(opcional)`),Kg()(),Qc(224,`p`),Sk(225,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(226,`ul`)(227,`li`)(228,`code`),Sk(229,`small`),Kg(),Sk(230,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(231,`li`)(232,`code`),Sk(233,`medium`),Kg(),Sk(234,`: aplica a medida medium de cada componente.`),Kg()(),Qc(235,`blockquote`)(236,`p`),Sk(237,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(238,`code`),Sk(239,`medium`),Kg(),Sk(240,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(241,`a`,32),Sk(242,`po-theme`),Kg(),Sk(243,`.`),Kg()()()(),Qc(244,`tr`,33)(245,`td`,19)(246,`div`,34)(247,`span`,35),Sk(248,` (p-error)`),vu(249,`br`),Kg()()(),Qc(250,`td`,22)(251,`code`,36),Sk(252,`EventEmitter`),Kg()(),Qc(253,`td`,24),Sk(254,`-`),Kg(),Qc(255,`td`,25)(256,`em`)(257,`strong`),Sk(258,`(opcional)`),Kg()(),Qc(259,`p`),Sk(260,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),Kg()()(),Qc(261,`tr`,37)(262,`td`,19)(263,`div`,20)(264,`span`,21),Sk(265,` p-parameters`),vu(266,`br`),Kg()()(),Qc(267,`td`,22)(268,`code`,38),Sk(269,`Array<PoDynamicFormField>`),Kg()(),Qc(270,`td`,24),Sk(271,`-`),Kg(),Qc(272,`td`,25)(273,`p`),Sk(274,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),Kg(),Qc(275,`p`),Sk(276,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),Kg()()(),Qc(277,`tr`,39)(278,`td`,19)(279,`div`,20)(280,`span`,21),Sk(281,` p-service-api`),vu(282,`br`),Kg()()(),Qc(283,`td`,22)(284,`code`,31),Sk(285,`string`),Kg()(),Qc(286,`td`,24),Sk(287,`-`),Kg(),Qc(288,`td`,25)(289,`p`),Sk(290,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),Kg(),Qc(291,`h4`),Sk(292,`Processos`),Kg(),Qc(293,`p`),Sk(294,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Qc(295,`code`),Sk(296,`GET`),Kg(),Sk(297,` para o endpoint `),Qc(298,`code`),Sk(299,`{service-api}/processes`),Kg(),Sk(300,`, para buscar
essa lista de processos.`),Kg(),Qc(301,`p`),Sk(302,`Este endpoint `),Qc(303,`code`),Sk(304,`{service-api}/processes`),Kg(),Sk(305,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),Kg(),Qc(306,`pre`)(307,`code`),Sk(308,`GET {service-api}/processes
`),Kg()(),Qc(309,`pre`)(310,`code`),Sk(311,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),Kg()(),Qc(312,`p`),Sk(313,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),Kg(),Qc(314,`p`),Sk(315,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Qc(316,`code`),Sk(317,`search`),Kg(),Sk(318,`. Da seguinte forma:`),Kg(),Qc(319,`pre`)(320,`code`),Sk(321,`GET {service-api}/processes?search=relatorio
`),Kg()(),Qc(322,`blockquote`)(323,`p`),Sk(324,`Veja mais sobre paginação e filtros no `),Qc(325,`a`,9),Sk(326,`Guia de implementação de APIs`),Kg(),Sk(327,`.
Caso seja informada a propriedade `),Qc(328,`code`),Sk(329,`p-parameters`),Kg(),Sk(330,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),Kg()(),Qc(331,`p`),Sk(332,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Qc(333,`code`),Sk(334,`{service-api}/processes`),Kg(),Sk(335,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Qc(336,`strong`),Sk(337,`identificador do processo - `),Qc(338,`code`),Sk(339,`processID`),Kg()(),Sk(340,` e ao salvar será enviado um `),Qc(341,`code`),Sk(342,`POST`),Kg(),Sk(343,` para o endpoint difinido `),Qc(344,`code`),Sk(345,`serviceApi`),Kg(),Sk(346,` conforme abaixo:`),Kg(),Qc(347,`pre`)(348,`code`),Sk(349,`POST {service-api}
`),Kg()(),Qc(350,`p`)(351,`em`),Sk(352,`Request payload`),Kg(),Sk(353,` - estrutura de dados enviada no corpo da requisição conforme interface `),Qc(354,`code`),Sk(355,`PoJobScheduler`),Kg(),Sk(356,`:`),Kg(),Qc(357,`pre`)(358,`code`),Sk(359,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),Kg()(),Qc(360,`p`),Sk(361,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),Qc(362,`code`),Sk(363,`GET`),Kg(),Sk(364,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Qc(365,`a`,40),Sk(366,`PoDynamicFormField`),Kg(),Sk(367,`. Porém, caso utilizar a propriedade `),Qc(368,`code`),Sk(369,`p-parameters`),Kg(),Sk(370,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),Kg(),Qc(371,`pre`)(372,`code`),Sk(373,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),Kg()(),Qc(374,`h4`),Sk(375,`Salvar e Atualizar`),Kg(),Qc(376,`p`),Sk(377,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),Qc(378,`em`),Sk(379,`payload`),Kg(),Sk(380,`.
Abaixo uma requisi\xE7\xE3o `),Qc(381,`code`),Sk(382,`POST`),Kg(),Sk(383,` disparada, onde as propriedades do `),Qc(384,`em`),Sk(385,`Job Scheduler`),Kg(),Sk(386,` foram preenchidas:`),Kg(),Qc(387,`pre`)(388,`code`),Sk(389,`POST {service-api}
`),Kg()(),Qc(390,`p`)(391,`em`),Sk(392,`Request payload`),Kg(),Sk(393,` - estrutura de dados enviada no corpo da requisição conforme interface `),Qc(394,`code`),Sk(395,`PoJobScheduler`),Kg(),Sk(396,`:`),Kg(),Qc(397,`pre`)(398,`code`),Sk(399,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Kg()(),Qc(400,`p`),Sk(401,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),Qc(402,`code`),Sk(403,`id`),Kg(),Sk(404,`.`),Kg(),Qc(405,`p`),Sk(406,`Exemplo de configuração de rota:`),Kg(),Qc(407,`pre`)(408,`code`),Sk(409,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),Kg()(),Qc(410,`p`),Sk(411,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),Kg(),Qc(412,`pre`)(413,`code`),Sk(414,`GET {service-api}/{id}
`),Kg()(),Qc(415,`p`),Sk(416,`Ao atualizar o agendamento, será disparado um `),Qc(417,`code`),Sk(418,`PUT`),Kg(),Sk(419,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Qc(420,`code`),Sk(421,`PUT`),Kg(),Sk(422,` disparada, onde a propriedade `),Qc(423,`em`),Sk(424,`recurrent`),Kg(),Sk(425,` e `),Qc(426,`em`),Sk(427,`daily`),Kg(),Sk(428,` foram atualizadas:`),Kg(),Qc(429,`pre`)(430,`code`),Sk(431,`PUT {service-api}/{id}
`),Kg()(),Qc(432,`p`)(433,`em`),Sk(434,`Request payload`),Kg(),Sk(435,` - estrutura de dados enviada no corpo da requisição conforme interface `),Qc(436,`code`),Sk(437,`PoJobScheduler`),Kg(),Sk(438,`:`),Kg(),Qc(439,`pre`)(440,`code`),Sk(441,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Kg()()()(),Qc(442,`tr`,41)(443,`td`,19)(444,`div`,20)(445,`span`,21),Sk(446,` p-step-execution-last`),vu(447,`br`),Kg()()(),Qc(448,`td`,22)(449,`code`,23),Sk(450,`boolean`),Kg()(),Qc(451,`td`,24),Sk(452,`-`),Kg(),Qc(453,`td`,25)(454,`em`)(455,`strong`),Sk(456,`(opcional)`),Kg()(),Qc(457,`p`),Sk(458,`Define se o step `),Qc(459,`code`),Sk(460,`Agendamento`),Kg(),Sk(461,` deve ser exibido como o último na sequência de steps`),Kg(),Qc(462,`blockquote`)(463,`p`),Sk(464,`Aplicável apenas quando utilizado `),Qc(465,`code`),Sk(466,`PoJobSchedulerParametersTemplateDirective`),Kg()()()()(),Qc(467,`tr`,42)(468,`td`,19)(469,`div`,20)(470,`span`,21),Sk(471,` p-orientation`),vu(472,`br`),Kg()()(),Qc(473,`td`,22)(474,`code`,43),Sk(475,`PoStepperOrientation`),Kg()(),Qc(476,`td`,24),Sk(477,`-`),Kg(),Qc(478,`td`,25)(479,`em`)(480,`strong`),Sk(481,`(opcional)`),Kg()(),Qc(482,`p`),Sk(483,`Define a orientação de exibição do `),Qc(484,`code`),Sk(485,`po-stepper`),Kg(),Sk(486,`.`),Kg(),Qc(487,`blockquote`)(488,`p`),Sk(489,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),Kg()(),Qc(490,`blockquote`)(491,`p`),Sk(492,`Veja os valores válidos no `),Qc(493,`em`),Sk(494,`enum`),Kg(),Qc(495,`a`,44),Sk(496,`PoStepperOrientation`),Kg(),Sk(497,`.`),Kg()()()(),Qc(498,`tr`,45)(499,`td`,19)(500,`div`,34)(501,`span`,35),Sk(502,` (p-success)`),vu(503,`br`),Kg()()(),Qc(504,`td`,22)(505,`code`,36),Sk(506,`EventEmitter`),Kg()(),Qc(507,`td`,24),Sk(508,`-`),Kg(),Qc(509,`td`,25)(510,`em`)(511,`strong`),Sk(512,`(opcional)`),Kg()(),Qc(513,`p`),Sk(514,`Evento disparado ao concluir o processo de agendamento com sucesso.`),Kg()()(),Qc(515,`tr`,46)(516,`td`,19)(517,`div`,20)(518,`span`,21),Sk(519,` p-title`),vu(520,`br`),Kg()()(),Qc(521,`td`,22)(522,`code`,31),Sk(523,`string`),Kg()(),Qc(524,`td`,24),Sk(525,`-`),Kg(),Qc(526,`td`,25)(527,`p`),Sk(528,`Título da página.`),Kg()()()(),Qc(529,`h3`),Sk(530,`Interfaces`),Kg(),Qc(531,`h4`,47)(532,`code`,8),Sk(533,`PoJobScheduler`),Kg()(),Qc(534,`div`,2)(535,`p`),Sk(536,`Estrutura do `),Qc(537,`em`),Sk(538,`payload`),Kg(),Sk(539,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),Qc(540,`em`),Sk(541,`Job Scheduler`),Kg(),Sk(542,`.`),Kg()(),Qc(543,`h4`,14),Sk(544,`Propriedades`),Kg(),Qc(545,`table`,15)(546,`tr`,16)(547,`th`,17),Sk(548,`Nome`),Kg(),Qc(549,`th`,17),Sk(550,`Tipo`),Kg(),Qc(551,`th`,17),Sk(552,`Descrição`),Kg()(),Qc(553,`tr`,48)(554,`td`,19)(555,`div`,20)(556,`span`,21),Sk(557,` daily`),vu(558,`br`),Kg()()(),Qc(559,`td`,22)(560,`code`,49),Sk(561,`{ hour: number; minute: number;
}`),Kg()(),Qc(562,`td`,25)(563,`em`)(564,`strong`),Sk(565,`(opcional)`),Kg()(),Qc(566,`p`),Sk(567,`Define uma repetição diária.`),Kg()()(),Qc(568,`tr`,50)(569,`td`,19)(570,`div`,20)(571,`span`,21),Sk(572,` executionParameter`),vu(573,`br`),Kg()()(),Qc(574,`td`,22)(575,`code`,51),Sk(576,`object`),Kg()(),Qc(577,`td`,25)(578,`em`)(579,`strong`),Sk(580,`(opcional)`),Kg()(),Qc(581,`p`),Sk(582,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),Kg()()(),Qc(583,`tr`,52)(584,`td`,19)(585,`div`,20)(586,`span`,21),Sk(587,` firstExecution`),vu(588,`br`),Kg()()(),Qc(589,`td`,22)(590,`code`,31),Sk(591,`string`),Kg()(),Qc(592,`td`,25)(593,`em`)(594,`strong`),Sk(595,`(opcional)`),Kg()(),Qc(596,`p`),Sk(597,`Data da primeira execução.`),Kg()()(),Qc(598,`tr`,53)(599,`td`,19)(600,`div`,20)(601,`span`,21),Sk(602,` monthly`),vu(603,`br`),Kg()()(),Qc(604,`td`,22)(605,`code`,54),Sk(606,`{ day: number; hour: number; minute: number;
}`),Kg()(),Qc(607,`td`,25)(608,`em`)(609,`strong`),Sk(610,`(opcional)`),Kg()(),Qc(611,`p`),Sk(612,`Define uma repetição mensal.`),Kg()()(),Qc(613,`tr`,55)(614,`td`,19)(615,`div`,20)(616,`span`,21),Sk(617,` processID`),vu(618,`br`),Kg()()(),Qc(619,`td`,22)(620,`code`,31),Sk(621,`string`),Kg()(),Qc(622,`td`,25)(623,`p`),Sk(624,`Identificador do processo.`),Kg()()(),Qc(625,`tr`,56)(626,`td`,19)(627,`div`,20)(628,`span`,21),Sk(629,` recurrent`),vu(630,`br`),Kg()()(),Qc(631,`td`,22)(632,`code`,23),Sk(633,`boolean`),Kg()(),Qc(634,`td`,25)(635,`em`)(636,`strong`),Sk(637,`(opcional)`),Kg()(),Qc(638,`p`),Sk(639,`Permite uma execução recorrente.`),Kg()()(),Qc(640,`tr`,57)(641,`td`,19)(642,`div`,20)(643,`span`,21),Sk(644,` weekly`),vu(645,`br`),Kg()()(),Qc(646,`td`,22)(647,`code`,58),Sk(648,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),Kg()(),Qc(649,`td`,25)(650,`em`)(651,`strong`),Sk(652,`(opcional)`),Kg()(),Qc(653,`p`),Sk(654,`Define uma repetição semanal.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function he(n,_){if(n&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let l=ek();return U_(l.changeTab(`web`))}),vu(1,`sample-po-page-job-scheduler-background-process-view`)(2,`sample-po-page-job-scheduler-directives-view`)(3,`sample-po-page-job-scheduler-flexible-navigation-view`),Kg()}if(n&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var xe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,l){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,he,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-page-job-scheduler-doc`),Kg()()()),i&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,K,Z,te,oe],encapsulation:2,changeDetection:1})}return n})()}];var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[GV.forChild(xe),GV]})}return n})();var We=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,ie]})}return n})();export{We as DocPoPageJobSchedulerModule};