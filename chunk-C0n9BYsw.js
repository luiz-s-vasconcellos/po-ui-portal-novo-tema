import{m as P,p as M}from"./main-RU54IPUI.js";import{Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Mi as WL,Pr as I,Qn as AZ,Rn as xze,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,_n as q4,br as Fb,ca as ge,dn as oae,ea as de$1,er as Ab,fn as oi,ga as ik,ir as BY,it as Ru,jr as H_,li as QL,nr as B,nt as R4,qn as zze,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var re=(()=>{class i{poNotification=p(Ru);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`po-context-menu`,1),_t(`p-item-selected`,function(d){return o.onItemSelected(d)}),Kg()()),a&2&&(wg(),Ab(`p-items`,o.menuItems))},dependencies:[xze],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-context-menu-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Context Menu Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-context-menu-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,re],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{poNotification=p(Ru);contextTitle=B(`Cadastro`);title=B(`Funcionário`);expanded=B(!0);newItemLabel=B(``);selected=B(!1);menuItems=B([]);onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=KO();Jc(0,`div`,1)(1,`po-context-menu`,2),Zb(`p-expandedChange`,function(m){return U_(u),Rk(o.expanded,m)||(o.expanded=m),H_(m)}),_t(`p-item-selected`,function(m){return o.onItemSelected(m)}),Kg()(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(o.contextTitle,m)||(o.contextTitle=m),H_(m)}),Kg(),Jc(7,`po-input`,5),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(o.title,m)||(o.title=m),H_(m)}),Kg()(),Jc(8,`div`,3)(9,`po-switch`,6),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(o.expanded,m)||(o.expanded=m),H_(m)}),Kg()(),_u(10,`po-divider`),Jc(11,`div`,7)(12,`po-input`,8),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(o.newItemLabel,m)||(o.newItemLabel=m),H_(m)}),Kg(),Jc(13,`po-switch`,9),G0(),Zb(`ngModelChange`,function(m){return U_(u),Rk(o.selected,m)||(o.selected=m),H_(m)}),Kg(),Jc(14,`po-button`,10),_t(`p-click`,function(){return o.addItem()}),Kg()(),_u(15,`po-divider`),Jc(16,`div`,3)(17,`po-button`,11),_t(`p-click`,function(){return o.restore()}),Kg()()()}a&2&&(wg(),Ab(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),Kb(`p-expanded`,o.expanded),wg(5),Kb(`ngModel`,o.contextTitle),q0(),wg(),Kb(`ngModel`,o.title),q0(),wg(2),Kb(`ngModel`,o.expanded),q0(),wg(3),Kb(`ngModel`,o.newItemLabel),q0(),wg(),Kb(`ngModel`,o.selected),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,xze,Nf,j4,R4],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-context-menu-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Context Menu Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-context-menu-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-context-menu-wrapper">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return i})();var he=[`tab`];var se=(()=>{class i{tab=BY(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=B([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(l){this.updateSelectedItemMenu(l.label),this.tab().activateTab(l.label)}onActivatedTab(l){this.updateSelectedItemMenu(l.id)}updateSelectedItemMenu(l){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===l}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&Fb(o.tab,he,5),a&2&&ik()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(Jc(0,`po-context-tabs`,null,0)(2,`po-tab`,2),_t(`p-activated-tab`,function(d){return o.onActivatedTab(d)}),Jc(3,`div`,3)(4,`po-context-menu`,4),_t(`p-item-selected`,function(d){return o.onItemSelected(d)}),Kg(),Jc(5,`po-page-default`,5),_u(6,`po-dynamic-form`,6,1),Kg()()(),Jc(8,`po-tab`,7),_t(`p-activated-tab`,function(d){return o.onActivatedTab(d)}),Jc(9,`div`,3)(10,`po-context-menu`,4),_t(`p-item-selected`,function(d){return o.onItemSelected(d)}),Kg(),Jc(11,`po-page-default`,8),_u(12,`po-dynamic-form`,6,1),Kg()()(),Jc(14,`po-tab`,9),_t(`p-activated-tab`,function(d){return o.onActivatedTab(d)}),Jc(15,`div`,3)(16,`po-context-menu`,4),_t(`p-item-selected`,function(d){return o.onItemSelected(d)}),Kg(),Jc(17,`po-page-default`,10),_u(18,`po-table`,11),Kg()()()()),a&2&&(wg(4),Ab(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),wg(2),Ab(`p-fields`,o.formDadosCadastrais),wg(4),Ab(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),wg(2),Ab(`p-fields`,o.formEndereco),wg(4),Ab(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),wg(2),Ab(`p-items`,o.documentos))},dependencies:[xze,oae,Mze,q4,tre,zze],styles:[`po-context-tabs[_ngcontent-%COMP%]{--%NS%po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var ce=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-context-menu-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Context - Cadastro de Usuário`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-context-menu-user`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-context-tabs #tab>
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()(),Jc(23,`po-tab`,13)(24,`div`)(25,`label`,7),Mk(26,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),Kg(),Jc(27,`div`,14)(28,`pre`,15),Mk(29,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-context-menu-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-context-title`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-expanded`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[`id`,`event-p-item-selected`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-context-menu-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-context-menu-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-context-menu-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-context-menu-item-selected`,1,`docs-api-properties-row`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-context-menu.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoContextMenuComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-context-menu`),Kg(),Mk(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Jc(18,`code`),Mk(19,`po-menu`),Kg(),Mk(20,`, porém independente e focado em navegação contextual.`),Kg(),Jc(21,`p`),Mk(22,`No caso de uso do componente `),Jc(23,`code`),Mk(24,`po-page-default`),Kg(),Mk(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Jc(26,`strong`),Mk(27,`po-context-menu-wrapper`),Kg(),Mk(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),Kg(),Jc(29,`p`),Mk(30,`O uso simultâneo dos componentes `),Jc(31,`code`),Mk(32,`po-menu`),Kg(),Mk(33,` e `),Jc(34,`code`),Mk(35,`po-context-menu`),Kg(),Mk(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),Kg(),Jc(37,`h4`),Mk(38,`Tokens customizáveis`),Kg(),Jc(39,`p`),Mk(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(41,`blockquote`)(42,`p`),Mk(43,`Para maiores informações, acesse o guia `),Jc(44,`a`,6),Mk(45,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(46,`.`),Kg()(),Jc(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),Mk(51,`Propriedade`),Kg(),Jc(52,`th`),Mk(53,`Descrição`),Kg(),Jc(54,`th`),Mk(55,`Valor Padrão`),Kg()()(),Jc(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),Mk(60,`Default Values`),Kg()(),_u(61,`td`)(62,`td`),Kg(),Jc(63,`tr`)(64,`td`)(65,`code`),Mk(66,`--font-family`),Kg()(),Jc(67,`td`),Mk(68,`Família tipográfica usada`),Kg(),Jc(69,`td`)(70,`code`),Mk(71,`var(--font-family-theme)`),Kg()()(),Jc(72,`tr`)(73,`td`)(74,`code`),Mk(75,`--font-size`),Kg()(),Jc(76,`td`),Mk(77,`Tamanho da fonte dos itens`),Kg(),Jc(78,`td`)(79,`code`),Mk(80,`var(--font-size-default)`),Kg()()(),Jc(81,`tr`)(82,`td`)(83,`code`),Mk(84,`--font-size-context-title`),Kg()(),Jc(85,`td`),Mk(86,`Tamanho da fonte do título de contexto`),Kg(),Jc(87,`td`)(88,`code`),Mk(89,`var(--font-size-sm)`),Kg()()(),Jc(90,`tr`)(91,`td`)(92,`code`),Mk(93,`--font-size-title`),Kg()(),Jc(94,`td`),Mk(95,`Tamanho da fonte do título principal`),Kg(),Jc(96,`td`)(97,`code`),Mk(98,`var(--font-size-lg)`),Kg()()(),Jc(99,`tr`)(100,`td`)(101,`code`),Mk(102,`--line-height`),Kg()(),Jc(103,`td`),Mk(104,`Altura da linha`),Kg(),Jc(105,`td`)(106,`code`),Mk(107,`var(--line-height-md)`),Kg()()(),Jc(108,`tr`)(109,`td`)(110,`code`),Mk(111,`--border-radius`),Kg()(),Jc(112,`td`),Mk(113,`Raio dos cantos dos itens`),Kg(),Jc(114,`td`)(115,`code`),Mk(116,`var(--border-radius-md)`),Kg()()(),Jc(117,`tr`)(118,`td`)(119,`code`),Mk(120,`--border-color`),Kg()(),Jc(121,`td`),Mk(122,`Cor da borda lateral direita do componente`),Kg(),Jc(123,`td`)(124,`code`),Mk(125,`var(--color-neutral-light-20)`),Kg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--background-color`),Kg()(),Jc(130,`td`),Mk(131,`Cor de fundo do componente`),Kg(),Jc(132,`td`)(133,`code`),Mk(134,`var(--color-neutral-light-05)`),Kg()()(),Jc(135,`tr`)(136,`td`)(137,`code`),Mk(138,`--color`),Kg()(),Jc(139,`td`),Mk(140,`Cor do texto dos itens`),Kg(),Jc(141,`td`)(142,`code`),Mk(143,`var(--color-action-default)`),Kg()()(),Jc(144,`tr`)(145,`td`)(146,`code`),Mk(147,`--color-context-title`),Kg()(),Jc(148,`td`),Mk(149,`Cor do texto do título de contexto`),Kg(),Jc(150,`td`)(151,`code`),Mk(152,`var(--color-neutral-mid-40)`),Kg()()(),Jc(153,`tr`)(154,`td`)(155,`code`),Mk(156,`--color-title`),Kg()(),Jc(157,`td`),Mk(158,`Cor do texto do título principal`),Kg(),Jc(159,`td`)(160,`code`),Mk(161,`var(--color-neutral-dark-80)`),Kg()()(),Jc(162,`tr`)(163,`td`)(164,`code`),Mk(165,`--font-weight`),Kg()(),Jc(166,`td`),Mk(167,`Peso da fonte dos itens`),Kg(),Jc(168,`td`)(169,`code`),Mk(170,`var(--font-weight-bold)`),Kg()()(),Jc(171,`tr`)(172,`td`)(173,`code`),Mk(174,`--font-weight-title`),Kg()(),Jc(175,`td`),Mk(176,`Peso da fonte do título principal`),Kg(),Jc(177,`td`)(178,`code`),Mk(179,`var(--font-weight-bold)`),Kg()()(),Jc(180,`tr`)(181,`td`)(182,`code`),Mk(183,`--outline-color-focused`),Kg()(),Jc(184,`td`),Mk(185,`Cor do outline no estado de focus`),Kg(),Jc(186,`td`)(187,`code`),Mk(188,`var(--color-action-focus)`),Kg()()(),Jc(189,`tr`)(190,`td`)(191,`strong`),Mk(192,`Hover`),Kg()(),_u(193,`td`)(194,`td`),Kg(),Jc(195,`tr`)(196,`td`)(197,`code`),Mk(198,`--color-hover`),Kg()(),Jc(199,`td`),Mk(200,`Cor do texto no estado hover`),Kg(),Jc(201,`td`)(202,`code`),Mk(203,`var(--color-brand-01-darkest)`),Kg()()(),Jc(204,`tr`)(205,`td`)(206,`code`),Mk(207,`--background-color-hover`),Kg()(),Jc(208,`td`),Mk(209,`Cor de fundo no estado hover`),Kg(),Jc(210,`td`)(211,`code`),Mk(212,`var(--color-brand-01-lighter)`),Kg()()(),Jc(213,`tr`)(214,`td`)(215,`strong`),Mk(216,`Pressed`),Kg()(),_u(217,`td`)(218,`td`),Kg(),Jc(219,`tr`)(220,`td`)(221,`code`),Mk(222,`--background-color-pressed`),Kg()(),Jc(223,`td`),Mk(224,`Cor de fundo no estado pressed`),Kg(),Jc(225,`td`)(226,`code`),Mk(227,`var(--color-brand-01-light)`),Kg()()(),Jc(228,`tr`)(229,`td`)(230,`strong`),Mk(231,`Active (Selected)`),Kg()(),_u(232,`td`)(233,`td`),Kg(),Jc(234,`tr`)(235,`td`)(236,`code`),Mk(237,`--background-color-actived`),Kg()(),Jc(238,`td`),Mk(239,`Cor de fundo do item selecionado`),Kg(),Jc(240,`td`)(241,`code`),Mk(242,`var(--color-brand-01-lightest)`),Kg()()(),Jc(243,`tr`)(244,`td`)(245,`code`),Mk(246,`--color-actived`),Kg()(),Jc(247,`td`),Mk(248,`Cor do texto do item selecionado`),Kg(),Jc(249,`td`)(250,`code`),Mk(251,`var(--color-action-pressed)`),Kg()()()()()(),Jc(252,`div`,7)(253,`h4`,8),Mk(254,`Seletor`),Kg(),Jc(255,`pre`,9),Mk(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),Kg()(),Jc(257,`h4`,10),Mk(258,`Propriedades`),Kg(),Jc(259,`table`,11)(260,`tr`,12)(261,`th`,13),Mk(262,`Nome`),Kg(),Jc(263,`th`,13),Mk(264,`Tipo`),Kg(),Jc(265,`th`,13),Mk(266,`Padrão`),Kg(),Jc(267,`th`,13),Mk(268,`Descrição`),Kg()(),Jc(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),Mk(273,` p-context-title`),_u(274,`br`),Kg()()(),Jc(275,`td`,18)(276,`code`,19),Mk(277,`string`),Kg()(),Jc(278,`td`,20),Mk(279,`-`),Kg(),Jc(280,`td`,21)(281,`p`),Mk(282,`Título do contexto superior`),Kg()()(),Jc(283,`tr`,22)(284,`td`,15)(285,`div`,16)(286,`span`,17),Mk(287,` p-expanded`),_u(288,`br`),Kg()()(),Jc(289,`td`,18)(290,`code`,23),Mk(291,`boolean`),Kg()(),Jc(292,`td`,20)(293,`p`)(294,`code`),Mk(295,`true`),Kg()()(),Jc(296,`td`,21)(297,`p`),Mk(298,`Define se o menu está aberto ou fechado.`),Kg(),Jc(299,`p`),Mk(300,`Suporta two-way binding:`),Kg(),Jc(301,`pre`)(302,`code`,24),Mk(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),Kg()(),Jc(304,`p`),Mk(305,`ou`),Kg(),Jc(306,`pre`)(307,`code`,24),Mk(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),Kg()()()(),Jc(309,`tr`,25)(310,`td`,15)(311,`div`,26)(312,`span`,27),Mk(313,` (p-item-selected)`),_u(314,`br`),Kg()()(),Jc(315,`td`,18)(316,`code`,28),Mk(317,`EventEmitter`),Kg()(),Jc(318,`td`,20),Mk(319,`-`),Kg(),Jc(320,`td`,21)(321,`p`),Mk(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),Kg()()(),Jc(323,`tr`,29)(324,`td`,15)(325,`div`,16)(326,`span`,17),Mk(327,` p-items`),_u(328,`br`),Kg()()(),Jc(329,`td`,18)(330,`code`,30),Mk(331,`Array<PoContextMenuItem>`),Kg()(),Jc(332,`td`,20),Mk(333,`-`),Kg(),Jc(334,`td`,21)(335,`p`),Mk(336,`Lista de itens para renderização.`),Kg(),Jc(337,`blockquote`)(338,`p`),Mk(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),Jc(340,`code`),Mk(341,`selected: true`),Kg(),Mk(342,`.
Se mais de um item estiver com `),Jc(343,`code`),Mk(344,`selected: true`),Kg(),Mk(345,`, apenas o primeiro será mantido como selecionado.`),Kg()()()(),Jc(346,`tr`,31)(347,`td`,15)(348,`div`,16)(349,`span`,17),Mk(350,` p-title`),_u(351,`br`),Kg()()(),Jc(352,`td`,18)(353,`code`,19),Mk(354,`string`),Kg()(),Jc(355,`td`,20),Mk(356,`-`),Kg(),Jc(357,`td`,21)(358,`p`),Mk(359,`Título principal do menu`),Kg()()()(),Jc(360,`h3`),Mk(361,`Interfaces`),Kg(),Jc(362,`h4`,32)(363,`code`,5),Mk(364,`PoContextMenuItem`),Kg()(),Jc(365,`div`,2)(366,`p`),Mk(367,`Interface para os itens do componente po-context-menu.`),Kg()(),Jc(368,`h4`,10),Mk(369,`Propriedades`),Kg(),Jc(370,`table`,11)(371,`tr`,12)(372,`th`,13),Mk(373,`Nome`),Kg(),Jc(374,`th`,13),Mk(375,`Tipo`),Kg(),Jc(376,`th`,13),Mk(377,`Descrição`),Kg()(),Jc(378,`tr`,33)(379,`td`,15)(380,`div`,16)(381,`span`,17),Mk(382,` action`),_u(383,`br`),Kg()()(),Jc(384,`td`,18)(385,`code`,34),Mk(386,`Function`),Kg()(),Jc(387,`td`,21)(388,`em`)(389,`strong`),Mk(390,`(opcional)`),Kg()(),Jc(391,`p`),Mk(392,`Ação executada ao clicar no item.`),Kg()()(),Jc(393,`tr`,35)(394,`td`,15)(395,`div`,16)(396,`span`,17),Mk(397,` label`),_u(398,`br`),Kg()()(),Jc(399,`td`,18)(400,`code`,19),Mk(401,`string`),Kg()(),Jc(402,`td`,21)(403,`p`),Mk(404,`Texto do item de menu.`),Kg()()(),Jc(405,`tr`,36)(406,`td`,15)(407,`div`,16)(408,`span`,17),Mk(409,` selected`),_u(410,`br`),Kg()()(),Jc(411,`td`,18)(412,`code`,23),Mk(413,`boolean`),Kg()(),Jc(414,`td`,21)(415,`em`)(416,`strong`),Mk(417,`(opcional)`),Kg()(),Jc(418,`p`),Mk(419,`Estado de seleção do item.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Me(i,we){if(i&1&&(Jc(0,`div`,1),_u(1,`sample-po-context-menu-basic-view`)(2,`sample-po-context-menu-labs-view`)(3,`sample-po-context-menu-user-view`),Kg()),i&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var Pe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Context Menu`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Context Menu · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,0),LO(1,Me,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-context-menu-doc`),Kg()()),a&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,me,pe,ce,ue],encapsulation:2,changeDetection:1})}return i})()}];var be=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de$1({imports:[GV.forChild(Pe),GV]})}return i})();var ut=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de$1({imports:[M,be]})}return i})();export{ut as DocPoContextMenuModule};