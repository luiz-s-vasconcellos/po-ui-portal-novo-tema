import{n as s,t as r}from"./chunk-zystk1pz.js";import{$ as R4,$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ri as Zg,Rr as Kb,Sa as ok,Sn as q4,Ti as W0,U as Nf,Vi as _u,Wn as xze,Yi as eF,Yn as zze,_n as oae,an as j4,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,ri as Pb,rr as BY,tr as B,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var pe=(()=>{class i{poNotification=p(Ru);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`po-context-menu`,1),vt(`p-item-selected`,function(s){return o.onItemSelected(s)}),Zg()()),a&2&&(Ig(),Rb(`p-items`,o.menuItems))},dependencies:[xze],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Context Menu Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-context-menu-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ve,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,pe],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{poNotification=p(Ru);contextTitle=B(`Cadastro`);title=B(`Funcionário`);expanded=B(!0);newItemLabel=B(``);selected=B(!1);menuItems=B([]);onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=ZO();Jc(0,`div`,1)(1,`po-context-menu`,2),Kb(`p-expandedChange`,function(d){return U_(u),Ak(o.expanded,d)||(o.expanded=d),H_(d)}),vt(`p-item-selected`,function(d){return o.onItemSelected(d)}),Zg()(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),W0(),Kb(`ngModelChange`,function(d){return U_(u),Ak(o.contextTitle,d)||(o.contextTitle=d),H_(d)}),Zg(),Jc(7,`po-input`,5),W0(),Kb(`ngModelChange`,function(d){return U_(u),Ak(o.title,d)||(o.title=d),H_(d)}),Zg()(),Jc(8,`div`,3)(9,`po-switch`,6),W0(),Kb(`ngModelChange`,function(d){return U_(u),Ak(o.expanded,d)||(o.expanded=d),H_(d)}),Zg()(),_u(10,`po-divider`),Jc(11,`div`,7)(12,`po-input`,8),W0(),Kb(`ngModelChange`,function(d){return U_(u),Ak(o.newItemLabel,d)||(o.newItemLabel=d),H_(d)}),Zg(),Jc(13,`po-switch`,9),W0(),Kb(`ngModelChange`,function(d){return U_(u),Ak(o.selected,d)||(o.selected=d),H_(d)}),Zg(),Jc(14,`po-button`,10),vt(`p-click`,function(){return o.addItem()}),Zg()(),_u(15,`po-divider`),Jc(16,`div`,3)(17,`po-button`,11),vt(`p-click`,function(){return o.restore()}),Zg()()()}a&2&&(Ig(),Rb(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),Yb(`p-expanded`,o.expanded),Ig(5),Yb(`ngModel`,o.contextTitle),Y0(),Ig(),Yb(`ngModel`,o.title),Y0(),Ig(2),Yb(`ngModel`,o.expanded),Y0(),Ig(3),Yb(`ngModel`,o.newItemLabel),Y0(),Ig(),Yb(`ngModel`,o.selected),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,xze,Nf,j4,R4],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var xe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Context Menu Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-context-menu-wrapper">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-context-menu-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return i})();var Te=[`tab`];var Ce=(()=>{class i{tab=BY(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=B([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(l){this.updateSelectedItemMenu(l.label),this.tab().activateTab(l.label)}onActivatedTab(l){this.updateSelectedItemMenu(l.id)}updateSelectedItemMenu(l){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===l}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&Pb(o.tab,Te,5),a&2&&ok()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(Jc(0,`po-context-tabs`,null,0)(2,`po-tab`,2),vt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Jc(3,`div`,3)(4,`po-context-menu`,4),vt(`p-item-selected`,function(s){return o.onItemSelected(s)}),Zg(),Jc(5,`po-page-default`,5),_u(6,`po-dynamic-form`,6,1),Zg()()(),Jc(8,`po-tab`,7),vt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Jc(9,`div`,3)(10,`po-context-menu`,4),vt(`p-item-selected`,function(s){return o.onItemSelected(s)}),Zg(),Jc(11,`po-page-default`,8),_u(12,`po-dynamic-form`,6,1),Zg()()(),Jc(14,`po-tab`,9),vt(`p-activated-tab`,function(s){return o.onActivatedTab(s)}),Jc(15,`div`,3)(16,`po-context-menu`,4),vt(`p-item-selected`,function(s){return o.onItemSelected(s)}),Zg(),Jc(17,`po-page-default`,10),_u(18,`po-table`,11),Zg()()()()),a&2&&(Ig(4),Rb(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Ig(2),Rb(`p-fields`,o.formDadosCadastrais),Ig(4),Rb(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Ig(2),Rb(`p-fields`,o.formEndereco),Ig(4),Rb(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),Ig(2),Rb(`p-items`,o.documentos))},dependencies:[xze,oae,Mze,q4,tre,zze],styles:[`po-context-tabs[_ngcontent-%COMP%]{--%NS%po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Context - Cadastro de Usuário`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-context-tabs #tab>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-context-menu-user`),Zg(),_u(29,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,De,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-context-menu.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoContextMenuComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-context-menu`),Zg(),Tk(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Jc(18,`code`),Tk(19,`po-menu`),Zg(),Tk(20,`, porém independente e focado em navegação contextual.`),Zg(),Jc(21,`p`),Tk(22,`No caso de uso do componente `),Jc(23,`code`),Tk(24,`po-page-default`),Zg(),Tk(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Jc(26,`strong`),Tk(27,`po-context-menu-wrapper`),Zg(),Tk(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),Zg(),Jc(29,`p`),Tk(30,`O uso simultâneo dos componentes `),Jc(31,`code`),Tk(32,`po-menu`),Zg(),Tk(33,` e `),Jc(34,`code`),Tk(35,`po-context-menu`),Zg(),Tk(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),Zg(),Jc(37,`h4`),Tk(38,`Tokens customizáveis`),Zg(),Jc(39,`p`),Tk(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(41,`blockquote`)(42,`p`),Tk(43,`Para maiores informações, acesse o guia `),Jc(44,`a`,6),Tk(45,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(46,`.`),Zg()(),Jc(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),Tk(51,`Propriedade`),Zg(),Jc(52,`th`),Tk(53,`Descrição`),Zg(),Jc(54,`th`),Tk(55,`Valor Padrão`),Zg()()(),Jc(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),Tk(60,`Default Values`),Zg()(),_u(61,`td`)(62,`td`),Zg(),Jc(63,`tr`)(64,`td`)(65,`code`),Tk(66,`--font-family`),Zg()(),Jc(67,`td`),Tk(68,`Família tipográfica usada`),Zg(),Jc(69,`td`)(70,`code`),Tk(71,`var(--font-family-theme)`),Zg()()(),Jc(72,`tr`)(73,`td`)(74,`code`),Tk(75,`--font-size`),Zg()(),Jc(76,`td`),Tk(77,`Tamanho da fonte dos itens`),Zg(),Jc(78,`td`)(79,`code`),Tk(80,`var(--font-size-default)`),Zg()()(),Jc(81,`tr`)(82,`td`)(83,`code`),Tk(84,`--font-size-context-title`),Zg()(),Jc(85,`td`),Tk(86,`Tamanho da fonte do título de contexto`),Zg(),Jc(87,`td`)(88,`code`),Tk(89,`var(--font-size-sm)`),Zg()()(),Jc(90,`tr`)(91,`td`)(92,`code`),Tk(93,`--font-size-title`),Zg()(),Jc(94,`td`),Tk(95,`Tamanho da fonte do título principal`),Zg(),Jc(96,`td`)(97,`code`),Tk(98,`var(--font-size-lg)`),Zg()()(),Jc(99,`tr`)(100,`td`)(101,`code`),Tk(102,`--line-height`),Zg()(),Jc(103,`td`),Tk(104,`Altura da linha`),Zg(),Jc(105,`td`)(106,`code`),Tk(107,`var(--line-height-md)`),Zg()()(),Jc(108,`tr`)(109,`td`)(110,`code`),Tk(111,`--border-radius`),Zg()(),Jc(112,`td`),Tk(113,`Raio dos cantos dos itens`),Zg(),Jc(114,`td`)(115,`code`),Tk(116,`var(--border-radius-md)`),Zg()()(),Jc(117,`tr`)(118,`td`)(119,`code`),Tk(120,`--border-color`),Zg()(),Jc(121,`td`),Tk(122,`Cor da borda lateral direita do componente`),Zg(),Jc(123,`td`)(124,`code`),Tk(125,`var(--color-neutral-light-20)`),Zg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Tk(129,`--background-color`),Zg()(),Jc(130,`td`),Tk(131,`Cor de fundo do componente`),Zg(),Jc(132,`td`)(133,`code`),Tk(134,`var(--color-neutral-light-05)`),Zg()()(),Jc(135,`tr`)(136,`td`)(137,`code`),Tk(138,`--color`),Zg()(),Jc(139,`td`),Tk(140,`Cor do texto dos itens`),Zg(),Jc(141,`td`)(142,`code`),Tk(143,`var(--color-action-default)`),Zg()()(),Jc(144,`tr`)(145,`td`)(146,`code`),Tk(147,`--color-context-title`),Zg()(),Jc(148,`td`),Tk(149,`Cor do texto do título de contexto`),Zg(),Jc(150,`td`)(151,`code`),Tk(152,`var(--color-neutral-mid-40)`),Zg()()(),Jc(153,`tr`)(154,`td`)(155,`code`),Tk(156,`--color-title`),Zg()(),Jc(157,`td`),Tk(158,`Cor do texto do título principal`),Zg(),Jc(159,`td`)(160,`code`),Tk(161,`var(--color-neutral-dark-80)`),Zg()()(),Jc(162,`tr`)(163,`td`)(164,`code`),Tk(165,`--font-weight`),Zg()(),Jc(166,`td`),Tk(167,`Peso da fonte dos itens`),Zg(),Jc(168,`td`)(169,`code`),Tk(170,`var(--font-weight-bold)`),Zg()()(),Jc(171,`tr`)(172,`td`)(173,`code`),Tk(174,`--font-weight-title`),Zg()(),Jc(175,`td`),Tk(176,`Peso da fonte do título principal`),Zg(),Jc(177,`td`)(178,`code`),Tk(179,`var(--font-weight-bold)`),Zg()()(),Jc(180,`tr`)(181,`td`)(182,`code`),Tk(183,`--outline-color-focused`),Zg()(),Jc(184,`td`),Tk(185,`Cor do outline no estado de focus`),Zg(),Jc(186,`td`)(187,`code`),Tk(188,`var(--color-action-focus)`),Zg()()(),Jc(189,`tr`)(190,`td`)(191,`strong`),Tk(192,`Hover`),Zg()(),_u(193,`td`)(194,`td`),Zg(),Jc(195,`tr`)(196,`td`)(197,`code`),Tk(198,`--color-hover`),Zg()(),Jc(199,`td`),Tk(200,`Cor do texto no estado hover`),Zg(),Jc(201,`td`)(202,`code`),Tk(203,`var(--color-brand-01-darkest)`),Zg()()(),Jc(204,`tr`)(205,`td`)(206,`code`),Tk(207,`--background-color-hover`),Zg()(),Jc(208,`td`),Tk(209,`Cor de fundo no estado hover`),Zg(),Jc(210,`td`)(211,`code`),Tk(212,`var(--color-brand-01-lighter)`),Zg()()(),Jc(213,`tr`)(214,`td`)(215,`strong`),Tk(216,`Pressed`),Zg()(),_u(217,`td`)(218,`td`),Zg(),Jc(219,`tr`)(220,`td`)(221,`code`),Tk(222,`--background-color-pressed`),Zg()(),Jc(223,`td`),Tk(224,`Cor de fundo no estado pressed`),Zg(),Jc(225,`td`)(226,`code`),Tk(227,`var(--color-brand-01-light)`),Zg()()(),Jc(228,`tr`)(229,`td`)(230,`strong`),Tk(231,`Active (Selected)`),Zg()(),_u(232,`td`)(233,`td`),Zg(),Jc(234,`tr`)(235,`td`)(236,`code`),Tk(237,`--background-color-actived`),Zg()(),Jc(238,`td`),Tk(239,`Cor de fundo do item selecionado`),Zg(),Jc(240,`td`)(241,`code`),Tk(242,`var(--color-brand-01-lightest)`),Zg()()(),Jc(243,`tr`)(244,`td`)(245,`code`),Tk(246,`--color-actived`),Zg()(),Jc(247,`td`),Tk(248,`Cor do texto do item selecionado`),Zg(),Jc(249,`td`)(250,`code`),Tk(251,`var(--color-action-pressed)`),Zg()()()()()(),Jc(252,`div`,7)(253,`h4`,8),Tk(254,`Seletor`),Zg(),Jc(255,`pre`,9),Tk(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),Zg()(),Jc(257,`h4`,10),Tk(258,`Propriedades`),Zg(),Jc(259,`table`,11)(260,`tr`,12)(261,`th`,13),Tk(262,`Nome`),Zg(),Jc(263,`th`,13),Tk(264,`Tipo`),Zg(),Jc(265,`th`,13),Tk(266,`Padrão`),Zg(),Jc(267,`th`,13),Tk(268,`Descrição`),Zg()(),Jc(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),Tk(273,` p-context-title`),_u(274,`br`),Zg()()(),Jc(275,`td`,18)(276,`code`,19),Tk(277,`string`),Zg()(),Jc(278,`td`,20),Tk(279,`-`),Zg(),Jc(280,`td`,21)(281,`p`),Tk(282,`Título do contexto superior`),Zg()()(),Jc(283,`tr`,14)(284,`td`,15)(285,`div`,16)(286,`span`,17),Tk(287,` p-expanded`),_u(288,`br`),Zg()()(),Jc(289,`td`,18)(290,`code`,22),Tk(291,`boolean`),Zg()(),Jc(292,`td`,20)(293,`p`)(294,`code`),Tk(295,`true`),Zg()()(),Jc(296,`td`,21)(297,`p`),Tk(298,`Define se o menu está aberto ou fechado.`),Zg(),Jc(299,`p`),Tk(300,`Suporta two-way binding:`),Zg(),Jc(301,`pre`)(302,`code`,23),Tk(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),Zg()(),Jc(304,`p`),Tk(305,`ou`),Zg(),Jc(306,`pre`)(307,`code`,23),Tk(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),Zg()()()(),Jc(309,`tr`,14)(310,`td`,15)(311,`div`,24)(312,`span`,25),Tk(313,` (p-item-selected)`),_u(314,`br`),Zg()()(),Jc(315,`td`,18)(316,`code`,26),Tk(317,`EventEmitter`),Zg()(),Jc(318,`td`,20),Tk(319,`-`),Zg(),Jc(320,`td`,21)(321,`p`),Tk(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),Zg()()(),Jc(323,`tr`,14)(324,`td`,15)(325,`div`,16)(326,`span`,17),Tk(327,` p-items`),_u(328,`br`),Zg()()(),Jc(329,`td`,18)(330,`code`,27),Tk(331,`Array<PoContextMenuItem>`),Zg()(),Jc(332,`td`,20),Tk(333,`-`),Zg(),Jc(334,`td`,21)(335,`p`),Tk(336,`Lista de itens para renderização.`),Zg(),Jc(337,`blockquote`)(338,`p`),Tk(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),Jc(340,`code`),Tk(341,`selected: true`),Zg(),Tk(342,`.
Se mais de um item estiver com `),Jc(343,`code`),Tk(344,`selected: true`),Zg(),Tk(345,`, apenas o primeiro será mantido como selecionado.`),Zg()()()(),Jc(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),Tk(350,` p-title`),_u(351,`br`),Zg()()(),Jc(352,`td`,18)(353,`code`,19),Tk(354,`string`),Zg()(),Jc(355,`td`,20),Tk(356,`-`),Zg(),Jc(357,`td`,21)(358,`p`),Tk(359,`Título principal do menu`),Zg()()()(),Jc(360,`h3`),Tk(361,`Interfaces`),Zg(),Jc(362,`h4`,28)(363,`code`,5),Tk(364,`PoContextMenuItem`),Zg()(),Jc(365,`div`,2)(366,`p`),Tk(367,`Interface para os itens do componente po-context-menu.`),Zg()(),Jc(368,`h4`,10),Tk(369,`Propriedades`),Zg(),Jc(370,`table`,11)(371,`tr`,12)(372,`th`,13),Tk(373,`Nome`),Zg(),Jc(374,`th`,13),Tk(375,`Tipo`),Zg(),Jc(376,`th`,13),Tk(377,`Descrição`),Zg()(),Jc(378,`tr`,14)(379,`td`,15)(380,`div`,16)(381,`span`,17),Tk(382,` action`),_u(383,`br`),Zg()()(),Jc(384,`td`,18)(385,`code`,29),Tk(386,`Function`),Zg()(),Jc(387,`td`,21)(388,`em`)(389,`strong`),Tk(390,`(opcional)`),Zg()(),Jc(391,`p`),Tk(392,`Ação executada ao clicar no item.`),Zg()()(),Jc(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),Tk(397,` label`),_u(398,`br`),Zg()()(),Jc(399,`td`,18)(400,`code`,19),Tk(401,`string`),Zg()(),Jc(402,`td`,21)(403,`p`),Tk(404,`Texto do item de menu.`),Zg()()(),Jc(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),Tk(409,` selected`),_u(410,`br`),Zg()()(),Jc(411,`td`,18)(412,`code`,22),Tk(413,`boolean`),Zg()(),Jc(414,`td`,21)(415,`em`)(416,`strong`),Tk(417,`(opcional)`),Zg()(),Jc(418,`p`),Tk(419,`Estado de seleção do item.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function ke(i,Ve){if(i&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-context-menu-basic-view`)(2,`sample-po-context-menu-labs-view`)(3,`sample-po-context-menu-user-view`),Zg()}if(i&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Context Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ke,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-context-menu-doc`),Zg()()()),a&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,xe,Se,ge],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[WV.forChild(Fe),WV]})}return i})();var St=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,fe]})}return i})();export{St as DocPoContextMenuModule};