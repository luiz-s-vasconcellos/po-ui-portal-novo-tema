import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as h,B as L4,Cn as oi,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,In as vze,L as Joe,La as uO,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,Xt as ere,Ya as wg,Za as xF,ai as Sn,at as R4,b as Fu,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ja as qE,ji as __,ki as Zn,la as jx,ma as lO,mt as Tze,ni as SF,nr as Ag,oa as j,pi as V6,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,y as Eze,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var ce=(()=>{class i{poNotification=h(Fu);menuItems=[{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}];onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-basic`]],standalone:!1,decls:2,vars:1,consts:[[1,`po-context-menu-wrapper`],[`p-context-title`,`Cadastro`,`p-title`,`Fornecedor`,3,`p-item-selected`,`p-items`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`po-context-menu`,1),mt(`p-item-selected`,function(p){return o.onItemSelected(p)}),wg()()),a&2&&(rg(),UE(`p-items`,o.menuItems))},dependencies:[vze],encapsulation:2,changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Context Menu Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-context-menu-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ye,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ce],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{poNotification=h(Fu);contextTitle=j(`Cadastro`);title=j(`Funcionário`);expanded=j(!0);newItemLabel=j(``);selected=j(!1);menuItems=j([]);onItemSelected(l){this.poNotification.success(`Item selecionado: ${l.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(``),this.selected.set(!1))}restore(){this.contextTitle.set(`Cadastro`),this.title.set(`Funcionário`),this.expanded.set(!0),this.newItemLabel.set(``),this.selected.set(!1),this.menuItems.set([])}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-labs`]],standalone:!1,decls:18,vars:9,consts:[[`f`,`ngForm`],[1,`po-context-menu-wrapper`],[3,`p-expandedChange`,`p-item-selected`,`p-context-title`,`p-title`,`p-items`,`p-expanded`],[1,`po-row`],[`name`,`contextTitle`,`p-label`,`Context Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`title`,`p-label`,`Title`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`expanded`,`p-label`,`Expanded`,`p-label-off`,`Collapsed`,`p-label-on`,`Expanded`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[1,`po-row`,`po-pb-1`],[`name`,`newItemLabel`,`p-label`,`New Item Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Selected`,`p-label`,`Selected`,`p-help`,`Se mais de um item estiver com selected: *true*, apenas o primeiro será mantido como selecionado.`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let u=Ax();jc(0,`div`,1)(1,`po-context-menu`,2),ab(`p-expandedChange`,function(d){return v_(u),uO(o.expanded,d)||(o.expanded=d),__(d)}),mt(`p-item-selected`,function(d){return o.onItemSelected(d)}),wg()(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),r0(),ab(`ngModelChange`,function(d){return v_(u),uO(o.contextTitle,d)||(o.contextTitle=d),__(d)}),wg(),jc(7,`po-input`,5),r0(),ab(`ngModelChange`,function(d){return v_(u),uO(o.title,d)||(o.title=d),__(d)}),wg()(),jc(8,`div`,3)(9,`po-switch`,6),r0(),ab(`ngModelChange`,function(d){return v_(u),uO(o.expanded,d)||(o.expanded=d),__(d)}),wg()(),nu(10,`po-divider`),jc(11,`div`,7)(12,`po-input`,8),r0(),ab(`ngModelChange`,function(d){return v_(u),uO(o.newItemLabel,d)||(o.newItemLabel=d),__(d)}),wg(),jc(13,`po-switch`,9),r0(),ab(`ngModelChange`,function(d){return v_(u),uO(o.selected,d)||(o.selected=d),__(d)}),wg(),jc(14,`po-button`,10),mt(`p-click`,function(){return o.addItem()}),wg()(),nu(15,`po-divider`),jc(16,`div`,3)(17,`po-button`,11),mt(`p-click`,function(){return o.restore()}),wg()()()}a&2&&(rg(),UE(`p-context-title`,o.contextTitle())(`p-title`,o.title())(`p-items`,o.menuItems()),sb(`p-expanded`,o.expanded),rg(5),sb(`ngModel`,o.contextTitle),o0(),rg(),sb(`ngModel`,o.title),o0(),rg(2),sb(`ngModel`,o.expanded),o0(),rg(3),sb(`ngModel`,o.newItemLabel),o0(),rg(),sb(`ngModel`,o.selected),o0())},dependencies:[RK,SK,MK,xF,SF,oi,vze,Lf,U4,L4],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i});var Ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Context Menu Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-context-menu-wrapper">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-context-menu-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Pe,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,xe],encapsulation:2,changeDetection:1})}return i})();var we=[`tab`];var Se=(()=>{class i{tab=V6(`tab`);contextTitle=`Cadastro`;title=`Usuário`;menuItems=j([{label:`Dados cadastrais`,selected:!0},{label:`Endereços`},{label:`Documentos`}]);formDadosCadastrais=[{property:`name`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6}];formEndereco=[{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`}];documentos=[{Documento:`CPF`,Valor:`987.xxx.xxx-60`},{Documento:`Passporte`,Valor:`123456xxx-1`}];onItemSelected(l){this.updateSelectedItemMenu(l.label),this.tab().activateTab(l.label)}onActivatedTab(l){this.updateSelectedItemMenu(l.id)}updateSelectedItemMenu(l){let a=this.menuItems().map(o=>s(r({},o),{selected:o.label===l}));this.menuItems.set(a)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-user`]],viewQuery:function(a,o){a&1&&qE(o.tab,we,5),a&2&&jx()},standalone:!1,decls:19,vars:12,consts:[[`tab`,``],[`dynamicForm`,``],[`p-label`,`Dados cadastrais`,`p-hide-close`,``,`p-active`,``,`id`,`Dados cadastrais`,3,`p-activated-tab`],[1,`po-context-menu-wrapper`],[3,`p-item-selected`,`p-context-title`,`p-title`,`p-items`],[`p-title`,`Dados cadastrais`],[3,`p-fields`],[`p-label`,`Endereços`,`id`,`Endereços`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Endereços`],[`p-label`,`Documentos`,`id`,`Documentos`,`p-hide-close`,``,3,`p-activated-tab`],[`p-title`,`Documentos`],[3,`p-items`]],template:function(a,o){a&1&&(jc(0,`po-context-tabs`,null,0)(2,`po-tab`,2),mt(`p-activated-tab`,function(p){return o.onActivatedTab(p)}),jc(3,`div`,3)(4,`po-context-menu`,4),mt(`p-item-selected`,function(p){return o.onItemSelected(p)}),wg(),jc(5,`po-page-default`,5),nu(6,`po-dynamic-form`,6,1),wg()()(),jc(8,`po-tab`,7),mt(`p-activated-tab`,function(p){return o.onActivatedTab(p)}),jc(9,`div`,3)(10,`po-context-menu`,4),mt(`p-item-selected`,function(p){return o.onItemSelected(p)}),wg(),jc(11,`po-page-default`,8),nu(12,`po-dynamic-form`,6,1),wg()()(),jc(14,`po-tab`,9),mt(`p-activated-tab`,function(p){return o.onActivatedTab(p)}),jc(15,`div`,3)(16,`po-context-menu`,4),mt(`p-item-selected`,function(p){return o.onItemSelected(p)}),wg(),jc(17,`po-page-default`,10),nu(18,`po-table`,11),wg()()()()),a&2&&(rg(4),UE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),rg(2),UE(`p-fields`,o.formDadosCadastrais),rg(4),UE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),rg(2),UE(`p-fields`,o.formEndereco),rg(4),UE(`p-context-title`,o.contextTitle)(`p-title`,o.title)(`p-items`,o.menuItems()),rg(2),UE(`p-items`,o.documentos))},dependencies:[vze,Joe,Tze,R4,Qae,Eze],styles:[`po-context-tabs[_ngcontent-%COMP%]{--%NS%po-density-gap-header-content: 0px}`],changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-user-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Context - Cadastro de Usuário`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-context-menu-user/sample-po-context-menu-user.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-context-tabs #tab>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-context-menu-user/sample-po-context-menu-user.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-context-menu-user/sample-po-context-menu-user.component.css`),wg(),jc(25,`pre`,11),lO(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-context-menu-user`),wg(),nu(29,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ie,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,Se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-context-menu-doc`]],standalone:!1,decls:420,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`language-html`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoContextMenuItem>`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoContextMenuModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-context-menu.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoContextMenuComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-context-menu`),wg(),lO(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),jc(18,`code`),lO(19,`po-menu`),wg(),lO(20,`, porém independente e focado em navegação contextual.`),wg(),jc(21,`p`),lO(22,`No caso de uso do componente `),jc(23,`code`),lO(24,`po-page-default`),wg(),lO(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),jc(26,`strong`),lO(27,`po-context-menu-wrapper`),wg(),lO(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),wg(),jc(29,`p`),lO(30,`O uso simultâneo dos componentes `),jc(31,`code`),lO(32,`po-menu`),wg(),lO(33,` e `),jc(34,`code`),lO(35,`po-context-menu`),wg(),lO(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),wg(),jc(37,`h4`),lO(38,`Tokens customizáveis`),wg(),jc(39,`p`),lO(40,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(41,`blockquote`)(42,`p`),lO(43,`Para maiores informações, acesse o guia `),jc(44,`a`,6),lO(45,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(46,`.`),wg()(),jc(47,`table`)(48,`thead`)(49,`tr`)(50,`th`),lO(51,`Propriedade`),wg(),jc(52,`th`),lO(53,`Descrição`),wg(),jc(54,`th`),lO(55,`Valor Padrão`),wg()()(),jc(56,`tbody`)(57,`tr`)(58,`td`)(59,`strong`),lO(60,`Default Values`),wg()(),nu(61,`td`)(62,`td`),wg(),jc(63,`tr`)(64,`td`)(65,`code`),lO(66,`--font-family`),wg()(),jc(67,`td`),lO(68,`Família tipográfica usada`),wg(),jc(69,`td`)(70,`code`),lO(71,`var(--font-family-theme)`),wg()()(),jc(72,`tr`)(73,`td`)(74,`code`),lO(75,`--font-size`),wg()(),jc(76,`td`),lO(77,`Tamanho da fonte dos itens`),wg(),jc(78,`td`)(79,`code`),lO(80,`var(--font-size-default)`),wg()()(),jc(81,`tr`)(82,`td`)(83,`code`),lO(84,`--font-size-context-title`),wg()(),jc(85,`td`),lO(86,`Tamanho da fonte do título de contexto`),wg(),jc(87,`td`)(88,`code`),lO(89,`var(--font-size-sm)`),wg()()(),jc(90,`tr`)(91,`td`)(92,`code`),lO(93,`--font-size-title`),wg()(),jc(94,`td`),lO(95,`Tamanho da fonte do título principal`),wg(),jc(96,`td`)(97,`code`),lO(98,`var(--font-size-lg)`),wg()()(),jc(99,`tr`)(100,`td`)(101,`code`),lO(102,`--line-height`),wg()(),jc(103,`td`),lO(104,`Altura da linha`),wg(),jc(105,`td`)(106,`code`),lO(107,`var(--line-height-md)`),wg()()(),jc(108,`tr`)(109,`td`)(110,`code`),lO(111,`--border-radius`),wg()(),jc(112,`td`),lO(113,`Raio dos cantos dos itens`),wg(),jc(114,`td`)(115,`code`),lO(116,`var(--border-radius-md)`),wg()()(),jc(117,`tr`)(118,`td`)(119,`code`),lO(120,`--border-color`),wg()(),jc(121,`td`),lO(122,`Cor da borda lateral direita do componente`),wg(),jc(123,`td`)(124,`code`),lO(125,`var(--color-neutral-light-20)`),wg()()(),jc(126,`tr`)(127,`td`)(128,`code`),lO(129,`--background-color`),wg()(),jc(130,`td`),lO(131,`Cor de fundo do componente`),wg(),jc(132,`td`)(133,`code`),lO(134,`var(--color-neutral-light-05)`),wg()()(),jc(135,`tr`)(136,`td`)(137,`code`),lO(138,`--color`),wg()(),jc(139,`td`),lO(140,`Cor do texto dos itens`),wg(),jc(141,`td`)(142,`code`),lO(143,`var(--color-action-default)`),wg()()(),jc(144,`tr`)(145,`td`)(146,`code`),lO(147,`--color-context-title`),wg()(),jc(148,`td`),lO(149,`Cor do texto do título de contexto`),wg(),jc(150,`td`)(151,`code`),lO(152,`var(--color-neutral-mid-40)`),wg()()(),jc(153,`tr`)(154,`td`)(155,`code`),lO(156,`--color-title`),wg()(),jc(157,`td`),lO(158,`Cor do texto do título principal`),wg(),jc(159,`td`)(160,`code`),lO(161,`var(--color-neutral-dark-80)`),wg()()(),jc(162,`tr`)(163,`td`)(164,`code`),lO(165,`--font-weight`),wg()(),jc(166,`td`),lO(167,`Peso da fonte dos itens`),wg(),jc(168,`td`)(169,`code`),lO(170,`var(--font-weight-bold)`),wg()()(),jc(171,`tr`)(172,`td`)(173,`code`),lO(174,`--font-weight-title`),wg()(),jc(175,`td`),lO(176,`Peso da fonte do título principal`),wg(),jc(177,`td`)(178,`code`),lO(179,`var(--font-weight-bold)`),wg()()(),jc(180,`tr`)(181,`td`)(182,`code`),lO(183,`--outline-color-focused`),wg()(),jc(184,`td`),lO(185,`Cor do outline no estado de focus`),wg(),jc(186,`td`)(187,`code`),lO(188,`var(--color-action-focus)`),wg()()(),jc(189,`tr`)(190,`td`)(191,`strong`),lO(192,`Hover`),wg()(),nu(193,`td`)(194,`td`),wg(),jc(195,`tr`)(196,`td`)(197,`code`),lO(198,`--color-hover`),wg()(),jc(199,`td`),lO(200,`Cor do texto no estado hover`),wg(),jc(201,`td`)(202,`code`),lO(203,`var(--color-brand-01-darkest)`),wg()()(),jc(204,`tr`)(205,`td`)(206,`code`),lO(207,`--background-color-hover`),wg()(),jc(208,`td`),lO(209,`Cor de fundo no estado hover`),wg(),jc(210,`td`)(211,`code`),lO(212,`var(--color-brand-01-lighter)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`strong`),lO(216,`Pressed`),wg()(),nu(217,`td`)(218,`td`),wg(),jc(219,`tr`)(220,`td`)(221,`code`),lO(222,`--background-color-pressed`),wg()(),jc(223,`td`),lO(224,`Cor de fundo no estado pressed`),wg(),jc(225,`td`)(226,`code`),lO(227,`var(--color-brand-01-light)`),wg()()(),jc(228,`tr`)(229,`td`)(230,`strong`),lO(231,`Active (Selected)`),wg()(),nu(232,`td`)(233,`td`),wg(),jc(234,`tr`)(235,`td`)(236,`code`),lO(237,`--background-color-actived`),wg()(),jc(238,`td`),lO(239,`Cor de fundo do item selecionado`),wg(),jc(240,`td`)(241,`code`),lO(242,`var(--color-brand-01-lightest)`),wg()()(),jc(243,`tr`)(244,`td`)(245,`code`),lO(246,`--color-actived`),wg()(),jc(247,`td`),lO(248,`Cor do texto do item selecionado`),wg(),jc(249,`td`)(250,`code`),lO(251,`var(--color-action-pressed)`),wg()()()()()(),jc(252,`div`,7)(253,`h4`,8),lO(254,`Seletor`),wg(),jc(255,`pre`,9),lO(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),wg()(),jc(257,`h4`,10),lO(258,`Propriedades`),wg(),jc(259,`table`,11)(260,`tr`,12)(261,`th`,13),lO(262,`Nome`),wg(),jc(263,`th`,13),lO(264,`Tipo`),wg(),jc(265,`th`,13),lO(266,`Padrão`),wg(),jc(267,`th`,13),lO(268,`Descrição`),wg()(),jc(269,`tr`,14)(270,`td`,15)(271,`div`,16)(272,`span`,17),lO(273,` p-context-title`),nu(274,`br`),wg()()(),jc(275,`td`,18)(276,`code`,19),lO(277,`string`),wg()(),jc(278,`td`,20),lO(279,`-`),wg(),jc(280,`td`,21)(281,`p`),lO(282,`Título do contexto superior`),wg()()(),jc(283,`tr`,14)(284,`td`,15)(285,`div`,16)(286,`span`,17),lO(287,` p-expanded`),nu(288,`br`),wg()()(),jc(289,`td`,18)(290,`code`,22),lO(291,`boolean`),wg()(),jc(292,`td`,20)(293,`p`)(294,`code`),lO(295,`true`),wg()()(),jc(296,`td`,21)(297,`p`),lO(298,`Define se o menu está aberto ou fechado.`),wg(),jc(299,`p`),lO(300,`Suporta two-way binding:`),wg(),jc(301,`pre`)(302,`code`,23),lO(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),wg()(),jc(304,`p`),lO(305,`ou`),wg(),jc(306,`pre`)(307,`code`,23),lO(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),wg()()()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,24)(312,`span`,25),lO(313,` (p-item-selected)`),nu(314,`br`),wg()()(),jc(315,`td`,18)(316,`code`,26),lO(317,`EventEmitter`),wg()(),jc(318,`td`,20),lO(319,`-`),wg(),jc(320,`td`,21)(321,`p`),lO(322,`Evento emitido ao selecionar um item. Emite o item selecionado.`),wg()()(),jc(323,`tr`,14)(324,`td`,15)(325,`div`,16)(326,`span`,17),lO(327,` p-items`),nu(328,`br`),wg()()(),jc(329,`td`,18)(330,`code`,27),lO(331,`Array<PoContextMenuItem>`),wg()(),jc(332,`td`,20),lO(333,`-`),wg(),jc(334,`td`,21)(335,`p`),lO(336,`Lista de itens para renderização.`),wg(),jc(337,`blockquote`)(338,`p`),lO(339,`Ao receber os itens, o componente valida que apenas um item pode ter `),jc(340,`code`),lO(341,`selected: true`),wg(),lO(342,`.
Se mais de um item estiver com `),jc(343,`code`),lO(344,`selected: true`),wg(),lO(345,`, apenas o primeiro será mantido como selecionado.`),wg()()()(),jc(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),lO(350,` p-title`),nu(351,`br`),wg()()(),jc(352,`td`,18)(353,`code`,19),lO(354,`string`),wg()(),jc(355,`td`,20),lO(356,`-`),wg(),jc(357,`td`,21)(358,`p`),lO(359,`Título principal do menu`),wg()()()(),jc(360,`h3`),lO(361,`Interfaces`),wg(),jc(362,`h4`,28)(363,`code`,5),lO(364,`PoContextMenuItem`),wg()(),jc(365,`div`,2)(366,`p`),lO(367,`Interface para os itens do componente po-context-menu.`),wg()(),jc(368,`h4`,10),lO(369,`Propriedades`),wg(),jc(370,`table`,11)(371,`tr`,12)(372,`th`,13),lO(373,`Nome`),wg(),jc(374,`th`,13),lO(375,`Tipo`),wg(),jc(376,`th`,13),lO(377,`Descrição`),wg()(),jc(378,`tr`,14)(379,`td`,15)(380,`div`,16)(381,`span`,17),lO(382,` action`),nu(383,`br`),wg()()(),jc(384,`td`,18)(385,`code`,29),lO(386,`Function`),wg()(),jc(387,`td`,21)(388,`em`)(389,`strong`),lO(390,`(opcional)`),wg()(),jc(391,`p`),lO(392,`Ação executada ao clicar no item.`),wg()()(),jc(393,`tr`,14)(394,`td`,15)(395,`div`,16)(396,`span`,17),lO(397,` label`),nu(398,`br`),wg()()(),jc(399,`td`,18)(400,`code`,19),lO(401,`string`),wg()(),jc(402,`td`,21)(403,`p`),lO(404,`Texto do item de menu.`),wg()()(),jc(405,`tr`,14)(406,`td`,15)(407,`div`,16)(408,`span`,17),lO(409,` selected`),nu(410,`br`),wg()()(),jc(411,`td`,18)(412,`code`,22),lO(413,`boolean`),wg()(),jc(414,`td`,21)(415,`em`)(416,`strong`),lO(417,`(opcional)`),wg()(),jc(418,`p`),lO(419,`Estado de seleção do item.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Fe(i,Ne){if(i&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-context-menu-basic-view`)(2,`sample-po-context-menu-labs-view`)(3,`sample-po-context-menu-user-view`),wg()}if(i&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Ve=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Context Menu`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Fe,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-context-menu-doc`),wg()()()),a&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,be,Ce,ge,he],encapsulation:2,changeDetection:1})}return i})()}];var Ee=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[I1.forChild(Ve),I1]})}return i})();var gt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[M,Ee]})}return i})();export{gt as DocPoContextMenuModule};