package com.jmarques.vendors.vendor_api.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jmarques.vendors.vendor_api.entities.Vendor;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "vendors", path="vendors")
public interface VendorRepository extends CrudRepository<Vendor,Long> {


}
