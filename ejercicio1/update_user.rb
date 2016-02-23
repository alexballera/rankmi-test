# Asumiendo que user_role process_id y user_id estan definidas o so

def get_user_role_process
  UserRoleProcess.find_by(user_id: user_id, role_id: user_role, enterprise_process_id: process_id)
end

def create_user_role_process
  UserRoleProcess.create(user_id: user_id,role_id: user_role.to_i, enterprise_process_id: process_id.to_i)
end

def validate_role_process_and_user
  user_role.present? && process_id.present? && user_id.present?
end

def validate_rol_process_id  
  validate_role_process_and_user && (get_user_role_process || create_user_role_process)
end

# Asumiendo que area_id, user_id estan definidos
def get_user_enterprise
  UserEnterpriseArea.find_by(user_id: user_id, enterprise_area_id: area_id.to_i)
end

def create_user_enterprise
  UserEnterpriseArea.create(user_id: user_id, enterprise_area_id: area_id.to_i)
end

def validate_area  
  area_id.present? && (get_user_enterprise || create_user_enterprise)
end

def update_user user_data
  begin 
    User.exists?(user_data[:id]) && validate_rol_process_id && validate_area        
  rescue Exception => e
    #Manejo de excepción
  end
end

