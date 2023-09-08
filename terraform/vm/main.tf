provider "google" {
  project     = "{{values.machine_name | lower}}"
  credentials = "./creds/serviceaccount.json"
}

resource "google_compute_network" "vpc_network" {
  name                    = "my-custom-mode-network"
  auto_create_subnetworks = false
  mtu                     = 1460
}

resource "google_compute_subnetwork" "default" {
  name          = "my-custom-subnet"
  ip_cidr_range = "10.0.1.0/24"
  region        = "us-west1"
  network       = google_compute_network.vpc_network.id
}

# Create a single Compute Engine instance
resource "google_compute_instance" "default" {
  name         = "{{values.machine_name}}"
  machine_type = "{{values.machine_type}}"
  zone         = "{{values.gcp_zone}}"
  tags         = ["ssh"]

  boot_disk {
    initialize_params {
      image = "{{values.machine_image}}"
    }
  }

  network_interface {
    subnetwork = google_compute_subnetwork.default.id

    access_config {
      # Include this section to give the VM an external IP address
    }
  }
}