import * as THREE from "./three.js/build/three.module.js"



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
