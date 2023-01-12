import * as THREE from "./three.js/build/three.module.js"
import {FontLoader} from "./three.js/examples/jsm/loaders/FontLoader.js"
import {TextGeometry} from "./three.js/examples/jsm/geometries/TextGeometry.js"
import {GLTFLoader} from "./three.js/examples/jsm/loaders/GLTFLoader.js"


var scene, camera, renderer

const createTexture = () => {
    const loader = new THREE.TextureLoader()
    return loader
}

const createAmbient = () => {
    const AmbientLight = new THREE.AmbientLight("#404040")
    return AmbientLight
}
const createSpot1 = () => {
    const spot1 = new THREE.SpotLight("#FFFFFF",1,300)
    spot1.position.set(-100,0,100)
    spot1.lookAt(0,50,0)
    spot1.castShadow = true
    return spot1
}
const createSpot2 = () => {
    const spot2 = new THREE.SpotLight("#FFFFFF",1,300)
    spot2.position.set(-100,0,-100)
    spot2.lookAt(0,50,0)
    spot2.castShadow = true
    return spot2
}
const createSpot3 = () => {
    const spot3 = new THREE.SpotLight("#FFFFFF",0.5,300)
    spot3.position.set(-100,0,-100)
    spot3.lookAt(0,0,0)
    spot3.castShadow = true
    spot3.angle = Math.PI/4 + Math.PI/6
    return spot3
}

function createTire1(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-70,-5,0)
    mesh.rotation.y = Math.PI/2
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire2(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-65,-5,20)
    mesh.rotation.y = Math.PI/2 + Math.PI / 9 * 1
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire3(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-65,-5,-20)
    mesh.rotation.y = -Math.PI/2 + -Math.PI / 9 * 1
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire4(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-55,-5,40)
    mesh.rotation.y = -Math.PI/2 + Math.PI / 9 * 2
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire5(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-55,-5,-40)
    mesh.rotation.y = -Math.PI/2 + -Math.PI / 9 * 2
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createPole1(){
    const geometry = new THREE.CylinderGeometry(1,1,50,16)
    const material = new THREE.MeshStandardMaterial({
        color: "#646FD4"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,15,35)
    mesh.rotation.x = -Math.PI/6
    mesh.receiveShadow = true
    scene.add(mesh)
}

function createPole2(){
    const geometry = new THREE.CylinderGeometry(1,1,50,16)
    const material = new THREE.MeshStandardMaterial({
        color: "#646FD4"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,15,-35)
    mesh.rotation.x = Math.PI/6
    mesh.receiveShadow = true
    scene.add(mesh)
}

function createBoxbutt(){
    const geometry = new THREE.BoxGeometry(10,16.5,14.5)
    const material = new THREE.MeshPhongMaterial({
        color : "#848482"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-43,3,65)
    mesh.rotation.y = -Math.PI/6
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createButton(){
    const geometry = new THREE.SphereGeometry(4.5,32,16)
    const material = new THREE.MeshPhongMaterial({
        color : "#dc143c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-46,3,63)
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createPlane(){
    const geometry = new THREE.PlaneGeometry(1000,1000)
    const material = new THREE.MeshStandardMaterial({
        color: "#8c3b0c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,-5,0)
    mesh.rotation.x = -Math.PI/2,0,0
    mesh.receiveShadow = true
    scene.add(mesh)
}

function createCrateA1(){
    const geometry = new THREE.BoxGeometry(10,10,10)
    const texture = createTexture().load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture

    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-30,0,-40)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateA2(){
    const geometry = new THREE.BoxGeometry(5,5,5)
    const texture = createTexture().load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-30,-2,-48)
    mesh.rotation.x = Math.PI/6
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateA3(){
    const geometry = new THREE.BoxGeometry(10,15,10)
    const texture = createTexture().load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-40,2.5,30)
    mesh.rotation.y = -Math.PI/4
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateB1(){
    const geometry = new THREE.BoxGeometry(20,20,20)
    const texture = createTexture().load("./assets/texture/crate2.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(30,5,40)
    mesh.rotation.y = Math.PI/3
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateB2(){
    const geometry = new THREE.BoxGeometry(40,15,30)
    const texture = createTexture().load("./assets/texture/crate2.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(30,2.5,-60)
    mesh.rotation.y = -Math.PI/6
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
let loader = new THREE.TextureLoader()
function skybox(){
    let right = loader.load('./assets/skybox/dawn_right.png')
    let left = loader.load('./assets/skybox/dawn_left.png')
    let top = loader.load('./assets/skybox/dawn_top.png')
    let bottom = loader.load('./assets/skybox/dawn_bottom.png')
    let front = loader.load('./assets/skybox/dawn_front.png')
    let back = loader.load('./assets/skybox/dawn_back.png')

    let boxMat = [
        new THREE.MeshBasicMaterial({
        map : right,
        side : THREE.BackSide
    }),
        new THREE.MeshBasicMaterial({
        map : left,
        side : THREE.BackSide
    }),
        new THREE.MeshBasicMaterial({
        map : top,
        side : THREE.BackSide
    }),
        new THREE.MeshBasicMaterial({
        map : bottom,
        side : THREE.BackSide
    }),
        new THREE.MeshBasicMaterial({
        map : front,
        side : THREE.BackSide
    }),
        new THREE.MeshBasicMaterial({
        map : back,
        side : THREE.BackSide
    })
    ]

    let boxGeo = new THREE.BoxGeometry(1000,1000,1000)

    let boxMesh = new THREE.Mesh(boxGeo,boxMat)
    scene.add(boxMesh)
}
function clickme() {
    let loader = new FontLoader()
    loader.load('./three.js/examples/fonts/helvetiker_bold.typeface.json',
    function (font1){
        let geometry = new TextGeometry('Click Me!',{
            font:font1,
            size:7,
            height:9
        })
        let material = [
            new THREE.MeshPhongMaterial({
                color: "#FF5B00",
                side: THREE.FrontSide
            }),
            new THREE.MeshPhongMaterial({
                color: "#990000",
                side: THREE.BackSide
            })]
        let mesh = new THREE.Mesh(geometry,material)
        mesh.position.set(-35, 25, 50)
        mesh.rotation.set(0, Math.PI*3 + 1, 0)
        mesh.castShadow = true
        mesh.receiveShadow = true
        
        scene.add(mesh)
        return mesh
    })
}
function balonUdara(){
    let loader = new GLTFLoader()

    loader.load('./assets/model/scene.gltf',
    function(gltf) {
        let model = gltf.scene
        model.scale.setScalar(1/11)
        model.position.y = 1
        gltf.scene.traverse( function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
        });

        // console.log(gltf)
        scene.add(model)
        return model
    })
}

function init(){
    scene = new THREE.Scene()

    const FOV = 50
    const ASPECT = window.innerWidth / window.innerHeight
    const NEAR = 1
    const FAR = 5000

    camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)
    camera.position.set(-180, 30, 0)
    camera.lookAt(0, 30,0)

    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    createPlane()
    createCrateA1()
    createCrateA2()
    createCrateA3()
    createCrateB1()
    createCrateB2()
    createTire1()
    createTire2()
    createTire3()
    createTire4()
    createTire5()
    createPole1()
    createPole2()
    createBoxbutt()
    createButton()
    skybox()
    clickme()
    balonUdara()

    // scene.add(onload())
    scene.add(createAmbient())
    scene.add(createSpot1())
    scene.add(createSpot2())
    scene.add(createSpot3())
}


function render(){
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

window.onload = function(){
    init()
    render()}
