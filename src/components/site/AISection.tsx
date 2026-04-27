import cloudImg from "@/assets/cloud-infra.jpg";

export function AISection() {
  return (
    <section id="ai" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">03 · Layer Two</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            AI Model Deployment <span className="text-gradient-primary">on your cloud</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Production LLMs — Llama 3, Mistral, CodeLlama — as scalable, private API endpoints. Deployed on AWS, Azure, GCP or on-prem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={cloudImg} alt="Kubernetes cloud infrastructure" className="rounded-2xl shadow-elegant border border-border/60" loading="lazy" width={1280} height={960} />
          <div className="space-y-4">
            {[
              { t: "LLM APIs", d: "Llama 3, Mistral, CodeLlama as scalable endpoints", tag: "vLLM · TGI" },
              { t: "Real-time inference", d: "<100ms latency with auto-scaling", tag: "KServe · KEDA" },
              { t: "Batch inference", d: "Overnight fraud detection, doc processing", tag: "Argo · Kubeflow" },
              { t: "Multi-cloud serving", d: "Same model across AWS, Azure, GCP", tag: "ModelMesh" },
            ].map((row) => (
              <div key={row.t} className="group flex items-start gap-5 rounded-xl border border-border/60 bg-card p-5 hover:border-primary/40 hover:shadow-elegant transition">
                <div className="mt-1 size-10 rounded-lg bg-gradient-primary text-primary-foreground grid place-items-center font-bold shrink-0">›</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-lg">{row.t}</h4>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{row.tag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{row.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
