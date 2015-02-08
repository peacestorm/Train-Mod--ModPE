ModPE.setItem(500,"minecart_normal",0,"Train")
Player.addItemCreativeInv(500,1,0);

var trainRenderer = Renderer.createHumanoidRenderer();
var trainModel = trainRenderer.getModel();

var leftLeg = trainModel.getPart("leftLeg");
var rightLeg = trainModel.getPart("rightLeg");
leftLeg.clear();
leftLeg.setTextureOffset(18, 4, false);
leftLeg.addBox(-6, -10, -7, 12, 18, 10, 0);

function useItem(x,y,z,i,b) {
var rail = getTile(x,y,z)
if(i == 500) {
if(rail == 66||rail == 27) {
var TrainCart = Level.spawnMob(x,y,z,84, "mob/TrainCart.png"); //added an invisible Cart
var TrainMob = Level.spawnMob(x,y,z,15, "mob/Train.png"); //changed to 15 for villager
// you need to make a .png file for the texture of the Train!  Name it "Train.png" and put it in the mob file under images in assets.
// you also need to make another one for the cart and name it "TrainCart.png".  Put it in the same folder.  Make sure it is transparent.
Entity.setRenderType(TrainMob,trainRenderer.renderType);
}}}
