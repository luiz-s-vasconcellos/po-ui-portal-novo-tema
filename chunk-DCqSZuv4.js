import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ri as Zg,Vi as _u,ea as ge,er as An,fi as Rb,gi as Tk,kr as I,nr as BO,qi as de,va as nk,xi as VO,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var L=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:96,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoListViewModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-list-view`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoListViewContentTemplateDirective`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),Zg(),Jc(18,`p`),Tk(19,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Zg(),Jc(20,`ul`)(21,`li`),Tk(22,`Item: `),Jc(23,`code`),Tk(24,`item`),Zg(),Tk(25,` determina o item da linha corrente.`),Zg(),Jc(26,`li`),Tk(27,`Índice: `),Jc(28,`code`),Tk(29,`index`),Zg(),Tk(30,` determina o índice da linha corrente.`),Zg()(),Jc(31,`p`),Tk(32,`Esta diretiva pode ser usada de duas formas: explícita ou `),Jc(33,`em`),Tk(34,`syntax sugar`),Zg(),Tk(35,`. Veja a seguir ambos, respectivamente:`),Zg(),Jc(36,`pre`)(37,`code`),Tk(38,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),Zg()(),Jc(39,`pre`)(40,`code`),Tk(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),Zg()(),Jc(42,`p`),Tk(43,`A diretiva `),Jc(44,`strong`),Tk(45,`p-list-view-content-template`),Zg(),Tk(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Jc(47,`code`),Tk(48,`p-title`),Zg(),Tk(49,`,
a mesma deve retornar um valor do tipo `),Jc(50,`em`),Tk(51,`string`),Zg(),Tk(52,`. Veja o exemplo a seguir:`),Zg(),Jc(53,`pre`)(54,`code`),Tk(55,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),Zg()()(),Jc(56,`div`,6)(57,`h4`,7),Tk(58,`Seletor`),Zg(),Jc(59,`pre`,8),Tk(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),Zg()(),Jc(61,`h4`,9),Tk(62,`Propriedades`),Zg(),Jc(63,`table`,10)(64,`tr`,11)(65,`th`,12),Tk(66,`Nome`),Zg(),Jc(67,`th`,12),Tk(68,`Tipo`),Zg(),Jc(69,`th`,12),Tk(70,`Padrão`),Zg(),Jc(71,`th`,12),Tk(72,`Descrição`),Zg()(),Jc(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),Tk(77,` p-title`),_u(78,`br`),Zg()()(),Jc(79,`td`,17)(80,`code`,18),Tk(81,`(item) => string`),Zg()(),Jc(82,`td`,19),Tk(83,`-`),Zg(),Jc(84,`td`,20)(85,`em`)(86,`strong`),Tk(87,`(opcional)`),Zg()(),Jc(88,`p`),Tk(89,`Função que deve retornar um valor do tipo `),Jc(90,`code`),Tk(91,`string`),Zg(),Tk(92,`, que será utilizado como o título de cada item da lista.`),Zg(),Jc(93,`blockquote`)(94,`p`),Tk(95,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function R(n,F){if(n&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let r=nk();return H_(r.changeTab(`web`))}),Zg()}if(n&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,r){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,R,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),_u(4,`sample-po-list-view-content-template-doc`),Zg()()()),o&2&&(Rb(`p-actions`,r.actions),Ig(2),BO(r.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Mze,tre,are,L],encapsulation:2,changeDetection:1})}return n})()}];var k=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[WV.forChild(q),WV]})}return n})();var X=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,k]})}return n})();export{X as DocPoListViewContentTemplateModule};