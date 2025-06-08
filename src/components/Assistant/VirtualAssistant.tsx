import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model({ speaking }: { speaking: boolean }) {
  const group = useRef();
  const { scene, animations } = useGLTF('https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/RobotExpressive/glTF/RobotExpressive.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the 'Idle' animation by default
    if (actions && actions.Idle) {
      actions.Idle.play();
    }
  }, [actions]);

  return <primitive object={scene} ref={group} scale={[2, 2, 2]} position={[0, -2, 0]} />;
}

const VirtualAssistant: React.FC<{ message: string }> = ({ message }) => {
  const [speaking, setSpeaking] = useState(false);
  
  useEffect(() => {
    const speech = new SpeechSynthesisUtterance(message);
    speech.rate = 1;
    speech.pitch = 1.2;
    speech.volume = 1;
    
    speech.onstart = () => setSpeaking(true);
    speech.onend = () => setSpeaking(false);
    
    window.speechSynthesis.speak(speech);
    
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [message]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 w-64 h-64 rounded-xl overflow-hidden gaming-card"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model speaking={speaking} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-slate-900/80 backdrop-blur-sm">
        <p className="text-sm text-white text-center">
          {message}
        </p>
      </div>
    </motion.div>
  );
};

export default VirtualAssistant;