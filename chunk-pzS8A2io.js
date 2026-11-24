import{m as P,p as M}from"./main-QQSPUZS3.js";import{Ar as G0,At as Zte,Ba as p,Br as Jn,F as Joe,Fr as H_,G as Nf,Hr as KO,Ki as Zb,La as ok,Li as WL,Lr as I,Pn as tre,Pt as are,S as Eze,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,bn as oi,co as wg,da as ge$1,eo as tk,jr as GV,ki as U_,oo as vt,or as An,pi as QL,qr as LO,ra as de,sn as j4,ti as NZ,xi as RZ,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var $=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Detail`]],template:function(r,n){r&1&&_u(0,`po-page-detail`,0)},dependencies:[Eze],encapsulation:2,changeDetection:1})}return a})();var ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-detail-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Detail Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-detail-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,$],encapsulation:2,changeDetection:1})}return a})();var te=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}back(){this.action=`back`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}edit(){this.action=`edit`}remove(){this.action=`remove`}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.title=`PO Page Detail`,this.subtitle=``}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-labs`]],standalone:!1,decls:33,vars:18,consts:[[`f`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-edit`,`p-remove`,`p-breadcrumb`,`p-components-size`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"back": "Retornar", "edit": "Edição", "remove": "Excluir registro"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let u=KO();Jc(0,`po-page-detail`,4),vt(`p-back`,function(){return n.back()})(`p-edit`,function(){return n.edit()})(`p-remove`,function(){return n.remove()}),Jc(1,`div`,5),_u(2,`po-info`,6),Kg(),_u(3,`po-divider`),Jc(4,`form`,null,0)(6,`po-input`,7),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.title,l)||(n.title=l),H_(l)}),Kg(),Jc(7,`po-input`,8),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.subtitle,l)||(n.subtitle=l),H_(l)}),Kg(),Jc(8,`po-radio-group`,9),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.componentsSize,l)||(n.componentsSize=l),H_(l)}),Kg(),_u(9,`po-divider`),Jc(10,`form`,null,1)(12,`div`,5)(13,`po-input`,10),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.breadcrumb.favorite,l)||(n.breadcrumb.favorite=l),H_(l)}),Kg()()(),Jc(14,`form`,null,2)(16,`div`,5)(17,`po-input`,11),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.breadcrumbItem.label,l)||(n.breadcrumbItem.label=l),H_(l)}),Kg(),Jc(18,`po-input`,12),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.breadcrumbItem.link,l)||(n.breadcrumbItem.link=l),H_(l)}),Kg()(),Jc(19,`div`,5)(20,`po-button`,13),vt(`p-click`,function(){return n.addBreadcrumbItem()}),Kg()()(),_u(21,`po-divider`),Jc(22,`form`,null,3)(24,`div`,5)(25,`po-input`,14),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.breadcrumbParams.property,l)||(n.breadcrumbParams.property=l),H_(l)}),Kg(),Jc(26,`po-input`,15),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.breadcrumbParams.value,l)||(n.breadcrumbParams.value=l),H_(l)}),Kg()(),Jc(27,`div`,5)(28,`po-button`,16),vt(`p-click`,function(){return n.addBreadcrumbParam()}),Kg()()(),Jc(29,`div`,5)(30,`po-input`,17),G0(),Zb(`ngModelChange`,function(l){return U_(u),Rk(n.literals,l)||(n.literals=l),H_(l)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg()(),Jc(31,`div`,5)(32,`po-button`,18),vt(`p-click`,function(){return n.restore()}),Kg()()()()}if(r&2){let u=ok(15),s=ok(23);Ab(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),wg(2),Ab(`p-value`,n.action),wg(4),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.subtitle),q0(),wg(),Kb(`ngModel`,n.componentsSize),Ab(`p-options`,n.componentsSizeOptions),q0(),wg(5),Kb(`ngModel`,n.breadcrumb.favorite),q0(),wg(4),Kb(`ngModel`,n.breadcrumbItem.label),q0(),wg(),Kb(`ngModel`,n.breadcrumbItem.link),q0(),wg(2),Ab(`p-disabled`,u.invalid),wg(5),Kb(`ngModel`,n.breadcrumbParams.property),q0(),wg(),Kb(`ngModel`,n.breadcrumbParams.value),q0(),wg(2),Ab(`p-disabled`,s.invalid),wg(2),Kb(`ngModel`,n.literals),q0()}},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,j4,Zte,Joe,Eze],encapsulation:2,changeDetection:1})}return a})();var ie=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-detail-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Detail Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-detail-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>

    <po-divider />

    <form #formBreadcrumbFavorite="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbFavorite"
          [(ngModel)]="breadcrumb.favorite"
          p-clean
          p-help="https://po-sample-api.onrender.com/v1/favorite"
          p-label="Breadcrumb favorite"
        >
        </po-input>
      </div>
    </form>

    <form #formBreadcrumbItems="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbItemLabel"
          [(ngModel)]="breadcrumbItem.label"
          p-clean
          p-label="Breadcrumb item label"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbItemLink"
          [(ngModel)]="breadcrumbItem.link"
          p-clean
          p-label="Breadcrumb item link"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb item"
          [p-disabled]="formBreadcrumbItems.invalid"
          (p-click)="addBreadcrumbItem()"
        >
        </po-button>
      </div>
    </form>

    <po-divider />

    <form #formBreadcrumbParams="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbParamsProperty"
          [(ngModel)]="breadcrumbParams.property"
          p-clean
          p-label="Breadcrumb params property"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbParamsValue"
          [(ngModel)]="breadcrumbParams.value"
          p-clean
          p-label="Breadcrumb params value"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,te],encapsulation:2,changeDetection:1})}return a})();var ne=(()=>{class a{router=p(An);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`John`;placeOfBirth=`Colorado`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};edit(){this.router.navigate([`/documentation/po-page-edit`],{queryParams:{view:`web`}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-user`]],standalone:!1,decls:19,vars:12,consts:[[`p-title`,`User Detail`,`p-subtitle`,`Status: <b>Active</b> | Role: <i>Administrator</i>`,3,`p-edit`,`p-breadcrumb`],[1,`po-row`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,3,`p-value`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Birth Date`,1,`po-md-4`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,3,`p-value`],[`p-label`,`Place Of Birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Graduation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Fathers Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mothers Name`,1,`po-md-4`,3,`p-value`]],template:function(r,n){r&1&&(Jc(0,`po-page-detail`,0),vt(`p-edit`,function(){return n.edit()}),Jc(1,`div`,1),_u(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),Kg(),_u(5,`po-divider`),Jc(6,`div`,1),_u(7,`po-info`,5)(8,`po-info`,6)(9,`po-info`,7),Kg(),_u(10,`po-divider`),Jc(11,`div`,1),_u(12,`po-info`,8)(13,`po-info`,9)(14,`po-info`,10),Kg(),_u(15,`po-divider`),Jc(16,`div`,1),_u(17,`po-info`,11)(18,`po-info`,12),Kg()()),r&2&&(Ab(`p-breadcrumb`,n.breadcrumb),wg(2),Ab(`p-value`,n.userId),wg(),Ab(`p-value`,n.email),wg(),Ab(`p-value`,n.name),wg(3),Ab(`p-value`,n.nickname),wg(),Ab(`p-value`,n.birthDate),wg(),Ab(`p-value`,n.genre),wg(3),Ab(`p-value`,n.nationality),wg(),Ab(`p-value`,n.placeOfBirth),wg(),Ab(`p-value`,n.graduation),wg(3),Ab(`p-value`,n.fathersName),wg(),Ab(`p-value`,n.mothersName))},dependencies:[Nf,Joe,Eze],encapsulation:2,changeDetection:1})}return a})();var ae=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-user-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-detail-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Detail - User`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-detail-user`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-detail
  p-title="User Detail"
  p-subtitle="Status: <b>Active</b> | Role: <i>Administrator</i>"
  [p-breadcrumb]="breadcrumb"
  (p-edit)="edit()"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ne],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-detail-doc`]],standalone:!1,decls:580,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-detail-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-back`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-edit`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageDetailLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`event-p-remove`,1,`docs-api-properties-row`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[1,`language-typescript`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-page-detail-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-detail-literals-back`,1,`docs-api-properties-row`],[`id`,`interface-po-page-detail-literals-edit`,1,`docs-api-properties-row`],[`id`,`interface-po-page-detail-literals-remove`,1,`docs-api-properties-row`]],template:function(r,n){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Mk(8,`po-page-default`),Kg(),Mk(9,`, `),Jc(10,`code`),Mk(11,`po-page-detail`),Kg(),Mk(12,`,
`),Jc(13,`code`),Mk(14,`po-page-edit`),Kg(),Mk(15,`, `),Jc(16,`code`),Mk(17,`po-page-list`),Kg(),Mk(18,` e `),Jc(19,`code`),Mk(20,`po-page-slide`),Kg(),Mk(21,`.`),Kg()(),Jc(22,`h3`,3),Mk(23,`Componente`),Kg(),Jc(24,`h4`,4)(25,`code`,5),Mk(26,`PoPageDetailComponent`),Kg()(),Jc(27,`div`,2)(28,`p`),Mk(29,`O componente `),Jc(30,`strong`),Mk(31,`po-page-detail`),Kg(),Mk(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),Kg(),Jc(33,`h4`),Mk(34,`Tokens customizáveis`),Kg(),Jc(35,`blockquote`)(36,`p`),Mk(37,`Para maiores informações, acesse o guia `),Jc(38,`a`,6),Mk(39,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(40,`.`),Kg()(),Jc(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),Mk(45,`Propriedade`),Kg(),Jc(46,`th`),Mk(47,`Descrição`),Kg(),Jc(48,`th`),Mk(49,`Valor Padrão`),Kg()()(),Jc(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),Mk(54,`Header`),Kg()(),_u(55,`td`)(56,`td`),Kg(),Jc(57,`tr`)(58,`td`)(59,`code`),Mk(60,`--padding`),Kg()(),Jc(61,`td`),Mk(62,`Espaçamento do header`),Kg(),Jc(63,`td`)(64,`code`),Mk(65,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Jc(66,`tr`)(67,`td`)(68,`code`),Mk(69,`--gap`),Kg()(),Jc(70,`td`),Mk(71,`Espaçamento entre os breadcrumbs e o título`),Kg(),Jc(72,`td`)(73,`code`),Mk(74,`var(--spacing-md)`),Kg()()(),Jc(75,`tr`)(76,`td`)(77,`code`),Mk(78,`--gap-actions`),Kg()(),Jc(79,`td`),Mk(80,`Espaçamento entre as ações`),Kg(),Jc(81,`td`)(82,`code`),Mk(83,`var(--spacing-xs)`),Kg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Mk(87,`--font-family`),Kg()(),Jc(88,`td`),Mk(89,`Família tipográfica do título`),Kg(),Jc(90,`td`)(91,`code`),Mk(92,`var(--font-family-theme)`),Kg()()(),Jc(93,`tr`)(94,`td`)(95,`strong`),Mk(96,`Content`),Kg()(),_u(97,`td`)(98,`td`),Kg(),Jc(99,`tr`)(100,`td`)(101,`code`),Mk(102,`--padding-content`),Kg()(),Jc(103,`td`),Mk(104,`Espaçamento do conteúdo`),Kg(),Jc(105,`td`)(106,`code`),Mk(107,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Jc(108,`div`,7)(109,`h4`,8),Mk(110,`Seletor`),Kg(),Jc(111,`pre`,9),Mk(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),Kg()(),Jc(113,`h4`,10),Mk(114,`Propriedades`),Kg(),Jc(115,`table`,11)(116,`tr`,12)(117,`th`,13),Mk(118,`Nome`),Kg(),Jc(119,`th`,13),Mk(120,`Tipo`),Kg(),Jc(121,`th`,13),Mk(122,`Padrão`),Kg(),Jc(123,`th`,13),Mk(124,`Descrição`),Kg()(),Jc(125,`tr`,14)(126,`td`,15)(127,`div`,16)(128,`span`,17),Mk(129,` (p-back)`),_u(130,`br`),Kg()()(),Jc(131,`td`,18)(132,`code`,19),Mk(133,`EventEmitter`),Kg()(),Jc(134,`td`,20),Mk(135,`-`),Kg(),Jc(136,`td`,21)(137,`p`),Mk(138,`Evento que será disparado ao clicar no botão de "Voltar".`),Kg(),Jc(139,`pre`)(140,`code`),Mk(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),Kg()(),Jc(142,`blockquote`)(143,`p`),Mk(144,`Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.`),Kg()()()(),Jc(145,`tr`,22)(146,`td`,15)(147,`div`,23)(148,`span`,24),Mk(149,` p-breadcrumb`),_u(150,`br`),Kg()()(),Jc(151,`td`,18)(152,`code`,25),Mk(153,`PoBreadcrumb`),Kg()(),Jc(154,`td`,20),Mk(155,`-`),Kg(),Jc(156,`td`,21)(157,`p`),Mk(158,`Objeto com propriedades do breadcrumb.`),Kg()()(),Jc(159,`tr`,26)(160,`td`,15)(161,`div`,23)(162,`span`,24),Mk(163,` p-components-size`),_u(164,`br`),Kg()()(),Jc(165,`td`,18)(166,`code`,27),Mk(167,`string`),Kg()(),Jc(168,`td`,20)(169,`p`)(170,`code`),Mk(171,`medium`),Kg()()(),Jc(172,`td`,21)(173,`em`)(174,`strong`),Mk(175,`(opcional)`),Kg()(),Jc(176,`p`),Mk(177,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(178,`ul`)(179,`li`)(180,`code`),Mk(181,`small`),Kg(),Mk(182,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(183,`li`)(184,`code`),Mk(185,`medium`),Kg(),Mk(186,`: aplica a medida medium de cada componente.`),Kg()(),Jc(187,`blockquote`)(188,`p`),Mk(189,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(190,`code`),Mk(191,`medium`),Kg(),Mk(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(193,`a`,28),Mk(194,`po-theme`),Kg(),Mk(195,`.`),Kg()()()(),Jc(196,`tr`,29)(197,`td`,15)(198,`div`,16)(199,`span`,17),Mk(200,` (p-edit)`),_u(201,`br`),Kg()()(),Jc(202,`td`,18)(203,`code`,19),Mk(204,`EventEmitter`),Kg()(),Jc(205,`td`,20),Mk(206,`-`),Kg(),Jc(207,`td`,21)(208,`p`),Mk(209,`Evento que será disparado ao clicar no botão de "Editar".`),Kg(),Jc(210,`pre`)(211,`code`),Mk(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),Kg()(),Jc(213,`blockquote`)(214,`p`),Mk(215,`Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.`),Kg()()()(),Jc(216,`tr`,30)(217,`td`,15)(218,`div`,23)(219,`span`,24),Mk(220,` p-literals`),_u(221,`br`),Kg()()(),Jc(222,`td`,18)(223,`code`,31),Mk(224,`PoPageDetailLiterals`),Kg()(),Jc(225,`td`,20),Mk(226,`-`),Kg(),Jc(227,`td`,21)(228,`em`)(229,`strong`),Mk(230,`(opcional)`),Kg()(),Jc(231,`p`),Mk(232,`Objeto com as literais usadas no `),Jc(233,`code`),Mk(234,`po-page-detail`),Kg(),Mk(235,`.`),Kg(),Jc(236,`p`),Mk(237,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Jc(238,`pre`)(239,`code`),Mk(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),Kg()(),Jc(241,`p`),Mk(242,`Ou passando apenas as literais que deseja customizar:`),Kg(),Jc(243,`pre`)(244,`code`),Mk(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),Kg()(),Jc(246,`p`),Mk(247,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(248,`pre`)(249,`code`),Mk(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),Kg()(),Jc(251,`blockquote`)(252,`p`),Mk(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(254,`a`,32)(255,`code`),Mk(256,`PoI18nService`),Kg()(),Mk(257,` ou do browser.`),Kg()()()(),Jc(258,`tr`,33)(259,`td`,15)(260,`div`,16)(261,`span`,17),Mk(262,` (p-remove)`),_u(263,`br`),Kg()()(),Jc(264,`td`,18)(265,`code`,19),Mk(266,`EventEmitter`),Kg()(),Jc(267,`td`,20),Mk(268,`-`),Kg(),Jc(269,`td`,21)(270,`p`),Mk(271,`Evento que será disparado ao clicar no botão de "Remover".`),Kg(),Jc(272,`pre`)(273,`code`),Mk(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),Kg()(),Jc(275,`blockquote`)(276,`p`),Mk(277,`Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.`),Kg()()()(),Jc(278,`tr`,34)(279,`td`,15)(280,`div`,23)(281,`span`,24),Mk(282,` p-subtitle`),_u(283,`br`),Kg()()(),Jc(284,`td`,18)(285,`code`,27),Mk(286,`string`),Kg()(),Jc(287,`td`,20),Mk(288,`-`),Kg(),Jc(289,`td`,21)(290,`em`)(291,`strong`),Mk(292,`(opcional)`),Kg()(),Jc(293,`p`),Mk(294,`Subtitulo do Header da página.`),Kg(),Jc(295,`p`),Mk(296,`Suporta formatação básica com as tags `),Jc(297,`code`),Mk(298,`<b>`),Kg(),Mk(299,` (negrito), `),Jc(300,`code`),Mk(301,`<strong>`),Kg(),Mk(302,` (negrito), `),Jc(303,`code`),Mk(304,`<i>`),Kg(),Mk(305,` (itálico), `),Jc(306,`code`),Mk(307,`<em>`),Kg(),Mk(308,` (it\xE1lico) e
`),Jc(309,`code`),Mk(310,`<u>`),Kg(),Mk(311,` (sublinhado).`),Kg(),Jc(312,`p`),Mk(313,`Exemplo:`),Kg(),Jc(314,`pre`)(315,`code`,35),Mk(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),Kg()(),Jc(317,`blockquote`)(318,`p`),Mk(319,`Requer que `),Jc(320,`code`),Mk(321,`p-title`),Kg(),Mk(322,` esteja definido.`),Kg()()()(),Jc(323,`tr`,36)(324,`td`,15)(325,`div`,23)(326,`span`,24),Mk(327,` p-title`),_u(328,`br`),Kg()()(),Jc(329,`td`,18)(330,`code`,27),Mk(331,`string`),Kg()(),Jc(332,`td`,20),Mk(333,`-`),Kg(),Jc(334,`td`,21)(335,`p`),Mk(336,`Título da página.`),Kg()()()(),Jc(337,`h3`),Mk(338,`Interfaces`),Kg(),Jc(339,`h4`,37)(340,`code`,5),Mk(341,`PoBreadcrumbItem`),Kg()(),Jc(342,`div`,2)(343,`p`),Mk(344,`Interface que define cada item do componente `),Jc(345,`strong`),Mk(346,`po-breadcrumb`),Kg(),Mk(347,`.`),Kg()(),Jc(348,`h4`,10),Mk(349,`Propriedades`),Kg(),Jc(350,`table`,11)(351,`tr`,12)(352,`th`,13),Mk(353,`Nome`),Kg(),Jc(354,`th`,13),Mk(355,`Tipo`),Kg(),Jc(356,`th`,13),Mk(357,`Descrição`),Kg()(),Jc(358,`tr`,38)(359,`td`,15)(360,`div`,23)(361,`span`,24),Mk(362,` action`),_u(363,`br`),Kg()()(),Jc(364,`td`,18)(365,`code`,39),Mk(366,`Function`),Kg()(),Jc(367,`td`,21)(368,`em`)(369,`strong`),Mk(370,`(opcional)`),Kg()(),Jc(371,`p`),Mk(372,`Ação executada ao clicar no item.`),Kg(),Jc(373,`blockquote`)(374,`p`),Mk(375,`A função atribuída a esta propriedade receberá o `),Jc(376,`em`),Mk(377,`label`),Kg(),Mk(378,` do item como parâmetro para execução.`),Kg()()()(),Jc(379,`tr`,40)(380,`td`,15)(381,`div`,23)(382,`span`,24),Mk(383,` label`),_u(384,`br`),Kg()()(),Jc(385,`td`,18)(386,`code`,27),Mk(387,`string`),Kg()(),Jc(388,`td`,21)(389,`p`),Mk(390,`Rótulo do item.`),Kg()()(),Jc(391,`tr`,41)(392,`td`,15)(393,`div`,23)(394,`span`,24),Mk(395,` link`),_u(396,`br`),Kg()()(),Jc(397,`td`,18)(398,`code`,27),Mk(399,`string`),Kg()(),Jc(400,`td`,21)(401,`em`)(402,`strong`),Mk(403,`(opcional)`),Kg()(),Jc(404,`p`),Mk(405,`Url do item.`),Kg(),Jc(406,`blockquote`)(407,`p`),Mk(408,`Caso o item também contenha uma `),Jc(409,`em`),Mk(410,`action`),Kg(),Mk(411,` definida, a preferência de execução será do `),Jc(412,`em`),Mk(413,`link`),Kg(),Mk(414,`.`),Kg()(),Jc(415,`blockquote`)(416,`p`),Mk(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(418,`strong`)(419,`a`,42),Mk(420,`Veja um exemplo de como criar rotas aqui`),Kg()(),Mk(421,`.`),Kg()(),Jc(422,`blockquote`)(423,`p`),Mk(424,`Esta propriedade é necessária para que a propriedade `),Jc(425,`code`),Mk(426,`p-favorite-service`),Kg(),Mk(427,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Jc(428,`h4`,43)(429,`code`,5),Mk(430,`PoBreadcrumb`),Kg()(),Jc(431,`div`,2)(432,`p`),Mk(433,`Interface que define o `),Jc(434,`code`),Mk(435,`po-breadcrumb`),Kg(),Mk(436,`.`),Kg()(),Jc(437,`h4`,10),Mk(438,`Propriedades`),Kg(),Jc(439,`table`,11)(440,`tr`,12)(441,`th`,13),Mk(442,`Nome`),Kg(),Jc(443,`th`,13),Mk(444,`Tipo`),Kg(),Jc(445,`th`,13),Mk(446,`Descrição`),Kg()(),Jc(447,`tr`,44)(448,`td`,15)(449,`div`,23)(450,`span`,24),Mk(451,` favorite`),_u(452,`br`),Kg()()(),Jc(453,`td`,18)(454,`code`,27),Mk(455,`string`),Kg()(),Jc(456,`td`,21)(457,`em`)(458,`strong`),Mk(459,`(opcional)`),Kg()(),Jc(460,`p`),Mk(461,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Jc(462,`blockquote`)(463,`p`),Mk(464,`Para maiores informações verificar a propriedade `),Jc(465,`code`),Mk(466,`p-favorite-service`),Kg(),Mk(467,` do componente `),Jc(468,`code`),Mk(469,`po-breadcrumb`),Kg(),Mk(470,`.`),Kg()()()(),Jc(471,`tr`,45)(472,`td`,15)(473,`div`,23)(474,`span`,24),Mk(475,` items`),_u(476,`br`),Kg()()(),Jc(477,`td`,18)(478,`code`,46),Mk(479,`Array<PoBreadcrumbItem>`),Kg()(),Jc(480,`td`,21)(481,`p`),Mk(482,`Lista de itens do `),Jc(483,`em`),Mk(484,`breadcrumb`),Kg(),Mk(485,`.`),Kg(),Jc(486,`p`)(487,`strong`),Mk(488,`Exemplo:`),Kg()(),Jc(489,`pre`)(490,`code`),Mk(491,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Jc(492,`tr`,47)(493,`td`,15)(494,`div`,23)(495,`span`,24),Mk(496,` params`),_u(497,`br`),Kg()()(),Jc(498,`td`,18)(499,`code`,48),Mk(500,`object`),Kg()(),Jc(501,`td`,21)(502,`em`)(503,`strong`),Mk(504,`(opcional)`),Kg()(),Jc(505,`p`),Mk(506,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Jc(507,`h4`,49)(508,`code`,5),Mk(509,`PoPageDetailLiterals`),Kg()(),Jc(510,`div`,2)(511,`p`),Mk(512,`Interface para definição das literais usadas no `),Jc(513,`code`),Mk(514,`po-page-detail`),Kg(),Mk(515,`.`),Kg()(),Jc(516,`h4`,10),Mk(517,`Propriedades`),Kg(),Jc(518,`table`,11)(519,`tr`,12)(520,`th`,13),Mk(521,`Nome`),Kg(),Jc(522,`th`,13),Mk(523,`Tipo`),Kg(),Jc(524,`th`,13),Mk(525,`Descrição`),Kg()(),Jc(526,`tr`,50)(527,`td`,15)(528,`div`,23)(529,`span`,24),Mk(530,` back`),_u(531,`br`),Kg()()(),Jc(532,`td`,18)(533,`code`,27),Mk(534,`string`),Kg()(),Jc(535,`td`,21)(536,`em`)(537,`strong`),Mk(538,`(opcional)`),Kg()(),Jc(539,`p`),Mk(540,`Label da ação `),Jc(541,`code`),Mk(542,`back`),Kg(),Mk(543,`.`),Kg()()(),Jc(544,`tr`,51)(545,`td`,15)(546,`div`,23)(547,`span`,24),Mk(548,` edit`),_u(549,`br`),Kg()()(),Jc(550,`td`,18)(551,`code`,27),Mk(552,`string`),Kg()(),Jc(553,`td`,21)(554,`em`)(555,`strong`),Mk(556,`(opcional)`),Kg()(),Jc(557,`p`),Mk(558,`Label da ação `),Jc(559,`code`),Mk(560,`edit`),Kg(),Mk(561,`.`),Kg()()(),Jc(562,`tr`,52)(563,`td`,15)(564,`div`,23)(565,`span`,24),Mk(566,` remove`),_u(567,`br`),Kg()()(),Jc(568,`td`,18)(569,`code`,27),Mk(570,`string`),Kg()(),Jc(571,`td`,21)(572,`em`)(573,`strong`),Mk(574,`(opcional)`),Kg()(),Jc(575,`p`),Mk(576,`Label da ação `),Jc(577,`code`),Mk(578,`remove`),Kg(),Mk(579,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ge(a,Se){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-detail-basic-view`)(2,`sample-po-page-detail-labs-view`)(3,`sample-po-page-detail-user-view`),Kg()),a&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var Ee=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page Detail`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Page Detail · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(r,n){r&1&&(Jc(0,`po-page-default`,0),LO(1,ge,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-page-detail-doc`),Kg()()),r&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,ee,ie,ae,oe],encapsulation:2,changeDetection:1})}return a})()}];var le=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Ee),GV]})}return a})();var Xe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,le]})}return a})();export{Xe as DocPoPageDetailModule};