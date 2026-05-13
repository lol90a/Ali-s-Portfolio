import { r as reactExports, j as jsxRuntimeExports } from "./motion-CItmpJlh.js";
import { C as Canvas, E as Environment, L as Lightformer, u as useFrame, F as Float, M as MeshTransmissionMaterial } from "./three-BtqM4Udt.js";
function Knot({ mouse }) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.1 + mouse.current.y * 0.25;
      ref.current.rotation.y = t * 0.15 + mouse.current.x * 0.35;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1, rotationIntensity: 0.25, floatIntensity: 0.7, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, scale: 1.15, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusKnotGeometry", { args: [1, 0.32, 140, 20] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MeshTransmissionMaterial,
      {
        backside: false,
        samples: 3,
        thickness: 0.5,
        chromaticAberration: 0.03,
        anisotropy: 0.2,
        distortion: 0.15,
        distortionScale: 0.3,
        temporalDistortion: 0,
        transmission: 1,
        ior: 1.4,
        roughness: 0.08,
        color: "#ffffff"
      }
    )
  ] }) });
}
function Particles({ count }) {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, [count]);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.02;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { size: 0.012, color: "#9aa0aa", transparent: true, opacity: 0.6, sizeAttenuation: true, depthWrite: false })
  ] });
}
function Scene3D({ mouse }) {
  const [enabled, setEnabled] = reactExports.useState(true);
  const [particleCount, setParticleCount] = reactExports.useState(300);
  reactExports.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 640;
    if (reduce) setEnabled(false);
    setParticleCount(small ? 120 : 300);
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 5], fov: 42 },
      dpr: [1, 1.25],
      gl: { antialias: true, alpha: true, powerPreference: "high-performance" },
      frameloop: "always",
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 4, 5], intensity: 1.1, color: "#ffffff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, -3, 2], intensity: 0.6, color: "#3B82F6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Environment, { resolution: 128, frames: 1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lightformer, { intensity: 2.5, color: "#ffffff", position: [-3, 2, 4], scale: [5, 5, 1] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lightformer, { intensity: 2, color: "#3B82F6", position: [3, -2, 4], scale: [5, 5, 1] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lightformer, { intensity: 1.2, color: "#ffffff", position: [0, 4, -3], scale: [6, 3, 1] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Knot, { mouse }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: particleCount })
        ] })
      ]
    }
  );
}
export {
  Scene3D
};
