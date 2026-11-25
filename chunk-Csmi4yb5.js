import{m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Ar as G0,At as Zte,Ci as Rk,D as Gae,Ea as jk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,It as bae,Kr as Kg,L as Koe,Li as WL,Ni as Vk,Oi as U_,Pt as are,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,T as Fze,Tn as q4,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,_r as Cu,aa as de,ar as Ab,bn as oi,co as wg,eo as tk,fo as xZ,go as xo,ht as Tt,ii as No,it as Rze,j as I4,jr as GV,k as Goe,mi as QL,or as An,pa as ge$1,qi as Zb,rr as AZ,sn as j4,tt as R4,zr as I}from"./chunk-DdK63a0t.js";import{t as r}from"./chunk-zystk1pz.js";var Te=()=>({label:`Add`,value:1.1});var be=a=>[a];var Ie=a=>({label:`User manager`,value:1,subItems:a});var ve=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-basic`]],standalone:!1,decls:1,vars:8,consts:[[3,`p-items`]],template:function(o,i){o&1&&_u(0,`po-tree-view`,0),o&2&&Ab(`p-items`,jk(6,be,jk(4,Ie,jk(2,be,Vk(1,Te)))))},dependencies:[Rze],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-tree-view-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tree View Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tree-view-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-tree-view
  [p-items]="[
    {
      label: 'User manager',
      value: 1,
      subItems: [{ label: 'Add', value: 1.1 }]
    }
  ]"
>
</po-tree-view>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ve],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{componentsSize=`medium`;disabled=!1;event;items;itemProperties;maxLevel=4;noBorder=!1;parent;parentList;selectable=!1;singleSelect=!1;treeViewItem;componentsSizeOptions=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`}];itemPropertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`expanded`,label:`Expanded`},{value:`selected`,label:`Selected`},{value:`showIcon`,label:`Show Icon`}];ngOnInit(){this.restore()}addTreeViewItem(r){this.add(this.treeViewItem),r.reset(),this.itemProperties=[]}add(r$1){r$1.disabled=this.itemProperties.includes(`disabled`),r$1.expanded=this.itemProperties.includes(`expanded`),r$1.selected=this.itemProperties.includes(`selected`),r$1.showIcon=this.itemProperties.includes(`showIcon`);let o=r({},r$1);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.componentsSize=`medium`,this.disabled=!1,this.event=void 0,this.items=[],this.itemProperties=[],this.maxLevel=4,this.noBorder=!1,this.parent=void 0,this.parentList=[],this.selectable=!1,this.singleSelect=!1,this.treeViewItem={}}getTreeViewItemNode(r,o){let i;if(r){for(let p of r)if(p.value===o){i=p;break}else i||(i=this.getTreeViewItemNode(p.subItems,o));return i}}updateParentList(r,o=0,i=[],p){return r.forEach(s=>{let{label:m,value:ye}=s;i.push({label:`${`-`.repeat(o)} ${m}`,value:ye}),s.subItems&&(this.updateParentList(s.subItems,++o,i,s),--o),o=p?o:0}),i}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-labs`]],standalone:!1,decls:26,vars:22,consts:[[`treeViewItemForm`,`ngForm`],[3,`p-activated`,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-components-size`,`p-disabled`,`p-items`,`p-max-level`,`p-no-border`,`p-selectable`,`p-single-select`],[`p-label`,`Events`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Po Tree View Config`],[`name`,`level`,`p-label`,`Max Level`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`selectable`,`p-label`,`Selectable`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`singleSelect`,`p-label`,`Single Select`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`noBorder`,`p-label`,`No Border`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Po Tree View Item`],[`name`,`parent`,`p-label`,`Parent Item`,`p-placeholder`,`Add tree view item`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`itemProperties`,`p-columns`,`4`,`p-label`,`Item Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`]],template:function(o,i){if(o&1){let p=KO();Jc(0,`po-tree-view`,1),_t(`p-activated`,function(m){return i.changeEvent(`p-activated`,m)})(`p-collapsed`,function(m){return i.changeEvent(`p-collapsed`,m)})(`p-expanded`,function(m){return i.changeEvent(`p-expanded`,m)})(`p-selected`,function(m){return i.changeEvent(`p-selected`,m)})(`p-unselected`,function(m){return i.changeEvent(`p-unselected`,m)}),Kg(),_u(1,`po-divider`,2),Jc(2,`div`,3),_u(3,`po-info`,4),Kg(),_u(4,`po-divider`,5),Jc(5,`div`,3)(6,`po-number`,6),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.maxLevel,m)||(i.maxLevel=m),H_(m)}),Kg(),Jc(7,`po-switch`,7),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.selectable,m)||(i.selectable=m),H_(m)}),Kg(),Jc(8,`po-switch`,8),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.singleSelect,m)||(i.singleSelect=m),H_(m)}),Kg(),Jc(9,`po-switch`,9),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.disabled,m)||(i.disabled=m),H_(m)}),Kg(),Jc(10,`po-switch`,10),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.noBorder,m)||(i.noBorder=m),H_(m)}),Kg(),Jc(11,`po-radio-group`,11),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.componentsSize,m)||(i.componentsSize=m),H_(m)}),Kg()(),_u(12,`po-divider`,12),Jc(13,`form`,null,0)(15,`div`,3)(16,`po-select`,13),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.parent,m)||(i.parent=m),H_(m)}),Kg(),Jc(17,`po-input`,14),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.treeViewItem.label,m)||(i.treeViewItem.label=m),H_(m)}),Kg(),Jc(18,`po-input`,15),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.treeViewItem.value,m)||(i.treeViewItem.value=m),H_(m)}),Kg()(),Jc(19,`div`,3)(20,`po-checkbox-group`,16),G0(),Zb(`ngModelChange`,function(m){return U_(p),Rk(i.itemProperties,m)||(i.itemProperties=m),H_(m)}),Kg()(),Jc(21,`div`,3)(22,`po-button`,17),_t(`p-click`,function(){U_(p);let m=ok(14);return H_(i.addTreeViewItem(m))}),Kg()()(),_u(23,`po-divider`),Jc(24,`div`,3)(25,`po-button`,18),_t(`p-click`,function(){return i.restore()}),Kg()()}if(o&2){let p=ok(14);Ab(`p-components-size`,i.componentsSize)(`p-disabled`,i.disabled)(`p-items`,i.items)(`p-max-level`,i.maxLevel)(`p-no-border`,i.noBorder)(`p-selectable`,i.selectable)(`p-single-select`,i.singleSelect),wg(3),Ab(`p-value`,i.event),wg(3),Kb(`ngModel`,i.maxLevel),q0(),wg(),Kb(`ngModel`,i.selectable),q0(),wg(),Kb(`ngModel`,i.singleSelect),q0(),wg(),Kb(`ngModel`,i.disabled),q0(),wg(),Kb(`ngModel`,i.noBorder),q0(),wg(),Kb(`ngModel`,i.componentsSize),Ab(`p-options`,i.componentsSizeOptions),q0(),wg(5),Kb(`ngModel`,i.parent),Ab(`p-options`,i.parentList),q0(),wg(),Kb(`ngModel`,i.treeViewItem.label),q0(),wg(),Kb(`ngModel`,i.treeViewItem.value),q0(),wg(2),Kb(`ngModel`,i.itemProperties),Ab(`p-options`,i.itemPropertiesOptions),q0(),wg(2),Ab(`p-disabled`,p.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Goe,Zte,Koe,R4,Joe,Rze],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-tree-view-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tree View Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tree-view-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-tree-view
  [p-components-size]="componentsSize"
  [p-disabled]="disabled"
  [p-items]="items"
  [p-max-level]="maxLevel"
  [p-no-border]="noBorder"
  [p-selectable]="selectable"
  [p-single-select]="singleSelect"
  (p-activated)="changeEvent('p-activated', $event)"
  (p-collapsed)="changeEvent('p-collapsed', $event)"
  (p-expanded)="changeEvent('p-expanded', $event)"
  (p-selected)="changeEvent('p-selected', $event)"
  (p-unselected)="changeEvent('p-unselected', $event)"
>
</po-tree-view>

<po-divider p-label="Events"></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Po Tree View Config"></po-divider>

<div class="po-row">
  <po-number class="po-md-6 po-lg-3" name="level" [(ngModel)]="maxLevel" p-label="Max Level"> </po-number>
  <po-switch class="po-md-6 po-lg-2" name="selectable" [(ngModel)]="selectable" p-label="Selectable"> </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="singleSelect" [(ngModel)]="singleSelect" p-label="Single Select">
  </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="noBorder" [(ngModel)]="noBorder" p-label="No Border"> </po-switch>

  <po-radio-group
    class="po-lg-3"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>
</div>

<po-divider p-label="Po Tree View Item"></po-divider>

<form #treeViewItemForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-4"
      name="parent"
      [(ngModel)]="parent"
      p-label="Parent Item"
      p-placeholder="Add tree view item"
      [p-options]="parentList"
    >
    </po-select>

    <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="treeViewItem.label" p-label="Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="value" [(ngModel)]="treeViewItem.value" p-label="Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="itemProperties"
      [(ngModel)]="itemProperties"
      p-columns="4"
      p-label="Item Properties"
      [p-options]="itemPropertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-2"
      p-label="Add"
      [p-disabled]="treeViewItemForm.invalid"
      (p-click)="addTreeViewItem(treeViewItemForm)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-labs',
  templateUrl: 'sample-po-tree-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewLabsComponent implements OnInit {
  componentsSize: string = 'medium';
  disabled: boolean = false;
  event: string;
  items: Array<PoTreeViewItem>;
  itemProperties: Array<string>;
  maxLevel: number = 4;
  noBorder: boolean = false;
  parent: string;
  parentList: Array<PoSelectOption>;
  selectable: boolean = false;
  singleSelect: boolean = false;
  treeViewItem: PoTreeViewItem;

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' }
  ];

  readonly itemPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'expanded', label: 'Expanded' },
    { value: 'selected', label: 'Selected' },
    { value: 'showIcon', label: 'Show Icon' }
  ];

  ngOnInit() {
    this.restore();
  }

  addTreeViewItem(treeViewItemForm: NgForm) {
    this.add(this.treeViewItem);
    treeViewItemForm.reset();
    this.itemProperties = [];
  }

  add(treeViewItem: PoTreeViewItem) {
    treeViewItem.disabled = this.itemProperties.includes('disabled');
    treeViewItem.expanded = this.itemProperties.includes('expanded');
    treeViewItem.selected = this.itemProperties.includes('selected');
    treeViewItem.showIcon = this.itemProperties.includes('showIcon');

    const treeViewItemClone = { ...treeViewItem };

    if (!this.parent) {
      this.items = [...this.items, treeViewItemClone];
    } else {
      const treeViewItemNode = this.getTreeViewItemNode(this.items, this.parent);

      if (!treeViewItemNode.subItems) {
        treeViewItemNode.subItems = [];
      }

      treeViewItemNode.subItems = [...treeViewItemNode.subItems, treeViewItemClone];
    }

    this.items = [].concat(this.items);
    this.parentList = this.updateParentList(this.items);
  }

  changeEvent(event: string, treeViewItem: PoTreeViewItem) {
    this.event = \`\${event}: \${JSON.stringify(treeViewItem)}\`;
  }

  restore() {
    this.componentsSize = 'medium';
    this.disabled = false;
    this.event = undefined;
    this.items = [];
    this.itemProperties = [];
    this.maxLevel = 4;
    this.noBorder = false;
    this.parent = undefined;
    this.parentList = [];
    this.selectable = false;
    this.singleSelect = false;
    this.treeViewItem = <any>{};
  }

  private getTreeViewItemNode(items: Array<PoTreeViewItem>, value: string) {
    let treeViewItemNode: PoTreeViewItem;

    if (!items) {
      return;
    }

    for (const item of items) {
      if (item.value === value) {
        treeViewItemNode = item;
        break;
      } else if (!treeViewItemNode) {
        treeViewItemNode = this.getTreeViewItemNode(item.subItems, value);
      }
    }

    return treeViewItemNode;
  }

  private updateParentList(
    items: Array<PoTreeViewItem>,
    level = 0,
    parentList = [],
    parentItem?: PoTreeViewItem
  ): Array<PoSelectOption> {
    items.forEach(item => {
      const { label, value } = item;

      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value });

      if (item.subItems) {
        this.updateParentList(item.subItems, ++level, parentList, item);
        --level;
      }

      level = !parentItem ? 0 : level;
    });

    return parentList;
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{items=[{label:`my_project`,value:1,expanded:!0,subItems:[{label:`angular.json`,value:121},{label:`browserslist`,value:122,subItems:[{label:`e2e`,value:1223,subItems:[{label:`protractor.conf.js`,value:12231},{label:`src`,value:12232},{label:`tsconfig.json`,value:12233}]}]},{label:`karma.conf.js`,value:123},{label:`node_modules`,value:124},{label:`package.json`,value:125},{label:`package-lock.json`,value:126},{label:`README.md`,value:127},{label:`src`,value:128,subItems:[{label:`app`,value:1281},{label:`assets`,value:1282},{label:`environments`,value:1283},{label:`favicon.ico`,value:1284},{label:`index.html`,value:1285},{label:`main.ts`,value:1286},{label:`polyfills.ts`,value:1287},{label:`styles.css`,value:1288},{label:`test.ts`,value:1289}]},{label:`tsconfig.app.json`,value:129},{label:`tsconfig.json`,value:130},{label:`tsconfig.spec.json`,value:131},{label:`eslint.json`,value:132}]}];static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-folder-structure`]],standalone:!1,decls:4,vars:1,consts:[[`p-title`,`Angular folder structure`],[1,`po-mb-4`,`po-ml-1`,`po-text-color-neutral-dark-40`],[1,`po-lg-4`,`po-md-6`,3,`p-items`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0)(1,`p`,1),Mk(2,` This is the basic structure created using the Angular cli: `),Kg(),_u(3,`po-tree-view`,2),Kg()),o&2&&(wg(3),Ab(`p-items`,i.items))},dependencies:[Mze,Rze],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-folder-structure-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-tree-view-folder-structure`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tree View - Folder Structure`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tree-view-folder-structure`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-folder-structure',
  templateUrl: 'sample-po-tree-view-folder-structure.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewFolderStructureComponent {
  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'my_project',
      value: 1,
      expanded: true,
      subItems: [
        { label: 'angular.json', value: 121 },
        {
          label: 'browserslist',
          value: 122,
          subItems: [
            {
              label: 'e2e',
              value: 1223,
              subItems: [
                { label: 'protractor.conf.js', value: 12231 },
                { label: 'src', value: 12232 },
                { label: 'tsconfig.json', value: 12233 }
              ]
            }
          ]
        },
        { label: 'karma.conf.js', value: 123 },
        { label: 'node_modules', value: 124 },
        { label: 'package.json', value: 125 },
        { label: 'package-lock.json', value: 126 },
        { label: 'README.md', value: 127 },
        {
          label: 'src',
          value: 128,
          subItems: [
            { label: 'app', value: 1281 },
            { label: 'assets', value: 1282 },
            { label: 'environments', value: 1283 },
            { label: 'favicon.ico', value: 1284 },
            { label: 'index.html', value: 1285 },
            { label: 'main.ts', value: 1286 },
            { label: 'polyfills.ts', value: 1287 },
            { label: 'styles.css', value: 1288 },
            { label: 'test.ts', value: 1289 }
          ]
        },
        { label: 'tsconfig.app.json', value: 129 },
        { label: 'tsconfig.json', value: 130 },
        { label: 'tsconfig.spec.json', value: 131 },
        { label: 'eslint.json', value: 132 }
      ]
    }
  ];
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,we],encapsulation:2,changeDetection:1})}return a})();var Ae=[`stepper`];var fe=(()=>{class a{stepper;columnsItemsSelected=[{property:`item`}];confirmed=!1;itemsListSelected=[];items=[{label:`Condiments`,value:`condiments`,subItems:[{label:`Extra virgin Olive`,value:`extraVirginOlive`},{label:`Mayonnaise`,value:`Mayonnaise`},{label:`Tomato ketchup`,value:`tomatoKetchup`},{label:`Soda`,value:`soda`}]},{label:`Drinks`,value:`drinks`,subItems:[{label:`Orange juice`,value:`orangeJuice`},{label:`Grape juice`,value:`grapeJuice`},{label:`Beer`,value:`beer`},{label:`Wine`,value:`wine`},{label:`Soda`,value:`soda`}]},{label:`Grains`,value:122,subItems:[{label:`Black bean`,value:`blackBean`},{label:`Chickpeas`,value:`chickpeas`},{label:`Lentil`,value:`lentil`},{label:`Pea`,value:`pea`}]},{label:`Personal hygiene`,value:`personalHygiene`,subItems:[{label:`Body wash`,value:`bodyWash`},{label:`Deodorant`,value:`deodorant`},{label:`Shampoo`,value:`deodorant`},{label:`Conditioner`,value:`conditioner`},{label:`Sunscreen lotion`,value:`sunscreenLotion`}]},{label:`Frozen foods`,value:`frozenFoods`,subItems:[{label:`Hamburguer`,value:`hamburguer`},{label:`Lasagna`,value:`lasagna`},{label:`Sandwiches`,value:`sandwiches`}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-supermarket`]],viewQuery:function(o,i){if(o&1&&Cu(Ae,7),o&2){let p;No(p=xo())&&(i.stepper=p.first)}},standalone:!1,decls:18,vars:6,consts:[[`stepper`,``],[`p-title`,`Welcome to the PO Supermarket`],[1,`po-offset-md-3`,`po-offset-lg-2`,`po-offset-xl-2`],[1,`po-row`],[`p-step-icons`,``,1,`po-md-9`,`po-lg-8`,`po-mb-1`],[`p-label`,`Step 1`],[1,`po-font-subtitle`],[`p-selectable`,``,3,`p-selected`,`p-unselected`,`p-items`],[`p-label`,`Step 2`,3,`p-can-active-next-step`],[`p-primary-label`,`Confirm`,`p-title`,`Selected items`,3,`p-primary-action`,`p-disabled`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-label`,`Step 3`],[1,`po-row`,`po-font-display`],[`p-icon`,`po-icon an an-check`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,1)(1,`div`,2)(2,`div`,3)(3,`po-stepper`,4,0)(5,`po-step`,5)(6,`p`,6),Mk(7,`Please, select your items:`),Kg(),Jc(8,`po-tree-view`,7),_t(`p-selected`,function(s){return i.addItem(s)})(`p-unselected`,function(s){return i.removeItem(s)}),Kg()(),Jc(9,`po-step`,8)(10,`po-widget`,9),_t(`p-primary-action`,function(){return i.checkOut()}),_u(11,`po-table`,10),Kg()(),Jc(12,`po-step`,11)(13,`po-widget`)(14,`div`,12)(15,`p`),Mk(16,`Order dispatched`),Kg(),_u(17,`po-icon`,13),Kg()()()()()()()),o&2&&(wg(8),Ab(`p-items`,i.items),wg(),Ab(`p-can-active-next-step`,i.isConfirmed.bind(i)),wg(),Ab(`p-disabled`,i.itemsListSelected.length<1),wg(),Ab(`p-columns`,i.columnsItemsSelected)(`p-items`,i.itemsListSelected)(`p-hide-table-search`,!1))},dependencies:[Tt,Mze,Gae,Fze,q4,Rze,bae],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-supermarket-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-tree-view-supermarket`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Tree View - Supermarket`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-tree-view-supermarket`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default p-title="Welcome to the PO Supermarket">
  <div class="po-offset-md-3 po-offset-lg-2 po-offset-xl-2">
    <div class="po-row">
      <po-stepper #stepper p-step-icons class="po-md-9 po-lg-8 po-mb-1">
        <po-step p-label="Step 1">
          <p class="po-font-subtitle">Please, select your items:</p>

          <po-tree-view
            p-selectable
            [p-items]="items"
            (p-selected)="addItem($event)"
            (p-unselected)="removeItem($event)"
          >
          </po-tree-view>
        </po-step>

        <po-step p-label="Step 2" [p-can-active-next-step]="isConfirmed.bind(this)">
          <po-widget
            p-primary-label="Confirm"
            p-title="Selected items"
            [p-disabled]="itemsListSelected.length < 1"
            (p-primary-action)="checkOut()"
          >
            <po-table
              p-striped
              [p-columns]="columnsItemsSelected"
              [p-items]="itemsListSelected"
              [p-hide-table-search]="false"
            >
            </po-table>
          </po-widget>
        </po-step>

        <po-step p-label="Step 3">
          <po-widget>
            <div class="po-row po-font-display">
              <p>Order dispatched</p>
              <po-icon p-icon="po-icon an an-check"></po-icon>
            </div>
          </po-widget>
        </po-step>
      </po-stepper>
    </div>
  </div>
</po-page-default>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoStepperComponent, PoTableColumn, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-supermarket',
  templateUrl: 'sample-po-tree-view-supermarket.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewSupermarketComponent {
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;

  columnsItemsSelected: Array<PoTableColumn> = [{ property: 'item' }];
  confirmed: boolean = false;
  itemsListSelected: Array<any> = [];

  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'Condiments',
      value: 'condiments',
      subItems: [
        { label: 'Extra virgin Olive', value: 'extraVirginOlive' },
        { label: 'Mayonnaise', value: 'Mayonnaise' },
        { label: 'Tomato ketchup', value: 'tomatoKetchup' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Drinks',
      value: 'drinks',
      subItems: [
        { label: 'Orange juice', value: 'orangeJuice' },
        { label: 'Grape juice', value: 'grapeJuice' },
        { label: 'Beer', value: 'beer' },
        { label: 'Wine', value: 'wine' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Grains',
      value: 122,
      subItems: [
        { label: 'Black bean', value: 'blackBean' },
        { label: 'Chickpeas', value: 'chickpeas' },
        { label: 'Lentil', value: 'lentil' },
        { label: 'Pea', value: 'pea' }
      ]
    },
    {
      label: 'Personal hygiene',
      value: 'personalHygiene',
      subItems: [
        { label: 'Body wash', value: 'bodyWash' },
        { label: 'Deodorant', value: 'deodorant' },
        { label: 'Shampoo', value: 'deodorant' },
        { label: 'Conditioner', value: 'conditioner' },
        { label: 'Sunscreen lotion', value: 'sunscreenLotion' }
      ]
    },
    {
      label: 'Frozen foods',
      value: 'frozenFoods',
      subItems: [
        { label: 'Hamburguer', value: 'hamburguer' },
        { label: 'Lasagna', value: 'lasagna' },
        { label: 'Sandwiches', value: 'sandwiches' }
      ]
    }
  ];

  addItem(seletectedItem) {
    if (seletectedItem.subItems) {
      seletectedItem.subItems.forEach(itemSelected => {
        if (!this.itemsListSelected.some(item => item.item === itemSelected.label)) {
          this.itemsListSelected.push({ item: itemSelected.label });
        }
      });
    } else {
      if (!this.itemsListSelected.some(item => item.item === seletectedItem.label)) {
        this.itemsListSelected.push({ item: seletectedItem.label });
      }
    }
  }

  checkOut() {
    this.confirmed = true;
    this.stepper.next();
  }

  isConfirmed() {
    return !!this.confirmed;
  }

  removeItem(unseletectedItem) {
    if (unseletectedItem.subItems) {
      const removedValues = unseletectedItem.subItems.map(item => item.label);
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => !removedValues.includes(itemSelected.item)
      );
    } else {
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => unseletectedItem.label !== itemSelected.item
      );
    }
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,fe],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-doc`]],standalone:!1,decls:775,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-tree-view-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-activated`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-collapsed`,1,`docs-api-properties-row`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-expanded`,1,`docs-api-properties-row`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTreeViewItem>`],[`id`,`prop-p-max-level`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-no-border`,1,`docs-api-properties-row`],[`id`,`prop-p-selectable`,1,`docs-api-properties-row`],[`id`,`event-p-selected`,1,`docs-api-properties-row`],[`id`,`prop-p-single-select`,1,`docs-api-properties-row`],[`id`,`event-p-unselected`,1,`docs-api-properties-row`],[`id`,`interface-po-tree-view-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-tree-view-item-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-tree-view-item-expanded`,1,`docs-api-properties-row`],[`id`,`interface-po-tree-view-item-is-selectable`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`null`],[`id`,`interface-po-tree-view-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-tree-view-item-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-tree-view-item-show-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-tree-view-item-sub-items`,1,`docs-api-properties-row`],[`id`,`interface-po-tree-view-item-value`,1,`docs-api-properties-row`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoTreeViewModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-tree-view`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`h3`,3),Mk(11,`Componente`),Kg(),Jc(12,`h4`,4)(13,`code`,5),Mk(14,`PoTreeViewComponent`),Kg()(),Jc(15,`div`,2)(16,`p`),Mk(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a exibi\xE7\xE3o de informa\xE7\xF5es de maneira
hier\xE1rquica com suporte a m\xFAltiplos n\xEDveis (configur\xE1vel via `),Jc(18,`code`),Mk(19,`p-max-level`),Kg(),Mk(20,`).`),Kg(),Jc(21,`p`),Mk(22,`O componente permite:`),Kg(),Jc(23,`ul`)(24,`li`),Mk(25,`Navegação completa por teclado seguindo o padrão WAI-ARIA TreeView;`),Kg(),Jc(26,`li`),Mk(27,`Expansão e recolhimento de itens agrupadores;`),Kg(),Jc(28,`li`),Mk(29,`Seleção múltipla (checkbox) ou única (radio) dos itens;`),Kg(),Jc(30,`li`),Mk(31,`Exibição de ícones automáticos para agrupadores e itens finais;`),Kg(),Jc(32,`li`),Mk(33,`Estado desabilitado global ou individual por item;`),Kg(),Jc(34,`li`),Mk(35,`Execução de itens finais via clique ou teclado.`),Kg()(),Jc(36,`h4`),Mk(37,`Navegação por teclado`),Kg(),Jc(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),Mk(42,`Tecla`),Kg(),Jc(43,`th`),Mk(44,`Descrição`),Kg()()(),Jc(45,`tbody`)(46,`tr`)(47,`td`)(48,`strong`),Mk(49,`Tab`),Kg()(),Jc(50,`td`),Mk(51,`Entra no componente posicionando o foco no primeiro nó ativo. Ao pressionar novamente, sai do componente.`),Kg()(),Jc(52,`tr`)(53,`td`)(54,`strong`),Mk(55,`ArrowDown`),Kg()(),Jc(56,`td`),Mk(57,`Move o foco para o próximo nó visível.`),Kg()(),Jc(58,`tr`)(59,`td`)(60,`strong`),Mk(61,`ArrowUp`),Kg()(),Jc(62,`td`),Mk(63,`Move o foco para o nó visível anterior.`),Kg()(),Jc(64,`tr`)(65,`td`)(66,`strong`),Mk(67,`ArrowRight`),Kg()(),Jc(68,`td`),Mk(69,`Se colapsado, expande o nó. Se expandido, move o foco para o nó filho.`),Kg()(),Jc(70,`tr`)(71,`td`)(72,`strong`),Mk(73,`ArrowLeft`),Kg()(),Jc(74,`td`),Mk(75,`Se expandido, recolhe o nó. Se filho, move o foco para o nó pai.`),Kg()(),Jc(76,`tr`)(77,`td`)(78,`strong`),Mk(79,`Home`),Kg()(),Jc(80,`td`),Mk(81,`Move o foco para o primeiro nó visível.`),Kg()(),Jc(82,`tr`)(83,`td`)(84,`strong`),Mk(85,`End`),Kg()(),Jc(86,`td`),Mk(87,`Move o foco para o último nó visível.`),Kg()(),Jc(88,`tr`)(89,`td`)(90,`strong`),Mk(91,`Enter / Space`),Kg()(),Jc(92,`td`),Mk(93,`Com `),Jc(94,`code`),Mk(95,`p-selectable`),Kg(),Mk(96,`: alterna a seleção do item. Sem `),Jc(97,`code`),Mk(98,`p-selectable`),Kg(),Mk(99,`: executa o item final.`),Kg()(),Jc(100,`tr`)(101,`td`)(102,`strong`),Mk(103,`Caractere`),Kg()(),Jc(104,`td`),Mk(105,`Move o foco para o próximo nó cujo label inicia com o caractere pressionado (busca cíclica).`),Kg()()()(),Jc(106,`h4`),Mk(107,`Tokens customizáveis`),Kg(),Jc(108,`p`),Mk(109,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(110,`blockquote`)(111,`p`),Mk(112,`Para maiores informações, acesse o guia `),Jc(113,`a`,6),Mk(114,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(115,`.`),Kg()(),Jc(116,`table`)(117,`thead`)(118,`tr`)(119,`th`),Mk(120,`Propriedade`),Kg(),Jc(121,`th`),Mk(122,`Descrição`),Kg(),Jc(123,`th`),Mk(124,`Valor Padrão`),Kg()()(),Jc(125,`tbody`)(126,`tr`)(127,`td`)(128,`strong`),Mk(129,`Default`),Kg()(),_u(130,`td`)(131,`td`),Kg(),Jc(132,`tr`)(133,`td`)(134,`code`),Mk(135,`--background-color`),Kg()(),Jc(136,`td`),Mk(137,`Cor de background do item`),Kg(),Jc(138,`td`)(139,`code`),Mk(140,`var(--color-neutral-light-00)`),Kg()()(),Jc(141,`tr`)(142,`td`)(143,`code`),Mk(144,`--divider-color`),Kg()(),Jc(145,`td`),Mk(146,`Cor do divider dos agrupadores de nível 0`),Kg(),Jc(147,`td`)(148,`code`),Mk(149,`var(--color-neutral-mid-40)`),Kg()()(),Jc(150,`tr`)(151,`td`)(152,`code`),Mk(153,`--font-family`),Kg()(),Jc(154,`td`),Mk(155,`Família tipográfica`),Kg(),Jc(156,`td`)(157,`code`),Mk(158,`var(--font-family-theme)`),Kg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Mk(162,`--font-size`),Kg()(),Jc(163,`td`),Mk(164,`Tamanho da fonte`),Kg(),Jc(165,`td`)(166,`code`),Mk(167,`var(--font-size-default)`),Kg()()(),Jc(168,`tr`)(169,`td`)(170,`code`),Mk(171,`--line-height`),Kg()(),Jc(172,`td`),Mk(173,`Altura da linha`),Kg(),Jc(174,`td`)(175,`code`),Mk(176,`var(--line-height-md)`),Kg()()(),Jc(177,`tr`)(178,`td`)(179,`code`),Mk(180,`--color`),Kg()(),Jc(181,`td`),Mk(182,`Cor padrão do item`),Kg(),Jc(183,`td`)(184,`code`),Mk(185,`var(--color-action-default)`),Kg()()(),Jc(186,`tr`)(187,`td`)(188,`strong`),Mk(189,`Hover`),Kg()(),_u(190,`td`)(191,`td`),Kg(),Jc(192,`tr`)(193,`td`)(194,`code`),Mk(195,`--color-hover`),Kg()(),Jc(196,`td`),Mk(197,`Cor do item em hover`),Kg(),Jc(198,`td`)(199,`code`),Mk(200,`var(--color-action-hover)`),Kg()()(),Jc(201,`tr`)(202,`td`)(203,`strong`),Mk(204,`Pressed`),Kg()(),_u(205,`td`)(206,`td`),Kg(),Jc(207,`tr`)(208,`td`)(209,`code`),Mk(210,`--color-pressed`),Kg()(),Jc(211,`td`),Mk(212,`Cor do item em pressed`),Kg(),Jc(213,`td`)(214,`code`),Mk(215,`var(--color-action-pressed)`),Kg()()(),Jc(216,`tr`)(217,`td`)(218,`strong`),Mk(219,`Disabled`),Kg()(),_u(220,`td`)(221,`td`),Kg(),Jc(222,`tr`)(223,`td`)(224,`code`),Mk(225,`--color-disabled`),Kg()(),Jc(226,`td`),Mk(227,`Cor do item desabilitado`),Kg(),Jc(228,`td`)(229,`code`),Mk(230,`var(--color-action-disabled)`),Kg()()(),Jc(231,`tr`)(232,`td`)(233,`strong`),Mk(234,`Selected`),Kg()(),_u(235,`td`)(236,`td`),Kg(),Jc(237,`tr`)(238,`td`)(239,`code`),Mk(240,`--title-color`),Kg()(),Jc(241,`td`),Mk(242,`Cor do label quando selecionado`),Kg(),Jc(243,`td`)(244,`code`),Mk(245,`var(--color-action-focus)`),Kg()()()()()(),Jc(246,`div`,7)(247,`h4`,8),Mk(248,`Seletor`),Kg(),Jc(249,`pre`,9),Mk(250,`<po-tree-view
    (p-activated)="EventEmitter"
    (p-collapsed)="EventEmitter"
    p-components-size="string"
    p-disabled="boolean"
    (p-expanded)="EventEmitter"
    p-items="Array<PoTreeViewItem>"
    p-max-level="number"
    p-no-border="boolean"
    p-selectable="boolean"
    (p-selected)="EventEmitter"
    p-single-select="boolean"
    (p-unselected)="EventEmitter" >
</po-tree-view>
`),Kg()(),Jc(251,`h4`,10),Mk(252,`Propriedades`),Kg(),Jc(253,`table`,11)(254,`tr`,12)(255,`th`,13),Mk(256,`Nome`),Kg(),Jc(257,`th`,13),Mk(258,`Tipo`),Kg(),Jc(259,`th`,13),Mk(260,`Padrão`),Kg(),Jc(261,`th`,13),Mk(262,`Descrição`),Kg()(),Jc(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),Mk(267,` (p-activated)`),_u(268,`br`),Kg()()(),Jc(269,`td`,18)(270,`code`,19),Mk(271,`EventEmitter`),Kg()(),Jc(272,`td`,20),Mk(273,`-`),Kg(),Jc(274,`td`,21)(275,`em`)(276,`strong`),Mk(277,`(opcional)`),Kg()(),Jc(278,`p`),Mk(279,`Ação que será disparada ao executar um item final (sem `),Jc(280,`code`),Mk(281,`subItems`),Kg(),Mk(282,`).`),Kg(),Jc(283,`blockquote`)(284,`p`),Mk(285,`Como parâmetro o componente envia o item executado.`),Kg()()()(),Jc(286,`tr`,22)(287,`td`,15)(288,`div`,16)(289,`span`,17),Mk(290,` (p-collapsed)`),_u(291,`br`),Kg()()(),Jc(292,`td`,18)(293,`code`,19),Mk(294,`EventEmitter`),Kg()(),Jc(295,`td`,20),Mk(296,`-`),Kg(),Jc(297,`td`,21)(298,`em`)(299,`strong`),Mk(300,`(opcional)`),Kg()(),Jc(301,`p`),Mk(302,`Ação que será disparada ao colapsar um item.`),Kg(),Jc(303,`blockquote`)(304,`p`),Mk(305,`Como parâmetro o componente envia o item colapsado.`),Kg()()()(),Jc(306,`tr`,23)(307,`td`,15)(308,`div`,24)(309,`span`,25),Mk(310,` p-components-size`),_u(311,`br`),Kg()()(),Jc(312,`td`,18)(313,`code`,26),Mk(314,`string`),Kg()(),Jc(315,`td`,20)(316,`p`)(317,`code`),Mk(318,`medium`),Kg()()(),Jc(319,`td`,21)(320,`em`)(321,`strong`),Mk(322,`(opcional)`),Kg()(),Jc(323,`p`),Mk(324,`Define o tamanho dos componentes de formulário:`),Kg(),Jc(325,`ul`)(326,`li`)(327,`code`),Mk(328,`small`),Kg(),Mk(329,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(330,`li`)(331,`code`),Mk(332,`medium`),Kg(),Mk(333,`: aplica a medida medium de cada componente.`),Kg()(),Jc(334,`blockquote`)(335,`p`),Mk(336,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(337,`code`),Mk(338,`medium`),Kg(),Mk(339,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(340,`a`,27),Mk(341,`po-theme`),Kg(),Mk(342,`.`),Kg()()()(),Jc(343,`tr`,28)(344,`td`,15)(345,`div`,24)(346,`span`,25),Mk(347,` p-disabled`),_u(348,`br`),Kg()()(),Jc(349,`td`,18)(350,`code`,29),Mk(351,`boolean`),Kg()(),Jc(352,`td`,20)(353,`p`)(354,`code`),Mk(355,`false`),Kg()()(),Jc(356,`td`,21)(357,`em`)(358,`strong`),Mk(359,`(opcional)`),Kg()(),Jc(360,`p`),Mk(361,`Desabilita o componente inteiro.`),Kg(),Jc(362,`p`),Mk(363,`Quando `),Jc(364,`code`),Mk(365,`true`),Kg(),Mk(366,`, todos os itens do tree-view ser\xE3o exibidos no estado desabilitado,
independentemente do valor individual da propriedade `),Jc(367,`code`),Mk(368,`disabled`),Kg(),Mk(369,` de cada item.`),Kg(),Jc(370,`blockquote`)(371,`p`),Mk(372,`O botão de expansão/recolhimento (arrow) permanece interativo mesmo quando o componente está desabilitado.`),Kg()()()(),Jc(373,`tr`,30)(374,`td`,15)(375,`div`,16)(376,`span`,17),Mk(377,` (p-expanded)`),_u(378,`br`),Kg()()(),Jc(379,`td`,18)(380,`code`,19),Mk(381,`EventEmitter`),Kg()(),Jc(382,`td`,20),Mk(383,`-`),Kg(),Jc(384,`td`,21)(385,`em`)(386,`strong`),Mk(387,`(opcional)`),Kg()(),Jc(388,`p`),Mk(389,`Ação que será disparada ao expandir um item.`),Kg(),Jc(390,`blockquote`)(391,`p`),Mk(392,`Como parâmetro o componente envia o item expandido.`),Kg()()()(),Jc(393,`tr`,31)(394,`td`,15)(395,`div`,24)(396,`span`,25),Mk(397,` p-items`),_u(398,`br`),Kg()()(),Jc(399,`td`,18)(400,`code`,32),Mk(401,`Array<PoTreeViewItem>`),Kg()(),Jc(402,`td`,20),Mk(403,`-`),Kg(),Jc(404,`td`,21)(405,`p`),Mk(406,`Lista de itens do tipo `),Jc(407,`code`),Mk(408,`PoTreeViewItem`),Kg(),Mk(409,` que será renderizada pelo componente.`),Kg(),Jc(410,`blockquote`)(411,`p`),Mk(412,`Consulte a documentação de `),Jc(413,`code`),Mk(414,`PoTreeViewItem`),Kg(),Mk(415,` para detalhes sobre as propriedades disponíveis em cada item.`),Kg()()()(),Jc(416,`tr`,33)(417,`td`,15)(418,`div`,24)(419,`span`,25),Mk(420,` p-max-level`),_u(421,`br`),Kg()()(),Jc(422,`td`,18)(423,`code`,34),Mk(424,`number`),Kg()(),Jc(425,`td`,20)(426,`p`),Mk(427,`4`),Kg()(),Jc(428,`td`,21)(429,`em`)(430,`strong`),Mk(431,`(opcional)`),Kg()(),Jc(432,`p`),Mk(433,`Define o máximo de níveis para o tree-view.`),Kg(),Jc(434,`blockquote`)(435,`p`),Mk(436,`O valor padrão é 4`),Kg()()()(),Jc(437,`tr`,35)(438,`td`,15)(439,`div`,24)(440,`span`,25),Mk(441,` p-no-border`),_u(442,`br`),Kg()()(),Jc(443,`td`,18)(444,`code`,29),Mk(445,`boolean`),Kg()(),Jc(446,`td`,20)(447,`p`),Mk(448,`false`),Kg()(),Jc(449,`td`,21)(450,`em`)(451,`strong`),Mk(452,`(opcional)`),Kg()(),Jc(453,`p`),Mk(454,`Remove a borda do container do componente.`),Kg()()(),Jc(455,`tr`,36)(456,`td`,15)(457,`div`,24)(458,`span`,25),Mk(459,` p-selectable`),_u(460,`br`),Kg()()(),Jc(461,`td`,18)(462,`code`,29),Mk(463,`boolean`),Kg()(),Jc(464,`td`,20)(465,`p`),Mk(466,`false`),Kg()(),Jc(467,`td`,21)(468,`em`)(469,`strong`),Mk(470,`(opcional)`),Kg()(),Jc(471,`p`),Mk(472,`Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.`),Kg(),Jc(473,`blockquote`)(474,`p`),Mk(475,`Quando habilitado, a propriedade `),Jc(476,`code`),Mk(477,`showIcon`),Kg(),Mk(478,` dos itens não será aplicada.`),Kg()()()(),Jc(479,`tr`,37)(480,`td`,15)(481,`div`,16)(482,`span`,17),Mk(483,` (p-selected)`),_u(484,`br`),Kg()()(),Jc(485,`td`,18)(486,`code`,19),Mk(487,`EventEmitter`),Kg()(),Jc(488,`td`,20),Mk(489,`-`),Kg(),Jc(490,`td`,21)(491,`em`)(492,`strong`),Mk(493,`(opcional)`),Kg()(),Jc(494,`p`),Mk(495,`Ação que será disparada ao selecionar um item.`),Kg(),Jc(496,`blockquote`)(497,`p`),Mk(498,`Como parâmetro o componente envia o item selecionado.`),Kg()()()(),Jc(499,`tr`,38)(500,`td`,15)(501,`div`,24)(502,`span`,25),Mk(503,` p-single-select`),_u(504,`br`),Kg()()(),Jc(505,`td`,18)(506,`code`,29),Mk(507,`boolean`),Kg()(),Jc(508,`td`,20)(509,`p`),Mk(510,`false`),Kg()(),Jc(511,`td`,21)(512,`em`)(513,`strong`),Mk(514,`(opcional)`),Kg()(),Jc(515,`p`),Mk(516,`Habilita a seleção para item único atráves de po-radio.`),Kg()()(),Jc(517,`tr`,39)(518,`td`,15)(519,`div`,16)(520,`span`,17),Mk(521,` (p-unselected)`),_u(522,`br`),Kg()()(),Jc(523,`td`,18)(524,`code`,19),Mk(525,`EventEmitter`),Kg()(),Jc(526,`td`,20),Mk(527,`-`),Kg(),Jc(528,`td`,21)(529,`em`)(530,`strong`),Mk(531,`(opcional)`),Kg()(),Jc(532,`p`),Mk(533,`Ação que será disparada ao desfazer a seleção de um item.`),Kg(),Jc(534,`blockquote`)(535,`p`),Mk(536,`Como parâmetro o componente envia o item que foi desmarcado.`),Kg()()()()(),Jc(537,`h3`),Mk(538,`Interfaces`),Kg(),Jc(539,`h4`,40)(540,`code`,5),Mk(541,`PoTreeViewItem`),Kg()(),Jc(542,`div`,2)(543,`p`),Mk(544,`Interface para definição dos itens do componente `),Jc(545,`code`),Mk(546,`po-tree-view`),Kg(),Mk(547,`.`),Kg()(),Jc(548,`h4`,10),Mk(549,`Propriedades`),Kg(),Jc(550,`table`,11)(551,`tr`,12)(552,`th`,13),Mk(553,`Nome`),Kg(),Jc(554,`th`,13),Mk(555,`Tipo`),Kg(),Jc(556,`th`,13),Mk(557,`Descrição`),Kg()(),Jc(558,`tr`,41)(559,`td`,15)(560,`div`,24)(561,`span`,25),Mk(562,` disabled`),_u(563,`br`),Kg()()(),Jc(564,`td`,18)(565,`code`,29),Mk(566,`boolean`),Kg()(),Jc(567,`td`,21)(568,`em`)(569,`strong`),Mk(570,`(opcional)`),Kg()(),Jc(571,`p`),Mk(572,`Desabilita a interação com o item.`),Kg(),Jc(573,`p`),Mk(574,`O estado \xE9 aplicado somente ao item em que a propriedade est\xE1 configurada
e n\xE3o \xE9 propagado para seus `),Jc(575,`code`),Mk(576,`subItems`),Kg(),Mk(577,`.`),Kg(),Jc(578,`blockquote`)(579,`p`),Mk(580,`Itens disabled que não possuem `),Jc(581,`code`),Mk(582,`subItems`),Kg(),Mk(583,` s\xE3o ignorados na navega\xE7\xE3o por teclado.
Itens disabled que possuem `),Jc(584,`code`),Mk(585,`subItems`),Kg(),Mk(586,` continuam participando da navegação, permitindo expandir/recolher.`),Kg()()()(),Jc(587,`tr`,42)(588,`td`,15)(589,`div`,24)(590,`span`,25),Mk(591,` expanded`),_u(592,`br`),Kg()()(),Jc(593,`td`,18)(594,`code`,29),Mk(595,`boolean`),Kg()(),Jc(596,`td`,21)(597,`em`)(598,`strong`),Mk(599,`(opcional)`),Kg()(),Jc(600,`p`),Mk(601,`Expande o item, exibindo seus `),Jc(602,`code`),Mk(603,`subItems`),Kg(),Mk(604,`.`),Kg(),Jc(605,`p`),Mk(606,`Quando `),Jc(607,`code`),Mk(608,`true`),Kg(),Mk(609,`, o item será renderizado no estado expandido.`),Kg(),Jc(610,`blockquote`)(611,`p`),Mk(612,`Sem efeito em itens que não possuem `),Jc(613,`code`),Mk(614,`subItems`),Kg(),Mk(615,`.`),Kg()()()(),Jc(616,`tr`,43)(617,`td`,15)(618,`div`,24)(619,`span`,25),Mk(620,` isSelectable`),_u(621,`br`),Kg()()(),Jc(622,`td`,18)(623,`code`,29),Mk(624,`boolean `),Kg(),Jc(625,`code`,44),Mk(626,` null`),Kg()(),Jc(627,`td`,21)(628,`em`)(629,`strong`),Mk(630,`(opcional)`),Kg()(),Jc(631,`p`),Mk(632,`Permite ativar ou desativar a seleção do item.`),Kg(),Jc(633,`p`),Mk(634,`Quando `),Jc(635,`code`),Mk(636,`false`),Kg(),Mk(637,`, o item não poderá ser selecionado pelo usuário.`),Kg()()(),Jc(638,`tr`,45)(639,`td`,15)(640,`div`,24)(641,`span`,25),Mk(642,` label`),_u(643,`br`),Kg()()(),Jc(644,`td`,18)(645,`code`,26),Mk(646,`string`),Kg()(),Jc(647,`td`,21)(648,`p`),Mk(649,`Texto de exibição do item.`),Kg(),Jc(650,`p`),Mk(651,`O valor é utilizado como `),Jc(652,`code`),Mk(653,`aria-label`),Kg(),Mk(654,` do nó e como referência na navegação por caractere do teclado.`),Kg()()(),Jc(655,`tr`,46)(656,`td`,15)(657,`div`,24)(658,`span`,25),Mk(659,` selected`),_u(660,`br`),Kg()()(),Jc(661,`td`,18)(662,`code`,29),Mk(663,`boolean `),Kg(),Jc(664,`code`,44),Mk(665,` null`),Kg()(),Jc(666,`td`,21)(667,`em`)(668,`strong`),Mk(669,`(opcional)`),Kg()(),Jc(670,`p`),Mk(671,`Marca o item como selecionado.`),Kg(),Jc(672,`blockquote`)(673,`p`),Mk(674,`Caso o item que possuir `),Jc(675,`code`),Mk(676,`subItems`),Kg(),Mk(677,` for selecionado, os seus itens filhos serão também selecionados.`),Kg()(),Jc(678,`p`),Mk(679,`Quando utilizado com `),Jc(680,`code`),Mk(681,`p-single-select`),Kg(),Mk(682,`, apenas um item pode estar selecionado por vez.
Ao selecionar outro item, o anteriormente selecionado perde o estado.`),Kg()()(),Jc(683,`tr`,47)(684,`td`,15)(685,`div`,24)(686,`span`,25),Mk(687,` showIcon`),_u(688,`br`),Kg()()(),Jc(689,`td`,18)(690,`code`,29),Mk(691,`boolean`),Kg()(),Jc(692,`td`,21)(693,`em`)(694,`strong`),Mk(695,`(opcional)`),Kg()(),Jc(696,`p`),Mk(697,`Habilita a exibição de ícone no item.`),Kg(),Jc(698,`p`),Mk(699,`Quando `),Jc(700,`code`),Mk(701,`true`),Kg(),Mk(702,`, exibe automaticamente:`),Kg(),Jc(703,`ul`)(704,`li`)(705,`code`),Mk(706,`an-folder-simple`),Kg(),Mk(707,` para itens agrupadores (que possuem `),Jc(708,`code`),Mk(709,`subItems`),Kg(),Mk(710,`).`),Kg(),Jc(711,`li`)(712,`code`),Mk(713,`an-file`),Kg(),Mk(714,` para itens finais (sem `),Jc(715,`code`),Mk(716,`subItems`),Kg(),Mk(717,`).`),Kg()(),Jc(718,`blockquote`)(719,`p`),Mk(720,`Não funciona em conjunto com `),Jc(721,`code`),Mk(722,`p-selectable`),Kg(),Mk(723,`.
Quando `),Jc(724,`code`),Mk(725,`p-selectable`),Kg(),Mk(726,` e `),Jc(727,`code`),Mk(728,`showIcon`),Kg(),Mk(729,` estiverem configurados como `),Jc(730,`code`),Mk(731,`true`),Kg(),Mk(732,`,
`),Jc(733,`code`),Mk(734,`p-selectable`),Kg(),Mk(735,` terá precedência.`),Kg()()()(),Jc(736,`tr`,48)(737,`td`,15)(738,`div`,24)(739,`span`,25),Mk(740,` subItems`),_u(741,`br`),Kg()()(),Jc(742,`td`,18)(743,`code`,32),Mk(744,`Array<PoTreeViewItem>`),Kg()(),Jc(745,`td`,21)(746,`em`)(747,`strong`),Mk(748,`(opcional)`),Kg()(),Jc(749,`p`),Mk(750,`Lista de itens do próximo nível, permitindo a construção hierárquica da árvore.`),Kg(),Jc(751,`p`),Mk(752,`A estrutura pode ser aninhada recursivamente até o limite definido pela propriedade `),Jc(753,`code`),Mk(754,`p-max-level`),Kg(),Mk(755,` do componente.`),Kg()()(),Jc(756,`tr`,49)(757,`td`,15)(758,`div`,24)(759,`span`,25),Mk(760,` value`),_u(761,`br`),Kg()()(),Jc(762,`td`,18)(763,`code`,26),Mk(764,`string `),Kg(),Jc(765,`code`,34),Mk(766,` number`),Kg()(),Jc(767,`td`,21)(768,`p`),Mk(769,`Valor do item utilizado como referência para sua identificação.`),Kg(),Jc(770,`p`),Mk(771,`Em modo `),Jc(772,`code`),Mk(773,`p-single-select`),Kg(),Mk(774,`, este valor é utilizado para determinar qual item está atualmente selecionado.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Be(a,Ne){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-tree-view-basic-view`)(2,`sample-po-tree-view-labs-view`)(3,`sample-po-tree-view-folder-structure-view`)(4,`sample-po-tree-view-supermarket-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var We=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Tree View`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Tree View · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0),LO(1,Be,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-tree-view-doc`),Kg()()),o&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,Se,ge,he,xe,Ce],encapsulation:2,changeDetection:1})}return a})()}];var Ve=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(We),GV]})}return a})();var ft=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,Ve]})}return a})();export{ft as DocPoTreeViewModule};