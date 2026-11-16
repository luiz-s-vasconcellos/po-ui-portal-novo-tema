import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,Ci as UO,G as Nf,Ir as Kb,Lr as Kg,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bn as oi,ci as QP,cr as B_,da as gk,dn as l4,do as xo,ft as Tee,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,na as de$1,oo as wg,ro as vt,sa as ek,si as QL,sn as j4,sr as BO,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yn as oae,yr as Du}from"./chunk-DtUf9FxZ.js";var de=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(a,i){a&1&&(Qc(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),Sk(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),Kg()(),Qc(4,`po-accordion-item`,2)(5,`p`,1),Sk(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),Kg()()())},dependencies:[Tee,l4],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-accordion-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Accordion Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-accordion-basic`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ee,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();function Ce(n,z){if(n&1&&(Qc(0,`po-accordion-item`,2),Sk(1),Kg()),n&2){let r=z.$implicit,a=z.$index;Rb(`p-label`,r.label)(`p-disabled`,r.disabledItem)(`p-label-tag`,r.labelTag)(`p-type-tag`,r.typeTag),wg(),tm(` Accordion Item Content `,a,` `)}}var me=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(r){r.disabledItem=this.disabledItem.includes(`disabled`),r.labelTag&&(r.typeTag=this.typeTag);let a=Object.assign({},r,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let s=YO();Qc(0,`po-accordion`,1),UO(1,Ce,2,5,`po-accordion-item`,2,BO),Kg(),vu(3,`po-divider`,3),Qc(4,`div`,4)(5,`po-input`,5),z0(),Kb(`ngModelChange`,function(c){return B_(s),Tk(i.literals,c)||(i.literals=c),U_(c)}),vt(`p-change`,function(){return i.changeLiterals()}),Kg(),Qc(6,`po-checkbox-group`,6),z0(),Kb(`ngModelChange`,function(c){return B_(s),Tk(i.propertiesAccordion,c)||(i.propertiesAccordion=c),U_(c)}),Kg()(),vu(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),Qc(10,`div`,9)(11,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(c){return B_(s),Tk(i.typeTag,c)||(i.typeTag=c),U_(c)}),Kg(),Qc(12,`po-checkbox-group`,11),z0(),Kb(`ngModelChange`,function(c){return B_(s),Tk(i.disabledItem,c)||(i.disabledItem=c),U_(c)}),Kg()(),Qc(13,`div`,12)(14,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(c){return B_(s),Tk(i.size,c)||(i.size=c),U_(c)}),Kg(),Qc(15,`po-button`,14),vt(`p-click`,function(){B_(s);let c=ik(9);return i.addAccordionItem(c.form.value),U_(c.form.reset())}),Kg()(),Qc(16,`div`,15)(17,`po-button`,16),vt(`p-click`,function(){return i.restore()}),Kg()()}if(a&2){let s=ik(9);Rb(`p-literals`,i.customLiterals)(`p-show-manager-accordion`,i.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,i.propertiesAccordion.includes(`expandItems`))(`p-size`,i.size),wg(),HO(i.accordionItems),wg(4),Yb(`ngModel`,i.literals),W0(),wg(),Yb(`ngModel`,i.propertiesAccordion),Rb(`p-options`,i.propertiesAccordionOptions),W0(),wg(2),Rb(`p-fields`,i.accordionFieldsForm)(`p-value`,i.accordionItems),wg(3),Rb(`p-options`,i.typeTagOptions),Yb(`ngModel`,i.typeTag),W0(),wg(),Rb(`p-options`,i.disabledOption),Yb(`ngModel`,i.disabledItem),W0(),wg(2),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0(),wg(),Rb(`p-disabled`,s.form.invalid)}},dependencies:[MZ,QL,Tee,l4,oi,Nf,oae,I4,j4,Zte],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-accordion-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Accordion Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-accordion
  [p-literals]="customLiterals"
  [p-show-manager-accordion]="propertiesAccordion.includes('showManager')"
  [p-allow-expand-all-items]="propertiesAccordion.includes('expandItems')"
  [p-size]="size"
>
  @for (accordionItem of accordionItems; track accordionItem; let i = $index) {
    <po-accordion-item
      [p-label]="accordionItem.label"
      [p-disabled]="accordionItem.disabledItem"
      [p-label-tag]="accordionItem.labelTag"
      [p-type-tag]="accordionItem.typeTag"
    >
      Accordion Item Content { { i }}
    </po-accordion-item>
  }
</po-accordion>

<po-divider p-label="ACCORDION"></po-divider>
<div class="po-row po-mt-1 po-mb-1">
  <po-input
    class="po-md-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"closeAllItems": "Fechar itens"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>
  <po-checkbox-group
    class="po-md-6"
    name="propertiesAccordion"
    [(ngModel)]="propertiesAccordion"
    p-label="Properties Accordion"
    [p-options]="propertiesAccordionOptions"
  >
  </po-checkbox-group>
</div>

<po-divider p-label="ACCORDION ITEM"></po-divider>
<po-dynamic-form #accordionForm [p-fields]="accordionFieldsForm" [p-value]="accordionItems"> </po-dynamic-form>

<div class="po-row po-mt-2 po-mb-2">
  <po-radio-group class="po-md-6" p-label="Type Tag" [p-options]="typeTagOptions" [(ngModel)]="typeTag">
  </po-radio-group>
  <po-checkbox-group
    class="po-md-6"
    p-label="Properties Accordion Item"
    name="disabledItem"
    [p-options]="disabledOption"
    [(ngModel)]="disabledItem"
  >
  </po-checkbox-group>
</div>

<div class="po-row po-mt-1">
  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>
  <po-button
    class="po-md-6"
    p-label="Add Accordion"
    [p-disabled]="accordionForm.form.invalid"
    (p-click)="addAccordionItem(accordionForm.form.value); accordionForm.form.reset()"
  >
  </po-button>
</div>

<div class="po-row po-mt-2">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoAccordionItemComponent,
  PoAccordionLiterals,
  PoCheckboxGroupOption,
  PoDynamicFormField,
  PoRadioGroupOption,
  PoTagType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-labs',
  templateUrl: './sample-po-accordion-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionLabsComponent implements OnInit {
  accordionFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', required: true, gridColumns: 6 },
    { property: 'labelTag', label: 'Label Tag', gridColumns: 6 }
  ];

  propertiesAccordionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showManager', label: 'Show Accordion Manager' },
    { value: 'expandItems', label: 'Allow Expand All Items' }
  ];

  typeTagOptions: Array<PoRadioGroupOption> = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  disabledOption: Array<PoRadioGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  properties: Array<string> = [];
  propertiesAccordion: Array<string> = [];
  disabledItem: Array<string> = [];
  accordionItemIndex: number;
  customLiterals: PoAccordionLiterals;
  literals: string;
  typeTag: PoTagType;
  accordionItems: Array<PoAccordionItemComponent> = [];
  size: string;

  ngOnInit() {
    this.restore();
  }

  addAccordionItem(accordionItem: PoAccordionItemComponent) {
    accordionItem.disabledItem = this.disabledItem.includes('disabled');
    if (accordionItem.labelTag) {
      accordionItem.typeTag = this.typeTag;
    }
    const newAccordionItem = Object.assign({}, accordionItem, { value: this.accordionItems.length });

    this.accordionItems = [...this.accordionItems, newAccordionItem];
    this.disabledItem = [];
    this.typeTag = undefined;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.accordionItems = [];
    this.customLiterals = undefined;
    this.disabledItem = [];
    this.literals = '';
    this.properties = [];
    this.propertiesAccordion = [];
    this.typeTag = undefined;
    this.size = 'medium';
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-accordion-labs`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(a,i){if(a&1&&Du(l4,7),a&2){let s;No(s=xo())&&(i.questionOne=s.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,1)(1,`p`,2),Sk(2,`You don't have to be afraid of being a blood donor!`),Kg(),Qc(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),Sk(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),Kg()(),Qc(8,`po-accordion-item`,6)(9,`p`,5),Sk(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),Kg()(),Qc(11,`po-accordion-item`,7)(12,`p`,5),Sk(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),Kg()(),Qc(14,`po-accordion-item`,8)(15,`p`,5),Sk(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),Kg()()(),Qc(17,`p`,9),Sk(18,` For more information, see the `),Qc(19,`a`,10),Sk(20,`Hemosc FAQ`),Kg(),Sk(21,`. `),Kg()()),a&2&&(wg(3),Rb(`p-show-manager-accordion`,!0))},dependencies:[Tee,l4,Mze],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var he=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-accordion-faq`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Accordion - FAQs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-default p-title="Blood donation FAQs">
  <p class="po-pb-2 po-text-color-neutral-dark-40">You don't have to be afraid of being a blood donor!</p>

  <po-accordion [p-show-manager-accordion]="true">
    <po-accordion-item p-label="Who can donate?" #questionOne>
      <p class="po-text-color-neutral-dark-40">
        In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance
        with current legislation and a number of factors that take into account the risk that such a donation may pose
        to the health of the candidate himself and to the health of the individual receiving the donated blood.
      </p>
    </po-accordion-item>

    <po-accordion-item
      p-label="How long does it take for the blood to be processed?"
      p-label-tag="Important!"
      p-type-tag="danger"
    >
      <p class="po-text-color-neutral-dark-40">
        Blood is processed as soon as collected, preferably within 6 hours of donation.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="How long does the body take to replenish donated blood?">
      <p class="po-text-color-neutral-dark-40">
        Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of
        childbearing age.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="Is donating blood safe?">
      <p class="po-text-color-neutral-dark-40">
        Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there
        is a small risk that the donor may feel unwell during or shortly after the donation especially the first few
        times he or she donates, but the services are concerned about this, watching and making sure the donors feel
        nothing or feel feel so that they are well assisted until full recovery.
      </p>
    </po-accordion-item>
  </po-accordion>

  <p class="po-pt-2 po-text-color-neutral-dark-40">
    For more information, see the <a href="http://www.hemosc.org.br/perguntas-frequentes.html">Hemosc FAQ</a>.
  </p>
</po-page-default>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-faq',
  templateUrl: './sample-po-accordion-faq.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionFaqComponent implements AfterContentInit {
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-accordion-faq`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Pe,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ue],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:538,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-accordion-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-allow-expand-all-items`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-collapse-all`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-expand-all`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-show-manager-accordion`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-collapseAllItems`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-expandAllItems`,1,`docs-api-method-table`],[`id`,`interface-po-accordion-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-accordion-literals-close-all-items`,1,`docs-api-properties-row`],[`id`,`interface-po-accordion-literals-expand-all-items`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-accordion-item?view=doc`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-accordion`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoAccordionComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),Kg(),Qc(18,`p`),Sk(19,`Para utilizá-lo, é necessário envolver cada item no componente `),Qc(20,`a`,6)(21,`code`),Sk(22,`po-accordion-item`),Kg()(),Sk(23,`,
como no exemplo abaixo:`),Kg(),Qc(24,`pre`)(25,`code`),Sk(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),Kg()(),Qc(27,`p`),Sk(28,`e no typescript pode-se utilizar o `),Qc(29,`code`),Sk(30,`@ViewChild`),Kg(),Sk(31,`:`),Kg(),Qc(32,`pre`)(33,`code`),Sk(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),Kg()(),Qc(35,`p`),Sk(36,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),Kg(),Qc(37,`p`),Sk(38,`Caso houver a necessidade de abrir algum dos `),Qc(39,`code`),Sk(40,`po-accordion-item`),Kg(),Sk(41,` via Typescript
acesse a `),Qc(42,`a`,6),Sk(43,`documentação do PoAccordionItem`),Kg(),Sk(44,`.`),Kg(),Qc(45,`h4`),Sk(46,`Tokens customizáveis`),Kg(),Qc(47,`p`),Sk(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(49,`blockquote`)(50,`p`),Sk(51,`Para maiores informações, acesse o guia `),Qc(52,`a`,7),Sk(53,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(54,`.`),Kg()(),Qc(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),Sk(59,`Propriedade`),Kg(),Qc(60,`th`),Sk(61,`Descrição`),Kg(),Qc(62,`th`),Sk(63,`Valor Padrão`),Kg()()(),Qc(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),Sk(68,`Default Values`),Kg()(),vu(69,`td`)(70,`td`),Kg(),Qc(71,`tr`)(72,`td`)(73,`code`),Sk(74,`--font-family`),Kg()(),Qc(75,`td`),Sk(76,`Família tipográfica usada`),Kg(),Qc(77,`td`)(78,`code`),Sk(79,`var(--font-family-theme)`),Kg()()(),Qc(80,`tr`)(81,`td`)(82,`code`),Sk(83,`--font-size`),Kg()(),Qc(84,`td`),Sk(85,`Tamanho da fonte`),Kg(),Qc(86,`td`)(87,`code`),Sk(88,`var(--font-size-default)`),Kg()()(),Qc(89,`tr`)(90,`td`)(91,`code`),Sk(92,`--color`),Kg()(),Qc(93,`td`),Sk(94,`Cor principal do accordion`),Kg(),Qc(95,`td`)(96,`code`),Sk(97,`var(--color-action-default)`),Kg()()(),Qc(98,`tr`)(99,`td`)(100,`code`),Sk(101,`--background-color`),Kg()(),Qc(102,`td`),Sk(103,`Cor de background`),Kg(),Qc(104,`td`)(105,`code`),Sk(106,`var(--color-neutral-light-00)`),Kg()()(),Qc(107,`tr`)(108,`td`)(109,`code`),Sk(110,`--font-weight`),Kg()(),Qc(111,`td`),Sk(112,`Peso da fonte`),Kg(),Qc(113,`td`)(114,`code`),Sk(115,`var(--font-weight-bold)`),Kg()()(),Qc(116,`tr`)(117,`td`)(118,`strong`),Sk(119,`Hover`),Kg()(),vu(120,`td`)(121,`td`),Kg(),Qc(122,`tr`)(123,`td`)(124,`code`),Sk(125,`--color-hover`),Kg()(),Qc(126,`td`),Sk(127,`Cor principal no estado hover`),Kg(),Qc(128,`td`)(129,`code`),Sk(130,`var(--color-action-hover)`),Kg()()(),Qc(131,`tr`)(132,`td`)(133,`code`),Sk(134,`--background-hover`),Kg()(),Qc(135,`td`),Sk(136,`Cor de background no estado hover`),Kg(),Qc(137,`td`)(138,`code`),Sk(139,`var(--color-brand-01-lightest)`),Kg()()(),Qc(140,`tr`)(141,`td`)(142,`strong`),Sk(143,`Focused`),Kg()(),vu(144,`td`)(145,`td`),Kg(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--color-focused`),Kg()(),Qc(150,`td`),Sk(151,`Cor principal no estado de focus`),Kg(),Qc(152,`td`)(153,`code`),Sk(154,`var(--color-action-focus)`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`code`),Sk(158,`--outline-color-focused`),Kg(),Sk(159,` \xA0`),Kg(),Qc(160,`td`),Sk(161,`Cor do outline do estado de focus`),Kg(),Qc(162,`td`)(163,`code`),Sk(164,`var(--color-action-focus)`),Kg()()(),Qc(165,`tr`)(166,`td`)(167,`strong`),Sk(168,`Disabled`),Kg()(),vu(169,`td`)(170,`td`),Kg(),Qc(171,`tr`)(172,`td`)(173,`code`),Sk(174,`--color-disabled`),Kg()(),Qc(175,`td`),Sk(176,`Cor principal no estado disabled`),Kg(),Qc(177,`td`)(178,`code`),Sk(179,`var(--color-neutral-mid-60)`),Kg()()(),Qc(180,`tr`)(181,`td`)(182,`code`),Sk(183,`--background-disabled`),Kg(),Sk(184,` \xA0`),Kg(),Qc(185,`td`),Sk(186,`Cor de background no estado disabled`),Kg(),Qc(187,`td`)(188,`code`),Sk(189,`var(--color-neutral-light-10)`),Kg()()(),Qc(190,`tr`)(191,`td`)(192,`strong`),Sk(193,`po-accordion-manager`),Kg()(),vu(194,`td`)(195,`td`),Kg(),Qc(196,`tr`)(197,`td`)(198,`code`),Sk(199,`--background-color`),Kg()(),Qc(200,`td`),Sk(201,`Cor de background`),Kg(),Qc(202,`td`)(203,`code`),Sk(204,`var(--color-neutral-mid-60)`),Kg()()(),Qc(205,`tr`)(206,`td`)(207,`code`),Sk(208,`--color`),Kg()(),Qc(209,`td`),Sk(210,`Cor principal do accordion manager`),Kg(),Qc(211,`td`)(212,`code`),Sk(213,`var(--color-neutral-light-10)`),Kg()()(),Qc(214,`tr`)(215,`td`)(216,`code`),Sk(217,`--font-family`),Kg()(),Qc(218,`td`),Sk(219,`Família tipográfica usada`),Kg(),Qc(220,`td`)(221,`code`),Sk(222,`var(--color-neutral-light-10)`),Kg()()(),Qc(223,`tr`)(224,`td`)(225,`code`),Sk(226,`--font-size`),Kg()(),Qc(227,`td`),Sk(228,`Tamanho da fonte`),Kg(),Qc(229,`td`)(230,`code`),Sk(231,`var(--color-neutral-light-10)`),Kg()()(),Qc(232,`tr`)(233,`td`)(234,`code`),Sk(235,`--font-weight`),Kg()(),Qc(236,`td`),Sk(237,`Peso da fonte`),Kg(),Qc(238,`td`)(239,`code`),Sk(240,`var(--color-neutral-light-10)`),Kg()()(),Qc(241,`tr`)(242,`td`)(243,`strong`),Sk(244,`Pressed`),Kg()(),vu(245,`td`)(246,`td`),Kg(),Qc(247,`tr`)(248,`td`)(249,`code`),Sk(250,`--background-pressed`),Kg(),Sk(251,` \xA0`),Kg(),Qc(252,`td`),Sk(253,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(254,`td`)(255,`code`),Sk(256,`var(--color-brand-01-lighter)`),Kg()()(),Qc(257,`tr`)(258,`td`)(259,`code`),Sk(260,`--color-pressed`),Kg()(),Qc(261,`td`),Sk(262,`Cor principal no estado de pressionado`),Kg(),Qc(263,`td`)(264,`code`),Sk(265,`var(--color-action-pressed)`),Kg()()()()()(),Qc(266,`div`,8)(267,`h4`,9),Sk(268,`Seletor`),Kg(),Qc(269,`pre`,10),Sk(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),Kg()(),Qc(271,`h4`,11),Sk(272,`Propriedades`),Kg(),Qc(273,`table`,12)(274,`tr`,13)(275,`th`,14),Sk(276,`Nome`),Kg(),Qc(277,`th`,14),Sk(278,`Tipo`),Kg(),Qc(279,`th`,14),Sk(280,`Padrão`),Kg(),Qc(281,`th`,14),Sk(282,`Descrição`),Kg()(),Qc(283,`tr`,15)(284,`td`,16)(285,`div`,17)(286,`span`,18),Sk(287,` p-allow-expand-all-items`),vu(288,`br`),Kg()()(),Qc(289,`td`,19)(290,`code`,20),Sk(291,`boolean`),Kg()(),Qc(292,`td`,21)(293,`p`)(294,`code`),Sk(295,`false`),Kg()()(),Qc(296,`td`,22)(297,`em`)(298,`strong`),Sk(299,`(opcional)`),Kg()(),Qc(300,`p`),Sk(301,`Permite expandir mais de um `),Qc(302,`code`),Sk(303,`<po-accordion-item></po-accordion-item>`),Kg(),Sk(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Qc(305,`code`),Sk(306,`p-show-manager-accordion`),Kg(),Sk(307,` esteja como `),Qc(308,`code`),Sk(309,`true`),Kg(),Sk(310,`.`),Kg()()(),Qc(311,`tr`,23)(312,`td`,16)(313,`div`,24)(314,`span`,25),Sk(315,` (p-collapse-all)`),vu(316,`br`),Kg()()(),Qc(317,`td`,19)(318,`code`,26),Sk(319,`EventEmitter`),Kg()(),Qc(320,`td`,21),Sk(321,`-`),Kg(),Qc(322,`td`,22)(323,`em`)(324,`strong`),Sk(325,`(opcional)`),Kg()(),Qc(326,`p`),Sk(327,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),Kg()()(),Qc(328,`tr`,27)(329,`td`,16)(330,`div`,24)(331,`span`,25),Sk(332,` (p-expand-all)`),vu(333,`br`),Kg()()(),Qc(334,`td`,19)(335,`code`,26),Sk(336,`EventEmitter`),Kg()(),Qc(337,`td`,21),Sk(338,`-`),Kg(),Qc(339,`td`,22)(340,`em`)(341,`strong`),Sk(342,`(opcional)`),Kg()(),Qc(343,`p`),Sk(344,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),Kg()()(),Qc(345,`tr`,28)(346,`td`,16)(347,`div`,17)(348,`span`,18),Sk(349,` p-literals`),vu(350,`br`),Kg()()(),Qc(351,`td`,19)(352,`code`,29),Sk(353,`PoAccordionLiterals`),Kg()(),Qc(354,`td`,21),Sk(355,`-`),Kg(),Qc(356,`td`,22)(357,`em`)(358,`strong`),Sk(359,`(opcional)`),Kg()(),Qc(360,`p`),Sk(361,`Objeto com as literais usadas no `),Qc(362,`code`),Sk(363,`po-accordion`),Kg(),Sk(364,`.`),Kg(),Qc(365,`p`),Sk(366,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(367,`pre`)(368,`code`),Sk(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),Kg()(),Qc(370,`p`),Sk(371,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(372,`pre`)(373,`code`),Sk(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),Kg()(),Qc(375,`p`),Sk(376,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(377,`pre`)(378,`code`),Sk(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),Kg()(),Qc(380,`blockquote`)(381,`p`),Sk(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(383,`a`,30)(384,`code`),Sk(385,`PoI18nService`),Kg()(),Sk(386,` ou do browser.`),Kg()()()(),Qc(387,`tr`,31)(388,`td`,16)(389,`div`,17)(390,`span`,18),Sk(391,` p-show-manager-accordion`),vu(392,`br`),Kg()()(),Qc(393,`td`,19)(394,`code`,20),Sk(395,`boolean`),Kg()(),Qc(396,`td`,21)(397,`p`)(398,`code`),Sk(399,`false`),Kg()()(),Qc(400,`td`,22)(401,`em`)(402,`strong`),Sk(403,`(opcional)`),Kg()(),Qc(404,`p`),Sk(405,`Exibe o Gerenciador de Accordion.`),Kg()()(),Qc(406,`tr`,32)(407,`td`,16)(408,`div`,17)(409,`span`,18),Sk(410,` p-size`),vu(411,`br`),Kg()()(),Qc(412,`td`,19)(413,`code`,33),Sk(414,`string`),Kg()(),Qc(415,`td`,21)(416,`p`)(417,`code`),Sk(418,`medium`),Kg()()(),Qc(419,`td`,22)(420,`em`)(421,`strong`),Sk(422,`(opcional)`),Kg()(),Qc(423,`p`),Sk(424,`Define o tamanho do componente:`),Kg(),Qc(425,`ul`)(426,`li`)(427,`code`),Sk(428,`small`),Kg(),Sk(429,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(430,`li`)(431,`code`),Sk(432,`medium`),Kg(),Sk(433,`: altura de 44px.`),Kg()(),Qc(434,`blockquote`)(435,`p`),Sk(436,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(437,`code`),Sk(438,`medium`),Kg(),Sk(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(440,`a`,34),Sk(441,`po-theme`),Kg(),Sk(442,`.`),Kg()()()()(),Qc(443,`h3`,11),Sk(444,`Métodos`),Kg(),Qc(445,`table`,35)(446,`tr`,36)(447,`th`,37)(448,`div`,17)(449,`h4`)(450,`span`,18),Sk(451,` collapseAllItems `),Kg()()()()(),Qc(452,`tr`,22)(453,`td`,22)(454,`p`),Sk(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Qc(456,`code`),Sk(457,`p-show-manager-accordion`),Kg(),Sk(458,` estiver como `),Qc(459,`code`),Sk(460,`true`),Kg(),Sk(461,`.`),Kg()()()(),vu(462,`br`),Qc(463,`table`,38)(464,`tr`,36)(465,`th`,37)(466,`div`,17)(467,`h4`)(468,`span`,18),Sk(469,` expandAllItems `),Kg()()()()(),Qc(470,`tr`,22)(471,`td`,22)(472,`p`),Sk(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Qc(474,`code`),Sk(475,`p-show-manager-accordion`),Kg(),Sk(476,` estiver como `),Qc(477,`code`),Sk(478,`true`),Kg(),Sk(479,`.`),Kg()()()(),vu(480,`br`),Qc(481,`h3`),Sk(482,`Interfaces`),Kg(),Qc(483,`h4`,39)(484,`code`,5),Sk(485,`PoAccordionLiterals`),Kg()(),Qc(486,`div`,2)(487,`p`),Sk(488,`Interface para definição das literais usadas no `),Qc(489,`code`),Sk(490,`po-accordion`),Kg(),Sk(491,`.`),Kg()(),Qc(492,`h4`,11),Sk(493,`Propriedades`),Kg(),Qc(494,`table`,12)(495,`tr`,13)(496,`th`,14),Sk(497,`Nome`),Kg(),Qc(498,`th`,14),Sk(499,`Tipo`),Kg(),Qc(500,`th`,14),Sk(501,`Descrição`),Kg()(),Qc(502,`tr`,40)(503,`td`,16)(504,`div`,17)(505,`span`,18),Sk(506,` closeAllItems`),vu(507,`br`),Kg()()(),Qc(508,`td`,19)(509,`code`,33),Sk(510,`string`),Kg()(),Qc(511,`td`,22)(512,`em`)(513,`strong`),Sk(514,`(opcional)`),Kg()(),Qc(515,`p`),Sk(516,`Label do gerenciador de Accordion para colapsar todos os itens`),Kg()()(),Qc(517,`tr`,41)(518,`td`,16)(519,`div`,17)(520,`span`,18),Sk(521,` expandAllItems`),vu(522,`br`),Kg()()(),Qc(523,`td`,19)(524,`code`,33),Sk(525,`string`),Kg()(),Qc(526,`td`,22)(527,`em`)(528,`strong`),Sk(529,`(opcional)`),Kg()(),Qc(530,`p`),Sk(531,`Label do gerenciador de Accordion para expandir todos os itens.`),Kg()()()(),Qc(532,`h3`,42),Sk(533,`Subcomponentes`),Kg(),Qc(534,`ul`,43)(535,`li`)(536,`a`,44),Sk(537,`Accordion Item`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function _e(n,z){if(n&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-accordion-basic-view`)(2,`sample-po-accordion-labs-view`)(3,`sample-po-accordion-faq-view`),Kg()}if(n&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var ke=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Accordion`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,_e,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-accordion-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,pe,se,he,ge],encapsulation:2,changeDetection:1})}return n})()}];var fe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[GV.forChild(ke),GV]})}return n})();var ot=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,fe]})}return n})();export{ot as DocPoAccordionModule};