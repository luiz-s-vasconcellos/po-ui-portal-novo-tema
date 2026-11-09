import{t as r}from"./chunk-zystk1pz.js";import{$ as R4,$n as Ak,Ar as Ig,D as Gae,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,I as Koe,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,P as Joe,Pt as bae,Ri as Zg,Rr as Kb,Sn as q4,T as Fze,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,ca as jk,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,nt as Rze,or as Bk,pt as Tt$1,qi as de,qr as NZ,va as nk,vn as oi,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var ke=()=>({label:`Add`,value:1.1});var Ee=a=>[a];var Le=a=>({label:`User manager`,value:1,subItems:a});var he=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-basic`]],standalone:!1,decls:1,vars:8,consts:[[3,`p-items`]],template:function(o,i){o&1&&_u(0,`po-tree-view`,0),o&2&&Rb(`p-items`,Bk(6,Ee,Bk(4,Le,Bk(2,Ee,jk(1,ke)))))},dependencies:[Rze],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tree View Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-tree-view
  [p-items]="[
    {
      label: 'User manager',
      value: 1,
      subItems: [{ label: 'Add', value: 1.1 }]
    }
  ]"
>
</po-tree-view>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tree-view-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{componentsSize=`medium`;disabled=!1;event;items;itemProperties;maxLevel=4;noBorder=!1;parent;parentList;selectable=!1;singleSelect=!1;treeViewItem;componentsSizeOptions=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`}];itemPropertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`expanded`,label:`Expanded`},{value:`selected`,label:`Selected`},{value:`showIcon`,label:`Show Icon`}];ngOnInit(){this.restore()}addTreeViewItem(r){this.add(this.treeViewItem),r.reset(),this.itemProperties=[]}add(r$1){r$1.disabled=this.itemProperties.includes(`disabled`),r$1.expanded=this.itemProperties.includes(`expanded`),r$1.selected=this.itemProperties.includes(`selected`),r$1.showIcon=this.itemProperties.includes(`showIcon`);let o=r({},r$1);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.componentsSize=`medium`,this.disabled=!1,this.event=void 0,this.items=[],this.itemProperties=[],this.maxLevel=4,this.noBorder=!1,this.parent=void 0,this.parentList=[],this.selectable=!1,this.singleSelect=!1,this.treeViewItem={}}getTreeViewItemNode(r,o){let i;if(r){for(let p of r)if(p.value===o){i=p;break}else i||(i=this.getTreeViewItemNode(p.subItems,o));return i}}updateParentList(r,o=0,i=[],p){return r.forEach(c=>{let{label:m,value:Ie}=c;i.push({label:`${`-`.repeat(o)} ${m}`,value:Ie}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=p?o:0}),i}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-labs`]],standalone:!1,decls:26,vars:22,consts:[[`treeViewItemForm`,`ngForm`],[3,`p-activated`,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-components-size`,`p-disabled`,`p-items`,`p-max-level`,`p-no-border`,`p-selectable`,`p-single-select`],[`p-label`,`Events`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Po Tree View Config`],[`name`,`level`,`p-label`,`Max Level`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`selectable`,`p-label`,`Selectable`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`singleSelect`,`p-label`,`Single Select`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`noBorder`,`p-label`,`No Border`,1,`po-md-6`,`po-lg-2`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Po Tree View Item`],[`name`,`parent`,`p-label`,`Parent Item`,`p-placeholder`,`Add tree view item`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-label`,`Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`itemProperties`,`p-columns`,`4`,`p-label`,`Item Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`]],template:function(o,i){if(o&1){let p=ZO();Jc(0,`po-tree-view`,1),vt(`p-activated`,function(m){return i.changeEvent(`p-activated`,m)})(`p-collapsed`,function(m){return i.changeEvent(`p-collapsed`,m)})(`p-expanded`,function(m){return i.changeEvent(`p-expanded`,m)})(`p-selected`,function(m){return i.changeEvent(`p-selected`,m)})(`p-unselected`,function(m){return i.changeEvent(`p-unselected`,m)}),Zg(),_u(1,`po-divider`,2),Jc(2,`div`,3),_u(3,`po-info`,4),Zg(),_u(4,`po-divider`,5),Jc(5,`div`,3)(6,`po-number`,6),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.maxLevel,m)||(i.maxLevel=m),H_(m)}),Zg(),Jc(7,`po-switch`,7),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.selectable,m)||(i.selectable=m),H_(m)}),Zg(),Jc(8,`po-switch`,8),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.singleSelect,m)||(i.singleSelect=m),H_(m)}),Zg(),Jc(9,`po-switch`,9),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.disabled,m)||(i.disabled=m),H_(m)}),Zg(),Jc(10,`po-switch`,10),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.noBorder,m)||(i.noBorder=m),H_(m)}),Zg(),Jc(11,`po-radio-group`,11),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.componentsSize,m)||(i.componentsSize=m),H_(m)}),Zg()(),_u(12,`po-divider`,12),Jc(13,`form`,null,0)(15,`div`,3)(16,`po-select`,13),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.parent,m)||(i.parent=m),H_(m)}),Zg(),Jc(17,`po-input`,14),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.treeViewItem.label,m)||(i.treeViewItem.label=m),H_(m)}),Zg(),Jc(18,`po-input`,15),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.treeViewItem.value,m)||(i.treeViewItem.value=m),H_(m)}),Zg()(),Jc(19,`div`,3)(20,`po-checkbox-group`,16),W0(),Kb(`ngModelChange`,function(m){return U_(p),Ak(i.itemProperties,m)||(i.itemProperties=m),H_(m)}),Zg()(),Jc(21,`div`,3)(22,`po-button`,17),vt(`p-click`,function(){U_(p);let m=sk(14);return H_(i.addTreeViewItem(m))}),Zg()()(),_u(23,`po-divider`),Jc(24,`div`,3)(25,`po-button`,18),vt(`p-click`,function(){return i.restore()}),Zg()()}if(o&2){let p=sk(14);Rb(`p-components-size`,i.componentsSize)(`p-disabled`,i.disabled)(`p-items`,i.items)(`p-max-level`,i.maxLevel)(`p-no-border`,i.noBorder)(`p-selectable`,i.selectable)(`p-single-select`,i.singleSelect),Ig(3),Rb(`p-value`,i.event),Ig(3),Yb(`ngModel`,i.maxLevel),Y0(),Ig(),Yb(`ngModel`,i.selectable),Y0(),Ig(),Yb(`ngModel`,i.singleSelect),Y0(),Ig(),Yb(`ngModel`,i.disabled),Y0(),Ig(),Yb(`ngModel`,i.noBorder),Y0(),Ig(),Yb(`ngModel`,i.componentsSize),Rb(`p-options`,i.componentsSizeOptions),Y0(),Ig(5),Yb(`ngModel`,i.parent),Rb(`p-options`,i.parentList),Y0(),Ig(),Yb(`ngModel`,i.treeViewItem.label),Y0(),Ig(),Yb(`ngModel`,i.treeViewItem.value),Y0(),Ig(2),Yb(`ngModel`,i.itemProperties),Rb(`p-options`,i.itemPropertiesOptions),Y0(),Ig(2),Rb(`p-disabled`,p.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Goe,Zte,Koe,R4,Joe,Rze],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tree View Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-tree-view
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tree-view-labs`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ae,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,we],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{items=[{label:`my_project`,value:1,expanded:!0,subItems:[{label:`angular.json`,value:121},{label:`browserslist`,value:122,subItems:[{label:`e2e`,value:1223,subItems:[{label:`protractor.conf.js`,value:12231},{label:`src`,value:12232},{label:`tsconfig.json`,value:12233}]}]},{label:`karma.conf.js`,value:123},{label:`node_modules`,value:124},{label:`package.json`,value:125},{label:`package-lock.json`,value:126},{label:`README.md`,value:127},{label:`src`,value:128,subItems:[{label:`app`,value:1281},{label:`assets`,value:1282},{label:`environments`,value:1283},{label:`favicon.ico`,value:1284},{label:`index.html`,value:1285},{label:`main.ts`,value:1286},{label:`polyfills.ts`,value:1287},{label:`styles.css`,value:1288},{label:`test.ts`,value:1289}]},{label:`tsconfig.app.json`,value:129},{label:`tsconfig.json`,value:130},{label:`tsconfig.spec.json`,value:131},{label:`eslint.json`,value:132}]}];static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-folder-structure`]],standalone:!1,decls:4,vars:1,consts:[[`p-title`,`Angular folder structure`],[1,`po-mb-4`,`po-ml-1`,`po-text-color-neutral-dark-40`],[1,`po-lg-4`,`po-md-6`,3,`p-items`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0)(1,`p`,1),Tk(2,` This is the basic structure created using the Angular cli: `),Zg(),_u(3,`po-tree-view`,2),Zg()),o&2&&(Ig(3),Rb(`p-items`,i.items))},dependencies:[Mze,Rze],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-folder-structure-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tree View - Folder Structure`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tree-view-folder-structure`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ze,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,xe],encapsulation:2,changeDetection:1})}return a})();var We=[`stepper`];var Te=(()=>{class a{stepper;columnsItemsSelected=[{property:`item`}];confirmed=!1;itemsListSelected=[];items=[{label:`Condiments`,value:`condiments`,subItems:[{label:`Extra virgin Olive`,value:`extraVirginOlive`},{label:`Mayonnaise`,value:`Mayonnaise`},{label:`Tomato ketchup`,value:`tomatoKetchup`},{label:`Soda`,value:`soda`}]},{label:`Drinks`,value:`drinks`,subItems:[{label:`Orange juice`,value:`orangeJuice`},{label:`Grape juice`,value:`grapeJuice`},{label:`Beer`,value:`beer`},{label:`Wine`,value:`wine`},{label:`Soda`,value:`soda`}]},{label:`Grains`,value:122,subItems:[{label:`Black bean`,value:`blackBean`},{label:`Chickpeas`,value:`chickpeas`},{label:`Lentil`,value:`lentil`},{label:`Pea`,value:`pea`}]},{label:`Personal hygiene`,value:`personalHygiene`,subItems:[{label:`Body wash`,value:`bodyWash`},{label:`Deodorant`,value:`deodorant`},{label:`Shampoo`,value:`deodorant`},{label:`Conditioner`,value:`conditioner`},{label:`Sunscreen lotion`,value:`sunscreenLotion`}]},{label:`Frozen foods`,value:`frozenFoods`,subItems:[{label:`Hamburguer`,value:`hamburguer`},{label:`Lasagna`,value:`lasagna`},{label:`Sandwiches`,value:`sandwiches`}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-supermarket`]],viewQuery:function(o,i){if(o&1&&Cu(We,7),o&2){let p;No(p=xo())&&(i.stepper=p.first)}},standalone:!1,decls:18,vars:6,consts:[[`stepper`,``],[`p-title`,`Welcome to the PO Supermarket`],[1,`po-offset-md-3`,`po-offset-lg-2`,`po-offset-xl-2`],[1,`po-row`],[`p-step-icons`,``,1,`po-md-9`,`po-lg-8`,`po-mb-1`],[`p-label`,`Step 1`],[1,`po-font-subtitle`],[`p-selectable`,``,3,`p-selected`,`p-unselected`,`p-items`],[`p-label`,`Step 2`,3,`p-can-active-next-step`],[`p-primary-label`,`Confirm`,`p-title`,`Selected items`,3,`p-primary-action`,`p-disabled`],[`p-striped`,``,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-label`,`Step 3`],[1,`po-row`,`po-font-display`],[`p-icon`,`po-icon an an-check`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,1)(1,`div`,2)(2,`div`,3)(3,`po-stepper`,4,0)(5,`po-step`,5)(6,`p`,6),Tk(7,`Please, select your items:`),Zg(),Jc(8,`po-tree-view`,7),vt(`p-selected`,function(c){return i.addItem(c)})(`p-unselected`,function(c){return i.removeItem(c)}),Zg()(),Jc(9,`po-step`,8)(10,`po-widget`,9),vt(`p-primary-action`,function(){return i.checkOut()}),_u(11,`po-table`,10),Zg()(),Jc(12,`po-step`,11)(13,`po-widget`)(14,`div`,12)(15,`p`),Tk(16,`Order dispatched`),Zg(),_u(17,`po-icon`,13),Zg()()()()()()()),o&2&&(Ig(8),Rb(`p-items`,i.items),Ig(),Rb(`p-can-active-next-step`,i.isConfirmed.bind(i)),Ig(),Rb(`p-disabled`,i.itemsListSelected.length<1),Ig(),Rb(`p-columns`,i.columnsItemsSelected)(`p-items`,i.itemsListSelected)(`p-hide-table-search`,!1))},dependencies:[Tt$1,Mze,Gae,Fze,q4,Rze,bae],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-supermarket-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Tree View - Supermarket`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Welcome to the PO Supermarket">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-tree-view-supermarket`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,He,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Te],encapsulation:2,changeDetection:1})}return a})();var Pe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-tree-view-doc`]],standalone:!1,decls:775,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTreeViewItem>`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`null`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTreeViewModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-tree-view`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoTreeViewComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a exibi\xE7\xE3o de informa\xE7\xF5es de maneira
hier\xE1rquica com suporte a m\xFAltiplos n\xEDveis (configur\xE1vel via `),Jc(18,`code`),Tk(19,`p-max-level`),Zg(),Tk(20,`).`),Zg(),Jc(21,`p`),Tk(22,`O componente permite:`),Zg(),Jc(23,`ul`)(24,`li`),Tk(25,`Navegação completa por teclado seguindo o padrão WAI-ARIA TreeView;`),Zg(),Jc(26,`li`),Tk(27,`Expansão e recolhimento de itens agrupadores;`),Zg(),Jc(28,`li`),Tk(29,`Seleção múltipla (checkbox) ou única (radio) dos itens;`),Zg(),Jc(30,`li`),Tk(31,`Exibição de ícones automáticos para agrupadores e itens finais;`),Zg(),Jc(32,`li`),Tk(33,`Estado desabilitado global ou individual por item;`),Zg(),Jc(34,`li`),Tk(35,`Execução de itens finais via clique ou teclado.`),Zg()(),Jc(36,`h4`),Tk(37,`Navegação por teclado`),Zg(),Jc(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),Tk(42,`Tecla`),Zg(),Jc(43,`th`),Tk(44,`Descrição`),Zg()()(),Jc(45,`tbody`)(46,`tr`)(47,`td`)(48,`strong`),Tk(49,`Tab`),Zg()(),Jc(50,`td`),Tk(51,`Entra no componente posicionando o foco no primeiro nó ativo. Ao pressionar novamente, sai do componente.`),Zg()(),Jc(52,`tr`)(53,`td`)(54,`strong`),Tk(55,`ArrowDown`),Zg()(),Jc(56,`td`),Tk(57,`Move o foco para o próximo nó visível.`),Zg()(),Jc(58,`tr`)(59,`td`)(60,`strong`),Tk(61,`ArrowUp`),Zg()(),Jc(62,`td`),Tk(63,`Move o foco para o nó visível anterior.`),Zg()(),Jc(64,`tr`)(65,`td`)(66,`strong`),Tk(67,`ArrowRight`),Zg()(),Jc(68,`td`),Tk(69,`Se colapsado, expande o nó. Se expandido, move o foco para o nó filho.`),Zg()(),Jc(70,`tr`)(71,`td`)(72,`strong`),Tk(73,`ArrowLeft`),Zg()(),Jc(74,`td`),Tk(75,`Se expandido, recolhe o nó. Se filho, move o foco para o nó pai.`),Zg()(),Jc(76,`tr`)(77,`td`)(78,`strong`),Tk(79,`Home`),Zg()(),Jc(80,`td`),Tk(81,`Move o foco para o primeiro nó visível.`),Zg()(),Jc(82,`tr`)(83,`td`)(84,`strong`),Tk(85,`End`),Zg()(),Jc(86,`td`),Tk(87,`Move o foco para o último nó visível.`),Zg()(),Jc(88,`tr`)(89,`td`)(90,`strong`),Tk(91,`Enter / Space`),Zg()(),Jc(92,`td`),Tk(93,`Com `),Jc(94,`code`),Tk(95,`p-selectable`),Zg(),Tk(96,`: alterna a seleção do item. Sem `),Jc(97,`code`),Tk(98,`p-selectable`),Zg(),Tk(99,`: executa o item final.`),Zg()(),Jc(100,`tr`)(101,`td`)(102,`strong`),Tk(103,`Caractere`),Zg()(),Jc(104,`td`),Tk(105,`Move o foco para o próximo nó cujo label inicia com o caractere pressionado (busca cíclica).`),Zg()()()(),Jc(106,`h4`),Tk(107,`Tokens customizáveis`),Zg(),Jc(108,`p`),Tk(109,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(110,`blockquote`)(111,`p`),Tk(112,`Para maiores informações, acesse o guia `),Jc(113,`a`,6),Tk(114,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(115,`.`),Zg()(),Jc(116,`table`)(117,`thead`)(118,`tr`)(119,`th`),Tk(120,`Propriedade`),Zg(),Jc(121,`th`),Tk(122,`Descrição`),Zg(),Jc(123,`th`),Tk(124,`Valor Padrão`),Zg()()(),Jc(125,`tbody`)(126,`tr`)(127,`td`)(128,`strong`),Tk(129,`Default`),Zg()(),_u(130,`td`)(131,`td`),Zg(),Jc(132,`tr`)(133,`td`)(134,`code`),Tk(135,`--background-color`),Zg()(),Jc(136,`td`),Tk(137,`Cor de background do item`),Zg(),Jc(138,`td`)(139,`code`),Tk(140,`var(--color-neutral-light-00)`),Zg()()(),Jc(141,`tr`)(142,`td`)(143,`code`),Tk(144,`--divider-color`),Zg()(),Jc(145,`td`),Tk(146,`Cor do divider dos agrupadores de nível 0`),Zg(),Jc(147,`td`)(148,`code`),Tk(149,`var(--color-neutral-mid-40)`),Zg()()(),Jc(150,`tr`)(151,`td`)(152,`code`),Tk(153,`--font-family`),Zg()(),Jc(154,`td`),Tk(155,`Família tipográfica`),Zg(),Jc(156,`td`)(157,`code`),Tk(158,`var(--font-family-theme)`),Zg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Tk(162,`--font-size`),Zg()(),Jc(163,`td`),Tk(164,`Tamanho da fonte`),Zg(),Jc(165,`td`)(166,`code`),Tk(167,`var(--font-size-default)`),Zg()()(),Jc(168,`tr`)(169,`td`)(170,`code`),Tk(171,`--line-height`),Zg()(),Jc(172,`td`),Tk(173,`Altura da linha`),Zg(),Jc(174,`td`)(175,`code`),Tk(176,`var(--line-height-md)`),Zg()()(),Jc(177,`tr`)(178,`td`)(179,`code`),Tk(180,`--color`),Zg()(),Jc(181,`td`),Tk(182,`Cor padrão do item`),Zg(),Jc(183,`td`)(184,`code`),Tk(185,`var(--color-action-default)`),Zg()()(),Jc(186,`tr`)(187,`td`)(188,`strong`),Tk(189,`Hover`),Zg()(),_u(190,`td`)(191,`td`),Zg(),Jc(192,`tr`)(193,`td`)(194,`code`),Tk(195,`--color-hover`),Zg()(),Jc(196,`td`),Tk(197,`Cor do item em hover`),Zg(),Jc(198,`td`)(199,`code`),Tk(200,`var(--color-action-hover)`),Zg()()(),Jc(201,`tr`)(202,`td`)(203,`strong`),Tk(204,`Pressed`),Zg()(),_u(205,`td`)(206,`td`),Zg(),Jc(207,`tr`)(208,`td`)(209,`code`),Tk(210,`--color-pressed`),Zg()(),Jc(211,`td`),Tk(212,`Cor do item em pressed`),Zg(),Jc(213,`td`)(214,`code`),Tk(215,`var(--color-action-pressed)`),Zg()()(),Jc(216,`tr`)(217,`td`)(218,`strong`),Tk(219,`Disabled`),Zg()(),_u(220,`td`)(221,`td`),Zg(),Jc(222,`tr`)(223,`td`)(224,`code`),Tk(225,`--color-disabled`),Zg()(),Jc(226,`td`),Tk(227,`Cor do item desabilitado`),Zg(),Jc(228,`td`)(229,`code`),Tk(230,`var(--color-action-disabled)`),Zg()()(),Jc(231,`tr`)(232,`td`)(233,`strong`),Tk(234,`Selected`),Zg()(),_u(235,`td`)(236,`td`),Zg(),Jc(237,`tr`)(238,`td`)(239,`code`),Tk(240,`--title-color`),Zg()(),Jc(241,`td`),Tk(242,`Cor do label quando selecionado`),Zg(),Jc(243,`td`)(244,`code`),Tk(245,`var(--color-action-focus)`),Zg()()()()()(),Jc(246,`div`,7)(247,`h4`,8),Tk(248,`Seletor`),Zg(),Jc(249,`pre`,9),Tk(250,`<po-tree-view
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
`),Zg()(),Jc(251,`h4`,10),Tk(252,`Propriedades`),Zg(),Jc(253,`table`,11)(254,`tr`,12)(255,`th`,13),Tk(256,`Nome`),Zg(),Jc(257,`th`,13),Tk(258,`Tipo`),Zg(),Jc(259,`th`,13),Tk(260,`Padrão`),Zg(),Jc(261,`th`,13),Tk(262,`Descrição`),Zg()(),Jc(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),Tk(267,` (p-activated)`),_u(268,`br`),Zg()()(),Jc(269,`td`,18)(270,`code`,19),Tk(271,`EventEmitter`),Zg()(),Jc(272,`td`,20),Tk(273,`-`),Zg(),Jc(274,`td`,21)(275,`em`)(276,`strong`),Tk(277,`(opcional)`),Zg()(),Jc(278,`p`),Tk(279,`Ação que será disparada ao executar um item final (sem `),Jc(280,`code`),Tk(281,`subItems`),Zg(),Tk(282,`).`),Zg(),Jc(283,`blockquote`)(284,`p`),Tk(285,`Como parâmetro o componente envia o item executado.`),Zg()()()(),Jc(286,`tr`,14)(287,`td`,15)(288,`div`,16)(289,`span`,17),Tk(290,` (p-collapsed)`),_u(291,`br`),Zg()()(),Jc(292,`td`,18)(293,`code`,19),Tk(294,`EventEmitter`),Zg()(),Jc(295,`td`,20),Tk(296,`-`),Zg(),Jc(297,`td`,21)(298,`em`)(299,`strong`),Tk(300,`(opcional)`),Zg()(),Jc(301,`p`),Tk(302,`Ação que será disparada ao colapsar um item.`),Zg(),Jc(303,`blockquote`)(304,`p`),Tk(305,`Como parâmetro o componente envia o item colapsado.`),Zg()()()(),Jc(306,`tr`,14)(307,`td`,15)(308,`div`,22)(309,`span`,23),Tk(310,` p-components-size`),_u(311,`br`),Zg()()(),Jc(312,`td`,18)(313,`code`,24),Tk(314,`string`),Zg()(),Jc(315,`td`,20)(316,`p`)(317,`code`),Tk(318,`medium`),Zg()()(),Jc(319,`td`,21)(320,`em`)(321,`strong`),Tk(322,`(opcional)`),Zg()(),Jc(323,`p`),Tk(324,`Define o tamanho dos componentes de formulário:`),Zg(),Jc(325,`ul`)(326,`li`)(327,`code`),Tk(328,`small`),Zg(),Tk(329,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(330,`li`)(331,`code`),Tk(332,`medium`),Zg(),Tk(333,`: aplica a medida medium de cada componente.`),Zg()(),Jc(334,`blockquote`)(335,`p`),Tk(336,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(337,`code`),Tk(338,`medium`),Zg(),Tk(339,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(340,`a`,25),Tk(341,`po-theme`),Zg(),Tk(342,`.`),Zg()()()(),Jc(343,`tr`,14)(344,`td`,15)(345,`div`,22)(346,`span`,23),Tk(347,` p-disabled`),_u(348,`br`),Zg()()(),Jc(349,`td`,18)(350,`code`,26),Tk(351,`boolean`),Zg()(),Jc(352,`td`,20)(353,`p`)(354,`code`),Tk(355,`false`),Zg()()(),Jc(356,`td`,21)(357,`em`)(358,`strong`),Tk(359,`(opcional)`),Zg()(),Jc(360,`p`),Tk(361,`Desabilita o componente inteiro.`),Zg(),Jc(362,`p`),Tk(363,`Quando `),Jc(364,`code`),Tk(365,`true`),Zg(),Tk(366,`, todos os itens do tree-view ser\xE3o exibidos no estado desabilitado,
independentemente do valor individual da propriedade `),Jc(367,`code`),Tk(368,`disabled`),Zg(),Tk(369,` de cada item.`),Zg(),Jc(370,`blockquote`)(371,`p`),Tk(372,`O botão de expansão/recolhimento (arrow) permanece interativo mesmo quando o componente está desabilitado.`),Zg()()()(),Jc(373,`tr`,14)(374,`td`,15)(375,`div`,16)(376,`span`,17),Tk(377,` (p-expanded)`),_u(378,`br`),Zg()()(),Jc(379,`td`,18)(380,`code`,19),Tk(381,`EventEmitter`),Zg()(),Jc(382,`td`,20),Tk(383,`-`),Zg(),Jc(384,`td`,21)(385,`em`)(386,`strong`),Tk(387,`(opcional)`),Zg()(),Jc(388,`p`),Tk(389,`Ação que será disparada ao expandir um item.`),Zg(),Jc(390,`blockquote`)(391,`p`),Tk(392,`Como parâmetro o componente envia o item expandido.`),Zg()()()(),Jc(393,`tr`,14)(394,`td`,15)(395,`div`,22)(396,`span`,23),Tk(397,` p-items`),_u(398,`br`),Zg()()(),Jc(399,`td`,18)(400,`code`,27),Tk(401,`Array<PoTreeViewItem>`),Zg()(),Jc(402,`td`,20),Tk(403,`-`),Zg(),Jc(404,`td`,21)(405,`p`),Tk(406,`Lista de itens do tipo `),Jc(407,`code`),Tk(408,`PoTreeViewItem`),Zg(),Tk(409,` que será renderizada pelo componente.`),Zg(),Jc(410,`blockquote`)(411,`p`),Tk(412,`Consulte a documentação de `),Jc(413,`code`),Tk(414,`PoTreeViewItem`),Zg(),Tk(415,` para detalhes sobre as propriedades disponíveis em cada item.`),Zg()()()(),Jc(416,`tr`,14)(417,`td`,15)(418,`div`,22)(419,`span`,23),Tk(420,` p-max-level`),_u(421,`br`),Zg()()(),Jc(422,`td`,18)(423,`code`,28),Tk(424,`number`),Zg()(),Jc(425,`td`,20)(426,`p`),Tk(427,`4`),Zg()(),Jc(428,`td`,21)(429,`em`)(430,`strong`),Tk(431,`(opcional)`),Zg()(),Jc(432,`p`),Tk(433,`Define o máximo de níveis para o tree-view.`),Zg(),Jc(434,`blockquote`)(435,`p`),Tk(436,`O valor padrão é 4`),Zg()()()(),Jc(437,`tr`,14)(438,`td`,15)(439,`div`,22)(440,`span`,23),Tk(441,` p-no-border`),_u(442,`br`),Zg()()(),Jc(443,`td`,18)(444,`code`,26),Tk(445,`boolean`),Zg()(),Jc(446,`td`,20)(447,`p`),Tk(448,`false`),Zg()(),Jc(449,`td`,21)(450,`em`)(451,`strong`),Tk(452,`(opcional)`),Zg()(),Jc(453,`p`),Tk(454,`Remove a borda do container do componente.`),Zg()()(),Jc(455,`tr`,14)(456,`td`,15)(457,`div`,22)(458,`span`,23),Tk(459,` p-selectable`),_u(460,`br`),Zg()()(),Jc(461,`td`,18)(462,`code`,26),Tk(463,`boolean`),Zg()(),Jc(464,`td`,20)(465,`p`),Tk(466,`false`),Zg()(),Jc(467,`td`,21)(468,`em`)(469,`strong`),Tk(470,`(opcional)`),Zg()(),Jc(471,`p`),Tk(472,`Habilita uma caixa de seleção para selecionar e/ou desmarcar um item da lista.`),Zg(),Jc(473,`blockquote`)(474,`p`),Tk(475,`Quando habilitado, a propriedade `),Jc(476,`code`),Tk(477,`showIcon`),Zg(),Tk(478,` dos itens não será aplicada.`),Zg()()()(),Jc(479,`tr`,14)(480,`td`,15)(481,`div`,16)(482,`span`,17),Tk(483,` (p-selected)`),_u(484,`br`),Zg()()(),Jc(485,`td`,18)(486,`code`,19),Tk(487,`EventEmitter`),Zg()(),Jc(488,`td`,20),Tk(489,`-`),Zg(),Jc(490,`td`,21)(491,`em`)(492,`strong`),Tk(493,`(opcional)`),Zg()(),Jc(494,`p`),Tk(495,`Ação que será disparada ao selecionar um item.`),Zg(),Jc(496,`blockquote`)(497,`p`),Tk(498,`Como parâmetro o componente envia o item selecionado.`),Zg()()()(),Jc(499,`tr`,14)(500,`td`,15)(501,`div`,22)(502,`span`,23),Tk(503,` p-single-select`),_u(504,`br`),Zg()()(),Jc(505,`td`,18)(506,`code`,26),Tk(507,`boolean`),Zg()(),Jc(508,`td`,20)(509,`p`),Tk(510,`false`),Zg()(),Jc(511,`td`,21)(512,`em`)(513,`strong`),Tk(514,`(opcional)`),Zg()(),Jc(515,`p`),Tk(516,`Habilita a seleção para item único atráves de po-radio.`),Zg()()(),Jc(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),Tk(521,` (p-unselected)`),_u(522,`br`),Zg()()(),Jc(523,`td`,18)(524,`code`,19),Tk(525,`EventEmitter`),Zg()(),Jc(526,`td`,20),Tk(527,`-`),Zg(),Jc(528,`td`,21)(529,`em`)(530,`strong`),Tk(531,`(opcional)`),Zg()(),Jc(532,`p`),Tk(533,`Ação que será disparada ao desfazer a seleção de um item.`),Zg(),Jc(534,`blockquote`)(535,`p`),Tk(536,`Como parâmetro o componente envia o item que foi desmarcado.`),Zg()()()()(),Jc(537,`h3`),Tk(538,`Interfaces`),Zg(),Jc(539,`h4`,29)(540,`code`,5),Tk(541,`PoTreeViewItem`),Zg()(),Jc(542,`div`,2)(543,`p`),Tk(544,`Interface para definição dos itens do componente `),Jc(545,`code`),Tk(546,`po-tree-view`),Zg(),Tk(547,`.`),Zg()(),Jc(548,`h4`,10),Tk(549,`Propriedades`),Zg(),Jc(550,`table`,11)(551,`tr`,12)(552,`th`,13),Tk(553,`Nome`),Zg(),Jc(554,`th`,13),Tk(555,`Tipo`),Zg(),Jc(556,`th`,13),Tk(557,`Descrição`),Zg()(),Jc(558,`tr`,14)(559,`td`,15)(560,`div`,22)(561,`span`,23),Tk(562,` disabled`),_u(563,`br`),Zg()()(),Jc(564,`td`,18)(565,`code`,26),Tk(566,`boolean`),Zg()(),Jc(567,`td`,21)(568,`em`)(569,`strong`),Tk(570,`(opcional)`),Zg()(),Jc(571,`p`),Tk(572,`Desabilita a interação com o item.`),Zg(),Jc(573,`p`),Tk(574,`O estado \xE9 aplicado somente ao item em que a propriedade est\xE1 configurada
e n\xE3o \xE9 propagado para seus `),Jc(575,`code`),Tk(576,`subItems`),Zg(),Tk(577,`.`),Zg(),Jc(578,`blockquote`)(579,`p`),Tk(580,`Itens disabled que não possuem `),Jc(581,`code`),Tk(582,`subItems`),Zg(),Tk(583,` s\xE3o ignorados na navega\xE7\xE3o por teclado.
Itens disabled que possuem `),Jc(584,`code`),Tk(585,`subItems`),Zg(),Tk(586,` continuam participando da navegação, permitindo expandir/recolher.`),Zg()()()(),Jc(587,`tr`,14)(588,`td`,15)(589,`div`,22)(590,`span`,23),Tk(591,` expanded`),_u(592,`br`),Zg()()(),Jc(593,`td`,18)(594,`code`,26),Tk(595,`boolean`),Zg()(),Jc(596,`td`,21)(597,`em`)(598,`strong`),Tk(599,`(opcional)`),Zg()(),Jc(600,`p`),Tk(601,`Expande o item, exibindo seus `),Jc(602,`code`),Tk(603,`subItems`),Zg(),Tk(604,`.`),Zg(),Jc(605,`p`),Tk(606,`Quando `),Jc(607,`code`),Tk(608,`true`),Zg(),Tk(609,`, o item será renderizado no estado expandido.`),Zg(),Jc(610,`blockquote`)(611,`p`),Tk(612,`Sem efeito em itens que não possuem `),Jc(613,`code`),Tk(614,`subItems`),Zg(),Tk(615,`.`),Zg()()()(),Jc(616,`tr`,14)(617,`td`,15)(618,`div`,22)(619,`span`,23),Tk(620,` isSelectable`),_u(621,`br`),Zg()()(),Jc(622,`td`,18)(623,`code`,26),Tk(624,`boolean `),Zg(),Jc(625,`code`,30),Tk(626,` null`),Zg()(),Jc(627,`td`,21)(628,`em`)(629,`strong`),Tk(630,`(opcional)`),Zg()(),Jc(631,`p`),Tk(632,`Permite ativar ou desativar a seleção do item.`),Zg(),Jc(633,`p`),Tk(634,`Quando `),Jc(635,`code`),Tk(636,`false`),Zg(),Tk(637,`, o item não poderá ser selecionado pelo usuário.`),Zg()()(),Jc(638,`tr`,14)(639,`td`,15)(640,`div`,22)(641,`span`,23),Tk(642,` label`),_u(643,`br`),Zg()()(),Jc(644,`td`,18)(645,`code`,24),Tk(646,`string`),Zg()(),Jc(647,`td`,21)(648,`p`),Tk(649,`Texto de exibição do item.`),Zg(),Jc(650,`p`),Tk(651,`O valor é utilizado como `),Jc(652,`code`),Tk(653,`aria-label`),Zg(),Tk(654,` do nó e como referência na navegação por caractere do teclado.`),Zg()()(),Jc(655,`tr`,14)(656,`td`,15)(657,`div`,22)(658,`span`,23),Tk(659,` selected`),_u(660,`br`),Zg()()(),Jc(661,`td`,18)(662,`code`,26),Tk(663,`boolean `),Zg(),Jc(664,`code`,30),Tk(665,` null`),Zg()(),Jc(666,`td`,21)(667,`em`)(668,`strong`),Tk(669,`(opcional)`),Zg()(),Jc(670,`p`),Tk(671,`Marca o item como selecionado.`),Zg(),Jc(672,`blockquote`)(673,`p`),Tk(674,`Caso o item que possuir `),Jc(675,`code`),Tk(676,`subItems`),Zg(),Tk(677,` for selecionado, os seus itens filhos serão também selecionados.`),Zg()(),Jc(678,`p`),Tk(679,`Quando utilizado com `),Jc(680,`code`),Tk(681,`p-single-select`),Zg(),Tk(682,`, apenas um item pode estar selecionado por vez.
Ao selecionar outro item, o anteriormente selecionado perde o estado.`),Zg()()(),Jc(683,`tr`,14)(684,`td`,15)(685,`div`,22)(686,`span`,23),Tk(687,` showIcon`),_u(688,`br`),Zg()()(),Jc(689,`td`,18)(690,`code`,26),Tk(691,`boolean`),Zg()(),Jc(692,`td`,21)(693,`em`)(694,`strong`),Tk(695,`(opcional)`),Zg()(),Jc(696,`p`),Tk(697,`Habilita a exibição de ícone no item.`),Zg(),Jc(698,`p`),Tk(699,`Quando `),Jc(700,`code`),Tk(701,`true`),Zg(),Tk(702,`, exibe automaticamente:`),Zg(),Jc(703,`ul`)(704,`li`)(705,`code`),Tk(706,`an-folder-simple`),Zg(),Tk(707,` para itens agrupadores (que possuem `),Jc(708,`code`),Tk(709,`subItems`),Zg(),Tk(710,`).`),Zg(),Jc(711,`li`)(712,`code`),Tk(713,`an-file`),Zg(),Tk(714,` para itens finais (sem `),Jc(715,`code`),Tk(716,`subItems`),Zg(),Tk(717,`).`),Zg()(),Jc(718,`blockquote`)(719,`p`),Tk(720,`Não funciona em conjunto com `),Jc(721,`code`),Tk(722,`p-selectable`),Zg(),Tk(723,`.
Quando `),Jc(724,`code`),Tk(725,`p-selectable`),Zg(),Tk(726,` e `),Jc(727,`code`),Tk(728,`showIcon`),Zg(),Tk(729,` estiverem configurados como `),Jc(730,`code`),Tk(731,`true`),Zg(),Tk(732,`,
`),Jc(733,`code`),Tk(734,`p-selectable`),Zg(),Tk(735,` terá precedência.`),Zg()()()(),Jc(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),Tk(740,` subItems`),_u(741,`br`),Zg()()(),Jc(742,`td`,18)(743,`code`,27),Tk(744,`Array<PoTreeViewItem>`),Zg()(),Jc(745,`td`,21)(746,`em`)(747,`strong`),Tk(748,`(opcional)`),Zg()(),Jc(749,`p`),Tk(750,`Lista de itens do próximo nível, permitindo a construção hierárquica da árvore.`),Zg(),Jc(751,`p`),Tk(752,`A estrutura pode ser aninhada recursivamente até o limite definido pela propriedade `),Jc(753,`code`),Tk(754,`p-max-level`),Zg(),Tk(755,` do componente.`),Zg()()(),Jc(756,`tr`,14)(757,`td`,15)(758,`div`,22)(759,`span`,23),Tk(760,` value`),_u(761,`br`),Zg()()(),Jc(762,`td`,18)(763,`code`,24),Tk(764,`string `),Zg(),Jc(765,`code`,28),Tk(766,` number`),Zg()(),Jc(767,`td`,21)(768,`p`),Tk(769,`Valor do item utilizado como referência para sua identificação.`),Zg(),Jc(770,`p`),Tk(771,`Em modo `),Jc(772,`code`),Tk(773,`p-single-select`),Zg(),Tk(774,`, este valor é utilizado para determinar qual item está atualmente selecionado.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Qe(a,Je){if(a&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-tree-view-basic-view`)(2,`sample-po-tree-view-labs-view`)(3,`sample-po-tree-view-folder-structure-view`)(4,`sample-po-tree-view-supermarket-view`),Zg()}if(a&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Ue=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Tree View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Qe,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-tree-view-doc`),Zg()()()),o&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,fe,Ce,Ve,Pe],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[WV.forChild(Ue),WV]})}return a})();var Tt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,_e]})}return a})();export{Tt as DocPoTreeViewModule};