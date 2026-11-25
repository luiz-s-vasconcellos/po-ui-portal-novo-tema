import{m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Ar as G0,Ca as j_,Ci as Rk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ia as nm,Ir as H_,Kr as Kg,Li as WL,Oi as U_,Pr as HO,Pt as are,Qr as Mk,Ri as Wb,Sa as jO,Si as RZ,U as Mze,Ut as cae,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de$1,ar as Ab,bn as oi,co as wg,eo as tk,er as $O,fo as xZ,jr as GV,mi as QL,or as An,pa as ge,qi as Zb,rr as AZ,sn as j4,tt as R4,ur as B_,w as Fc,zr as I}from"./chunk-DdK63a0t.js";var ae=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,a){o&1&&_u(0,`po-filter-chip`,0)},dependencies:[cae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-filter-chip-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Filter Chip Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-filter-chip-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ae],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(l){this.selected=l.selected,this.model=JSON.stringify(l),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,a){if(o&1){let F=KO();Jc(0,`div`,1)(1,`po-filter-chip`,2),_t(`p-selected-change`,function(s){return a.onSelectedChange(s)}),Kg()(),_u(2,`po-divider`),Jc(3,`div`,1),_u(4,`po-info`,3)(5,`po-info`,4),Kg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),G0(),Zb(`ngModelChange`,function(s){return U_(F),Rk(a.label,s)||(a.label=s),H_(s)}),Kg()(),Jc(11,`div`,1)(12,`po-switch`,6),G0(),Zb(`ngModelChange`,function(s){return U_(F),Rk(a.selected,s)||(a.selected=s),H_(s)}),Kg(),Jc(13,`po-switch`,7),G0(),Zb(`ngModelChange`,function(s){return U_(F),Rk(a.disabled,s)||(a.disabled=s),H_(s)}),Kg()(),Jc(14,`div`,1)(15,`po-button`,8),_t(`p-click`,function(){return a.restore()}),Kg()()()}o&2&&(wg(),Ab(`p-label`,a.label)(`p-selected`,a.selected)(`p-disabled`,a.disabled),wg(3),Ab(`p-value`,a.model),wg(),Ab(`p-value`,a.event),wg(5),Kb(`ngModel`,a.label),q0(),wg(2),Kb(`ngModel`,a.selected),q0(),wg(),Kb(`ngModel`,a.disabled),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,j4,R4,cae,Joe],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-filter-chip-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Filter Chip Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-filter-chip-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return n})();var Ee=(n,c)=>c.label;var Ce=(n,c)=>c.name;function ve(n,c){if(n&1){let l=KO();Jc(0,`po-filter-chip`,7),_t(`p-selected-change`,function(a){U_(l);let F=tk();return H_(F.onFilterChange(a))}),Kg()}if(n&2){let l=c.$implicit;Ab(`p-label`,l.label)(`p-selected`,l.selected)}}function xe(n,c){if(n&1&&(Jc(0,`div`,5)(1,`span`,8),Mk(2),Kg(),Jc(3,`span`,9),Mk(4),Kg()()),n&2){let l=c.$implicit;wg(2),Wb(l.name),wg(2),nm(`(`,l.category,`)`)}}function Fe(n,c){n&1&&(Jc(0,`div`,6)(1,`span`,10),Mk(2,`No products found.`),Kg()())}var se=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let l=this.filters.filter(o=>o.selected).map(o=>o.label);return l.length===0?this.products:this.products.filter(o=>l.includes(o.category))}onFilterChange(l){let o=this.filters.find(a=>a.label===l.label);o&&(o.selected=l.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,a){o&1&&(Jc(0,`div`,0)(1,`div`,1)(2,`p`,2),Mk(3,`Filter by category:`),Kg(),Jc(4,`div`,3),HO(5,ve,1,2,`po-filter-chip`,4,Ee),Kg()()(),_u(7,`po-divider`),Jc(8,`div`,0)(9,`div`,1)(10,`p`,2),Mk(11),Kg(),Jc(12,`po-container`),HO(13,xe,5,2,`div`,5,Ce,!1,Fe,3,0,`div`,6),Kg()()()),o&2&&(wg(5),$O(a.filters),wg(6),nm(`Products (`,a.filteredProducts.length,`):`),wg(2),$O(a.filteredProducts))},dependencies:[Fc,Nf,cae],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-filter-chip-filter-list`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,a){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Filter Chip - Filter List`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-filter-chip-filter-list`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
    <p class="po-font-subtitle">Products (`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` filteredProducts.length `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`):</p>
    <po-container>
      @for (product of filteredProducts; track product.name) {
        <div class="po-row po-p-1">
          <span class="po-font-text-bold po-mr-1">`),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` product.name `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</span>
          <span class="po-font-text-small">(`),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` product.category `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,`)</span>
        </div>
      } @empty {
        <div class="po-row po-p-2">
          <span class="po-font-text">No products found.</span>
        </div>
      }
    </po-container>
  </div>
