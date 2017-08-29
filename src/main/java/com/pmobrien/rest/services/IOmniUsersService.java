package com.pmobrien.rest.services;

import com.cleo.api.graph.pojo.OmniUser;
import java.util.UUID;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/omniusers")
public interface IOmniUsersService {

  @GET
  @Path("/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  public OmniUser get(@PathParam("id") String uuid);
}
