variable "kubeconfig_path" {
  description = "Path to a kubeconfig for out-of-cluster runs. Leave null in CI to use the runner pod's in-cluster config."
  type        = string
  default     = null
  sensitive   = true
}

variable "namespace" {
  description = "Namespace provisioned for this app by HomeInfra (apps.tf key)."
  type        = string
  default     = "parcerisa-web"
}

variable "image_versions_file" {
  description = "YAML file pinning the container image to deploy."
  type        = string
  default     = "image-versions.yaml"
}

variable "public_hosts" {
  description = "Public hostnames Traefik should route to this app (TLS via Let's Encrypt)."
  type        = list(string)
  default = [
    "www.parcerisa.dev",
    "parcerisa.dev",
  ]
}

variable "canonical_url" {
  description = "Canonical origin of the site; legacy hosts redirect here."
  type        = string
  default     = "https://www.parcerisa.dev"
}

variable "legacy_hosts" {
  description = "Old hostnames kept only to 301-redirect to canonical_url (path preserved)."
  type        = list(string)
  default = [
    "www.parcerisa.xyz",
    "parcerisa.xyz",
  ]
}

variable "replicas" {
  description = "Number of app replicas."
  type        = number
  default     = 2
}
