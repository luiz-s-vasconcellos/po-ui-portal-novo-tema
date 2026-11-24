import{m as P,p as M,y as Xn}from"./main-QQSPUZS3.js";import{Ba as p,Br as Jn,Lr as I$1,Ni as Vk,Pn as tre,Pt as are,W as Mze,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,_r as Cu,ar as Ab,co as wg,da as ge,eo as tk,ho as xo,jr as GV,or as An,qr as LO,ra as de,ri as No,wa as jk,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var G=()=>({property:`id`,label:`User ID`});var _=a=>[a];var j=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-title`,`Po Page Dynamic Edit`,`p-service-api`,`https://po-sample-api.onrender.com/v1/people`,3,`p-fields`]],template:function(o,r){o&1&&_u(0,`po-page-dynamic-edit`,0),o&2&&Ab(`p-fields`,jk(2,_,Vk(1,G)))},dependencies:[Xn],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-dynamic-edit-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,r){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Dynamic Edit Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-dynamic-edit-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,j],encapsulation:2,changeDetection:1})}return a})();var Y=[`dynamicEdit`];var I=(()=>{class a{dynamicEdit;serviceApi=`https://po-sample-api.onrender.com/v1/people`;actions={save:`/documentation/po-page-dynamic-detail`,saveNew:`/documentation/po-page-dynamic-edit`};literals={pageActionCancel:`Descartar`,pageActionSave:`Gravar`,pageActionSaveNew:`Gravar e novo`};breadcrumb={items:[{label:`Home`,link:`/`},{label:`People`,link:`/documentation/po-page-dynamic-table`},{label:`Edit`}]};fields=[{property:`status`,divider:`Status`,options:[`active`,`inactive`]},{property:`id`,label:`User ID`,key:!0,required:!0},{property:`name`,divider:`Personal data`,required:!0},{property:`nickname`},{property:`email`,label:`E-mail`},{property:`birthdate`,label:`Birth date`,type:`date`,errorMessage:`Invalid date.`,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthdate`)},{property:`genre`,options:[`female`,`male`,`others`],gridLgColumns:6},{property:`nationality`},{property:`birthPlace`,label:`Place of birth`},{property:`graduation`},{property:`father`,label:"Father`s name",divider:`Relationship`,gridMdColumns:4,gridLgColumns:4},{property:`mother`,label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:`street`,divider:`Address`,gridColumns:4},{property:`city`,optionsService:`https://po-sample-api.onrender.com/v1/cities?transform=true`,offsetColumns:4,gridColumns:4}];onKeyDown(d,o){o.code===`F9`&&this.dynamicEdit.showAdditionalHelp(d)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-user`]],viewQuery:function(o,r){if(o&1&&Cu(Y,7),o&2){let b;No(b=xo())&&(r.dynamicEdit=b.first)}},standalone:!1,decls:2,vars:6,consts:[[`dynamicEdit`,``],[`p-title`,`User edit`,3,`p-auto-router`,`p-actions`,`p-breadcrumb`,`p-fields`,`p-literals`,`p-service-api`]],template:function(o,r){o&1&&_u(0,`po-page-dynamic-edit`,1,0),o&2&&Ab(`p-auto-router`,!0)(`p-actions`,r.actions)(`p-breadcrumb`,r.breadcrumb)(`p-fields`,r.fields)(`p-literals`,r.literals)(`p-service-api`,r.serviceApi)},dependencies:[Xn],encapsulation:2,changeDetection:1})}return a})();var L=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-user-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-dynamic-edit-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,r){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Dynamic Edit - User`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-dynamic-edit-user`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,I],encapsulation:2,changeDetection:1})}return a})();var R=(()=>{class a{router=p(An);openDoc(d){this.router.navigate([`/documentation`,d],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-doc`]],standalone:!1,decls:1475,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-dynamic-edit-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditActions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-auto-router`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-fields`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageDynamicEditField>`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-notification-type`,1,`docs-api-properties-row`],[`id`,`prop-p-load`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditOptions)`],[`id`,`prop-p-load-data`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`id`,`prop-p-service-api`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-page-dynamic-edit-actions`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-dynamic-edit-actions-before-cancel`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditBeforeCancel)`],[`href`,`https://po-ui.io/guides/api#successMessages`],[`id`,`interface-po-page-dynamic-edit-actions-before-save`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSave)`],[`id`,`interface-po-page-dynamic-edit-actions-before-save-new`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSaveNew)`],[`id`,`interface-po-page-dynamic-edit-actions-cancel`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-page-dynamic-edit-actions-save`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`void)`],[`id`,`interface-po-page-dynamic-edit-actions-save-new`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id?:`,`string)`,`=>`,`void)`],[`id`,`interface-po-page-dynamic-edit-before-cancel`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-dynamic-edit-before-cancel-allow-action`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-before-cancel-new-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-before-save-new`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-dynamic-edit-before-save-new-allow-action`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-before-save-new-new-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-before-save-new-resource`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`interface-po-page-dynamic-edit-before-save`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-dynamic-edit-before-save-allow-action`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-before-save-new-url`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-before-save-resource`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-field`,1,`docs-api-h4`,`docs-api-class-name`],[`href`,`https://po-ui.io/documentation/po-dynamic-form`],[`id`,`interface-po-page-dynamic-edit-field-duplicate`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-dynamic-edit-literals-cancel-confirm-message`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-detail-action-new`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-page-action-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-page-action-save`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-page-action-save-new`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-register-not-found`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-save-notification-error`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-save-notification-success-save`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-save-notification-success-update`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-literals-save-notification-warning`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-metadata`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`po-page-dynamic-edit-metadata`],[`id`,`interface-po-page-dynamic-edit-options-actions`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-metadata-auto-router`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-options-breadcrumb`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-options-fields`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-options-title`,1,`docs-api-properties-row`],[`id`,`interface-po-page-dynamic-edit-metadata-version`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-page-dynamic-edit-options`,1,`docs-api-h4`,`docs-api-class-name`]],template:function(o,r){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do template do po-page-dynamic-detail.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoPageDynamicEditComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O `),Jc(15,`code`),Mk(16,`po-page-dynamic-edit`),Kg(),Mk(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),Kg(),Jc(18,`h3`),Mk(19,`Utilização via rota`),Kg(),Jc(20,`p`),Mk(21,`Ao utilizar as rotas para inicializar o template, o `),Jc(22,`code`),Mk(23,`page-dynamic-edit`),Kg(),Mk(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),Kg(),Jc(25,`p`),Mk(26,`Exemplo de utilização:`),Kg(),Jc(27,`p`),Mk(28,`Arquivo de configuração de rotas da aplicação: `),Jc(29,`code`),Mk(30,`app-routing.module.ts`),Kg()(),Jc(31,`pre`)(32,`code`),Mk(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),Kg()(),Jc(34,`p`),Mk(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),Kg(),Jc(36,`p`),Mk(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),Kg(),Jc(38,`blockquote`)(39,`p`),Mk(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),Kg()(),Jc(41,`p`),Mk(42,`Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `),Jc(43,`code`),Mk(44,`id`),Kg(),Mk(45,`:`),Kg(),Jc(46,`pre`)(47,`code`),Mk(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),Kg()(),Jc(49,`p`),Mk(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),Kg(),Jc(51,`p`),Mk(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Jc(53,`a`,6),Mk(54,`PoPageDynamicEditMetadata`),Kg(),Mk(55,`. Por exemplo:`),Kg(),Jc(56,`pre`)(57,`code`),Mk(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),Kg()(),Jc(59,`blockquote`)(60,`p`),Mk(61,`Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `),Jc(62,`code`),Mk(63,`serviceApi`),Kg(),Mk(64,` da seguinte forma:`),Kg()(),Jc(65,`pre`)(66,`code`),Mk(67,`GET {end-point}/metadata?type=edit&version={version}
`),Kg()(),Jc(68,`h4`),Mk(69,`Tokens customizáveis`),Kg(),Jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Mk(74,`Propriedade`),Kg(),Jc(75,`th`),Mk(76,`Descrição`),Kg(),Jc(77,`th`),Mk(78,`Valor Padrão`),Kg()()(),Jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),Mk(83,`Header`),Kg()(),_u(84,`td`)(85,`td`),Kg(),Jc(86,`tr`)(87,`td`)(88,`code`),Mk(89,`--padding`),Kg()(),Jc(90,`td`),Mk(91,`Espaçamento do header`),Kg(),Jc(92,`td`)(93,`code`),Mk(94,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Jc(95,`tr`)(96,`td`)(97,`code`),Mk(98,`--gap`),Kg()(),Jc(99,`td`),Mk(100,`Espaçamento entre os breadcrumbs e o título`),Kg(),Jc(101,`td`)(102,`code`),Mk(103,`var(--spacing-md)`),Kg()()(),Jc(104,`tr`)(105,`td`)(106,`code`),Mk(107,`--gap-actions`),Kg()(),Jc(108,`td`),Mk(109,`Espaçamento entre as ações`),Kg(),Jc(110,`td`)(111,`code`),Mk(112,`var(--spacing-xs)`),Kg()()(),Jc(113,`tr`)(114,`td`)(115,`code`),Mk(116,`--font-family`),Kg()(),Jc(117,`td`),Mk(118,`Família tipográfica do título`),Kg(),Jc(119,`td`)(120,`code`),Mk(121,`var(--font-family-theme)`),Kg()()(),Jc(122,`tr`)(123,`td`)(124,`strong`),Mk(125,`Content`),Kg()(),_u(126,`td`)(127,`td`),Kg(),Jc(128,`tr`)(129,`td`)(130,`code`),Mk(131,`--padding-content`),Kg()(),Jc(132,`td`),Mk(133,`Espaçamento do conteúdo`),Kg(),Jc(134,`td`)(135,`code`),Mk(136,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Jc(137,`div`,7)(138,`h4`,8),Mk(139,`Seletor`),Kg(),Jc(140,`pre`,9),Mk(141,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="unknown"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),Kg()(),Jc(142,`h4`,10),Mk(143,`Propriedades`),Kg(),Jc(144,`table`,11)(145,`tr`,12)(146,`th`,13),Mk(147,`Nome`),Kg(),Jc(148,`th`,13),Mk(149,`Tipo`),Kg(),Jc(150,`th`,13),Mk(151,`Padrão`),Kg(),Jc(152,`th`,13),Mk(153,`Descrição`),Kg()(),Jc(154,`tr`,14)(155,`td`,15)(156,`div`,16)(157,`span`,17),Mk(158,` p-actions`),_u(159,`br`),Kg()()(),Jc(160,`td`,18)(161,`code`,19),Mk(162,`PoPageDynamicEditActions`),Kg()(),Jc(163,`td`,20),Mk(164,`-`),Kg(),Jc(165,`td`,21)(166,`em`)(167,`strong`),Mk(168,`(opcional)`),Kg()(),Jc(169,`p`),Mk(170,`Ações da página.`),Kg()()(),Jc(171,`tr`,22)(172,`td`,15)(173,`div`,16)(174,`span`,17),Mk(175,` p-auto-router`),_u(176,`br`),Kg()()(),Jc(177,`td`,18)(178,`code`,23),Mk(179,`boolean`),Kg()(),Jc(180,`td`,20)(181,`p`),Mk(182,`false`),Kg()(),Jc(183,`td`,21)(184,`em`)(185,`strong`),Mk(186,`(opcional)`),Kg()(),Jc(187,`p`),Mk(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),Kg(),Jc(189,`blockquote`)(190,`p`),Mk(191,`Para o correto funcionamento não pode haver nenhum rota coringa (`),Jc(192,`code`),Mk(193,`**`),Kg(),Mk(194,`) especificada.`),Kg()()()(),Jc(195,`tr`,24)(196,`td`,15)(197,`div`,16)(198,`span`,17),Mk(199,` p-breadcrumb`),_u(200,`br`),Kg()()(),Jc(201,`td`,18)(202,`code`,25),Mk(203,`PoBreadcrumb`),Kg()(),Jc(204,`td`,20),Mk(205,`-`),Kg(),Jc(206,`td`,21)(207,`em`)(208,`strong`),Mk(209,`(opcional)`),Kg()(),Jc(210,`p`),Mk(211,`Objeto com propriedades do breadcrumb.`),Kg()()(),Jc(212,`tr`,26)(213,`td`,15)(214,`div`,16)(215,`span`,17),Mk(216,` p-components-size`),_u(217,`br`),Kg()()(),Jc(218,`td`,18)(219,`code`,27),Mk(220,`string`),Kg()(),Jc(221,`td`,20)(222,`p`)(223,`code`),Mk(224,`medium`),Kg()()(),Jc(225,`td`,21)(226,`em`)(227,`strong`),Mk(228,`(opcional)`),Kg()(),Jc(229,`p`),Mk(230,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(231,`ul`)(232,`li`)(233,`code`),Mk(234,`small`),Kg(),Mk(235,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(236,`li`)(237,`code`),Mk(238,`medium`),Kg(),Mk(239,`: aplica a medida medium de cada componente.`),Kg()(),Jc(240,`blockquote`)(241,`p`),Mk(242,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(243,`code`),Mk(244,`medium`),Kg(),Mk(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(246,`a`,28),Mk(247,`po-theme`),Kg(),Mk(248,`.`),Kg()()()(),Jc(249,`tr`,29)(250,`td`,15)(251,`div`,16)(252,`span`,17),Mk(253,` p-fields`),_u(254,`br`),Kg()()(),Jc(255,`td`,18)(256,`code`,30),Mk(257,`Array<PoPageDynamicEditField>`),Kg()(),Jc(258,`td`,20),Mk(259,`-`),Kg(),Jc(260,`td`,21)(261,`p`),Mk(262,`Lista dos campos usados na tabela e busca avançada.`),Kg()()(),Jc(263,`tr`,31)(264,`td`,15)(265,`div`,16)(266,`span`,17),Mk(267,` p-literals`),_u(268,`br`),Kg()()(),Jc(269,`td`,18)(270,`code`,32),Mk(271,`PoPageDynamicEditLiterals`),Kg()(),Jc(272,`td`,20),Mk(273,`-`),Kg(),Jc(274,`td`,21)(275,`em`)(276,`strong`),Mk(277,`(opcional)`),Kg()(),Jc(278,`p`),Mk(279,`Objeto com as literais usadas no `),Jc(280,`code`),Mk(281,`po-page-dynamic-edit`),Kg(),Mk(282,`.`),Kg(),Jc(283,`p`),Mk(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),Kg(),Jc(285,`pre`)(286,`code`),Mk(287,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),Kg()(),Jc(288,`p`),Mk(289,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(290,`pre`)(291,`code`),Mk(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),Kg()(),Jc(293,`blockquote`)(294,`p`),Mk(295,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(296,`a`,33)(297,`code`),Mk(298,`PoI18nService`),Kg()(),Mk(299,` ou `),Jc(300,`em`),Mk(301,`browser`),Kg(),Mk(302,`.`),Kg()()()(),Jc(303,`tr`,34)(304,`td`,15)(305,`div`,16)(306,`span`,17),Mk(307,` p-notification-type`),_u(308,`br`),Kg()()(),Jc(309,`td`,18)(310,`code`,27),Mk(311,`string`),Kg()(),Jc(312,`td`,20)(313,`p`),Mk(314,`warning`),Kg()(),Jc(315,`td`,21)(316,`em`)(317,`strong`),Mk(318,`(opcional)`),Kg()(),Jc(319,`p`),Mk(320,`Tipo da notificação.`),Kg(),Jc(321,`p`),Mk(322,`É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.`),Kg(),Jc(323,`pre`)(324,`code`),Mk(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),Kg()(),Jc(326,`blockquote`)(327,`p`),Mk(328,`Os valores aceitos são 'warning' e 'error'.`),Kg()()()(),Jc(329,`tr`,35)(330,`td`,15)(331,`div`,16)(332,`span`,17),Mk(333,` p-load`),_u(334,`br`),Kg()()(),Jc(335,`td`,18)(336,`code`,27),Mk(337,`string `),Kg(),Jc(338,`code`,36),Mk(339,` (() => PoPageDynamicEditOptions)`),Kg()(),Jc(340,`td`,20),Mk(341,`-`),Kg(),Jc(342,`td`,21)(343,`p`),Mk(344,`Função ou serviço que será executado na inicialização do componente.`),Kg(),Jc(345,`p`),Mk(346,`A propriedade aceita os seguintes tipos:`),Kg(),Jc(347,`ul`)(348,`li`)(349,`code`),Mk(350,`string`),Kg(),Mk(351,`: `),Jc(352,`em`),Mk(353,`Endpoint`),Kg(),Mk(354,` usado pelo componente para requisição via `),Jc(355,`code`),Mk(356,`POST`),Kg(),Mk(357,`.`),Kg(),Jc(358,`li`)(359,`code`),Mk(360,`function`),Kg(),Mk(361,`: Método que será executado.`),Kg()(),Jc(362,`p`),Mk(363,`O retorno desta função deve ser do tipo `),Jc(364,`code`),Mk(365,`PoPageDynamicEditOptions`),Kg(),Mk(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),Kg(),Jc(367,`p`),Mk(368,`Por exemplo:`),Kg(),Jc(369,`pre`)(370,`code`),Mk(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),Kg()(),Jc(372,`p`),Mk(373,`Para referenciar a sua função utilize a propriedade `),Jc(374,`code`),Mk(375,`bind`),Kg(),Mk(376,`, por exemplo:`),Kg(),Jc(377,`pre`)(378,`code`),Mk(379,`[p-load]="onLoadOptions.bind(this)"
`),Kg()()()(),Jc(380,`tr`,37)(381,`td`,15)(382,`div`,16)(383,`span`,17),Mk(384,` p-load-data`),_u(385,`br`),Kg()()(),Jc(386,`td`,18)(387,`code`,38),Mk(388,`unknown`),Kg()(),Jc(389,`td`,20),Mk(390,`-`),Kg(),Jc(391,`td`,21)(392,`em`)(393,`strong`),Mk(394,`(opcional)`),Kg()(),Jc(395,`p`),Mk(396,`Função que será executada após ser realizada a busca dos dados.`),Kg(),Jc(397,`p`),Mk(398,`A propriedade aceita os seguintes tipos:`),Kg(),Jc(399,`ul`)(400,`li`)(401,`code`),Mk(402,`function`),Kg(),Mk(403,`: Método que será executado.`),Kg()(),Jc(404,`p`),Mk(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),Kg(),Jc(406,`p`),Mk(407,`Por exemplo:`),Kg(),Jc(408,`pre`)(409,`code`),Mk(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),Kg()(),Jc(411,`p`),Mk(412,`Para referenciar a sua função utilize a propriedade `),Jc(413,`code`),Mk(414,`bind`),Kg(),Mk(415,`, por exemplo:`),Kg(),Jc(416,`pre`)(417,`code`),Mk(418,`[p-load-data]="onLoadCustom.bind(this)"
`),Kg()()()(),Jc(419,`tr`,39)(420,`td`,15)(421,`div`,16)(422,`span`,17),Mk(423,` p-service-api`),_u(424,`br`),Kg()()(),Jc(425,`td`,18)(426,`code`,27),Mk(427,`string`),Kg()(),Jc(428,`td`,20),Mk(429,`-`),Kg(),Jc(430,`td`,21)(431,`p`),Mk(432,`Endpoint usado pelo template para requisição do recurso que será exibido para edição.`),Kg(),Jc(433,`p`),Mk(434,`Para as ações de `),Jc(435,`code`),Mk(436,`save`),Kg(),Mk(437,` e `),Jc(438,`code`),Mk(439,`saveNew`),Kg(),Mk(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),Kg(),Jc(441,`blockquote`)(442,`p`)(443,`code`),Mk(444,`POST {end-point}`),Kg()()(),Jc(445,`pre`)(446,`code`),Mk(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),Kg()(),Jc(448,`p`),Mk(449,`Resquisição disparada, onde a propriedade `),Jc(450,`code`),Mk(451,`name`),Kg(),Mk(452,` e `),Jc(453,`code`),Mk(454,`city`),Kg(),Mk(455,` foram preenchidas:`),Kg(),Jc(456,`pre`)(457,`code`),Mk(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),Kg()(),Jc(459,`p`),Mk(460,`Request payload:`),Kg(),Jc(461,`pre`)(462,`code`),Mk(463,`{ "name": "Fulano", "city": "Smallville" }
`),Kg()(),Jc(464,`p`),Mk(465,`Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `),Jc(466,`code`),Mk(467,`id`),Kg(),Mk(468,`.`),Kg(),Jc(469,`p`),Mk(470,`Exemplo de configuração de rota:`),Kg(),Jc(471,`pre`)(472,`code`),Mk(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),Kg()(),Jc(474,`p`),Mk(475,`Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.`),Kg(),Jc(476,`blockquote`)(477,`p`)(478,`code`),Mk(479,`GET {end-point}/{id}`),Kg()()(),Jc(480,`p`),Mk(481,`Nos métodos de `),Jc(482,`code`),Mk(483,`save`),Kg(),Mk(484,` e `),Jc(485,`code`),Mk(486,`saveNew`),Kg(),Mk(487,`, ao invés de um `),Jc(488,`code`),Mk(489,`POST`),Kg(),Mk(490,`, será disparado um `),Jc(491,`code`),Mk(492,`PUT`),Kg(),Mk(493,`.`),Kg(),Jc(494,`p`),Mk(495,`Resquisição disparada, onde a propriedade `),Jc(496,`code`),Mk(497,`name`),Kg(),Mk(498,` e `),Jc(499,`code`),Mk(500,`city`),Kg(),Mk(501,` foram preenchidas / atualizadas, e o `),Jc(502,`code`),Mk(503,`id`),Kg(),Mk(504,` da url é 2:`),Kg(),Jc(505,`pre`)(506,`code`),Mk(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),Kg()(),Jc(508,`p`),Mk(509,`Request payload:`),Kg(),Jc(510,`pre`)(511,`code`),Mk(512,`{ "name": "Fulano", "city": "Metropolis" }
`),Kg()()()(),Jc(513,`tr`,40)(514,`td`,15)(515,`div`,16)(516,`span`,17),Mk(517,` p-title`),_u(518,`br`),Kg()()(),Jc(519,`td`,18)(520,`code`,27),Mk(521,`string`),Kg()(),Jc(522,`td`,20),Mk(523,`-`),Kg(),Jc(524,`td`,21)(525,`p`),Mk(526,`Título da página.`),Kg()()()(),Jc(527,`h3`,10),Mk(528,`Métodos`),Kg(),Jc(529,`table`,41)(530,`tr`,42)(531,`th`,43)(532,`div`,16)(533,`h4`)(534,`span`,17),Mk(535,` showAdditionalHelp `),Kg()()()()(),Jc(536,`tr`,21)(537,`td`,21)(538,`p`),Mk(539,`Método que exibe `),Jc(540,`code`),Mk(541,`p-helper`),Kg(),Mk(542,` ou executa a ação definida em `),Jc(543,`code`),Mk(544,`p-helper{eventOnClick}`),Kg(),Mk(545,` ou em `),Jc(546,`code`),Mk(547,`p-additionalHelp`),Kg(),Mk(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(549,`code`),Mk(550,`keydown`),Kg(),Mk(551,`.`),Kg(),Jc(552,`pre`)(553,`code`),Mk(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),Kg()()()()(),Jc(555,`h5`)(556,`b`),Mk(557,`Parâmetros`),Kg()(),Jc(558,`table`,11)(559,`tr`,12)(560,`th`,13),Mk(561,`Nome`),Kg(),Jc(562,`th`,13),Mk(563,`Tipo`),Kg(),Jc(564,`th`,13),Mk(565,`Descrição`),Kg()(),Jc(566,`tr`,42)(567,`td`,15),Mk(568,` property`),Kg(),Jc(569,`td`,18)(570,`code`,44),Mk(571,` string `),Kg()(),Jc(572,`td`,21)(573,`p`),Mk(574,`Identificador da coluna.`),Kg()()()(),_u(575,`br`),Jc(576,`h3`),Mk(577,`Interfaces`),Kg(),Jc(578,`h4`,45)(579,`code`,5),Mk(580,`PoPageDynamicEditActions`),Kg()(),Jc(581,`div`,2)(582,`p`),Mk(583,`Interface para as ações do componente po-page-dynamic-edit.`),Kg()(),Jc(584,`h4`,10),Mk(585,`Propriedades`),Kg(),Jc(586,`table`,11)(587,`tr`,12)(588,`th`,13),Mk(589,`Nome`),Kg(),Jc(590,`th`,13),Mk(591,`Tipo`),Kg(),Jc(592,`th`,13),Mk(593,`Descrição`),Kg()(),Jc(594,`tr`,46)(595,`td`,15)(596,`div`,16)(597,`span`,17),Mk(598,` beforeCancel`),_u(599,`br`),Kg()()(),Jc(600,`td`,18)(601,`code`,27),Mk(602,`string `),Kg(),Jc(603,`code`,47),Mk(604,` (() => PoPageDynamicEditBeforeCancel)`),Kg()(),Jc(605,`td`,21)(606,`em`)(607,`strong`),Mk(608,`(opcional)`),Kg()(),Jc(609,`p`),Mk(610,`Rota ou método que será chamado antes de executar a ação de cancelamento (cancel).`),Kg(),Jc(611,`p`),Mk(612,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Jc(613,`code`),Mk(614,`PoPageDynamicEditBeforeCancel`),Kg(),Mk(615,`.`),Kg(),Jc(616,`blockquote`)(617,`p`),Mk(618,`A url será chamada via POST`),Kg()(),Jc(619,`p`),Mk(620,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Jc(621,`strong`),Mk(622,`beforeCancel`),Kg(),Mk(623,`
ou definir a mensagem no atributo `),Jc(624,`code`),Mk(625,`_messages`),Kg(),Mk(626,` na resposta da API conforme definido
em `),Jc(627,`a`,48),Mk(628,`Guia de implementação de APIs`),Kg()()()(),Jc(629,`tr`,49)(630,`td`,15)(631,`div`,16)(632,`span`,17),Mk(633,` beforeSave`),_u(634,`br`),Kg()()(),Jc(635,`td`,18)(636,`code`,27),Mk(637,`string `),Kg(),Jc(638,`code`,50),Mk(639,` ((resource: any, id: string) => PoPageDynamicEditBeforeSave)`),Kg()(),Jc(640,`td`,21)(641,`em`)(642,`strong`),Mk(643,`(opcional)`),Kg()(),Jc(644,`p`),Mk(645,`Rota ou método que será chamado antes de salvar um recurso (save).`),Kg(),Jc(646,`p`),Mk(647,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Jc(648,`code`),Mk(649,`PoPageDynamicEditBeforeSave`),Kg(),Mk(650,`.`),Kg(),Jc(651,`blockquote`)(652,`p`),Mk(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Jc(654,`code`),Mk(655,`POST {beforeSave}/{key}`),Kg(),Mk(656,`.`),Kg()(),Jc(657,`p`),Mk(658,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Jc(659,`strong`),Mk(660,`beforeSave`),Kg(),Mk(661,`
ou definir a mensagem no atributo `),Jc(662,`code`),Mk(663,`_messages`),Kg(),Mk(664,` na resposta da API conforme definido
em `),Jc(665,`a`,48),Mk(666,`Guia de implementação de APIs`),Kg()()()(),Jc(667,`tr`,51)(668,`td`,15)(669,`div`,16)(670,`span`,17),Mk(671,` beforeSaveNew`),_u(672,`br`),Kg()()(),Jc(673,`td`,18)(674,`code`,27),Mk(675,`string `),Kg(),Jc(676,`code`,52),Mk(677,` ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)`),Kg()(),Jc(678,`td`,21)(679,`em`)(680,`strong`),Mk(681,`(opcional)`),Kg()(),Jc(682,`p`),Mk(683,`Rota ou método que será chamado antes de executar o evento salvar e abrir novo registro (saveNew).`),Kg(),Jc(684,`p`),Mk(685,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Jc(686,`code`),Mk(687,`PoPageDynamicEditBeforeSaveNew`),Kg(),Mk(688,`.`),Kg(),Jc(689,`blockquote`)(690,`p`),Mk(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Jc(692,`code`),Mk(693,`POST {beforeSave}/{key}`),Kg(),Mk(694,`.`),Kg()(),Jc(695,`p`),Mk(696,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Jc(697,`strong`),Mk(698,`beforeSaveNew`),Kg(),Mk(699,`
ou definir a mensagem no atributo `),Jc(700,`code`),Mk(701,`_messages`),Kg(),Mk(702,` na resposta da API conforme definido
em `),Jc(703,`a`,48),Mk(704,`Guia de implementação de APIs`),Kg()()()(),Jc(705,`tr`,53)(706,`td`,15)(707,`div`,16)(708,`span`,17),Mk(709,` cancel`),_u(710,`br`),Kg()()(),Jc(711,`td`,18)(712,`code`,27),Mk(713,`string `),Kg(),Jc(714,`code`,23),Mk(715,` boolean `),Kg(),Jc(716,`code`,54),Mk(717,` Function`),Kg()(),Jc(718,`td`,21)(719,`em`)(720,`strong`),Mk(721,`(opcional)`),Kg()(),Jc(722,`p`),Mk(723,`Rota de redirecionamento para ação de cancelar, caso não seja especificada será usado o comando `),Jc(724,`code`),Mk(725,`navigator.back()`),Kg(),Mk(726,`.`),Kg(),Jc(727,`blockquote`)(728,`p`),Mk(729,`Se passada uma função, é responsabilidade do desenvolvedor implementar a navegação ou outro comportamento desejado.`),Kg()(),Jc(730,`blockquote`)(731,`p`),Mk(732,`Caso queira esconder a ação deve ser passado o valor `),Jc(733,`code`),Mk(734,`false`),Kg(),Mk(735,`;`),Kg()(),Jc(736,`pre`)(737,`code`),Mk(738,`actions = {
  cancel: '/'
};
`),Kg()()()(),Jc(739,`tr`,55)(740,`td`,15)(741,`div`,16)(742,`span`,17),Mk(743,` save`),_u(744,`br`),Kg()()(),Jc(745,`td`,18)(746,`code`,27),Mk(747,`string `),Kg(),Jc(748,`code`,56),Mk(749,` ((resource: any, id: string) => void)`),Kg()(),Jc(750,`td`,21)(751,`em`)(752,`strong`),Mk(753,`(opcional)`),Kg()(),Jc(754,`p`),Mk(755,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),Kg(),Jc(756,`p`),Mk(757,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),Kg(),Jc(758,`blockquote`)(759,`p`),Mk(760,`A rota pode conter um parâmetro chamando id.`),Kg()(),Jc(761,`pre`)(762,`code`),Mk(763,`actions = {
  save: 'detail/:id'
};
`),Kg()(),Jc(764,`p`),Mk(765,`Se for passado um método:`),Kg(),Jc(766,`ul`)(767,`li`),Mk(768,`receberá como parâmetro na chamada do método o recurso, por exemplo: `),Jc(769,`code`),Mk(770,`{ email: 'example@email.com' }`),Kg(),Mk(771,`.`),Kg(),Jc(772,`li`),Mk(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),Kg()()()(),Jc(774,`tr`,57)(775,`td`,15)(776,`div`,16)(777,`span`,17),Mk(778,` saveNew`),_u(779,`br`),Kg()()(),Jc(780,`td`,18)(781,`code`,27),Mk(782,`string `),Kg(),Jc(783,`code`,58),Mk(784,` ((resource: any, id?: string) => void)`),Kg()(),Jc(785,`td`,21)(786,`em`)(787,`strong`),Mk(788,`(opcional)`),Kg()(),Jc(789,`p`),Mk(790,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),Kg(),Jc(791,`p`),Mk(792,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),Kg(),Jc(793,`blockquote`)(794,`p`),Mk(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),Kg()(),Jc(796,`pre`)(797,`code`),Mk(798,`actions = {
  saveNew: 'new'
};
`),Kg()(),Jc(799,`p`),Mk(800,`A rota pode conter um parâmetro id.`),Kg(),Jc(801,`pre`)(802,`code`),Mk(803,`actions = {
  saveNew: 'edit/:id'
};
`),Kg()(),Jc(804,`p`),Mk(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),Kg()()()(),Jc(806,`h4`,59)(807,`code`,5),Mk(808,`PoPageDynamicEditBeforeCancel`),Kg()(),Jc(809,`div`,2)(810,`p`),Mk(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Jc(812,`code`),Mk(813,`beforeCancel`),Kg(),Mk(814,`.`),Kg()(),Jc(815,`h4`,10),Mk(816,`Propriedades`),Kg(),Jc(817,`table`,11)(818,`tr`,12)(819,`th`,13),Mk(820,`Nome`),Kg(),Jc(821,`th`,13),Mk(822,`Tipo`),Kg(),Jc(823,`th`,13),Mk(824,`Descrição`),Kg()(),Jc(825,`tr`,60)(826,`td`,15)(827,`div`,16)(828,`span`,17),Mk(829,` allowAction`),_u(830,`br`),Kg()()(),Jc(831,`td`,18)(832,`code`,23),Mk(833,`boolean`),Kg()(),Jc(834,`td`,21)(835,`em`)(836,`strong`),Mk(837,`(opcional)`),Kg()(),Jc(838,`p`),Mk(839,`Define se deve ou não executar a ação de cancelamento de edição da página (cancel)`),Kg()()(),Jc(840,`tr`,61)(841,`td`,15)(842,`div`,16)(843,`span`,17),Mk(844,` newUrl`),_u(845,`br`),Kg()()(),Jc(846,`td`,18)(847,`code`,27),Mk(848,`string`),Kg()(),Jc(849,`td`,21)(850,`em`)(851,`strong`),Mk(852,`(opcional)`),Kg()(),Jc(853,`p`),Mk(854,`Nova rota para navegação que substituirá a definida anteriormente em `),Jc(855,`code`),Mk(856,`cancel`),Kg(),Mk(857,`.`),Kg()()()(),Jc(858,`h4`,62)(859,`code`,5),Mk(860,`PoPageDynamicEditBeforeSaveNew`),Kg()(),Jc(861,`div`,2)(862,`p`),Mk(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Jc(864,`code`),Mk(865,`beforeSaveNew`),Kg(),Mk(866,`.`),Kg()(),Jc(867,`h4`,10),Mk(868,`Propriedades`),Kg(),Jc(869,`table`,11)(870,`tr`,12)(871,`th`,13),Mk(872,`Nome`),Kg(),Jc(873,`th`,13),Mk(874,`Tipo`),Kg(),Jc(875,`th`,13),Mk(876,`Descrição`),Kg()(),Jc(877,`tr`,63)(878,`td`,15)(879,`div`,16)(880,`span`,17),Mk(881,` allowAction`),_u(882,`br`),Kg()()(),Jc(883,`td`,18)(884,`code`,23),Mk(885,`boolean`),Kg()(),Jc(886,`td`,21)(887,`em`)(888,`strong`),Mk(889,`(opcional)`),Kg()(),Jc(890,`p`),Mk(891,`Define se deve ou não executar a ação salvar e novo (saveNew).`),Kg()()(),Jc(892,`tr`,64)(893,`td`,15)(894,`div`,16)(895,`span`,17),Mk(896,` newUrl`),_u(897,`br`),Kg()()(),Jc(898,`td`,18)(899,`code`,27),Mk(900,`string`),Kg()(),Jc(901,`td`,21)(902,`em`)(903,`strong`),Mk(904,`(opcional)`),Kg()(),Jc(905,`p`),Mk(906,`Nova rota de redirecionamento, que substituirá a rota definida anteriormente em `),Jc(907,`code`),Mk(908,`saveNew`),Kg(),Mk(909,`.`),Kg()()(),Jc(910,`tr`,65)(911,`td`,15)(912,`div`,16)(913,`span`,17),Mk(914,` resource`),_u(915,`br`),Kg()()(),Jc(916,`td`,18)(917,`code`,66),Mk(918,`any`),Kg()(),Jc(919,`td`,21)(920,`em`)(921,`strong`),Mk(922,`(opcional)`),Kg()(),Jc(923,`p`),Mk(924,`Recurso atualizado.`),Kg(),Jc(925,`p`),Mk(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Jc(927,`code`),Mk(928,`key: true`),Kg(),Mk(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),Kg(),Jc(930,`ul`)(931,`li`)(932,`p`),Mk(933,`recurso anterior com a propriedade id foi que definida como `),Jc(934,`em`),Mk(935,`key`),Kg(),Mk(936,`:`),Kg(),Jc(937,`pre`)(938,`code`),Mk(939,`{ id: 1, name: 'Ane' }
`),Kg()()(),Jc(940,`li`)(941,`p`),Mk(942,`recurso retornado no `),Jc(943,`code`),Mk(944,`beforeSaveNew`),Kg(),Mk(945,`:`),Kg(),Jc(946,`pre`)(947,`code`),Mk(948,`{ id: 50, age: 23 }
`),Kg()()(),Jc(949,`li`)(950,`p`),Mk(951,`Mesclagem do recurso:`),Kg(),Jc(952,`pre`)(953,`code`),Mk(954,`{ id: 1, name: 'Ane', age: 23 }
`),Kg()()()(),Jc(955,`blockquote`)(956,`p`),Mk(957,`Caso `),Jc(958,`code`),Mk(959,`allowAction`),Kg(),Mk(960,` seja `),Jc(961,`code`),Mk(962,`false`),Kg(),Mk(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),Kg()()()()(),Jc(964,`h4`,67)(965,`code`,5),Mk(966,`PoPageDynamicEditBeforeSave`),Kg()(),Jc(967,`div`,2)(968,`p`),Mk(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Jc(970,`code`),Mk(971,`beforeSave`),Kg(),Mk(972,`.`),Kg()(),Jc(973,`h4`,10),Mk(974,`Propriedades`),Kg(),Jc(975,`table`,11)(976,`tr`,12)(977,`th`,13),Mk(978,`Nome`),Kg(),Jc(979,`th`,13),Mk(980,`Tipo`),Kg(),Jc(981,`th`,13),Mk(982,`Descrição`),Kg()(),Jc(983,`tr`,68)(984,`td`,15)(985,`div`,16)(986,`span`,17),Mk(987,` allowAction`),_u(988,`br`),Kg()()(),Jc(989,`td`,18)(990,`code`,23),Mk(991,`boolean`),Kg()(),Jc(992,`td`,21)(993,`em`)(994,`strong`),Mk(995,`(opcional)`),Kg()(),Jc(996,`p`),Mk(997,`Define se deve ou não executar a ação salvar (save).`),Kg()()(),Jc(998,`tr`,69)(999,`td`,15)(1e3,`div`,16)(1001,`span`,17),Mk(1002,` newUrl`),_u(1003,`br`),Kg()()(),Jc(1004,`td`,18)(1005,`code`,27),Mk(1006,`string`),Kg()(),Jc(1007,`td`,21)(1008,`em`)(1009,`strong`),Mk(1010,`(opcional)`),Kg()(),Jc(1011,`p`),Mk(1012,`Nova rota para salvar o recurso, que substituirá a rota definida anteriormente em `),Jc(1013,`code`),Mk(1014,`save`),Kg(),Mk(1015,`.`),Kg()()(),Jc(1016,`tr`,70)(1017,`td`,15)(1018,`div`,16)(1019,`span`,17),Mk(1020,` resource`),_u(1021,`br`),Kg()()(),Jc(1022,`td`,18)(1023,`code`,66),Mk(1024,`any`),Kg()(),Jc(1025,`td`,21)(1026,`em`)(1027,`strong`),Mk(1028,`(opcional)`),Kg()(),Jc(1029,`p`),Mk(1030,`Recurso atualizado.`),Kg(),Jc(1031,`p`),Mk(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),Kg(),Jc(1033,`ul`)(1034,`li`)(1035,`p`),Mk(1036,`recurso anterior:`),Kg(),Jc(1037,`pre`)(1038,`code`),Mk(1039,`{ name: 'Ane' }
`),Kg()()(),Jc(1040,`li`)(1041,`p`),Mk(1042,`recurso retornado no `),Jc(1043,`code`),Mk(1044,`beforeSave`),Kg(),Mk(1045,`:`),Kg(),Jc(1046,`pre`)(1047,`code`),Mk(1048,`{ age: 23 }
`),Kg()()(),Jc(1049,`li`)(1050,`p`),Mk(1051,`Mesclagem do recurso:`),Kg(),Jc(1052,`pre`)(1053,`code`),Mk(1054,`{ name: 'Ane', age: 23 }
`),Kg()()()(),Jc(1055,`blockquote`)(1056,`p`),Mk(1057,`Caso `),Jc(1058,`code`),Mk(1059,`allowAction`),Kg(),Mk(1060,` seja `),Jc(1061,`code`),Mk(1062,`false`),Kg(),Mk(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),Kg()()()()(),Jc(1064,`h4`,71)(1065,`code`,5),Mk(1066,`PoPageDynamicEditField`),Kg()(),Jc(1067,`div`,2)(1068,`p`),Mk(1069,`Interface dos fields usados para compor o template `),Jc(1070,`code`),Mk(1071,`po-page-dynamic-edit`),Kg(),Mk(1072,`.
Herda as defini\xE7\xF5es da interface
`),Jc(1073,`a`,72),Mk(1074,`PoDynamicFormField`),Kg(),Mk(1075,`.`),Kg()(),Jc(1076,`h4`,10),Mk(1077,`Propriedades`),Kg(),Jc(1078,`table`,11)(1079,`tr`,12)(1080,`th`,13),Mk(1081,`Nome`),Kg(),Jc(1082,`th`,13),Mk(1083,`Tipo`),Kg(),Jc(1084,`th`,13),Mk(1085,`Descrição`),Kg()(),Jc(1086,`tr`,73)(1087,`td`,15)(1088,`div`,16)(1089,`span`,17),Mk(1090,` duplicate`),_u(1091,`br`),Kg()()(),Jc(1092,`td`,18)(1093,`code`,23),Mk(1094,`boolean`),Kg()(),Jc(1095,`td`,21)(1096,`em`)(1097,`strong`),Mk(1098,`(opcional)`),Kg()(),Jc(1099,`p`),Mk(1100,`Indica se o campo será duplicado caso seja executada a ação de duplicação.`),Kg()()()(),Jc(1101,`h4`,74)(1102,`code`,5),Mk(1103,`PoPageDynamicEditLiterals`),Kg()(),Jc(1104,`div`,2)(1105,`p`),Mk(1106,`Interface para definição das literais usadas no `),Jc(1107,`code`),Mk(1108,`po-page-dynamic-edit`),Kg(),Mk(1109,`.`),Kg()(),Jc(1110,`h4`,10),Mk(1111,`Propriedades`),Kg(),Jc(1112,`table`,11)(1113,`tr`,12)(1114,`th`,13),Mk(1115,`Nome`),Kg(),Jc(1116,`th`,13),Mk(1117,`Tipo`),Kg(),Jc(1118,`th`,13),Mk(1119,`Descrição`),Kg()(),Jc(1120,`tr`,75)(1121,`td`,15)(1122,`div`,16)(1123,`span`,17),Mk(1124,` cancelConfirmMessage`),_u(1125,`br`),Kg()()(),Jc(1126,`td`,18)(1127,`code`,27),Mk(1128,`string`),Kg()(),Jc(1129,`td`,21)(1130,`em`)(1131,`strong`),Mk(1132,`(opcional)`),Kg()(),Jc(1133,`p`),Mk(1134,`Texto exibido na mensagem de cancelamento da inclusão/edição.`),Kg()()(),Jc(1135,`tr`,76)(1136,`td`,15)(1137,`div`,16)(1138,`span`,17),Mk(1139,` detailActionNew`),_u(1140,`br`),Kg()()(),Jc(1141,`td`,18)(1142,`code`,27),Mk(1143,`string`),Kg()(),Jc(1144,`td`,21)(1145,`em`)(1146,`strong`),Mk(1147,`(opcional)`),Kg()(),Jc(1148,`p`),Mk(1149,`Rótulo exibido no botão `),Jc(1150,`code`),Mk(1151,`Novo`),Kg(),Mk(1152,`.`),Kg()()(),Jc(1153,`tr`,77)(1154,`td`,15)(1155,`div`,16)(1156,`span`,17),Mk(1157,` pageActionCancel`),_u(1158,`br`),Kg()()(),Jc(1159,`td`,18)(1160,`code`,27),Mk(1161,`string`),Kg()(),Jc(1162,`td`,21)(1163,`em`)(1164,`strong`),Mk(1165,`(opcional)`),Kg()(),Jc(1166,`p`),Mk(1167,`Rótulo exibido no botão `),Jc(1168,`code`),Mk(1169,`Cancelar`),Kg(),Mk(1170,`.`),Kg()()(),Jc(1171,`tr`,78)(1172,`td`,15)(1173,`div`,16)(1174,`span`,17),Mk(1175,` pageActionSave`),_u(1176,`br`),Kg()()(),Jc(1177,`td`,18)(1178,`code`,27),Mk(1179,`string`),Kg()(),Jc(1180,`td`,21)(1181,`em`)(1182,`strong`),Mk(1183,`(opcional)`),Kg()(),Jc(1184,`p`),Mk(1185,`Rótulo exibido no botão `),Jc(1186,`code`),Mk(1187,`Salvar`),Kg(),Mk(1188,`.`),Kg()()(),Jc(1189,`tr`,79)(1190,`td`,15)(1191,`div`,16)(1192,`span`,17),Mk(1193,` pageActionSaveNew`),_u(1194,`br`),Kg()()(),Jc(1195,`td`,18)(1196,`code`,27),Mk(1197,`string`),Kg()(),Jc(1198,`td`,21)(1199,`em`)(1200,`strong`),Mk(1201,`(opcional)`),Kg()(),Jc(1202,`p`),Mk(1203,`Rótulo exibido no botão `),Jc(1204,`code`),Mk(1205,`Salvar e novo`),Kg(),Mk(1206,`.`),Kg()()(),Jc(1207,`tr`,80)(1208,`td`,15)(1209,`div`,16)(1210,`span`,17),Mk(1211,` registerNotFound`),_u(1212,`br`),Kg()()(),Jc(1213,`td`,18)(1214,`code`,27),Mk(1215,`string`),Kg()(),Jc(1216,`td`,21)(1217,`em`)(1218,`strong`),Mk(1219,`(opcional)`),Kg()(),Jc(1220,`p`),Mk(1221,`Texto exibido para resgistro não encontrado.`),Kg()()(),Jc(1222,`tr`,81)(1223,`td`,15)(1224,`div`,16)(1225,`span`,17),Mk(1226,` saveNotificationError`),_u(1227,`br`),Kg()()(),Jc(1228,`td`,18)(1229,`code`,27),Mk(1230,`string`),Kg()(),Jc(1231,`td`,21)(1232,`em`)(1233,`strong`),Mk(1234,`(opcional)`),Kg()(),Jc(1235,`p`),Mk(1236,`Texto exibido para ocorrência de alguma inconsistência ao salvar.`),Kg()()(),Jc(1237,`tr`,82)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),Mk(1241,` saveNotificationSuccessSave`),_u(1242,`br`),Kg()()(),Jc(1243,`td`,18)(1244,`code`,27),Mk(1245,`string`),Kg()(),Jc(1246,`td`,21)(1247,`em`)(1248,`strong`),Mk(1249,`(opcional)`),Kg()(),Jc(1250,`p`),Mk(1251,`Texto exibido para recurso salvo com sucesso.`),Kg()()(),Jc(1252,`tr`,83)(1253,`td`,15)(1254,`div`,16)(1255,`span`,17),Mk(1256,` saveNotificationSuccessUpdate`),_u(1257,`br`),Kg()()(),Jc(1258,`td`,18)(1259,`code`,27),Mk(1260,`string`),Kg()(),Jc(1261,`td`,21)(1262,`em`)(1263,`strong`),Mk(1264,`(opcional)`),Kg()(),Jc(1265,`p`),Mk(1266,`Texto exibido para recurso atualizado com sucesso.`),Kg()()(),Jc(1267,`tr`,84)(1268,`td`,15)(1269,`div`,16)(1270,`span`,17),Mk(1271,` saveNotificationWarning`),_u(1272,`br`),Kg()()(),Jc(1273,`td`,18)(1274,`code`,27),Mk(1275,`string`),Kg()(),Jc(1276,`td`,21)(1277,`em`)(1278,`strong`),Mk(1279,`(opcional)`),Kg()(),Jc(1280,`p`),Mk(1281,`Texto exibido para adivertência de formulário preenchido de forma incorreta.`),Kg()()()(),Jc(1282,`h4`,85)(1283,`code`,5),Mk(1284,`PoPageDynamicEditMetadata`),Kg()(),Jc(1285,`div`,2)(1286,`p`),Mk(1287,`Interface para as propriedades de uma página dinâmica. `),_u(1288,`a`,86),Kg()(),Jc(1289,`h4`,10),Mk(1290,`Propriedades`),Kg(),Jc(1291,`table`,11)(1292,`tr`,12)(1293,`th`,13),Mk(1294,`Nome`),Kg(),Jc(1295,`th`,13),Mk(1296,`Tipo`),Kg(),Jc(1297,`th`,13),Mk(1298,`Descrição`),Kg()(),Jc(1299,`tr`,87)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),Mk(1303,` actions`),_u(1304,`br`),Kg()()(),Jc(1305,`td`,18)(1306,`code`,19),Mk(1307,`PoPageDynamicEditActions`),Kg()(),Jc(1308,`td`,21)(1309,`em`)(1310,`strong`),Mk(1311,`(opcional)`),Kg()(),Jc(1312,`p`),Mk(1313,`Ações que o usuário poderá executar na página através de botões.`),Kg()()(),Jc(1314,`tr`,88)(1315,`td`,15)(1316,`div`,16)(1317,`span`,17),Mk(1318,` autoRouter`),_u(1319,`br`),Kg()()(),Jc(1320,`td`,18)(1321,`code`,23),Mk(1322,`boolean`),Kg()(),Jc(1323,`td`,21)(1324,`em`)(1325,`strong`),Mk(1326,`(opcional)`),Kg()(),Jc(1327,`p`),Mk(1328,`Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `),Jc(1329,`code`),Mk(1330,`p-actions`),Kg()(),Jc(1331,`p`),Mk(1332,`As rotas criadas serão baseadas na propriedade `),Jc(1333,`code`),Mk(1334,`p-actions`),Kg(),Mk(1335,`.`),Kg(),Jc(1336,`blockquote`)(1337,`p`),Mk(1338,`Para o correto funcionamento não pode haver nenhuma rota coringa (`),Jc(1339,`code`),Mk(1340,`**`),Kg(),Mk(1341,`) especificada.`),Kg()()()(),Jc(1342,`tr`,89)(1343,`td`,15)(1344,`div`,16)(1345,`span`,17),Mk(1346,` breadcrumb`),_u(1347,`br`),Kg()()(),Jc(1348,`td`,18)(1349,`code`,25),Mk(1350,`PoBreadcrumb`),Kg()(),Jc(1351,`td`,21)(1352,`em`)(1353,`strong`),Mk(1354,`(opcional)`),Kg()(),Jc(1355,`p`),Mk(1356,`Objeto com propriedades do breadcrumb.`),Kg()()(),Jc(1357,`tr`,90)(1358,`td`,15)(1359,`div`,16)(1360,`span`,17),Mk(1361,` fields`),_u(1362,`br`),Kg()()(),Jc(1363,`td`,18)(1364,`code`,30),Mk(1365,`Array<PoPageDynamicEditField>`),Kg()(),Jc(1366,`td`,21)(1367,`em`)(1368,`strong`),Mk(1369,`(opcional)`),Kg()(),Jc(1370,`p`),Mk(1371,`Lista dos campos usados.`),Kg()()(),Jc(1372,`tr`,91)(1373,`td`,15)(1374,`div`,16)(1375,`span`,17),Mk(1376,` title`),_u(1377,`br`),Kg()()(),Jc(1378,`td`,18)(1379,`code`,27),Mk(1380,`string`),Kg()(),Jc(1381,`td`,21)(1382,`em`)(1383,`strong`),Mk(1384,`(opcional)`),Kg()(),Jc(1385,`p`),Mk(1386,`Título da página.`),Kg()()(),Jc(1387,`tr`,92)(1388,`td`,15)(1389,`div`,16)(1390,`span`,17),Mk(1391,` version`),_u(1392,`br`),Kg()()(),Jc(1393,`td`,18)(1394,`code`,93),Mk(1395,`number`),Kg()(),Jc(1396,`td`,21)(1397,`p`),Mk(1398,`Versão do metadado devolvido pelo backend.`),Kg()()()(),Jc(1399,`h4`,94)(1400,`code`,5),Mk(1401,`PoPageDynamicEditOptions`),Kg()(),Jc(1402,`div`,2)(1403,`p`),Mk(1404,`Interface para as propriedades de uma página dinâmica.`),Kg()(),Jc(1405,`h4`,10),Mk(1406,`Propriedades`),Kg(),Jc(1407,`table`,11)(1408,`tr`,12)(1409,`th`,13),Mk(1410,`Nome`),Kg(),Jc(1411,`th`,13),Mk(1412,`Tipo`),Kg(),Jc(1413,`th`,13),Mk(1414,`Descrição`),Kg()(),Jc(1415,`tr`,87)(1416,`td`,15)(1417,`div`,16)(1418,`span`,17),Mk(1419,` actions`),_u(1420,`br`),Kg()()(),Jc(1421,`td`,18)(1422,`code`,19),Mk(1423,`PoPageDynamicEditActions`),Kg()(),Jc(1424,`td`,21)(1425,`em`)(1426,`strong`),Mk(1427,`(opcional)`),Kg()(),Jc(1428,`p`),Mk(1429,`Ações que o usuário poderá executar na página através de botões.`),Kg()()(),Jc(1430,`tr`,89)(1431,`td`,15)(1432,`div`,16)(1433,`span`,17),Mk(1434,` breadcrumb`),_u(1435,`br`),Kg()()(),Jc(1436,`td`,18)(1437,`code`,25),Mk(1438,`PoBreadcrumb`),Kg()(),Jc(1439,`td`,21)(1440,`em`)(1441,`strong`),Mk(1442,`(opcional)`),Kg()(),Jc(1443,`p`),Mk(1444,`Objeto com propriedades do breadcrumb.`),Kg()()(),Jc(1445,`tr`,90)(1446,`td`,15)(1447,`div`,16)(1448,`span`,17),Mk(1449,` fields`),_u(1450,`br`),Kg()()(),Jc(1451,`td`,18)(1452,`code`,30),Mk(1453,`Array<PoPageDynamicEditField>`),Kg()(),Jc(1454,`td`,21)(1455,`em`)(1456,`strong`),Mk(1457,`(opcional)`),Kg()(),Jc(1458,`p`),Mk(1459,`Lista dos campos usados.`),Kg()()(),Jc(1460,`tr`,91)(1461,`td`,15)(1462,`div`,16)(1463,`span`,17),Mk(1464,` title`),_u(1465,`br`),Kg()()(),Jc(1466,`td`,18)(1467,`code`,27),Mk(1468,`string`),Kg()(),Jc(1469,`td`,21)(1470,`em`)(1471,`strong`),Mk(1472,`(opcional)`),Kg()(),Jc(1473,`p`),Mk(1474,`Título da página.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Z(a,ee){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-dynamic-edit-basic-view`)(2,`sample-po-page-dynamic-edit-user-view`),Kg()),a&2){let d=tk();Ab(`hidden`,d.activeTab!==`web`)}}var $=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;title=`Page Dynamic Edit`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(d,o){this.route=d,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let o=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Page Dynamic Edit · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(o,r){o&1&&(Jc(0,`po-page-default`,0),LO(1,Z,3,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-page-dynamic-edit-doc`),Kg()()),o&2&&(Ab(`p-title`,r.title)(`p-actions`,r.actions),wg(),jO(r.hidePoWebSample?-1:1),wg(),Ab(`hidden`,r.activeTab!==`doc`))},dependencies:[Mze,O,L,R],encapsulation:2,changeDetection:1})}return a})()}];var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild($),GV]})}return a})();var De=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,U]})}return a})();export{De as DocPoPageDynamicEditModule};