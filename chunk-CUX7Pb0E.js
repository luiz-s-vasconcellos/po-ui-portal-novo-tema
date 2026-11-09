import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xn as $O,Xr as No,Yi as eF,_n as oae,an as j4,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,kr as I,ln as l4,no as yk,nr as BO,oo as zO,or as Bk,qi as de$1,ut as Tee,va as nk,vn as oi,wr as HO,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var de=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(a,i){a&1&&(Jc(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),Tk(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),Zg()(),Jc(4,`po-accordion-item`,2)(5,`p`,1),Tk(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),Zg()()())},dependencies:[Tee,l4],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Accordion Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-accordion-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ee,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,de],encapsulation:2,changeDetection:1})}return n})();function Ce(n,z){if(n&1&&(Jc(0,`po-accordion-item`,2),Tk(1),Zg()),n&2){let r=z.$implicit,a=z.$index;Rb(`p-label`,r.label)(`p-disabled`,r.disabledItem)(`p-label-tag`,r.labelTag)(`p-type-tag`,r.typeTag),Ig(),nm(` Accordion Item Content `,a,` `)}}var me=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(r){r.disabledItem=this.disabledItem.includes(`disabled`),r.labelTag&&(r.typeTag=this.typeTag);let a=Object.assign({},r,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let s=ZO();Jc(0,`po-accordion`,1),$O(1,Ce,2,5,`po-accordion-item`,2,HO),Zg(),_u(3,`po-divider`,3),Jc(4,`div`,4)(5,`po-input`,5),W0(),Kb(`ngModelChange`,function(c){return U_(s),Ak(i.literals,c)||(i.literals=c),H_(c)}),vt(`p-change`,function(){return i.changeLiterals()}),Zg(),Jc(6,`po-checkbox-group`,6),W0(),Kb(`ngModelChange`,function(c){return U_(s),Ak(i.propertiesAccordion,c)||(i.propertiesAccordion=c),H_(c)}),Zg()(),_u(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),Jc(10,`div`,9)(11,`po-radio-group`,10),W0(),Kb(`ngModelChange`,function(c){return U_(s),Ak(i.typeTag,c)||(i.typeTag=c),H_(c)}),Zg(),Jc(12,`po-checkbox-group`,11),W0(),Kb(`ngModelChange`,function(c){return U_(s),Ak(i.disabledItem,c)||(i.disabledItem=c),H_(c)}),Zg()(),Jc(13,`div`,12)(14,`po-radio-group`,13),W0(),Kb(`ngModelChange`,function(c){return U_(s),Ak(i.size,c)||(i.size=c),H_(c)}),Zg(),Jc(15,`po-button`,14),vt(`p-click`,function(){U_(s);let c=sk(9);return i.addAccordionItem(c.form.value),H_(c.form.reset())}),Zg()(),Jc(16,`div`,15)(17,`po-button`,16),vt(`p-click`,function(){return i.restore()}),Zg()()}if(a&2){let s=sk(9);Rb(`p-literals`,i.customLiterals)(`p-show-manager-accordion`,i.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,i.propertiesAccordion.includes(`expandItems`))(`p-size`,i.size),Ig(),zO(i.accordionItems),Ig(4),Yb(`ngModel`,i.literals),Y0(),Ig(),Yb(`ngModel`,i.propertiesAccordion),Rb(`p-options`,i.propertiesAccordionOptions),Y0(),Ig(2),Rb(`p-fields`,i.accordionFieldsForm)(`p-value`,i.accordionItems),Ig(3),Rb(`p-options`,i.typeTagOptions),Yb(`ngModel`,i.typeTag),Y0(),Ig(),Rb(`p-options`,i.disabledOption),Yb(`ngModel`,i.disabledItem),Y0(),Ig(2),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0(),Ig(),Rb(`p-disabled`,s.form.invalid)}},dependencies:[TZ,JL,Tee,l4,oi,Nf,oae,I4,j4,Zte],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Accordion Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-accordion
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-accordion-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,me],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(a,i){if(a&1&&Cu(l4,7),a&2){let s;No(s=xo())&&(i.questionOne=s.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,1)(1,`p`,2),Tk(2,`You don't have to be afraid of being a blood donor!`),Zg(),Jc(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),Tk(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),Zg()(),Jc(8,`po-accordion-item`,6)(9,`p`,5),Tk(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),Zg()(),Jc(11,`po-accordion-item`,7)(12,`p`,5),Tk(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),Zg()(),Jc(14,`po-accordion-item`,8)(15,`p`,5),Tk(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),Zg()()(),Jc(17,`p`,9),Tk(18,` For more information, see the `),Jc(19,`a`,10),Tk(20,`Hemosc FAQ`),Zg(),Tk(21,`. `),Zg()()),a&2&&(Ig(3),Rb(`p-show-manager-accordion`,!0))},dependencies:[Tee,l4,Mze],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var he=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Accordion - FAQs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Blood donation FAQs">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-accordion-faq`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Pe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ue],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:532,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-accordion`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoAccordionComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),Zg(),Jc(18,`p`),Tk(19,`Para utilizá-lo, é necessário envolver cada item no componente `),Jc(20,`a`,6)(21,`code`),Tk(22,`po-accordion-item`),Zg()(),Tk(23,`,
como no exemplo abaixo:`),Zg(),Jc(24,`pre`)(25,`code`),Tk(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),Zg()(),Jc(27,`p`),Tk(28,`e no typescript pode-se utilizar o `),Jc(29,`code`),Tk(30,`@ViewChild`),Zg(),Tk(31,`:`),Zg(),Jc(32,`pre`)(33,`code`),Tk(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),Zg()(),Jc(35,`p`),Tk(36,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),Zg(),Jc(37,`p`),Tk(38,`Caso houver a necessidade de abrir algum dos `),Jc(39,`code`),Tk(40,`po-accordion-item`),Zg(),Tk(41,` via Typescript
acesse a `),Jc(42,`a`,6),Tk(43,`documentação do PoAccordionItem`),Zg(),Tk(44,`.`),Zg(),Jc(45,`h4`),Tk(46,`Tokens customizáveis`),Zg(),Jc(47,`p`),Tk(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(49,`blockquote`)(50,`p`),Tk(51,`Para maiores informações, acesse o guia `),Jc(52,`a`,7),Tk(53,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(54,`.`),Zg()(),Jc(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),Tk(59,`Propriedade`),Zg(),Jc(60,`th`),Tk(61,`Descrição`),Zg(),Jc(62,`th`),Tk(63,`Valor Padrão`),Zg()()(),Jc(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),Tk(68,`Default Values`),Zg()(),_u(69,`td`)(70,`td`),Zg(),Jc(71,`tr`)(72,`td`)(73,`code`),Tk(74,`--font-family`),Zg()(),Jc(75,`td`),Tk(76,`Família tipográfica usada`),Zg(),Jc(77,`td`)(78,`code`),Tk(79,`var(--font-family-theme)`),Zg()()(),Jc(80,`tr`)(81,`td`)(82,`code`),Tk(83,`--font-size`),Zg()(),Jc(84,`td`),Tk(85,`Tamanho da fonte`),Zg(),Jc(86,`td`)(87,`code`),Tk(88,`var(--font-size-default)`),Zg()()(),Jc(89,`tr`)(90,`td`)(91,`code`),Tk(92,`--color`),Zg()(),Jc(93,`td`),Tk(94,`Cor principal do accordion`),Zg(),Jc(95,`td`)(96,`code`),Tk(97,`var(--color-action-default)`),Zg()()(),Jc(98,`tr`)(99,`td`)(100,`code`),Tk(101,`--background-color`),Zg()(),Jc(102,`td`),Tk(103,`Cor de background`),Zg(),Jc(104,`td`)(105,`code`),Tk(106,`var(--color-neutral-light-00)`),Zg()()(),Jc(107,`tr`)(108,`td`)(109,`code`),Tk(110,`--font-weight`),Zg()(),Jc(111,`td`),Tk(112,`Peso da fonte`),Zg(),Jc(113,`td`)(114,`code`),Tk(115,`var(--font-weight-bold)`),Zg()()(),Jc(116,`tr`)(117,`td`)(118,`strong`),Tk(119,`Hover`),Zg()(),_u(120,`td`)(121,`td`),Zg(),Jc(122,`tr`)(123,`td`)(124,`code`),Tk(125,`--color-hover`),Zg()(),Jc(126,`td`),Tk(127,`Cor principal no estado hover`),Zg(),Jc(128,`td`)(129,`code`),Tk(130,`var(--color-action-hover)`),Zg()()(),Jc(131,`tr`)(132,`td`)(133,`code`),Tk(134,`--background-hover`),Zg()(),Jc(135,`td`),Tk(136,`Cor de background no estado hover`),Zg(),Jc(137,`td`)(138,`code`),Tk(139,`var(--color-brand-01-lightest)`),Zg()()(),Jc(140,`tr`)(141,`td`)(142,`strong`),Tk(143,`Focused`),Zg()(),_u(144,`td`)(145,`td`),Zg(),Jc(146,`tr`)(147,`td`)(148,`code`),Tk(149,`--color-focused`),Zg()(),Jc(150,`td`),Tk(151,`Cor principal no estado de focus`),Zg(),Jc(152,`td`)(153,`code`),Tk(154,`var(--color-action-focus)`),Zg()()(),Jc(155,`tr`)(156,`td`)(157,`code`),Tk(158,`--outline-color-focused`),Zg(),Tk(159,` \xA0`),Zg(),Jc(160,`td`),Tk(161,`Cor do outline do estado de focus`),Zg(),Jc(162,`td`)(163,`code`),Tk(164,`var(--color-action-focus)`),Zg()()(),Jc(165,`tr`)(166,`td`)(167,`strong`),Tk(168,`Disabled`),Zg()(),_u(169,`td`)(170,`td`),Zg(),Jc(171,`tr`)(172,`td`)(173,`code`),Tk(174,`--color-disabled`),Zg()(),Jc(175,`td`),Tk(176,`Cor principal no estado disabled`),Zg(),Jc(177,`td`)(178,`code`),Tk(179,`var(--color-neutral-mid-60)`),Zg()()(),Jc(180,`tr`)(181,`td`)(182,`code`),Tk(183,`--background-disabled`),Zg(),Tk(184,` \xA0`),Zg(),Jc(185,`td`),Tk(186,`Cor de background no estado disabled`),Zg(),Jc(187,`td`)(188,`code`),Tk(189,`var(--color-neutral-light-10)`),Zg()()(),Jc(190,`tr`)(191,`td`)(192,`strong`),Tk(193,`po-accordion-manager`),Zg()(),_u(194,`td`)(195,`td`),Zg(),Jc(196,`tr`)(197,`td`)(198,`code`),Tk(199,`--background-color`),Zg()(),Jc(200,`td`),Tk(201,`Cor de background`),Zg(),Jc(202,`td`)(203,`code`),Tk(204,`var(--color-neutral-mid-60)`),Zg()()(),Jc(205,`tr`)(206,`td`)(207,`code`),Tk(208,`--color`),Zg()(),Jc(209,`td`),Tk(210,`Cor principal do accordion manager`),Zg(),Jc(211,`td`)(212,`code`),Tk(213,`var(--color-neutral-light-10)`),Zg()()(),Jc(214,`tr`)(215,`td`)(216,`code`),Tk(217,`--font-family`),Zg()(),Jc(218,`td`),Tk(219,`Família tipográfica usada`),Zg(),Jc(220,`td`)(221,`code`),Tk(222,`var(--color-neutral-light-10)`),Zg()()(),Jc(223,`tr`)(224,`td`)(225,`code`),Tk(226,`--font-size`),Zg()(),Jc(227,`td`),Tk(228,`Tamanho da fonte`),Zg(),Jc(229,`td`)(230,`code`),Tk(231,`var(--color-neutral-light-10)`),Zg()()(),Jc(232,`tr`)(233,`td`)(234,`code`),Tk(235,`--font-weight`),Zg()(),Jc(236,`td`),Tk(237,`Peso da fonte`),Zg(),Jc(238,`td`)(239,`code`),Tk(240,`var(--color-neutral-light-10)`),Zg()()(),Jc(241,`tr`)(242,`td`)(243,`strong`),Tk(244,`Pressed`),Zg()(),_u(245,`td`)(246,`td`),Zg(),Jc(247,`tr`)(248,`td`)(249,`code`),Tk(250,`--background-pressed`),Zg(),Tk(251,` \xA0`),Zg(),Jc(252,`td`),Tk(253,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(254,`td`)(255,`code`),Tk(256,`var(--color-brand-01-lighter)`),Zg()()(),Jc(257,`tr`)(258,`td`)(259,`code`),Tk(260,`--color-pressed`),Zg()(),Jc(261,`td`),Tk(262,`Cor principal no estado de pressionado`),Zg(),Jc(263,`td`)(264,`code`),Tk(265,`var(--color-action-pressed)`),Zg()()()()()(),Jc(266,`div`,8)(267,`h4`,9),Tk(268,`Seletor`),Zg(),Jc(269,`pre`,10),Tk(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),Zg()(),Jc(271,`h4`,11),Tk(272,`Propriedades`),Zg(),Jc(273,`table`,12)(274,`tr`,13)(275,`th`,14),Tk(276,`Nome`),Zg(),Jc(277,`th`,14),Tk(278,`Tipo`),Zg(),Jc(279,`th`,14),Tk(280,`Padrão`),Zg(),Jc(281,`th`,14),Tk(282,`Descrição`),Zg()(),Jc(283,`tr`,15)(284,`td`,16)(285,`div`,17)(286,`span`,18),Tk(287,` p-allow-expand-all-items`),_u(288,`br`),Zg()()(),Jc(289,`td`,19)(290,`code`,20),Tk(291,`boolean`),Zg()(),Jc(292,`td`,21)(293,`p`)(294,`code`),Tk(295,`false`),Zg()()(),Jc(296,`td`,22)(297,`em`)(298,`strong`),Tk(299,`(opcional)`),Zg()(),Jc(300,`p`),Tk(301,`Permite expandir mais de um `),Jc(302,`code`),Tk(303,`<po-accordion-item></po-accordion-item>`),Zg(),Tk(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Jc(305,`code`),Tk(306,`p-show-manager-accordion`),Zg(),Tk(307,` esteja como `),Jc(308,`code`),Tk(309,`true`),Zg(),Tk(310,`.`),Zg()()(),Jc(311,`tr`,15)(312,`td`,16)(313,`div`,23)(314,`span`,24),Tk(315,` (p-collapse-all)`),_u(316,`br`),Zg()()(),Jc(317,`td`,19)(318,`code`,25),Tk(319,`EventEmitter`),Zg()(),Jc(320,`td`,21),Tk(321,`-`),Zg(),Jc(322,`td`,22)(323,`em`)(324,`strong`),Tk(325,`(opcional)`),Zg()(),Jc(326,`p`),Tk(327,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),Zg()()(),Jc(328,`tr`,15)(329,`td`,16)(330,`div`,23)(331,`span`,24),Tk(332,` (p-expand-all)`),_u(333,`br`),Zg()()(),Jc(334,`td`,19)(335,`code`,25),Tk(336,`EventEmitter`),Zg()(),Jc(337,`td`,21),Tk(338,`-`),Zg(),Jc(339,`td`,22)(340,`em`)(341,`strong`),Tk(342,`(opcional)`),Zg()(),Jc(343,`p`),Tk(344,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),Zg()()(),Jc(345,`tr`,15)(346,`td`,16)(347,`div`,17)(348,`span`,18),Tk(349,` p-literals`),_u(350,`br`),Zg()()(),Jc(351,`td`,19)(352,`code`,26),Tk(353,`PoAccordionLiterals`),Zg()(),Jc(354,`td`,21),Tk(355,`-`),Zg(),Jc(356,`td`,22)(357,`em`)(358,`strong`),Tk(359,`(opcional)`),Zg()(),Jc(360,`p`),Tk(361,`Objeto com as literais usadas no `),Jc(362,`code`),Tk(363,`po-accordion`),Zg(),Tk(364,`.`),Zg(),Jc(365,`p`),Tk(366,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(367,`pre`)(368,`code`),Tk(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),Zg()(),Jc(370,`p`),Tk(371,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(372,`pre`)(373,`code`),Tk(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),Zg()(),Jc(375,`p`),Tk(376,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(377,`pre`)(378,`code`),Tk(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),Zg()(),Jc(380,`blockquote`)(381,`p`),Tk(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(383,`a`,27)(384,`code`),Tk(385,`PoI18nService`),Zg()(),Tk(386,` ou do browser.`),Zg()()()(),Jc(387,`tr`,15)(388,`td`,16)(389,`div`,17)(390,`span`,18),Tk(391,` p-show-manager-accordion`),_u(392,`br`),Zg()()(),Jc(393,`td`,19)(394,`code`,20),Tk(395,`boolean`),Zg()(),Jc(396,`td`,21)(397,`p`)(398,`code`),Tk(399,`false`),Zg()()(),Jc(400,`td`,22)(401,`em`)(402,`strong`),Tk(403,`(opcional)`),Zg()(),Jc(404,`p`),Tk(405,`Exibe o Gerenciador de Accordion.`),Zg()()(),Jc(406,`tr`,15)(407,`td`,16)(408,`div`,17)(409,`span`,18),Tk(410,` p-size`),_u(411,`br`),Zg()()(),Jc(412,`td`,19)(413,`code`,28),Tk(414,`string`),Zg()(),Jc(415,`td`,21)(416,`p`)(417,`code`),Tk(418,`medium`),Zg()()(),Jc(419,`td`,22)(420,`em`)(421,`strong`),Tk(422,`(opcional)`),Zg()(),Jc(423,`p`),Tk(424,`Define o tamanho do componente:`),Zg(),Jc(425,`ul`)(426,`li`)(427,`code`),Tk(428,`small`),Zg(),Tk(429,`: altura de 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(430,`li`)(431,`code`),Tk(432,`medium`),Zg(),Tk(433,`: altura de 44px.`),Zg()(),Jc(434,`blockquote`)(435,`p`),Tk(436,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(437,`code`),Tk(438,`medium`),Zg(),Tk(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(440,`a`,29),Tk(441,`po-theme`),Zg(),Tk(442,`.`),Zg()()()()(),Jc(443,`h3`,11),Tk(444,`Métodos`),Zg(),Jc(445,`table`,30)(446,`tr`,15)(447,`th`,31)(448,`div`,17)(449,`h4`)(450,`span`,18),Tk(451,` collapseAllItems `),Zg()()()()(),Jc(452,`tr`,22)(453,`td`,22)(454,`p`),Tk(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Jc(456,`code`),Tk(457,`p-show-manager-accordion`),Zg(),Tk(458,` estiver como `),Jc(459,`code`),Tk(460,`true`),Zg(),Tk(461,`.`),Zg()()()(),_u(462,`br`),Jc(463,`table`,30)(464,`tr`,15)(465,`th`,31)(466,`div`,17)(467,`h4`)(468,`span`,18),Tk(469,` expandAllItems `),Zg()()()()(),Jc(470,`tr`,22)(471,`td`,22)(472,`p`),Tk(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Jc(474,`code`),Tk(475,`p-show-manager-accordion`),Zg(),Tk(476,` estiver como `),Jc(477,`code`),Tk(478,`true`),Zg(),Tk(479,`.`),Zg()()()(),_u(480,`br`),Jc(481,`h3`),Tk(482,`Interfaces`),Zg(),Jc(483,`h4`,32)(484,`code`,5),Tk(485,`PoAccordionLiterals`),Zg()(),Jc(486,`div`,2)(487,`p`),Tk(488,`Interface para definição das literais usadas no `),Jc(489,`code`),Tk(490,`po-accordion`),Zg(),Tk(491,`.`),Zg()(),Jc(492,`h4`,11),Tk(493,`Propriedades`),Zg(),Jc(494,`table`,12)(495,`tr`,13)(496,`th`,14),Tk(497,`Nome`),Zg(),Jc(498,`th`,14),Tk(499,`Tipo`),Zg(),Jc(500,`th`,14),Tk(501,`Descrição`),Zg()(),Jc(502,`tr`,15)(503,`td`,16)(504,`div`,17)(505,`span`,18),Tk(506,` closeAllItems`),_u(507,`br`),Zg()()(),Jc(508,`td`,19)(509,`code`,28),Tk(510,`string`),Zg()(),Jc(511,`td`,22)(512,`em`)(513,`strong`),Tk(514,`(opcional)`),Zg()(),Jc(515,`p`),Tk(516,`Label do gerenciador de Accordion para colapsar todos os itens`),Zg()()(),Jc(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),Tk(521,` expandAllItems`),_u(522,`br`),Zg()()(),Jc(523,`td`,19)(524,`code`,28),Tk(525,`string`),Zg()(),Jc(526,`td`,22)(527,`em`)(528,`strong`),Tk(529,`(opcional)`),Zg()(),Jc(530,`p`),Tk(531,`Label do gerenciador de Accordion para expandir todos os itens.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function _e(n,z){if(n&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-accordion-basic-view`)(2,`sample-po-accordion-labs-view`)(3,`sample-po-accordion-faq-view`),Zg()}if(n&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var ke=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Accordion`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,_e,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-accordion-doc`),Zg()()()),a&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,pe,se,he,ge],encapsulation:2,changeDetection:1})}return n})()}];var fe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[WV.forChild(ke),WV]})}return n})();var ot=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,fe]})}return n})();export{ot as DocPoAccordionModule};