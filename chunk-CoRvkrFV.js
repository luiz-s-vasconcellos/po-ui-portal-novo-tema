import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,Ct as Wae,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,Li as Wb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Tr as Gb,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,X as Oze,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,hr as Db,io as vu,ji as Vk,li as Qc,na as de,ni as Oo,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var Te=()=>[`/assets/graphics/landscape-01.jpeg`,`/assets/graphics/landscape-02.jpeg`];var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic`]],standalone:!1,decls:1,vars:2,consts:[[3,`p-slides`]],template:function(o,a){o&1&&vu(0,`po-slide`,0),o&2&&Rb(`p-slides`,Lk(1,Te))},dependencies:[Oze],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-slide-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-basic/sample-po-slide-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-slide-basic/sample-po-slide-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-slide-basic`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return n})();var Se=(()=>{class n{poNotification=p(Ru);height;interval;slideItem;slideItems;ngOnInit(){this.restore()}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(l){this.poNotification.success(`Slide clicked: ${l}`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs`]],standalone:!1,decls:19,vars:10,consts:[[`slideItemForm`,`ngForm`],[`slidePropertiesForm`,`ngForm`],[3,`p-height`,`p-interval`,`p-slides`],[`p-label`,`Slide Item`],[1,`po-row`],[`name`,`slideAction`,`p-clean`,``,`p-label`,`Slide action`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideAlt`,`p-clean`,``,`p-label`,`Slide alt`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideImage`,`p-clean`,``,`p-help`,`Ex.: https://lorempixel.com/1024/768/`,`p-label`,`Slide image`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`slideLink`,`p-clean`,``,`p-help`,`Ex.: https://po-ui.io/home`,`p-label`,`Slide link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add slide`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Properties`],[`name`,`interval`,`p-clean`,``,`p-help`,`Ex.: 7000`,`p-label`,`Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Ex.: 300`,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,a){if(o&1){let d=YO();vu(0,`po-slide`,2)(1,`po-divider`,3),Qc(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(a.slideItem.action,r)||(a.slideItem.action=r),U_(r)}),Kg(),Qc(6,`po-input`,6),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(a.slideItem.alt,r)||(a.slideItem.alt=r),U_(r)}),Kg(),Qc(7,`po-input`,7),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(a.slideItem.image,r)||(a.slideItem.image=r),U_(r)}),Kg(),Qc(8,`po-input`,8),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(a.slideItem.link,r)||(a.slideItem.link=r),U_(r)}),Kg()(),Qc(9,`div`,4)(10,`po-button`,9),vt(`p-click`,function(){return a.addSlide()}),Kg()()(),vu(11,`po-divider`,10),Qc(12,`form`,null,1)(14,`div`,4)(15,`po-input`,11),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(a.interval,r)||(a.interval=r),U_(r)}),Kg(),Qc(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(r){return B_(d),Tk(a.height,r)||(a.height=r),U_(r)}),Kg()(),Qc(17,`div`,4)(18,`po-button`,13),vt(`p-click`,function(){B_(d);let r=ik(3),ke=ik(13);return r.reset(),ke.reset(),U_(a.restore())}),Kg()()()}if(o&2){let d=ik(3);Rb(`p-height`,a.height)(`p-interval`,a.interval)(`p-slides`,a.slideItems),wg(5),Yb(`ngModel`,a.slideItem.action),W0(),wg(),Yb(`ngModel`,a.slideItem.alt),W0(),wg(),Yb(`ngModel`,a.slideItem.image),W0(),wg(),Yb(`ngModel`,a.slideItem.link),W0(),wg(2),Rb(`p-disabled`,d.invalid),wg(5),Yb(`ngModel`,a.interval),W0(),wg(),Yb(`ngModel`,a.height),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Oze],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n});var be=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-slide-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-labs/sample-po-slide-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

<po-divider p-label="Slide Item"></po-divider>

<form #slideItemForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="slideAction" [(ngModel)]="slideItem.action" p-clean p-label="Slide action">
    </po-input>

    <po-input class="po-md-6" name="slideAlt" [(ngModel)]="slideItem.alt" p-clean p-label="Slide alt"> </po-input>

    <po-input
      class="po-md-6"
      name="slideImage"
      [(ngModel)]="slideItem.image"
      p-clean
      p-help="Ex.: https://lorempixel.com/1024/768/"
      p-label="Slide image"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="slideLink"
      [(ngModel)]="slideItem.link"
      p-clean
      p-help="Ex.: https://po-ui.io/home"
      p-label="Slide link"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Add slide" [p-disabled]="slideItemForm.invalid" (p-click)="addSlide()">
    </po-button>
  </div>
</form>

<po-divider p-label="Properties"></po-divider>

<form #slidePropertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="interval" [(ngModel)]="interval" p-clean p-help="Ex.: 7000" p-label="Interval">
    </po-input>

    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-help="Ex.: 300" p-label="Height"> </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="slideItemForm.reset(); slidePropertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-slide-labs/sample-po-slide-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-labs',
  templateUrl: './sample-po-slide-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  height: number;
  interval: number;
  slideItem: PoSlideItem;
  slideItems: Array<PoSlideItem>;

  ngOnInit() {
    this.restore();
  }

  addSlide() {
    const item: PoSlideItem = Object.assign({}, this.slideItem);
    item.action = item.action ? this.showAction.bind(this, item.action) : undefined;
    this.slideItems = [...this.slideItems, item];
    this.restoreSlideItemForm();
  }

  restore() {
    this.interval = undefined;
    this.height = undefined;
    this.slideItems = [];
    this.restoreSlideItemForm();
  }

  restoreSlideItemForm() {
    this.slideItem = { action: undefined, alt: undefined, image: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Slide clicked: \${action}\`);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-slide-labs`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return n})();function Fe(n,H){if(n&1){let l=YO();Qc(0,`div`,2)(1,`div`,3)(2,`div`,4)(3,`div`,5),Sk(4),Kg(),Qc(5,`div`,6),Sk(6),Kg(),vu(7,`po-divider`),Qc(8,`div`,7),Sk(9),Kg(),Qc(10,`po-button`,8),vt(`p-click`,function(){let a=B_(l).$implicit,d=ek();return U_(d.redirectLink(a.link))}),Kg()()()()}if(n&2){let l=H.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),wg(2),Oo(`background`,`white`),wg(2),Wb(``,l.date,` by `,l.author),wg(2),Gb(l.title),wg(3),Gb(l.description)}}var fe=(()=>{class n{sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles`]],standalone:!1,decls:2,vars:1,consts:[[`p-height`,`450`,3,`p-slides`],[`p-slide-content-template`,``],[1,`sample-background-image`],[1,`po-row`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){o&1&&(Qc(0,`po-slide`,0),Db(1,Fe,11,12,`ng-template`,1),Kg()),o&2&&Rb(`p-slides`,a.sampleItems)},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var je=n=>({"docs-sample-code-tabs":n});var Ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-useful-articles-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-slide-useful-articles`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide - Useful articles`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-slide p-height="450" [p-slides]="sampleItems">
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-useful-articles',
  templateUrl: './sample-po-slide-useful-articles.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideUsefulArticlesComponent {
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-slide-useful-articles`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,je,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return n})();var ve=(()=>{class n{modal;landscapes=[{image:`/assets/graphics/landscape-01.jpeg`,alt:`On the road`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-02.jpeg`,alt:`Birds flying over trees`,action:this.aboutLandscape.bind(this)},{image:`/assets/graphics/landscape-03.jpeg`,alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes`]],viewQuery:function(o,a){if(o&1&&Du(ia,7),o&2){let d;No(d=xo())&&(a.modal=d.first)}},standalone:!1,decls:3,vars:2,consts:[[`p-interval`,`0`,3,`p-slides`],[`p-title`,`Landscape detail`]],template:function(o,a){o&1&&(vu(0,`po-slide`,0),Qc(1,`po-modal`,1),Sk(2),Kg()),o&2&&(Rb(`p-slides`,a.landscapes),wg(2),tm(` `,a.modalText,`
`))},dependencies:[ia,Oze],encapsulation:2,changeDetection:1})}return n})();var He=n=>({"docs-sample-code-tabs":n});var xe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-landscapes-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-slide-landscapes`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide - Landscapes`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-landscapes',
  templateUrl: './sample-po-slide-landscapes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLandscapesComponent {
  @ViewChild(PoModalComponent, { static: true }) modal: PoModalComponent;

  landscapes: Array<PoSlideItem> = [
    { image: '/assets/graphics/landscape-01.jpeg', alt: 'On the road', action: this.aboutLandscape.bind(this) },
    {
      image: '/assets/graphics/landscape-02.jpeg',
      alt: 'Birds flying over trees',
      action: this.aboutLandscape.bind(this)
    },
    { image: '/assets/graphics/landscape-03.jpeg', alt: 'That\`s a great sea', action: this.aboutLandscape.bind(this) }
  ];

  modalText: string;

  aboutLandscape(item: PoSlideItem) {
    this.modalText = item.alt;
    this.modal.open();
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-slide-landscapes`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,He,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ve],encapsulation:2,changeDetection:1})}return n})();var qe=[`slideComponent`];function Oe(n,H){if(n&1){let l=YO();Qc(0,`div`,6)(1,`div`,3)(2,`div`,7)(3,`div`,8),Sk(4),Kg(),Qc(5,`div`,9),Sk(6),Kg(),vu(7,`po-divider`),Qc(8,`div`,10),Sk(9),Kg(),Qc(10,`po-button`,11),vt(`p-click`,function(){let a=B_(l).$implicit,d=ek();return U_(d.redirectLink(a.link))}),Kg()()()()}if(n&2){let l=H.$implicit;Oo(`background-image`,`url(`+l.imagem+`)`)(`background-size`,`cover`)(`height`,100,`%`),wg(2),Oo(`background`,`white`),wg(2),Wb(``,l.date,` by `,l.author),wg(2),Gb(l.title),wg(3),Gb(l.description)}}var ye=(()=>{class n{slideComponent;nextLabel=`Next`;sampleItems=[{title:`The Iceberg Method`,description:`How could you ever take 20 minutes to just breathe?`,date:`December 11, 2016`,author:`Patrick Buggy`,link:`https://bit.ly/2OVCypl`,imagem:`/assets/graphics/landscape-01.jpeg`},{title:`What Meditation Isn’t`,description:`Meditating won’t solve your problems — but it will help you face them honestly`,date:`August 17, 2018`,author:`Seizan Egyo`,link:`https://bit.ly/2UercLM`,imagem:`/assets/graphics/landscape-02.jpeg`},{title:`Get out of your mental cocoon`,description:`You Can’t Change without Transforming Your World`,date:`January 22, 2019`,author:`Gustavo Razzetti`,link:`https://bit.ly/2Tbc16b`,imagem:`/assets/graphics/landscape-03.jpeg`}];redirectLink(l){window.open(l,`_blank`)}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls`]],viewQuery:function(o,a){if(o&1&&Du(qe,7),o&2){let d;No(d=xo())&&(a.slideComponent=d.first)}},standalone:!1,decls:6,vars:3,consts:[[`slideComponent`,``],[`p-height`,`450`,`p-interval`,`0`,`p-hide-arrows`,``,3,`p-slides`],[`p-slide-content-template`,``],[1,`po-row`],[`p-label`,`Previous`,1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[`p-label`,`Next`,1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-6`,3,`p-click`,`p-disabled`],[1,`sample-background-image`],[1,`po-offset-sm-1`,`po-offset-md-1`,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-5`,`po-sm-10`,`po-mt-4`,`po-mb-4`,`po-p-5`],[1,`po-font-text`],[1,`po-font-display`],[1,`po-font-text-large-bold`,`po-mb-3`],[`p-label`,`Read More`,3,`p-click`]],template:function(o,a){if(o&1&&(Qc(0,`po-slide`,1,0),Db(2,Oe,11,12,`ng-template`,2),Kg(),Qc(3,`div`,3)(4,`po-button`,4),vt(`p-click`,function(){return a.previousBtn()}),Kg(),Qc(5,`po-button`,5),vt(`p-click`,function(){return a.nextBtn()}),Kg()()),o&2){let d=ik(1);Rb(`p-slides`,a.sampleItems),wg(4),Rb(`p-disabled`,d.getCurrentSlideIndex()===0),wg(),Rb(`p-disabled`,d.getCurrentSlideIndex()===a.sampleItems.length-1)}},dependencies:[oi,Nf,Oze,Wae],encapsulation:2,changeDetection:1})}return n})();var Re=n=>({"docs-sample-code-tabs":n});var Ee=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-external-controls-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-slide-external-controls`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,a){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Slide - External Controls`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>

<div class="po-row">
  <po-button
    class="po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Previous"
    (p-click)="previousBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === 0"
  >
  </po-button>
  <po-button
    class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Next"
    (p-click)="nextBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === sampleItems.length - 1"
  >
  </po-button>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-external-controls',
  templateUrl: './sample-po-slide-external-controls.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideExternalControlsComponent {
  @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

  nextLabel: string = 'Next';
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }

  nextBtn() {
    this.slideComponent.next();
  }

  previousBtn() {
    this.slideComponent.previous();
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-slide-external-controls`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Re,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return n})();var we=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-slide-doc`]],standalone:!1,decls:285,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-slide-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-slide-content-template`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-hide-arrows`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-interval`,1,`docs-api-properties-row`],[`id`,`prop-p-slides`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSlideItem`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`id`,`method-getCurrentSlideIndex`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-next`,1,`docs-api-method-table`],[`id`,`method-previous`,1,`docs-api-method-table`],[`id`,`interface-po-slide-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-slide-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-slide-item-alt`,1,`docs-api-properties-row`],[`id`,`interface-po-slide-item-image`,1,`docs-api-properties-row`],[`id`,`interface-po-slide-item-link`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-slide-content-template?view=doc`]],template:function(o,a){o&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoSlideModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-slide`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoSlideComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Qc(18,`strong`)(19,`a`,6),Sk(20,`p-slide-content-template`),Kg()(),Sk(21,`.`),Kg(),Qc(22,`h4`),Sk(23,`Boas práticas:`),Kg(),Qc(24,`ul`)(25,`li`),Sk(26,`Utilizar imagens no slide, mesmo quando possui conteúdo personalizado.`),Kg(),Qc(27,`li`),Sk(28,`Evitar utilizar apenas um slide isolado, utilize pelo menos dois.`),Kg(),Qc(29,`li`),Sk(30,`Evitar utilizar mais de 5 slides, pois a ideia do componente é destacar apenas informações importantes.`),Kg()()(),Qc(31,`div`,7)(32,`h4`,8),Sk(33,`Seletor`),Kg(),Qc(34,`pre`,9),Sk(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),Kg()(),Qc(36,`h4`,10),Sk(37,`Propriedades`),Kg(),Qc(38,`table`,11)(39,`tr`,12)(40,`th`,13),Sk(41,`Nome`),Kg(),Qc(42,`th`,13),Sk(43,`Tipo`),Kg(),Qc(44,`th`,13),Sk(45,`Padrão`),Kg(),Qc(46,`th`,13),Sk(47,`Descrição`),Kg()(),Qc(48,`tr`,14)(49,`td`,15)(50,`div`,16)(51,`span`,17),Sk(52,` p-height`),vu(53,`br`),Kg()()(),Qc(54,`td`,18)(55,`code`,19),Sk(56,`number`),Kg()(),Qc(57,`td`,20)(58,`p`)(59,`code`),Sk(60,`336`),Kg()()(),Qc(61,`td`,21)(62,`em`)(63,`strong`),Sk(64,`(opcional)`),Kg()(),Qc(65,`p`),Sk(66,`Altura do po-slide, caso seja slide com template customizado, não assume o valor `),Qc(67,`code`),Sk(68,`default`),Kg(),Sk(69,`.`),Kg()()(),Qc(70,`tr`,22)(71,`td`,15)(72,`div`,16)(73,`span`,17),Sk(74,` p-hide-arrows`),vu(75,`br`),Kg()()(),Qc(76,`td`,18)(77,`code`,23),Sk(78,`boolean`),Kg()(),Qc(79,`td`,20)(80,`p`)(81,`code`),Sk(82,`false`),Kg()()(),Qc(83,`td`,21)(84,`em`)(85,`strong`),Sk(86,`(opcional)`),Kg()(),Qc(87,`p`),Sk(88,`Define a exibição das setas de navegação.`),Kg()()(),Qc(89,`tr`,24)(90,`td`,15)(91,`div`,16)(92,`span`,17),Sk(93,` p-interval`),vu(94,`br`),Kg()()(),Qc(95,`td`,18)(96,`code`,19),Sk(97,`number`),Kg()(),Qc(98,`td`,20)(99,`p`)(100,`code`),Sk(101,`4000`),Kg()()(),Qc(102,`td`,21)(103,`em`)(104,`strong`),Sk(105,`(opcional)`),Kg()(),Qc(106,`p`),Sk(107,`Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que `),Qc(108,`code`),Sk(109,`1000`),Kg(),Sk(110,` os slides não trocam automaticamente.`),Kg()()(),Qc(111,`tr`,25)(112,`td`,15)(113,`div`,16)(114,`span`,17),Sk(115,` p-slides`),vu(116,`br`),Kg()()(),Qc(117,`td`,18)(118,`code`,26),Sk(119,`Array<PoSlideItem `),Kg(),Qc(120,`code`,27),Sk(121,` string `),Kg(),Qc(122,`code`,28),Sk(123,` any>`),Kg()(),Qc(124,`td`,20),Sk(125,`-`),Kg(),Qc(126,`td`,21)(127,`p`),Sk(128,`Array de imagens ou dados para o slide, pode ser de três formas:`),Kg(),Qc(129,`ul`)(130,`li`),Sk(131,`Array implementando objetos da interface `),Qc(132,`code`),Sk(133,`PoSlideItem`),Kg(),Sk(134,`:`),Qc(135,`pre`)(136,`code`),Sk(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),Kg()()(),Qc(138,`li`),Sk(139,`Array de `),Qc(140,`code`),Sk(141,`strings`),Kg(),Sk(142,` com os caminhos das imagens:`),Qc(143,`pre`)(144,`code`),Sk(145,`['/assets/image-1', '/assets/image-2' ]
`),Kg()()(),Qc(146,`li`),Sk(147,`Array com lista de itens (para utilizar template):`),Qc(148,`pre`)(149,`code`),Sk(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),Kg()()()(),Qc(151,`blockquote`)(152,`p`),Sk(153,`As setas de navegação e o controle com círculos apenas serão renderizados caso possua mais de um slide.`),Kg()()()()(),Qc(154,`h3`,10),Sk(155,`Métodos`),Kg(),Qc(156,`table`,29)(157,`tr`,30)(158,`th`,31)(159,`div`,16)(160,`h4`)(161,`span`,17),Sk(162,` getCurrentSlideIndex `),Kg()()()()(),Qc(163,`tr`,21)(164,`td`,21)(165,`p`),Sk(166,`Método que retorna o index do slide atual`),Kg(),Qc(167,`pre`)(168,`code`),Sk(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),Kg()()()()(),vu(170,`br`),Qc(171,`table`,32)(172,`tr`,30)(173,`th`,31)(174,`div`,16)(175,`h4`)(176,`span`,17),Sk(177,` next `),Kg()()()()(),Qc(178,`tr`,21)(179,`td`,21)(180,`p`),Sk(181,`Método para chamar o próximo slide.`),Kg(),Qc(182,`pre`)(183,`code`),Sk(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),Kg()()()()(),vu(185,`br`),Qc(186,`table`,33)(187,`tr`,30)(188,`th`,31)(189,`div`,16)(190,`h4`)(191,`span`,17),Sk(192,` previous `),Kg()()()()(),Qc(193,`tr`,21)(194,`td`,21)(195,`p`),Sk(196,`Método para chamar o slide anterior.`),Kg(),Qc(197,`pre`)(198,`code`),Sk(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),Kg()()()()(),vu(200,`br`),Qc(201,`h3`),Sk(202,`Interfaces`),Kg(),Qc(203,`h4`,34)(204,`code`,5),Sk(205,`PoSlideItem`),Kg()(),Qc(206,`div`,2)(207,`p`),Sk(208,`Interface que define cada objeto do `),Qc(209,`code`),Sk(210,`PoSlideItem`),Kg(),Sk(211,`.`),Kg()(),Qc(212,`h4`,10),Sk(213,`Propriedades`),Kg(),Qc(214,`table`,11)(215,`tr`,12)(216,`th`,13),Sk(217,`Nome`),Kg(),Qc(218,`th`,13),Sk(219,`Tipo`),Kg(),Qc(220,`th`,13),Sk(221,`Descrição`),Kg()(),Qc(222,`tr`,35)(223,`td`,15)(224,`div`,16)(225,`span`,17),Sk(226,` action`),vu(227,`br`),Kg()()(),Qc(228,`td`,18)(229,`code`,36),Sk(230,`Function`),Kg()(),Qc(231,`td`,21)(232,`em`)(233,`strong`),Sk(234,`(opcional)`),Kg()(),Qc(235,`p`),Sk(236,`Ação executada ao clicar no slide caso não tenha link definido.`),Kg()()(),Qc(237,`tr`,37)(238,`td`,15)(239,`div`,16)(240,`span`,17),Sk(241,` alt`),vu(242,`br`),Kg()()(),Qc(243,`td`,18)(244,`code`,27),Sk(245,`string`),Kg()(),Qc(246,`td`,21)(247,`em`)(248,`strong`),Sk(249,`(opcional)`),Kg()(),Qc(250,`p`),Sk(251,`Texto que aparece quando a imagem não é encontrada.`),Kg()()(),Qc(252,`tr`,38)(253,`td`,15)(254,`div`,16)(255,`span`,17),Sk(256,` image`),vu(257,`br`),Kg()()(),Qc(258,`td`,18)(259,`code`,27),Sk(260,`string`),Kg()(),Qc(261,`td`,21)(262,`p`),Sk(263,`Define o caminho da imagem.`),Kg()()(),Qc(264,`tr`,39)(265,`td`,15)(266,`div`,16)(267,`span`,17),Sk(268,` link`),vu(269,`br`),Kg()()(),Qc(270,`td`,18)(271,`code`,27),Sk(272,`string`),Kg()(),Qc(273,`td`,21)(274,`em`)(275,`strong`),Sk(276,`(opcional)`),Kg()(),Qc(277,`p`),Sk(278,`Link interno ou externo que será aberto ao clicar no slide.`),Kg()()()(),Qc(279,`h3`,40),Sk(280,`Subcomponentes`),Kg(),Qc(281,`ul`,41)(282,`li`)(283,`a`,42),Sk(284,`Slide Content Template`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Ye(n,H){if(n&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let a=ek();return U_(a.changeTab(`web`))}),vu(1,`sample-po-slide-basic-view`)(2,`sample-po-slide-labs-view`)(3,`sample-po-slide-useful-articles-view`)(4,`sample-po-slide-landscapes-view`)(5,`sample-po-slide-external-controls-view`),Kg()}if(n&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Je=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,a){o&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ye,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),vu(4,`sample-po-slide-doc`),Kg()()()),o&2&&(Rb(`p-actions`,a.actions),wg(2),VO(a.hidePoWebSample?-1:2),wg(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,be,Ce,xe,Ee,we],encapsulation:2,changeDetection:1})}return n})()}];var _e=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[GV.forChild(Je),GV]})}return n})();var Bt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,_e]})}return n})();export{Bt as DocPoSlideModule};