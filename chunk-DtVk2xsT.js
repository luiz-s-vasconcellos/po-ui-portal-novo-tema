import{m as P,p as M}from"./main-6GCKJMTQ.js";import{Ba as p,Br as Jn,Lr as I$1,W as Mze,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,co as wg,da as ge,eo as tk,jr as GV,lt as Ss,oo as vt,or as An,qr as LO,ra as de,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var w=(()=>{class n{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:70,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Table`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-table-cell-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,l){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-table`),Kg()(),Jc(7,`blockquote`,3)(8,`strong`),Mk(9,`Faz parte de:`),Kg(),Jc(10,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-table`)}),Kg()(),Jc(11,`h3`,5),Mk(12,`Componente`),Kg(),Jc(13,`h4`,6)(14,`code`,7),Mk(15,`PoTableCellTemplateDirective`),Kg()(),Jc(16,`div`,2)(17,`p`),Mk(18,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Kg(),Jc(19,`p`),Mk(20,`Em seu uso, deve-se apenas adicionar a diretiva `),Jc(21,`strong`),Mk(22,`p-table-cell-template`),Kg(),Mk(23,` à tag `),Jc(24,`code`),Mk(25,`ng-template`),Kg(),Mk(26,`.`),Kg(),Jc(27,`p`),Mk(28,`Retorno:`),Kg(),Jc(29,`ul`)(30,`li`)(31,`code`),Mk(32,`column`),Kg(),Mk(33,`: conteúdo da coluna corrente.`),Kg(),Jc(34,`li`)(35,`code`),Mk(36,`row`),Kg(),Mk(37,`: conteúdo da linha corrente`),Kg()(),Jc(38,`p`),Mk(39,`Modo de uso:`),Kg(),Jc(40,`pre`)(41,`code`),Mk(42,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),Kg()(),Jc(43,`blockquote`)(44,`p`),Mk(45,`No exemplo acima, o usuário tem como retorno `),Jc(46,`code`),Mk(47,`row`),Kg(),Mk(48,` e a `),Jc(49,`code`),Mk(50,`column`),Kg(),Mk(51,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),Kg()(),Jc(52,`p`),Mk(53,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Kg(),Jc(54,`pre`)(55,`code`),Mk(56,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),Kg()(),Jc(57,`blockquote`)(58,`p`),Mk(59,`Observação: Sempre adicionar o `),Jc(60,`strong`),Mk(61,`type`),Kg(),Mk(62,` da coluna que deseja manipular com a directiva como `),Jc(63,`code`),Mk(64,`cellTemplate`),Kg()()()(),Jc(65,`div`,8)(66,`h4`,9),Mk(67,`Seletor`),Kg(),Jc(68,`pre`,10),Mk(69,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),Kg()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function F(n,N){if(n&1&&_u(0,`div`,1),n&2){let i=tk();Ab(`hidden`,i.activeTab!==`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Table Cell Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Table Cell Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(a,l){a&1&&(Jc(0,`po-page-default`,0),LO(1,F,1,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-table-cell-template-doc`),Kg()()),a&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,w],encapsulation:2,changeDetection:1})}return n})()}];var I=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(q),GV]})}return n})();var Y=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,I]})}return n})();export{Y as DocPoTableCellTemplateModule};