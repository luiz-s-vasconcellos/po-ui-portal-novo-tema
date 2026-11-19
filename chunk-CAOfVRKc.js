import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,G as Nf,Ii as WL,Ir as Kb,Ja as rk,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qn as zze,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,ii as Pb,io as vu,ji as Vk,li as Qc,na as de,oo as wg,or as B,qn as xze,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,tt as R4,ua as ge$1,vi as Sk,wn as q4,wr as GV,xa as jY,xi as Tk,xr as FO,yn as oae}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var se=(()=>{class i{poNotification=p(Ru);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`po-context-menu`,1),vt(`p-item-selected`,function(p){return o.onItemSelected(p)}),Kg()()),a&2&&(wg(),Rb(`p-items`,o.menuItems))},dependencies:[xze],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-context-menu-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Context Menu Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-basic',
  templateUrl: './sample-po-context-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuBasicComponent {
  readonly poNotification = inject(PoNotificationService);

  menuItems: Array<PoContextMenuItem> = [
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ];

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-context-menu-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ve,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{poNotification=p(Ru);contextTitle=B(`Cadastro`);title=B(`Funcionário`);expanded=B(!0);newItemLabel=B(``);selected=B(!1);menuItems=B([]);onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=YO();Qc(0,`div`,1)(1,`po-context-menu`,2),Kb(`p-expandedChange`,function(d){return B_(u),Tk(o.expanded,d)||(o.expanded=d),U_(d)}),vt(`p-item-selected`,function(d){return o.onItemSelected(d)}),Kg()(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(d){return B_(u),Tk(o.contextTitle,d)||(o.contextTitle=d),U_(d)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(d){return B_(u),Tk(o.title,d)||(o.title=d),U_(d)}),Kg()(),Qc(8,`div`,3)(9,`po-switch`,6),z0(),Kb(`ngModelChange`,function(d){return B_(u),Tk(o.expanded,d)||(o.expanded=d),U_(d)}),Kg()(),vu(10,`po-divider`),Qc(11,`div`,7)(12,`po-input`,8),z0(),Kb(`ngModelChange`,function(d){return B_(u),Tk(o.newItemLabel,d)||(o.newItemLabel=d),U_(d)}),Kg(),Qc(13,`po-switch`,9),z0(),Kb(`ngModelChange`,function(d){return B_(u),Tk(o.selected,d)||(o.selected=d),U_(d)}),Kg(),Qc(14,`po-button`,10),vt(`p-click`,function(){return o.addItem()}),Kg()(),vu(15,`po-divider`),Qc(16,`div`,3)(17,`po-button`,11),vt(`p-click`,function(){return o.restore()}),Kg()()()}a&2&&(wg(),Rb(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),Yb(`p-expanded`,o.expanded),wg(5),Yb(`ngModel`,o.contextTitle),W0(),wg(),Yb(`ngModel`,o.title),W0(),wg(2),Yb(`ngModel`,o.expanded),W0(),wg(3),Yb(`ngModel`,o.newItemLabel),W0(),wg(),Yb(`ngModel`,o.selected),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,xze,Nf,j4,R4],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-context-menu-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Context Menu Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-context-menu-wrapper">
  <po-context-menu
    [p-context-title]="contextTitle()"
    [p-title]="title()"
    [p-items]="menuItems()"
    [(p-expanded)]="expanded"
    (p-item-selected)="onItemSelected($event)"
  />
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="contextTitle" [(ngModel)]="contextTitle" p-label="Context Title" p-clean />

    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-clean />
  </div>

  <div class="po-row">
    <po-switch
      class="po-md-6"
      name="expanded"
      [(ngModel)]="expanded"
      p-label="Expanded"
      p-label-off="Collapsed"
      p-label-on="Expanded"
    />
  </div>

  <po-divider />

  <div class="po-row po-pb-1">
    <po-input class="po-md-6" name="newItemLabel" [(ngModel)]="newItemLabel" p-label="New Item Label" />

    <po-switch
      class="po-md-6"
      name="Selected"
      [(ngModel)]="selected"
      p-label="Selected"
      p-help="Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado."
    />

    <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()" />
  </div>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-labs',
  templateUrl: './sample-po-context-menu-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuLabsComponent {
  readonly poNotification = inject(PoNotificationService);

  contextTitle = signal<string>('Cadastro');
  title = signal<string>('Funcion\xE1rio');
  expanded = signal<boolean>(true);
  newItemLabel = signal<string>('');
  selected = signal<boolean>(false);

  menuItems = signal<Array<PoContextMenuItem>>([]);

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }

  addItem(): void {
    if (!this.newItemLabel()) {
      return;
    }

    this.menuItems.set([...this.menuItems(), { label: this.newItemLabel(), selected: this.selected() }]);
    this.newItemLabel.set('');
    this.selected.set(false);
  }

  restore(): void {
    this.contextTitle.set('Cadastro');
    this.title.set('Funcion\xE1rio');
    this.expanded.set(true);
    this.newItemLabel.set('');
    this.selected.set(false);
    this.menuItems.set([]);
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-context-menu-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,xe],encapsulation:2,changeDetection:1})}return i})();var Te=[`tab`];var Ce=(()=>{class i{tab=jY(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=B([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(l){this.updateSelectedItemMenu(l.label),this.tab().activateTab(l.label)}onActivatedTab(l){this.updateSelectedItemMenu(l.id)}updateSelectedItemMenu(l){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===l}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&Pb(o.tab,Te,5),a&2&&rk()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(Qc(0,`po-context-tabs`,null,0)(2,`po-tab`,2),vt(`p-activated-tab`,function(p){return o.onActivatedTab(p)}),Qc(3,`div`,3)(4,`po-context-menu`,4),vt(`p-item-selected`,function(p){return o.onItemSelected(p)}),Kg(),Qc(5,`po-page-default`,5),vu(6,`po-dynamic-form`,6,1),Kg()()(),Qc(8,`po-tab`,7),vt(`p-activated-tab`,function(p){return o.onActivatedTab(p)}),Qc(9,`div`,3)(10,`po-context-menu`,4),vt(`p-item-selected`,function(p){return o.onItemSelected(p)}),Kg(),Qc(11,`po-page-default`,8),vu(12,`po-dynamic-form`,6,1),Kg()()(),Qc(14,`po-tab`,9),vt(`p-activated-tab`,function(p){return o.onActivatedTab(p)}),Qc(15,`div`,3)(16,`po-context-menu`,4),vt(`p-item-selected`,function(p){return o.onItemSelected(p)}),Kg(),Qc(17,`po-page-default`,10),vu(18,`po-table`,11),Kg()()()()),a&2&&(wg(4),Rb(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),wg(2),Rb(`p-fields`,o.formDadosCadastrais),wg(4),Rb(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),wg(2),Rb(`p-fields`,o.formEndereco),wg(4),Rb(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),wg(2),Rb(`p-items`,o.documentos))},dependencies:[xze,oae,Mze,q4,tre,zze],styles:[`po-context-tabs[_ngcontent-%COMP%]{--%NS%po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:33,vars:6,consts:[[`id`,`sample-po-context-menu-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Context - Cadastro de Usuário`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-context-tabs #tab>
  <po-tab
    p-label="Dados cadastrais"
    p-hide-close
    p-active
    id="Dados cadastrais"
    (p-activated-tab)="onActivatedTab($event)"
  >
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Dados cadastrais">
        <po-dynamic-form #dynamicForm [p-fields]="formDadosCadastrais" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Endere\xE7os" id="Endere\xE7os" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Endere\xE7os">
        <po-dynamic-form #dynamicForm [p-fields]="formEndereco" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Documentos" id="Documentos" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Documentos">
        <po-table [p-items]="documentos" />
      </po-page-default>
    </div>
  </po-tab>
</po-context-tabs>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoContextMenuItem, PoContextTabsComponent, PoDynamicFormField, PoTabComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-user',
  templateUrl: './sample-po-context-menu-user.component.html',
  styleUrls: ['./sample-po-context-menu-user.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuUserComponent {
  private readonly tab = viewChild<PoContextTabsComponent>('tab');
  contextTitle = 'Cadastro';
  title = 'Usu\xE1rio';

  menuItems = signal<Array<PoContextMenuItem>>([
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ]);

  formDadosCadastrais: Array<PoDynamicFormField> = [
    {
      property: 'name',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.'
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 }
  ];

  formEndereco: Array<PoDynamicFormField> = [
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' }
  ];

  documentos = [
    { Documento: 'CPF', Valor: '987.xxx.xxx-60' },
    { Documento: 'Passporte', Valor: '123456xxx-1' }
  ];

  onItemSelected(value: PoContextMenuItem) {
    this.updateSelectedItemMenu(value.label);
    this.tab().activateTab(value.label);
  }

  onActivatedTab(value: PoTabComponent) {
    this.updateSelectedItemMenu(value.id);
  }

  private updateSelectedItemMenu(label: string) {
    const menuItems = this.menuItems().map(x => ({ ...x, selected: x.label === label }));
    this.menuItems.set(menuItems);
  }
}
`),Kg()()()(),Qc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Sk(26,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),Kg(),Qc(27,`div`,13)(28,`pre`,14),Sk(29,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),Kg()()()()()(),Qc(30,`div`,15),vu(31,`sample-po-context-menu-user`),Kg(),vu(32,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,De,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-context-menu-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-context-title`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-expanded`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[`id`,`event-p-item-selected`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-context-menu-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-context-menu-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-context-menu-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-context-menu-item-selected`,1,`docs-api-properties-row`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-context-menu.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoContextMenuComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-context-menu`),Kg(),Sk(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Qc(18,`code`),Sk(19,`po-menu`),Kg(),Sk(20,`, porém independente e focado em navegação contextual.`),Kg(),Qc(21,`p`),Sk(22,`No caso de uso do componente `),Qc(23,`code`),Sk(24,`po-page-default`),Kg(),Sk(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Qc(26,`strong`),Sk(27,`po-context-menu-wrapper`),Kg(),Sk(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),Kg(),Qc(29,`p`),Sk(30,`O uso simultâneo dos componentes `),Qc(31,`code`),Sk(32,`po-menu`),Kg(),Sk(33,` e `),Qc(34,`code`),Sk(35,`po-context-menu`),Kg(),Sk(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),Kg(),Qc(37,`h4`),Sk(38,`Tokens customizáveis`),Kg(),Qc(39,`p`),Sk(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(41,`blockquote`)(42,`p`),Sk(43,`Para maiores informações, acesse o guia `),Qc(44,`a`,6),Sk(45,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(46,`.`),Kg()(),Qc(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),Sk(51,`Propriedade`),Kg(),Qc(52,`th`),Sk(53,`Descrição`),Kg(),Qc(54,`th`),Sk(55,`Valor Padrão`),Kg()()(),Qc(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),Sk(60,`Default Values`),Kg()(),vu(61,`td`)(62,`td`),Kg(),Qc(63,`tr`)(64,`td`)(65,`code`),Sk(66,`--font-family`),Kg()(),Qc(67,`td`),Sk(68,`Família tipográfica usada`),Kg(),Qc(69,`td`)(70,`code`),Sk(71,`var(--font-family-theme)`),Kg()()(),Qc(72,`tr`)(73,`td`)(74,`code`),Sk(75,`--font-size`),Kg()(),Qc(76,`td`),Sk(77,`Tamanho da fonte dos itens`),Kg(),Qc(78,`td`)(79,`code`),Sk(80,`var(--font-size-default)`),Kg()()(),Qc(81,`tr`)(82,`td`)(83,`code`),Sk(84,`--font-size-context-title`),Kg()(),Qc(85,`td`),Sk(86,`Tamanho da fonte do título de contexto`),Kg(),Qc(87,`td`)(88,`code`),Sk(89,`var(--font-size-sm)`),Kg()()(),Qc(90,`tr`)(91,`td`)(92,`code`),Sk(93,`--font-size-title`),Kg()(),Qc(94,`td`),Sk(95,`Tamanho da fonte do título principal`),Kg(),Qc(96,`td`)(97,`code`),Sk(98,`var(--font-size-lg)`),Kg()()(),Qc(99,`tr`)(100,`td`)(101,`code`),Sk(102,`--line-height`),Kg()(),Qc(103,`td`),Sk(104,`Altura da linha`),Kg(),Qc(105,`td`)(106,`code`),Sk(107,`var(--line-height-md)`),Kg()()(),Qc(108,`tr`)(109,`td`)(110,`code`),Sk(111,`--border-radius`),Kg()(),Qc(112,`td`),Sk(113,`Raio dos cantos dos itens`),Kg(),Qc(114,`td`)(115,`code`),Sk(116,`var(--border-radius-md)`),Kg()()(),Qc(117,`tr`)(118,`td`)(119,`code`),Sk(120,`--border-color`),Kg()(),Qc(121,`td`),Sk(122,`Cor da borda lateral direita do componente`),Kg(),Qc(123,`td`)(124,`code`),Sk(125,`var(--color-neutral-light-20)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--background-color`),Kg()(),Qc(130,`td`),Sk(131,`Cor de fundo do componente`),Kg(),Qc(132,`td`)(133,`code`),Sk(134,`var(--color-neutral-light-05)`),Kg()()(),Qc(135,`tr`)(136,`td`)(137,`code`),Sk(138,`--color`),Kg()(),Qc(139,`td`),Sk(140,`Cor do texto dos itens`),Kg(),Qc(141,`td`)(142,`code`),Sk(143,`var(--color-action-default)`),Kg()()(),Qc(144,`tr`)(145,`td`)(146,`code`),Sk(147,`--color-context-title`),Kg()(),Qc(148,`td`),Sk(149,`Cor do texto do título de contexto`),Kg(),Qc(150,`td`)(151,`code`),Sk(152,`var(--color-neutral-mid-40)`),Kg()()(),Qc(153,`tr`)(154,`td`)(155,`code`),Sk(156,`--color-title`),Kg()(),Qc(157,`td`),Sk(158,`Cor do texto do título principal`),Kg(),Qc(159,`td`)(160,`code`),Sk(161,`var(--color-neutral-dark-80)`),Kg()()(),Qc(162,`tr`)(163,`td`)(164,`code`),Sk(165,`--font-weight`),Kg()(),Qc(166,`td`),Sk(167,`Peso da fonte dos itens`),Kg(),Qc(168,`td`)(169,`code`),Sk(170,`var(--font-weight-bold)`),Kg()()(),Qc(171,`tr`)(172,`td`)(173,`code`),Sk(174,`--font-weight-title`),Kg()(),Qc(175,`td`),Sk(176,`Peso da fonte do título principal`),Kg(),Qc(177,`td`)(178,`code`),Sk(179,`var(--font-weight-bold)`),Kg()()(),Qc(180,`tr`)(181,`td`)(182,`code`),Sk(183,`--outline-color-focused`),Kg()(),Qc(184,`td`),Sk(185,`Cor do outline no estado de focus`),Kg(),Qc(186,`td`)(187,`code`),Sk(188,`var(--color-action-focus)`),Kg()()(),Qc(189,`tr`)(190,`td`)(191,`strong`),Sk(192,`Hover`),Kg()(),vu(193,`td`)(194,`td`),Kg(),Qc(195,`tr`)(196,`td`)(197,`code`),Sk(198,`--color-hover`),Kg()(),Qc(199,`td`),Sk(200,`Cor do texto no estado hover`),Kg(),Qc(201,`td`)(202,`code`),Sk(203,`var(--color-brand-01-darkest)`),Kg()()(),Qc(204,`tr`)(205,`td`)(206,`code`),Sk(207,`--background-color-hover`),Kg()(),Qc(208,`td`),Sk(209,`Cor de fundo no estado hover`),Kg(),Qc(210,`td`)(211,`code`),Sk(212,`var(--color-brand-01-lighter)`),Kg()()(),Qc(213,`tr`)(214,`td`)(215,`strong`),Sk(216,`Pressed`),Kg()(),vu(217,`td`)(218,`td`),Kg(),Qc(219,`tr`)(220,`td`)(221,`code`),Sk(222,`--background-color-pressed`),Kg()(),Qc(223,`td`),Sk(224,`Cor de fundo no estado pressed`),Kg(),Qc(225,`td`)(226,`code`),Sk(227,`var(--color-brand-01-light)`),Kg()()(),Qc(228,`tr`)(229,`td`)(230,`strong`),Sk(231,`Active (Selected)`),Kg()(),vu(232,`td`)(233,`td`),Kg(),Qc(234,`tr`)(235,`td`)(236,`code`),Sk(237,`--background-color-actived`),Kg()(),Qc(238,`td`),Sk(239,`Cor de fundo do item selecionado`),Kg(),Qc(240,`td`)(241,`code`),Sk(242,`var(--color-brand-01-lightest)`),Kg()()(),Qc(243,`tr`)(244,`td`)(245,`code`),Sk(246,`--color-actived`),Kg()(),Qc(247,`td`),Sk(248,`Cor do texto do item selecionado`),Kg(),Qc(249,`td`)(250,`code`),Sk(251,`var(--color-action-pressed)`),Kg()()()()()(),Qc(252,`div`,7)(253,`h4`,8),Sk(254,`Seletor`),Kg(),Qc(255,`pre`,9),Sk(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),Kg()(),Qc(257,`h4`,10),Sk(258,`Propriedades`),Kg(),Qc(259,`table`,11)(260,`tr`,12)(261,`th`,13),Sk(262,`Nome`),Kg(),Qc(263,`th`,13),Sk(264,`Tipo`),Kg(),Qc(265,`th`,13),Sk(266,`Padrão`),Kg(),Qc(267,`th`,13),Sk(268,`Descrição`),Kg()(),Qc(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),Sk(273,` p-context-title`),vu(274,`br`),Kg()()(),Qc(275,`td`,18)(276,`code`,19),Sk(277,`string`),Kg()(),Qc(278,`td`,20),Sk(279,`-`),Kg(),Qc(280,`td`,21)(281,`p`),Sk(282,`Título do contexto superior`),Kg()()(),Qc(283,`tr`,22)(284,`td`,15)(285,`div`,16)(286,`span`,17),Sk(287,` p-expanded`),vu(288,`br`),Kg()()(),Qc(289,`td`,18)(290,`code`,23),Sk(291,`boolean`),Kg()(),Qc(292,`td`,20)(293,`p`)(294,`code`),Sk(295,`true`),Kg()()(),Qc(296,`td`,21)(297,`p`),Sk(298,`Define se o menu está aberto ou fechado.`),Kg(),Qc(299,`p`),Sk(300,`Suporta two-way binding:`),Kg(),Qc(301,`pre`)(302,`code`,24),Sk(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),Kg()(),Qc(304,`p`),Sk(305,`ou`),Kg(),Qc(306,`pre`)(307,`code`,24),Sk(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),Kg()()()(),Qc(309,`tr`,25)(310,`td`,15)(311,`div`,26)(312,`span`,27),Sk(313,` (p-item-selected)`),vu(314,`br`),Kg()()(),Qc(315,`td`,18)(316,`code`,28),Sk(317,`EventEmitter`),Kg()(),Qc(318,`td`,20),Sk(319,`-`),Kg(),Qc(320,`td`,21)(321,`p`),Sk(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),Kg()()(),Qc(323,`tr`,29)(324,`td`,15)(325,`div`,16)(326,`span`,17),Sk(327,` p-items`),vu(328,`br`),Kg()()(),Qc(329,`td`,18)(330,`code`,30),Sk(331,`Array<PoContextMenuItem>`),Kg()(),Qc(332,`td`,20),Sk(333,`-`),Kg(),Qc(334,`td`,21)(335,`p`),Sk(336,`Lista de itens para renderização.`),Kg(),Qc(337,`blockquote`)(338,`p`),Sk(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),Qc(340,`code`),Sk(341,`selected: true`),Kg(),Sk(342,`.
Se mais de um item estiver com `),Qc(343,`code`),Sk(344,`selected: true`),Kg(),Sk(345,`, apenas o primeiro será mantido como selecionado.`),Kg()()()(),Qc(346,`tr`,31)(347,`td`,15)(348,`div`,16)(349,`span`,17),Sk(350,` p-title`),vu(351,`br`),Kg()()(),Qc(352,`td`,18)(353,`code`,19),Sk(354,`string`),Kg()(),Qc(355,`td`,20),Sk(356,`-`),Kg(),Qc(357,`td`,21)(358,`p`),Sk(359,`Título principal do menu`),Kg()()()(),Qc(360,`h3`),Sk(361,`Interfaces`),Kg(),Qc(362,`h4`,32)(363,`code`,5),Sk(364,`PoContextMenuItem`),Kg()(),Qc(365,`div`,2)(366,`p`),Sk(367,`Interface para os itens do componente po-context-menu.`),Kg()(),Qc(368,`h4`,10),Sk(369,`Propriedades`),Kg(),Qc(370,`table`,11)(371,`tr`,12)(372,`th`,13),Sk(373,`Nome`),Kg(),Qc(374,`th`,13),Sk(375,`Tipo`),Kg(),Qc(376,`th`,13),Sk(377,`Descrição`),Kg()(),Qc(378,`tr`,33)(379,`td`,15)(380,`div`,16)(381,`span`,17),Sk(382,` action`),vu(383,`br`),Kg()()(),Qc(384,`td`,18)(385,`code`,34),Sk(386,`Function`),Kg()(),Qc(387,`td`,21)(388,`em`)(389,`strong`),Sk(390,`(opcional)`),Kg()(),Qc(391,`p`),Sk(392,`Ação executada ao clicar no item.`),Kg()()(),Qc(393,`tr`,35)(394,`td`,15)(395,`div`,16)(396,`span`,17),Sk(397,` label`),vu(398,`br`),Kg()()(),Qc(399,`td`,18)(400,`code`,19),Sk(401,`string`),Kg()(),Qc(402,`td`,21)(403,`p`),Sk(404,`Texto do item de menu.`),Kg()()(),Qc(405,`tr`,36)(406,`td`,15)(407,`div`,16)(408,`span`,17),Sk(409,` selected`),vu(410,`br`),Kg()()(),Qc(411,`td`,18)(412,`code`,23),Sk(413,`boolean`),Kg()(),Qc(414,`td`,21)(415,`em`)(416,`strong`),Sk(417,`(opcional)`),Kg()(),Qc(418,`p`),Sk(419,`Estado de seleção do item.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function ke(i,Ve){if(i&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-context-menu-basic-view`)(2,`sample-po-context-menu-labs-view`)(3,`sample-po-context-menu-user-view`),Kg()}if(i&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Context Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ke,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-context-menu-doc`),Kg()()()),a&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,be,Se,ge],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(Fe),GV]})}return i})();var Et=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,fe]})}return i})();export{Et as DocPoContextMenuModule};