</div>
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(41,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-filter-chip-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`id`,`prop-p-selected`,1,`docs-api-properties-row`],[`id`,`event-p-selected-change`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`interface-po-filter-chip-selected-change`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-filter-chip-selected-change-label`,1,`docs-api-properties-row`],[`id`,`interface-po-filter-chip-selected-change-selected`,1,`docs-api-properties-row`]],template:function(o,a){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-filter-chip`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`h3`,3),Mk(11,`Componente`),Kg(),Jc(12,`h4`,4)(13,`code`,5),Mk(14,`PoFilterChipComponent`),Kg()(),Jc(15,`div`,2)(16,`p`),Mk(17,`O `),Jc(18,`code`),Mk(19,`po-filter-chip`),Kg(),Mk(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),Kg(),Jc(21,`h4`),Mk(22,`Boas práticas`),Kg(),Jc(23,`ul`)(24,`li`),Mk(25,`Utilize `),Jc(26,`code`),Mk(27,`labels`),Kg(),Mk(28,` curtos e descritivos para os filtros.`),Kg(),Jc(29,`li`),Mk(30,`Agrupe múltiplos `),Jc(31,`code`),Mk(32,`po-filter-chip`),Kg(),Mk(33,` para representar opções de filtragem relacionadas.`),Kg(),Jc(34,`li`),Mk(35,`Utilize a propriedade `),Jc(36,`code`),Mk(37,`p-disabled`),Kg(),Mk(38,` para filtros temporariamente indisponíveis.`),Kg()(),Jc(39,`h4`),Mk(40,`Acessibilidade tratada no componente`),Kg(),Jc(41,`p`),Mk(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Jc(43,`ul`)(44,`li`),Mk(45,`O componente possui `),Jc(46,`code`),Mk(47,`role="option"`),Kg(),Mk(48,` e `),Jc(49,`code`),Mk(50,`aria-selected`),Kg(),Mk(51,` refletindo o estado de seleção. `),Jc(52,`a`,6),Mk(53,`W3C WAI-ARIA 3.14 Listbox`),Kg()(),Jc(54,`li`),Mk(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),Jc(56,`a`,7),Mk(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Kg()()(),Jc(58,`h4`),Mk(59,`Tokens customizáveis`),Kg(),Jc(60,`p`),Mk(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(62,`blockquote`)(63,`p`),Mk(64,`Para maiores informações, acesse o guia `),Jc(65,`a`,8),Mk(66,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(67,`.`),Kg()(),Jc(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),Mk(72,`Propriedade`),Kg(),Jc(73,`th`),Mk(74,`Descrição`),Kg(),Jc(75,`th`),Mk(76,`Valor Padrão`),Kg()()(),Jc(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),Mk(81,`--border-radius`),Kg()(),Jc(82,`td`),Mk(83,`Raio dos cantos do elemento`),Kg(),Jc(84,`td`)(85,`code`),Mk(86,`var(--border-radius-lg)`),Kg()()(),Jc(87,`tr`)(88,`td`)(89,`code`),Mk(90,`--border-width`),Kg()(),Jc(91,`td`),Mk(92,`Largura da borda`),Kg(),Jc(93,`td`)(94,`code`),Mk(95,`var(--border-width-sm)`),Kg()()(),Jc(96,`tr`)(97,`td`)(98,`code`),Mk(99,`--font-family`),Kg()(),Jc(100,`td`),Mk(101,`Família tipográfica`),Kg(),Jc(102,`td`)(103,`code`),Mk(104,`var(--font-family-theme)`),Kg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Mk(108,`--font-size`),Kg()(),Jc(109,`td`),Mk(110,`Tamanho da fonte`),Kg(),Jc(111,`td`)(112,`code`),Mk(113,`var(--font-size-default)`),Kg()()(),Jc(114,`tr`)(115,`td`)(116,`code`),Mk(117,`--font-weight`),Kg()(),Jc(118,`td`),Mk(119,`Peso da fonte`),Kg(),Jc(120,`td`)(121,`code`),Mk(122,`var(--font-weight-normal)`),Kg()()(),Jc(123,`tr`)(124,`td`)(125,`strong`),Mk(126,`Default`),Kg()(),_u(127,`td`)(128,`td`),Kg(),Jc(129,`tr`)(130,`td`)(131,`code`),Mk(132,`--border-color`),Kg()(),Jc(133,`td`),Mk(134,`Cor da borda no estado padrão`),Kg(),Jc(135,`td`)(136,`code`),Mk(137,`var(--color-neutral-light-20)`),Kg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Mk(141,`--text-color`),Kg()(),Jc(142,`td`),Mk(143,`Cor do texto no estado padrão`),Kg(),Jc(144,`td`)(145,`code`),Mk(146,`var(--color-neutral-dark-80)`),Kg()()(),Jc(147,`tr`)(148,`td`)(149,`code`),Mk(150,`--background-color`),Kg()(),Jc(151,`td`),Mk(152,`Cor de fundo no estado padrão`),Kg(),Jc(153,`td`)(154,`code`),Mk(155,`transparent`),Kg()()(),Jc(156,`tr`)(157,`td`)(158,`strong`),Mk(159,`Hover`),Kg()(),_u(160,`td`)(161,`td`),Kg(),Jc(162,`tr`)(163,`td`)(164,`code`),Mk(165,`--background-color-hover`),Kg()(),Jc(166,`td`),Mk(167,`Cor de fundo no estado hover`),Kg(),Jc(168,`td`)(169,`code`),Mk(170,`var(--color-brand-01-lightest)`),Kg()()(),Jc(171,`tr`)(172,`td`)(173,`code`),Mk(174,`--text-color-hover`),Kg()(),Jc(175,`td`),Mk(176,`Cor do texto no estado hover`),Kg(),Jc(177,`td`)(178,`code`),Mk(179,`var(--color-action-default)`),Kg()()(),Jc(180,`tr`)(181,`td`)(182,`strong`),Mk(183,`Selected`),Kg()(),_u(184,`td`)(185,`td`),Kg(),Jc(186,`tr`)(187,`td`)(188,`code`),Mk(189,`--background-color-selected`),Kg()(),Jc(190,`td`),Mk(191,`Cor de fundo no estado selecionado`),Kg(),Jc(192,`td`)(193,`code`),Mk(194,`var(--color-brand-01-lightest)`),Kg()()(),Jc(195,`tr`)(196,`td`)(197,`code`),Mk(198,`--border-color-selected`),Kg()(),Jc(199,`td`),Mk(200,`Cor da borda no estado selecionado`),Kg(),Jc(201,`td`)(202,`code`),Mk(203,`var(--color-brand-01-lighter)`),Kg()()(),Jc(204,`tr`)(205,`td`)(206,`code`),Mk(207,`--text-color-selected`),Kg()(),Jc(208,`td`),Mk(209,`Cor do texto no estado selecionado`),Kg(),Jc(210,`td`)(211,`code`),Mk(212,`var(--color-action-default)`),Kg()()(),Jc(213,`tr`)(214,`td`)(215,`code`),Mk(216,`--icon-color-selected`),Kg()(),Jc(217,`td`),Mk(218,`Cor do ícone no estado selecionado`),Kg(),Jc(219,`td`)(220,`code`),Mk(221,`var(--color-action-default)`),Kg()()(),Jc(222,`tr`)(223,`td`)(224,`strong`),Mk(225,`Disabled`),Kg()(),_u(226,`td`)(227,`td`),Kg(),Jc(228,`tr`)(229,`td`)(230,`code`),Mk(231,`--opacity-disabled`),Kg()(),Jc(232,`td`),Mk(233,`Opacidade no estado desabilitado`),Kg(),Jc(234,`td`)(235,`code`),Mk(236,`0.5`),Kg()()()()()(),Jc(237,`div`,9)(238,`h4`,10),Mk(239,`Seletor`),Kg(),Jc(240,`pre`,11),Mk(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),Kg()(),Jc(242,`h4`,12),Mk(243,`Propriedades`),Kg(),Jc(244,`table`,13)(245,`tr`,14)(246,`th`,15),Mk(247,`Nome`),Kg(),Jc(248,`th`,15),Mk(249,`Tipo`),Kg(),Jc(250,`th`,15),Mk(251,`Padrão`),Kg(),Jc(252,`th`,15),Mk(253,`Descrição`),Kg()(),Jc(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),Mk(258,` p-disabled`),_u(259,`br`),Kg()()(),Jc(260,`td`,20)(261,`code`,21),Mk(262,`boolean`),Kg()(),Jc(263,`td`,22)(264,`p`)(265,`code`),Mk(266,`false`),Kg()()(),Jc(267,`td`,23)(268,`em`)(269,`strong`),Mk(270,`(opcional)`),Kg()(),Jc(271,`p`),Mk(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),Kg(),Jc(273,`p`),Mk(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),Kg()()(),Jc(275,`tr`,24)(276,`td`,17)(277,`div`,18)(278,`span`,19),Mk(279,` p-label`),_u(280,`br`),Kg()()(),Jc(281,`td`,20)(282,`code`,25),Mk(283,`string `),Kg(),Jc(284,`code`,26),Mk(285,` undefined`),Kg()(),Jc(286,`td`,22),Mk(287,`-`),Kg(),Jc(288,`td`,23)(289,`em`)(290,`strong`),Mk(291,`(opcional)`),Kg()(),Jc(292,`p`),Mk(293,`Define o rótulo de texto exibido no chip.`),Kg()()(),Jc(294,`tr`,27)(295,`td`,17)(296,`div`,18)(297,`span`,19),Mk(298,` p-selected`),_u(299,`br`),Kg()()(),Jc(300,`td`,20)(301,`code`,21),Mk(302,`boolean`),Kg()(),Jc(303,`td`,22)(304,`p`)(305,`code`),Mk(306,`false`),Kg()()(),Jc(307,`td`,23)(308,`em`)(309,`strong`),Mk(310,`(opcional)`),Kg()(),Jc(311,`p`),Mk(312,`Define o estado de seleção do chip.`),Kg()()(),Jc(313,`tr`,28)(314,`td`,17)(315,`div`,29)(316,`span`,30),Mk(317,` (p-selected-change)`),_u(318,`br`),Kg()()(),Jc(319,`td`,20)(320,`code`,31),Mk(321,`EventEmitter`),Kg()(),Jc(322,`td`,22),Mk(323,`-`),Kg(),Jc(324,`td`,23)(325,`em`)(326,`strong`),Mk(327,`(opcional)`),Kg()(),Jc(328,`p`),Mk(329,`Evento disparado após a alteração do estado de seleção do `),Jc(330,`em`),Mk(331,`chip`),Kg(),Mk(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),Kg()()()(),Jc(333,`h3`),Mk(334,`Interfaces`),Kg(),Jc(335,`h4`,32)(336,`code`,5),Mk(337,`PoFilterChipSelectedChange`),Kg()(),Jc(338,`div`,2)(339,`p`),Mk(340,`Interface que define o objeto emitido pelo evento `),Jc(341,`code`),Mk(342,`p-selected-change`),Kg(),Mk(343,`.`),Kg()(),Jc(344,`h4`,12),Mk(345,`Propriedades`),Kg(),Jc(346,`table`,13)(347,`tr`,14)(348,`th`,15),Mk(349,`Nome`),Kg(),Jc(350,`th`,15),Mk(351,`Tipo`),Kg(),Jc(352,`th`,15),Mk(353,`Descrição`),Kg()(),Jc(354,`tr`,33)(355,`td`,17)(356,`div`,18)(357,`span`,19),Mk(358,` label`),_u(359,`br`),Kg()()(),Jc(360,`td`,20)(361,`code`,25),Mk(362,`string`),Kg()(),Jc(363,`td`,23)(364,`p`),Mk(365,`Rótulo de texto do `),Jc(366,`em`),Mk(367,`chip`),Kg(),Mk(368,`.`),Kg()()(),Jc(369,`tr`,34)(370,`td`,17)(371,`div`,18)(372,`span`,19),Mk(373,` selected`),_u(374,`br`),Kg()()(),Jc(375,`td`,20)(376,`code`,21),Mk(377,`boolean`),Kg()(),Jc(378,`td`,23)(379,`p`),Mk(380,`Estado de seleção do `),Jc(381,`em`),Mk(382,`chip`),Kg(),Mk(383,` (`),Jc(384,`code`),Mk(385,`true`),Kg(),Mk(386,` para selecionado, `),Jc(387,`code`),Mk(388,`false`),Kg(),Mk(389,` para desmarcado).`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function De(n,c){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-filter-chip-basic-view`)(2,`sample-po-filter-chip-labs-view`)(3,`sample-po-filter-chip-filter-list-view`),Kg()),n&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var _e=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Filter Chip`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Filter Chip · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(o,a){o&1&&(Jc(0,`po-page-default`,0),LO(1,De,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-filter-chip-doc`),Kg()()),o&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,re,de,me,ce],encapsulation:2,changeDetection:1})}return n})()}];var fe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[GV.forChild(_e),GV]})}return n})();var nt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,fe]})}return n})();export{nt as DocPoFilterChipModule};