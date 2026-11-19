import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,Ci as UO,F as Joe,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Tr as Gb,Ui as YO,Ut as cae,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,ki as V_,li as Qc,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,vi as Sk,w as Fc,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var de=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,l){o&1&&vu(0,`po-filter-chip`,0)},dependencies:[cae],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-filter-chip-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Filter Chip Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-filter-chip-basic`),Kg(),vu(25,`hr`)),o&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ee,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,l){if(o&1){let f=YO();Qc(0,`div`,1)(1,`po-filter-chip`,2),vt(`p-selected-change`,function(c){return l.onSelectedChange(c)}),Kg()(),vu(2,`po-divider`),Qc(3,`div`,1),vu(4,`po-info`,3)(5,`po-info`,4),Kg(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),z0(),Kb(`ngModelChange`,function(c){return B_(f),Tk(l.label,c)||(l.label=c),U_(c)}),Kg()(),Qc(11,`div`,1)(12,`po-switch`,6),z0(),Kb(`ngModelChange`,function(c){return B_(f),Tk(l.selected,c)||(l.selected=c),U_(c)}),Kg(),Qc(13,`po-switch`,7),z0(),Kb(`ngModelChange`,function(c){return B_(f),Tk(l.disabled,c)||(l.disabled=c),U_(c)}),Kg()(),Qc(14,`div`,1)(15,`po-button`,8),vt(`p-click`,function(){return l.restore()}),Kg()()()}o&2&&(wg(),Rb(`p-label`,l.label)(`p-selected`,l.selected)(`p-disabled`,l.disabled),wg(3),Rb(`p-value`,l.model),wg(),Rb(`p-value`,l.event),wg(5),Yb(`ngModel`,l.label),W0(),wg(2),Yb(`ngModel`,l.selected),W0(),wg(),Yb(`ngModel`,l.disabled),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,R4,cae,Joe],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n});var he=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-filter-chip-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Filter Chip Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-filter-chip
    [p-label]="label"
    [p-selected]="selected"
    [p-disabled]="disabled"
    (p-selected-change)="onSelectedChange($event)"
  >
  </po-filter-chip>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="model"></po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"></po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label"></po-input>
  </div>

  <div class="po-row">
    <po-switch class="po-md-4" name="selected" [(ngModel)]="selected" p-label="Selected"></po-switch>
    <po-switch class="po-md-4" name="disabled" [(ngModel)]="disabled" p-label="Disabled"></po-switch>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

@Component({
  selector: 'sample-po-filter-chip-labs',
  templateUrl: './sample-po-filter-chip-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipLabsComponent implements OnInit {
  label: string;
  selected: boolean;
  disabled: boolean;
  event: string;
  model: string;

  ngOnInit() {
    this.restore();
  }

  onSelectedChange(event: PoFilterChipSelectedChange): void {
    this.selected = event.selected;
    this.model = JSON.stringify(event);
    this.event = 'p-selected-change';
  }

  restore() {
    this.label = 'Filter';
    this.selected = false;
    this.disabled = false;
    this.event = '';
    this.model = '';
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-filter-chip-labs`),Kg(),vu(25,`hr`)),o&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Fe,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return n})();var Pe=(n,h)=>h.label;var we=(n,h)=>h.name;function _e(n,h){if(n&1){let a=YO();Qc(0,`po-filter-chip`,7),vt(`p-selected-change`,function(l){B_(a);let f=ek();return U_(f.onFilterChange(l))}),Kg()}if(n&2){let a=h.$implicit;Rb(`p-label`,a.label)(`p-selected`,a.selected)}}function Te(n,h){if(n&1&&(Qc(0,`div`,5)(1,`span`,8),Sk(2),Kg(),Qc(3,`span`,9),Sk(4),Kg()()),n&2){let a=h.$implicit;wg(2),Gb(a.name),wg(2),tm(`(`,a.category,`)`)}}function De(n,h){n&1&&(Qc(0,`div`,6)(1,`span`,10),Sk(2,`No products found.`),Kg()())}var fe=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,l){o&1&&(Qc(0,`div`,0)(1,`div`,1)(2,`p`,2),Sk(3,`Filter by category:`),Kg(),Qc(4,`div`,3),UO(5,_e,1,2,`po-filter-chip`,4,Pe),Kg()()(),vu(7,`po-divider`),Qc(8,`div`,0)(9,`div`,1)(10,`p`,2),Sk(11),Kg(),Qc(12,`po-container`),UO(13,Te,5,2,`div`,5,we,!1,De,3,0,`div`,6),Kg()()()),o&2&&(wg(5),HO(l.filters),wg(6),tm(`Products (`,l.filteredProducts.length,`):`),wg(2),HO(l.filteredProducts))},dependencies:[Fc,Nf,cae],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:44,vars:6,consts:[[`id`,`sample-po-filter-chip-filter-list`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Filter Chip - Filter List`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Filter by category:</p>
    <div class="po-mt-1">
      @for (filter of filters; track filter.label) {
        <po-filter-chip
          class="po-mr-1"
          [p-label]="filter.label"
          [p-selected]="filter.selected"
          (p-selected-change)="onFilterChange($event)"
        >
        </po-filter-chip>
      }
    </div>
  </div>
</div>

<po-divider />

<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Products (`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` filteredProducts.length `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`):</p>
    <po-container>
      @for (product of filteredProducts; track product.name) {
        <div class="po-row po-p-1">
          <span class="po-font-text-bold po-mr-1">`),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` product.name `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,`</span>
          <span class="po-font-text-small">(`),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` product.category `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,`)</span>
        </div>
      } @empty {
        <div class="po-row po-p-2">
          <span class="po-font-text">No products found.</span>
        </div>
      }
    </po-container>
  </div>
</div>
`),Kg()()()(),Qc(34,`po-tab`,9)(35,`div`)(36,`label`,6),Sk(37,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),Kg(),Qc(38,`div`,10)(39,`pre`,11),Sk(40,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

interface FilterOption {
  label: string;
  selected: boolean;
}

interface Product {
  name: string;
  category: string;
}

@Component({
  selector: 'sample-po-filter-chip-filter-list',
  templateUrl: './sample-po-filter-chip-filter-list.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipFilterListComponent {
  filters: Array<FilterOption> = [
    { label: 'Electronics', selected: false },
    { label: 'Clothing', selected: false },
    { label: 'Books', selected: false },
    { label: 'Sports', selected: false }
  ];

  products: Array<Product> = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'Sneakers', category: 'Clothing' },
    { name: 'Novel', category: 'Books' },
    { name: 'Cookbook', category: 'Books' },
    { name: 'Basketball', category: 'Sports' },
    { name: 'Tennis Racket', category: 'Sports' }
  ];

  get filteredProducts(): Array<Product> {
    const activeFilters = this.filters.filter(f => f.selected).map(f => f.label);

    if (activeFilters.length === 0) {
      return this.products;
    }

    return this.products.filter(p => activeFilters.includes(p.category));
  }

  onFilterChange(event: PoFilterChipSelectedChange): void {
    const filter = this.filters.find(f => f.label === event.label);
    if (filter) {
      filter.selected = event.selected;
    }
  }
}
`),Kg()()()()()(),Qc(41,`div`,12),vu(42,`sample-po-filter-chip-filter-list`),Kg(),vu(43,`hr`)),o&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return n})();var be=(()=>{class n{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-filter-chip-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`id`,`prop-p-selected`,1,`docs-api-properties-row`],[`id`,`event-p-selected-change`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`interface-po-filter-chip-selected-change`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-filter-chip-selected-change-label`,1,`docs-api-properties-row`],[`id`,`interface-po-filter-chip-selected-change-selected`,1,`docs-api-properties-row`]],template:function(o,l){o&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-filter-chip`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoFilterChipComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`O `),Qc(18,`code`),Sk(19,`po-filter-chip`),Kg(),Sk(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),Kg(),Qc(21,`h4`),Sk(22,`Boas práticas`),Kg(),Qc(23,`ul`)(24,`li`),Sk(25,`Utilize `),Qc(26,`code`),Sk(27,`labels`),Kg(),Sk(28,` curtos e descritivos para os filtros.`),Kg(),Qc(29,`li`),Sk(30,`Agrupe múltiplos `),Qc(31,`code`),Sk(32,`po-filter-chip`),Kg(),Sk(33,` para representar opções de filtragem relacionadas.`),Kg(),Qc(34,`li`),Sk(35,`Utilize a propriedade `),Qc(36,`code`),Sk(37,`p-disabled`),Kg(),Sk(38,` para filtros temporariamente indisponíveis.`),Kg()(),Qc(39,`h4`),Sk(40,`Acessibilidade tratada no componente`),Kg(),Qc(41,`p`),Sk(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(43,`ul`)(44,`li`),Sk(45,`O componente possui `),Qc(46,`code`),Sk(47,`role="option"`),Kg(),Sk(48,` e `),Qc(49,`code`),Sk(50,`aria-selected`),Kg(),Sk(51,` refletindo o estado de seleção. `),Qc(52,`a`,6),Sk(53,`W3C WAI-ARIA 3.14 Listbox`),Kg()(),Qc(54,`li`),Sk(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),Qc(56,`a`,7),Sk(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Kg()()(),Qc(58,`h4`),Sk(59,`Tokens customizáveis`),Kg(),Qc(60,`p`),Sk(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(62,`blockquote`)(63,`p`),Sk(64,`Para maiores informações, acesse o guia `),Qc(65,`a`,8),Sk(66,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(67,`.`),Kg()(),Qc(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),Sk(72,`Propriedade`),Kg(),Qc(73,`th`),Sk(74,`Descrição`),Kg(),Qc(75,`th`),Sk(76,`Valor Padrão`),Kg()()(),Qc(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),Sk(81,`--border-radius`),Kg()(),Qc(82,`td`),Sk(83,`Raio dos cantos do elemento`),Kg(),Qc(84,`td`)(85,`code`),Sk(86,`var(--border-radius-lg)`),Kg()()(),Qc(87,`tr`)(88,`td`)(89,`code`),Sk(90,`--border-width`),Kg()(),Qc(91,`td`),Sk(92,`Largura da borda`),Kg(),Qc(93,`td`)(94,`code`),Sk(95,`var(--border-width-sm)`),Kg()()(),Qc(96,`tr`)(97,`td`)(98,`code`),Sk(99,`--font-family`),Kg()(),Qc(100,`td`),Sk(101,`Família tipográfica`),Kg(),Qc(102,`td`)(103,`code`),Sk(104,`var(--font-family-theme)`),Kg()()(),Qc(105,`tr`)(106,`td`)(107,`code`),Sk(108,`--font-size`),Kg()(),Qc(109,`td`),Sk(110,`Tamanho da fonte`),Kg(),Qc(111,`td`)(112,`code`),Sk(113,`var(--font-size-default)`),Kg()()(),Qc(114,`tr`)(115,`td`)(116,`code`),Sk(117,`--font-weight`),Kg()(),Qc(118,`td`),Sk(119,`Peso da fonte`),Kg(),Qc(120,`td`)(121,`code`),Sk(122,`var(--font-weight-normal)`),Kg()()(),Qc(123,`tr`)(124,`td`)(125,`strong`),Sk(126,`Default`),Kg()(),vu(127,`td`)(128,`td`),Kg(),Qc(129,`tr`)(130,`td`)(131,`code`),Sk(132,`--border-color`),Kg()(),Qc(133,`td`),Sk(134,`Cor da borda no estado padrão`),Kg(),Qc(135,`td`)(136,`code`),Sk(137,`var(--color-neutral-light-20)`),Kg()()(),Qc(138,`tr`)(139,`td`)(140,`code`),Sk(141,`--text-color`),Kg()(),Qc(142,`td`),Sk(143,`Cor do texto no estado padrão`),Kg(),Qc(144,`td`)(145,`code`),Sk(146,`var(--color-neutral-dark-80)`),Kg()()(),Qc(147,`tr`)(148,`td`)(149,`code`),Sk(150,`--background-color`),Kg()(),Qc(151,`td`),Sk(152,`Cor de fundo no estado padrão`),Kg(),Qc(153,`td`)(154,`code`),Sk(155,`transparent`),Kg()()(),Qc(156,`tr`)(157,`td`)(158,`strong`),Sk(159,`Hover`),Kg()(),vu(160,`td`)(161,`td`),Kg(),Qc(162,`tr`)(163,`td`)(164,`code`),Sk(165,`--background-color-hover`),Kg()(),Qc(166,`td`),Sk(167,`Cor de fundo no estado hover`),Kg(),Qc(168,`td`)(169,`code`),Sk(170,`var(--color-brand-01-lightest)`),Kg()()(),Qc(171,`tr`)(172,`td`)(173,`code`),Sk(174,`--text-color-hover`),Kg()(),Qc(175,`td`),Sk(176,`Cor do texto no estado hover`),Kg(),Qc(177,`td`)(178,`code`),Sk(179,`var(--color-action-default)`),Kg()()(),Qc(180,`tr`)(181,`td`)(182,`strong`),Sk(183,`Selected`),Kg()(),vu(184,`td`)(185,`td`),Kg(),Qc(186,`tr`)(187,`td`)(188,`code`),Sk(189,`--background-color-selected`),Kg()(),Qc(190,`td`),Sk(191,`Cor de fundo no estado selecionado`),Kg(),Qc(192,`td`)(193,`code`),Sk(194,`var(--color-brand-01-lightest)`),Kg()()(),Qc(195,`tr`)(196,`td`)(197,`code`),Sk(198,`--border-color-selected`),Kg()(),Qc(199,`td`),Sk(200,`Cor da borda no estado selecionado`),Kg(),Qc(201,`td`)(202,`code`),Sk(203,`var(--color-brand-01-lighter)`),Kg()()(),Qc(204,`tr`)(205,`td`)(206,`code`),Sk(207,`--text-color-selected`),Kg()(),Qc(208,`td`),Sk(209,`Cor do texto no estado selecionado`),Kg(),Qc(210,`td`)(211,`code`),Sk(212,`var(--color-action-default)`),Kg()()(),Qc(213,`tr`)(214,`td`)(215,`code`),Sk(216,`--icon-color-selected`),Kg()(),Qc(217,`td`),Sk(218,`Cor do ícone no estado selecionado`),Kg(),Qc(219,`td`)(220,`code`),Sk(221,`var(--color-action-default)`),Kg()()(),Qc(222,`tr`)(223,`td`)(224,`strong`),Sk(225,`Disabled`),Kg()(),vu(226,`td`)(227,`td`),Kg(),Qc(228,`tr`)(229,`td`)(230,`code`),Sk(231,`--opacity-disabled`),Kg()(),Qc(232,`td`),Sk(233,`Opacidade no estado desabilitado`),Kg(),Qc(234,`td`)(235,`code`),Sk(236,`0.5`),Kg()()()()()(),Qc(237,`div`,9)(238,`h4`,10),Sk(239,`Seletor`),Kg(),Qc(240,`pre`,11),Sk(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),Kg()(),Qc(242,`h4`,12),Sk(243,`Propriedades`),Kg(),Qc(244,`table`,13)(245,`tr`,14)(246,`th`,15),Sk(247,`Nome`),Kg(),Qc(248,`th`,15),Sk(249,`Tipo`),Kg(),Qc(250,`th`,15),Sk(251,`Padrão`),Kg(),Qc(252,`th`,15),Sk(253,`Descrição`),Kg()(),Qc(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),Sk(258,` p-disabled`),vu(259,`br`),Kg()()(),Qc(260,`td`,20)(261,`code`,21),Sk(262,`boolean`),Kg()(),Qc(263,`td`,22)(264,`p`)(265,`code`),Sk(266,`false`),Kg()()(),Qc(267,`td`,23)(268,`em`)(269,`strong`),Sk(270,`(opcional)`),Kg()(),Qc(271,`p`),Sk(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),Kg(),Qc(273,`p`),Sk(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),Kg()()(),Qc(275,`tr`,24)(276,`td`,17)(277,`div`,18)(278,`span`,19),Sk(279,` p-label`),vu(280,`br`),Kg()()(),Qc(281,`td`,20)(282,`code`,25),Sk(283,`string `),Kg(),Qc(284,`code`,26),Sk(285,` undefined`),Kg()(),Qc(286,`td`,22),Sk(287,`-`),Kg(),Qc(288,`td`,23)(289,`em`)(290,`strong`),Sk(291,`(opcional)`),Kg()(),Qc(292,`p`),Sk(293,`Define o rótulo de texto exibido no chip.`),Kg()()(),Qc(294,`tr`,27)(295,`td`,17)(296,`div`,18)(297,`span`,19),Sk(298,` p-selected`),vu(299,`br`),Kg()()(),Qc(300,`td`,20)(301,`code`,21),Sk(302,`boolean`),Kg()(),Qc(303,`td`,22)(304,`p`)(305,`code`),Sk(306,`false`),Kg()()(),Qc(307,`td`,23)(308,`em`)(309,`strong`),Sk(310,`(opcional)`),Kg()(),Qc(311,`p`),Sk(312,`Define o estado de seleção do chip.`),Kg()()(),Qc(313,`tr`,28)(314,`td`,17)(315,`div`,29)(316,`span`,30),Sk(317,` (p-selected-change)`),vu(318,`br`),Kg()()(),Qc(319,`td`,20)(320,`code`,31),Sk(321,`EventEmitter`),Kg()(),Qc(322,`td`,22),Sk(323,`-`),Kg(),Qc(324,`td`,23)(325,`em`)(326,`strong`),Sk(327,`(opcional)`),Kg()(),Qc(328,`p`),Sk(329,`Evento disparado após a alteração do estado de seleção do `),Qc(330,`em`),Sk(331,`chip`),Kg(),Sk(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),Kg()()()(),Qc(333,`h3`),Sk(334,`Interfaces`),Kg(),Qc(335,`h4`,32)(336,`code`,5),Sk(337,`PoFilterChipSelectedChange`),Kg()(),Qc(338,`div`,2)(339,`p`),Sk(340,`Interface que define o objeto emitido pelo evento `),Qc(341,`code`),Sk(342,`p-selected-change`),Kg(),Sk(343,`.`),Kg()(),Qc(344,`h4`,12),Sk(345,`Propriedades`),Kg(),Qc(346,`table`,13)(347,`tr`,14)(348,`th`,15),Sk(349,`Nome`),Kg(),Qc(350,`th`,15),Sk(351,`Tipo`),Kg(),Qc(352,`th`,15),Sk(353,`Descrição`),Kg()(),Qc(354,`tr`,33)(355,`td`,17)(356,`div`,18)(357,`span`,19),Sk(358,` label`),vu(359,`br`),Kg()()(),Qc(360,`td`,20)(361,`code`,25),Sk(362,`string`),Kg()(),Qc(363,`td`,23)(364,`p`),Sk(365,`Rótulo de texto do `),Qc(366,`em`),Sk(367,`chip`),Kg(),Sk(368,`.`),Kg()()(),Qc(369,`tr`,34)(370,`td`,17)(371,`div`,18)(372,`span`,19),Sk(373,` selected`),vu(374,`br`),Kg()()(),Qc(375,`td`,20)(376,`code`,21),Sk(377,`boolean`),Kg()(),Qc(378,`td`,23)(379,`p`),Sk(380,`Estado de seleção do `),Qc(381,`em`),Sk(382,`chip`),Kg(),Sk(383,` (`),Qc(384,`code`),Sk(385,`true`),Kg(),Sk(386,` para selecionado, `),Qc(387,`code`),Sk(388,`false`),Kg(),Sk(389,` para desmarcado).`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Ie(n,h){if(n&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let l=ek();return U_(l.changeTab(`web`))}),vu(1,`sample-po-filter-chip-basic-view`)(2,`sample-po-filter-chip-labs-view`)(3,`sample-po-filter-chip-filter-list-view`),Kg()}if(n&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var Ve=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Filter Chip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ie,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-filter-chip-doc`),Kg()()()),o&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,me,he,ue,be],encapsulation:2,changeDetection:1})}return n})()}];var Se=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[GV.forChild(Ve),GV]})}return n})();var st=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,Se]})}return n})();export{st as DocPoFilterChipModule};