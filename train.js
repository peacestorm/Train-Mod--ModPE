ModPE.setItem(500,"minecart_normal",0,"Train")
Player.addItemCreativeInv(500,1,0);

var trainRenderer = Renderer.createHumanoidRenderer();
var trainModel = trainRenderer.getModel();

/*var leftLeg = trainModel.getPart("leftLeg");
var rightLeg = trainModel.getPart("rightLeg");
leftLeg.clear();
leftLeg.setTextureOffset(18, 4, false);
leftLeg.addBox(-6, -10, -7, 12, 18, 10, 0);*/

function useItem(x,y,z,i,b) {
var rail = getTile(x,y,z)
if(i == 500) {
if(rail == 66||rail == 27) {
var Train = Level.spawnMob(x,y,z,84);
Entity.setRenderType(Train,trainRenderer);
}}}
